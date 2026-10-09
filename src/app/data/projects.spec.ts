import { PROJECTS, GITHUB_URL } from './projects';
import { pt } from '../i18n/pt';
import { en } from '../i18n/en';

describe('projects data', () => {
  it('should describe the five projects', () => {
    expect(PROJECTS.length).toBe(5);
  });

  it('should have unique ids', () => {
    const ids = PROJECTS.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('should use valid visual types', () => {
    const allowed = ['port', 'hospital', 'railway', 'drone', 'data'];
    for (const project of PROJECTS) {
      expect(allowed).toContain(project.visual);
    }
  });

  it('should prioritise the port system and the 3D hospital', () => {
    expect(PROJECTS[0].id).toBe('ship-ops');
    expect(PROJECTS[0].layout).toBe('feature-left');
    expect(PROJECTS[1].id).toBe('hospital-3d');
    expect(PROJECTS[1].layout).toBe('feature-right');
  });

  it('should not repeat the same layout for all projects', () => {
    const layouts = new Set(PROJECTS.map((p) => p.layout));
    expect(layouts.size).toBeGreaterThan(1);
  });

  it('should have full content in both languages for every project', () => {
    for (const project of PROJECTS) {
      for (const dict of [pt, en]) {
        const content = dict.work.projects[project.id];
        expect(content).toBeDefined();
        expect(content.name.length).toBeGreaterThan(0);
        expect(content.category.length).toBeGreaterThan(0);
        expect(content.description.length).toBeGreaterThan(0);
        expect(content.context.length).toBeGreaterThan(0);
        expect(content.contribution.length).toBeGreaterThan(0);
        expect(content.technologies.length).toBeGreaterThan(0);
      }
    }
  });

  it('should use the same technologies in both languages', () => {
    for (const project of PROJECTS) {
      const ptTech = pt.work.projects[project.id].technologies;
      const enTech = en.work.projects[project.id].technologies;
      expect(ptTech).toEqual(enTech);
    }
  });

  it('should expose the confirmed GitHub URL', () => {
    expect(GITHUB_URL).toBe('https://github.com/RafiLS');
  });
});
