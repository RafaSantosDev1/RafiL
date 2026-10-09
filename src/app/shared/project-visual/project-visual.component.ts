import { Component, input } from '@angular/core';
import type { ProjectVisualType } from '../../data/projects';

@Component({
  selector: 'app-project-visual',
  standalone: true,
  templateUrl: './project-visual.component.html',
  styleUrl: './project-visual.component.scss'
})
export class ProjectVisualComponent {
  readonly visual = input.required<ProjectVisualType>();
  readonly alt = input<string>('');
}