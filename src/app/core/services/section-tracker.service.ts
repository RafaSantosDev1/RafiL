import { Injectable, afterNextRender, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SectionTrackerService {
  private readonly activeId = signal<string>('top');
  readonly active = this.activeId.asReadonly();
  private observer: IntersectionObserver | null = null;

  constructor() {
    afterNextRender(() => this.observeSections());
  }

  private observeSections(): void {
    if (typeof IntersectionObserver === 'undefined') return;
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'));
    if (sections.length === 0) return;
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.activeId.set(entry.target.id);
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    sections.forEach((section) => this.observer?.observe(section));
  }
}