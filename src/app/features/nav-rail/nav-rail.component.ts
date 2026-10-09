import { Component, computed, inject } from '@angular/core';
import { I18nService } from '../../i18n/i18n.service';
import { SectionTrackerService } from '../../core/services/section-tracker.service';
import { LanguageToggleComponent } from '../../shared/language-toggle/language-toggle.component';

@Component({
  selector: 'app-nav-rail',
  standalone: true,
  imports: [LanguageToggleComponent],
  templateUrl: './nav-rail.component.html',
  styleUrl: './nav-rail.component.scss'
})
export class NavRailComponent {
  protected readonly i18n = inject(I18nService);
  protected readonly tracker = inject(SectionTrackerService);
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