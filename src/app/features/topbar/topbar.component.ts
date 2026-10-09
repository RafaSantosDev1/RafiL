import { Component, inject } from '@angular/core';
import { MobileMenuService } from '../../core/services/mobile-menu.service';
import { I18nService } from '../../i18n/i18n.service';
import { LanguageToggleComponent } from '../../shared/language-toggle/language-toggle.component';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [LanguageToggleComponent],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {
  protected readonly menu = inject(MobileMenuService);
  protected readonly i18n = inject(I18nService);
}