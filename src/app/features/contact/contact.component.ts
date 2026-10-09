import { Component, inject } from '@angular/core';
import { I18nService } from '../../i18n/i18n.service';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';
import { GITHUB_URL } from '../../data/projects';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RevealDirective, SectionHeadingComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  protected readonly i18n = inject(I18nService);
  protected readonly dict = this.i18n.dict;
  protected readonly githubUrl = GITHUB_URL;
}