import { pt } from './pt';
import { en } from './en';

describe('skills data', () => {
  it('should declare seven skill groups in both languages', () => {
    expect(pt.skills.groups.length).toBe(7);
    expect(en.skills.groups.length).toBe(7);
  });

  it('should have at least one technology per group', () => {
    for (const group of pt.skills.groups) {
      expect(group.title.length).toBeGreaterThan(0);
      expect(group.items.length).toBeGreaterThan(0);
    }
  });

  it('should cover every documented area', () => {
    const titles = en.skills.groups.map((g) => g.title);
    expect(titles).toContain('Frontend');
    expect(titles).toContain('Backend');
    expect(titles).toContain('Databases');
    expect(titles).toContain('APIs & Integration');
    expect(titles).toContain('Data Analysis');
    expect(titles).toContain('3D & Interactive Web');
    expect(titles).toContain('Tools & Practices');
  });

  it('should not include proficiency ratings', () => {
    const serialized = JSON.stringify(pt.skills.groups) + JSON.stringify(en.skills.groups);
    for (const banned of ['%', 'Expert', 'Avançado', 'Intermédio', 'Intermediário', 'Beginner', 'Principiante']) {
      expect(serialized).not.toContain(banned);
    }
  });

  it('should keep every skill group translated', () => {
    pt.skills.groups.forEach((group: { title: string; items: string[] }, index: number) => {
      expect(en.skills.groups[index].items.length).toBe(group.items.length);
      expect(en.skills.groups[index].title.length).toBeGreaterThan(0);
    });
    // documented engineering terms, translated instead of technology names
    expect(en.skills.groups[6].items).toContain('OOP');
    expect(pt.skills.groups[6].items).toContain('POO');
    expect(en.skills.groups[6].items).toContain('Design Patterns');
    expect(pt.skills.groups[6].items).toContain('Padrões de desenho');
  });
});
