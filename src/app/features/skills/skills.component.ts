import { Component, inject } from '@angular/core';
import { I18nService } from '../../i18n/i18n.service';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RevealDirective, SectionHeadingComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  protected readonly i18n = inject(I18nService);
  protected readonly dict = this.i18n.dict;
}