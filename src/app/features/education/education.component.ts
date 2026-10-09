import { Component, inject } from '@angular/core';
import { I18nService } from '../../i18n/i18n.service';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [RevealDirective, SectionHeadingComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  protected readonly i18n = inject(I18nService);
  protected readonly dict = this.i18n.dict;
}