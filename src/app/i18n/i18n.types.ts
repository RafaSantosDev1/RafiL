export type Language = 'pt' | 'en';

export interface ProjectContent {
  category: string;
  name: string;
  description: string;
  context: string;
  contribution: string;
  technologies: string[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface LanguageEntry {
  name: string;
  level: string;
}

export interface SiteContent {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    work: string;
    skills: string;
    education: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    kicker: string;
    nameA: string;
    nameB: string;
    role: string;
    statement: string;
    ctaWork: string;
    ctaContact: string;
    metaLine: string;
    scrollHint: string;
    figureLabel: string;
  };
  about: {
    index: string;
    label: string;
    heading: string;
    lead: string;
    paragraphs: string[];
    facts: { title: string; items: string[] }[];
  };
  work: {
    index: string;
    label: string;
    heading: string;
    intro: string;
    contextLabel: string;
    contributionLabel: string;
    technologiesLabel: string;
    projects: Record<string, ProjectContent>;
  };
  skills: {
    index: string;
    label: string;
    heading: string;
    intro: string;
    groups: SkillGroup[];
  };
  education: {
    index: string;
    label: string;
    heading: string;
    degree: string;
    institution: string;
    period: string;
    degreeNote: string;
    approachTitle: string;
    approachItems: string[];
    mentorshipTitle: string;
    mentorshipText: string;
    languagesTitle: string;
    languages: LanguageEntry[];
  };
  contact: {
    index: string;
    label: string;
    heading: string;
    text: string;
    githubLabel: string;
    note: string;
  };
  footer: {
    tagline: string;
    top: string;
    rights: string;
  };
}