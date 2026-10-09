export const en: import('./i18n.types').SiteContent = {
  meta: {
    title: 'Rafael Santos — Portfolio | Computer Engineering, ISEP',
    description: 'Portfolio of Rafael Santos, Computer Engineering student at ISEP. Frontend and backend development, databases, data analysis and interactive 3D visualization.'
  },
  nav: {
    about: 'About',
    work: 'Work',
    skills: 'Skills',
    education: 'Education',
    contact: 'Contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu'
  },
  hero: {
    kicker: 'Portfolio — Computer Engineering',
    nameA: 'Rafael',
    nameB: 'Santos',
    role: 'Full-stack developer in training',
    statement: 'I study Computer Engineering at ISEP and work across frontend, backend, databases and interactive visualization — building complete applications, from the interface to the database.',
    ctaWork: 'View projects',
    ctaContact: 'Get in touch',
    metaLine: 'ISEP · BSc Computer Engineering · 2022—2026',
    scrollHint: 'Scroll',
    figureLabel: 'FIG. 01 — SYSTEM MAP'
  },
  about: {
    index: '01',
    label: 'About',
    heading: 'Computer engineering with a broad technical foundation.',
    lead: 'My path combines application development, databases and data analysis, with projects ranging from full-stack systems to interactive 3D visualization.',
    paragraphs: [
      'I study Computer Engineering at the Instituto Superior de Engenharia do Porto (ISEP), where I developed skills in object-oriented programming, MVC, design patterns, UML and unit testing. The program covers frontend with HTML, CSS, JavaScript, TypeScript, Angular and React, and backend with C#, .NET, ASP.NET, Java and Node.js.',
      'In databases, I work with SQL, PL/SQL, Oracle Database, MongoDB and Entity Framework. I rounded out the program with data analysis in Python (Pandas, NumPy, Jupyter Notebook), 3D visualization with Three.js and WebGL, and integration of REST APIs, Web APIs and SOAP with Auth0 authentication.'
    ],
    facts: [
      { title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'React'] },
      { title: 'Backend', items: ['C#', '.NET', 'ASP.NET', 'Java', 'Node.js'] },
      { title: 'Databases', items: ['SQL', 'PL/SQL', 'Oracle Database', 'MongoDB', 'Entity Framework'] },
      { title: 'Interactive & Data', items: ['Three.js', 'WebGL', 'Python', 'Pandas', 'NumPy'] }
    ]
  },
  work: {
    index: '02',
    label: 'Work',
    heading: 'Selected work',
    intro: 'Five academic projects spanning full-stack development, databases, data analysis and interactive visualization. Presented in order of technical relevance.',
    contextLabel: 'Context',
    contributionLabel: 'My contribution',
    technologiesLabel: 'Technologies',
    projects: {
      'ship-ops': {
        category: 'Full-stack system',
        name: 'Ship Management and Port Operations',
        description: 'A system to manage ship visits and port loading and unloading operations, developed in a team.',
        context: 'An application with several layers — frontend, backend and database — tracking port operations in real time.',
        contribution: 'I developed frontend and backend features, implemented and consumed REST APIs and integrated the application layers. I implemented authentication and authorization with Auth0, exception handling and logging.',
        technologies: ['C#', '.NET', 'React', 'TypeScript', 'JavaScript', 'Node.js', 'REST APIs', 'Auth0', 'Entity Framework', 'SQL', 'Docker', 'Postman']
      },
      'hospital-3d': {
        category: 'Interactive 3D visualization',
        name: '3D Modelling and Visualization of a Hospital',
        description: 'Three-dimensional modelling of a hospital, with the building\'s areas and spaces organized and explorable in a web application.',
        context: 'Representing the structure of a complex building in three dimensions and allowing its spaces to be explored in the browser.',
        contribution: 'I created the 3D model, organized the structural elements and developed the interactive application to explore the model in a web environment.',
        technologies: ['JavaScript', 'Three.js', 'HTML', 'CSS', 'WebGL']
      },
      'railway': {
        category: 'Database and modelling',
        name: 'Railway Management System',
        description: 'A management system for railway lines and the circulation of trains and locomotives, focused on the database component.',
        context: 'Modelling the entities and relationships of a railway network and implementing business logic directly in the database.',
        contribution: 'I modelled entities and relationships, defined data structures and business logic, and produced relational diagrams and tables. I implemented PL/SQL procedures and functions with cursors, triggers and query and information management operations.',
        technologies: ['Oracle Database', 'SQL', 'PL/SQL', 'Oracle SQL Developer', 'Visual Paradigm', 'Microsoft Excel']
      },
      'drone-show': {
        category: 'Java application',
        name: 'Drone Show Management and Communication',
        description: 'A Java application, developed in a team, to manage and coordinate drone shows.',
        context: 'Coordinating several system components, with communication between modules and data persistence.',
        contribution: 'I implemented the business logic, communication between system components and data persistence, using ORM and JPA to map entities to the database.',
        technologies: ['Java', 'JPA', 'ORM', 'SQL', 'H2']
      },
      'environment': {
        category: 'Data analysis',
        name: 'Environmental Data and Pollution Analysis',
        description: 'Analysis of environmental data related to pollution patterns.',
        context: 'Exploring environmental data to identify pollution patterns and relationships between variables.',
        contribution: 'I carried out data exploration and processing, statistical analysis, correlation and regression studies and classification techniques. I presented the results through visualizations and indicators.',
        technologies: ['Python', 'Jupyter Notebook', 'Pandas', 'NumPy', 'Power BI', 'Microsoft Excel']
      }
    }
  },
  skills: {
    index: '03',
    label: 'Skills',
    heading: 'Technical skills',
    intro: 'Technologies and tools documented in the academic path, grouped by area. No proficiency ratings — only what I have actually used.',
    groups: [
      { title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'React'] },
      { title: 'Backend', items: ['C#', '.NET', 'ASP.NET', 'Java', 'Node.js'] },
      { title: 'Databases', items: ['SQL', 'PL/SQL', 'Oracle Database', 'MongoDB', 'Entity Framework'] },
      { title: 'APIs & Integration', items: ['REST APIs', 'Web APIs', 'SOAP', 'Postman', 'Auth0'] },
      { title: 'Data Analysis', items: ['Python', 'Jupyter Notebook', 'Pandas', 'NumPy'] },
      { title: '3D & Interactive Web', items: ['Three.js', 'WebGL', 'JavaScript', 'HTML', 'CSS'] },
      { title: 'Tools & Practices', items: ['Git', 'GitHub', 'Bitbucket', 'Docker', 'Linux', 'OOP', 'MVC', 'Design Patterns', 'UML', 'Unit Testing', 'Agile', 'Scrum'] }
    ]
  },
  education: {
    index: '04',
    label: 'Education & Approach',
    heading: 'Education and approach',
    degree: 'Bachelor\'s in Computer Engineering',
    institution: 'Instituto Superior de Engenharia do Porto (ISEP)',
    period: 'September 2022 — June 2026',
    degreeNote: 'Academic path with projects in full-stack development, databases, data analysis and 3D visualization.',
    approachTitle: 'Teamwork and method',
    approachItems: [
      'Project organization with Agile and Scrum methodologies: regular meetings and task management in a backlog.',
      'Developing projects in teams, with division of responsibilities and layer integration.'
    ],
    mentorshipTitle: 'Mentorship',
    mentorshipText: 'Participation in mentoring activities and personal development sessions in the Par a Par 4BEST program.',
    languagesTitle: 'Languages',
    languages: [
      { name: 'Portuguese', level: 'Native' },
      { name: 'English', level: 'B2 listening and reading · B1 speaking, oral interaction and writing' }
    ]
  },
  contact: {
    index: '05',
    label: 'Contact',
    heading: 'Let\'s talk.',
    text: 'I am available to talk about professional opportunities, freelance projects and collaborations. The confirmed contact channel is GitHub — send a message or look at my work.',
    githubLabel: 'github.com/RafiLS',
    note: 'Direct email or LinkedIn contact available on request via GitHub.'
  },
  footer: {
    tagline: 'Computer Engineering — ISEP',
    top: 'Back to top',
    rights: 'Portfolio of Rafael Santos.'
  }
};