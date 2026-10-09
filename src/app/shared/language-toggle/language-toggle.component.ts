import { Component, inject } from '@angular/core';
import { I18nService } from '../../i18n/i18n.service';

@Component({
  selector: 'app-language-toggle',
  standalone: true,
  template: `
    <div class="lang-toggle" role="group" aria-label="Idioma / Language">
      <button type="button" class="lang-toggle__btn" [class.is-active]="current() === 'pt'" [attr.aria-pressed]="current() === 'pt'" (click)="set('pt')">PT</button>
      <span class="lang-toggle__sep" aria-hidden="true">/</span>
      <button type="button" class="lang-toggle__btn" [class.is-active]="current() === 'en'" [attr.aria-pressed]="current() === 'en'" (click)="set('en')">EN</button>
    </div>
  `,
  styleUrl: './language-toggle.component.scss'
})
export class LanguageToggleComponent {
  protected readonly i18n = inject(I18nService);
  protected readonly current = this.i18n.current;
  protected set(lang: 'pt' | 'en') { this.i18n.setLanguage(lang); }
}