import { TestBed } from '@angular/core/testing';
import { DOCUMENT } from '@angular/common';
import { I18nService } from './i18n.service';
import { pt } from './pt';
import { en } from './en';

describe('I18nService', () => {
  let service: I18nService;
  let document: Document;
  const storageKey = 'rafael-santos:language';

  function setup(docLang = 'pt', stored: string | null = null) {
    window.document.documentElement.lang = docLang;
    localStorage.clear();
    if (stored) localStorage.setItem(storageKey, stored);
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({});
    document = TestBed.inject(DOCUMENT);
    service = TestBed.inject(I18nService);
    TestBed.flushEffects();
  }

  afterEach(() => localStorage.clear());

  it('should default to Portuguese when no preference is stored', () => {
    setup('pt');
    expect(service.current()).toBe('pt');
    expect(service.dict()).toBe(pt);
  });

  it('should default to English when the document language is English', () => {
    setup('en');
    expect(service.current()).toBe('en');
    expect(service.dict()).toBe(en);
  });

  it('should restore a stored language preference', () => {
    setup('pt', 'en');
    expect(service.current()).toBe('en');
  });

  it('should switch dictionary on setLanguage', () => {
    setup('pt');
    service.setLanguage('en');
    TestBed.flushEffects();
    expect(service.current()).toBe('en');
    expect(service.dict()).toBe(en);
    expect(localStorage.getItem(storageKey)).toBe('en');
  });

  it('should toggle between the two languages', () => {
    setup('pt');
    service.toggleLanguage();
    expect(service.current()).toBe('en');
    service.toggleLanguage();
    expect(service.current()).toBe('pt');
  });

  it('should update the document lang attribute and title', () => {
    setup('pt');
    expect(document.documentElement.lang).toBe('pt');
    service.setLanguage('en');
    TestBed.flushEffects();
    expect(document.documentElement.lang).toBe('en');
    expect(document.title).toBe(en.meta.title);
  });

  it('should translate every project in both languages', () => {
    setup('pt');
    const ptKeys = Object.keys(pt.work.projects);
    const enKeys = Object.keys(en.work.projects);
    expect(ptKeys.length).toBe(5);
    expect(enKeys.length).toBe(ptKeys.length);
    for (const key of ptKeys) {
      expect(en.work.projects[key]).toBeDefined();
      expect(en.work.projects[key].technologies).toEqual(pt.work.projects[key].technologies);
    }
  });
});
