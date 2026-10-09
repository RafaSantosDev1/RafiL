import { Component, computed, inject } from '@angular/core';
import { I18nService } from '../../i18n/i18n.service';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';
import { ProjectVisualComponent } from '../../shared/project-visual/project-visual.component';
import { PROJECTS, type ProjectId } from '../../data/projects';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [RevealDirective, SectionHeadingComponent, ProjectVisualComponent],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {
  protected readonly i18n = inject(I18nService);
  protected readonly dict = this.i18n.dict;
  protected readonly projects = PROJECTS;

  protected content(id: ProjectId) {
    return this.dict().work.projects[id];
  }

  protected index(id: ProjectId): string {
    return String(PROJECTS.findIndex((p) => p.id === id) + 1).padStart(2, '0');
  }
}