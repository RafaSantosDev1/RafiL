import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { I18nService } from './i18n/i18n.service';

describe('App', () => {
  beforeEach(async () => {
    localStorage.clear();
    document.documentElement.lang = 'pt';
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [I18nService]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the name as the main heading', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const heading = compiled.querySelector('h1');
    expect(heading).toBeTruthy();
    const text = heading?.textContent ?? '';
    expect(text).toContain('Rafael');
    expect(text).toContain('Santos');
  });

  it('should render every section with an id', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const ids = Array.from(compiled.querySelectorAll('main section[id]')).map((s) => s.id);
    expect(ids).toEqual(['top', 'about', 'work', 'skills', 'education', 'contact']);
  });

  it('should render the five projects', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.project').length).toBe(5);
  });

  it('should render a working language switch in the desktop navigation', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const rail = compiled.querySelector('app-nav-rail .lang-toggle');
    expect(rail).toBeTruthy();
    const buttons = rail?.querySelectorAll('.lang-toggle__btn') ?? [];
    expect(buttons.length).toBe(2);
    expect(buttons[0].textContent?.trim()).toBe('PT');
    expect(buttons[1].textContent?.trim()).toBe('EN');
    expect(buttons[0].getAttribute('aria-pressed')).toBe('true');
  });

  it('should switch the document language when PT/EN is used', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const railToggle = compiled.querySelector('app-nav-rail .lang-toggle');
    const buttons = Array.from(railToggle?.querySelectorAll<HTMLButtonElement>('.lang-toggle__btn') ?? []);
    buttons[1].click();
    fixture.detectChanges();
    TestBed.flushEffects();
    expect(document.documentElement.lang).toBe('en');
    expect(buttons[1].getAttribute('aria-pressed')).toBe('true');
    expect(buttons[0].getAttribute('aria-pressed')).toBe('false');
  });
});
