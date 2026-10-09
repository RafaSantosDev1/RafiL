import { Component, HostListener, computed, inject } from '@angular/core';
import { MobileMenuService } from '../../core/services/mobile-menu.service';
import { I18nService } from '../../i18n/i18n.service';
import { LanguageToggleComponent } from '../../shared/language-toggle/language-toggle.component';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [LanguageToggleComponent],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss'
})
export class MobileMenuComponent {
  protected readonly menu = inject(MobileMenuService);
  protected readonly i18n = inject(I18nService);

  protected readonly links = computed(() => {
    const d = this.i18n.dict();
    return [
      { id: 'about', index: d.about.index, label: d.nav.about },
      { id: 'work', index: d.work.index, label: d.nav.work },
      { id: 'skills', index: d.skills.index, label: d.nav.skills },
      { id: 'education', index: d.education.index, label: d.nav.education },
      { id: 'contact', index: d.contact.index, label: d.nav.contact }
    ];
  });

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    this.menu.closeMenu();
  }
}