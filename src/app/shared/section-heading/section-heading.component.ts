import { Component, input } from '@angular/core';
import { RevealDirective } from '../../core/directives/reveal.directive';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <div class="section-heading" reveal>
      <span class="section-heading__index">{{ index() }}</span>
      <span class="section-heading__label">{{ label() }}</span>
      <span class="section-heading__rule" aria-hidden="true"></span>
    </div>
  `,
  styleUrl: './section-heading.component.scss'
})
export class SectionHeadingComponent {
  readonly index = input.required<string>();
  readonly label = input.required<string>();
}