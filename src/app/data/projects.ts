export type ProjectVisualType = 'port' | 'hospital' | 'railway' | 'drone' | 'data';

export type ProjectId = 'ship-ops' | 'hospital-3d' | 'railway' | 'drone-show' | 'environment';

export interface Project {
  id: ProjectId;
  visual: ProjectVisualType;
  layout: 'feature-left' | 'feature-right' | 'wide' | 'card';
}

export const GITHUB_URL = 'https://github.com/RafiLS';

export const PROJECTS: Project[] = [
  { id: 'ship-ops', visual: 'port', layout: 'feature-left' },
  { id: 'hospital-3d', visual: 'hospital', layout: 'feature-right' },
  { id: 'railway', visual: 'railway', layout: 'wide' },
  { id: 'drone-show', visual: 'drone', layout: 'card' },
  { id: 'environment', visual: 'data', layout: 'card' },
];