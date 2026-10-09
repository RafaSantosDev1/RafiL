import { Component, computed, inject } from '@angular/core';
import { I18nService } from '../../i18n/i18n.service';
import { SectionTrackerService } from '../../core/services/section-tracker.service';
import { MobileMenuService } from '../../core/services/mobile-menu.service';
import { LanguageToggleComponent } from '../../shared/language-toggle/language-toggle.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [LanguageToggleComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  protected readonly i18n = inject(I18nService);
  protected readonly tracker = inject(SectionTrackerService);
  protected readonly menu = inject(MobileMenuService);
  protected readonly active = this.tracker.active;

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
}

