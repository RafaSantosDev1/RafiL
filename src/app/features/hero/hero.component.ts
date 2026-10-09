import { Component, inject } from '@angular/core';
import { I18nService } from '../../i18n/i18n.service';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { HeroCanvasComponent } from '../../shared/hero-canvas/hero-canvas.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RevealDirective, HeroCanvasComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  protected readonly i18n = inject(I18nService);
  protected readonly dict = this.i18n.dict;
}