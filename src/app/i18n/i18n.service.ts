import { DOCUMENT } from '@angular/common';
import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { en } from './en';
import { pt } from './pt';
import type { Language, SiteContent } from './i18n.types';

const STORAGE_KEY = 'rafael-santos:language';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly document = inject(DOCUMENT);
  private readonly language = signal<Language>(this.readInitialLanguage());
  readonly dict = computed<SiteContent>(() => (this.language() === 'en' ? en : pt));
  readonly current = this.language.asReadonly();

  constructor() {
    effect(() => this.applyDocumentLanguage());
  }

  setLanguage(language: Language): void {
    if (this.language() === language) return;
    this.language.set(language);
    try { localStorage.setItem(STORAGE_KEY, language); } catch { /* private mode */ }
  }

  toggleLanguage(): void {
    this.setLanguage(this.language() === 'pt' ? 'en' : 'pt');
  }

  private applyDocumentLanguage(): void {
    const language = this.language();
    this.document.documentElement.lang = language;
    this.document.title = this.dict().meta.title;
  }

  private readInitialLanguage(): Language {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'pt' || stored === 'en') return stored;
    } catch { /* ignore */ }
    const docLang = this.document.documentElement.lang ?? '';
    return docLang.toLowerCase().startsWith('en') ? 'en' : 'pt';
  }
}