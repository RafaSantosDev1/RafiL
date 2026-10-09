import { Component, inject } from '@angular/core';
import { I18nService } from '../../i18n/i18n.service';
import { GITHUB_URL } from '../../data/projects';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  protected readonly i18n = inject(I18nService);
  protected readonly dict = this.i18n.dict;
  protected readonly githubUrl = GITHUB_URL;
  protected readonly year = new Date().getFullYear();
}