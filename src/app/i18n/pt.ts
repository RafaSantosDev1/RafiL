export const pt: import('./i18n.types').SiteContent = {
  meta: {
    title: 'Rafael Santos — Portefólio | Engenharia Informática, ISEP',
    description: 'Portefólio de Rafael Santos, estudante de Engenharia Informática no ISEP. Desenvolvimento frontend e backend, bases de dados, análise de dados e visualização 3D interativa.'
  },
  nav: {
    about: 'Sobre',
    work: 'Trabalho',
    skills: 'Competências',
    education: 'Formação',
    contact: 'Contacto',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu'
  },
  hero: {
    kicker: 'Portefólio — Engenharia Informática',
    nameA: 'Rafael',
    nameB: 'Santos',
    role: 'Desenvolvedor full-stack em formação',
    statement: 'Estudo Engenharia Informática no ISEP e trabalho entre o frontend, o backend, as bases de dados e a visualização interativa — a construir aplicações completas, da interface ao banco de dados.',
    ctaWork: 'Ver projetos',
    ctaContact: 'Contactar',
    metaLine: 'ISEP · Lic. Engenharia Informática · 2022—2026',
    scrollHint: 'Descer',
    figureLabel: 'FIG. 01 — MAPA DE SISTEMAS'
  },
  about: {
    index: '01',
    label: 'Sobre',
    heading: 'Engenharia informática com base técnica ampla.',
    lead: 'O meu percurso combina desenvolvimento de aplicações, bases de dados e análise de dados, com projetos que vão de sistemas full-stack à visualização 3D interativa.',
    paragraphs: [
      'Estudo Engenharia Informática no Instituto Superior de Engenharia do Porto (ISEP), onde desenvolvi competências em programação orientada a objetos, MVC, padrões de desenho, UML e testes unitários. A formação abrange frontend com HTML, CSS, JavaScript, TypeScript, Angular e React, e backend com C#, .NET, ASP.NET, Java e Node.js.',
      'Em bases de dados, trabalho com SQL, PL/SQL, Oracle Database, MongoDB e Entity Framework. Completei o percurso com análise de dados em Python (Pandas, NumPy, Jupyter Notebook), visualização 3D com Three.js e WebGL, e integração de APIs REST, Web APIs e SOAP com autenticação Auth0.'
    ],
    facts: [
      { title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'React'] },
      { title: 'Backend', items: ['C#', '.NET', 'ASP.NET', 'Java', 'Node.js'] },
      { title: 'Bases de dados', items: ['SQL', 'PL/SQL', 'Oracle Database', 'MongoDB', 'Entity Framework'] },
      { title: 'Interativo e dados', items: ['Three.js', 'WebGL', 'Python', 'Pandas', 'NumPy'] }
    ]
  },
  work: {
    index: '02',
    label: 'Trabalho',
    heading: 'Trabalho selecionado',
    intro: 'Cinco projetos académicos de desenvolvimento full-stack, bases de dados, análise de dados e visualização interativa. Apresentados por ordem de relevância técnica.',
    contextLabel: 'Contexto',
    contributionLabel: 'O meu contributo',
    technologiesLabel: 'Tecnologias',
    projects: {
      'ship-ops': {
        category: 'Sistema full-stack',
        name: 'Ship Management and Port Operations',
        description: 'Sistema para gerir visitas de navios e operações portuárias de carga e descarga, desenvolvido em equipa.',
        context: 'Aplicação com várias camadas — frontend, backend e base de dados — para acompanhar operações portuárias em tempo real.',
        contribution: 'Desenvolvi funcionalidades frontend e backend, implementei e consumi APIs REST e integrei as camadas da aplicação. Implementei autenticação e autorização com Auth0, tratamento de exceções e registo de logs.',
        technologies: ['C#', '.NET', 'React', 'TypeScript', 'JavaScript', 'Node.js', 'REST APIs', 'Auth0', 'Entity Framework', 'SQL', 'Docker', 'Postman']
      },
      'hospital-3d': {
        category: 'Visualização 3D interativa',
        name: '3D Modelling and Visualization of a Hospital',
        description: 'Modelação tridimensional de um hospital, com as áreas e espaços do edifício organizados e exploráveis numa aplicação web.',
        context: 'Representar a estrutura de um edifício complexo em três dimensões e permitir a exploração dos seus espaços no browser.',
        contribution: 'Criei o modelo tridimensional, organizei os elementos estruturais e desenvolvi a aplicação interativa para explorar o modelo num ambiente web.',
        technologies: ['JavaScript', 'Three.js', 'HTML', 'CSS', 'WebGL']
      },
      'railway': {
        category: 'Base de dados e modelação',
        name: 'Railway Management System',
        description: 'Sistema de gestão de linhas ferroviárias e circulação de comboios e locomotivas, com foco na componente de bases de dados.',
        context: 'Modelar entidades e relações de uma rede ferroviária e implementar a lógica de negócio diretamente na base de dados.',
        contribution: 'Modelei entidades e relações, defini estruturas de dados e lógica de negócio, e produzi diagramas e tabelas relacionais. Implementei procedimentos e funções PL/SQL com cursores, triggers e operações de consulta e gestão de informação.',
        technologies: ['Oracle Database', 'SQL', 'PL/SQL', 'Oracle SQL Developer', 'Visual Paradigm', 'Microsoft Excel']
      },
      'drone-show': {
        category: 'Aplicação Java',
        name: 'Drone Show Management and Communication',
        description: 'Aplicação Java, desenvolvida em equipa, para gerir e coordenar espetáculos de drones.',
        context: 'Coordenar vários componentes do sistema, com comunicação entre módulos e persistência de dados.',
        contribution: 'Implementei a lógica de negócio, a comunicação entre componentes do sistema e a persistência de dados, utilizando ORM e JPA para mapear entidades para a base de dados.',
        technologies: ['Java', 'JPA', 'ORM', 'SQL', 'H2']
      },
      'environment': {
        category: 'Análise de dados',
        name: 'Environmental Data and Pollution Analysis',
        description: 'Análise de dados ambientais relacionados com padrões de poluição.',
        context: 'Explorar dados ambientais para identificar padrões de poluição e relações entre variáveis.',
        contribution: 'Fiz exploração e processamento de dados, análise estatística, estudos de correlação e regressão e técnicas de classificação. Apresentei os resultados através de visualizações e indicadores.',
        technologies: ['Python', 'Jupyter Notebook', 'Pandas', 'NumPy', 'Power BI', 'Microsoft Excel']
      }
    }
  },
  skills: {
    index: '03',
    label: 'Competências',
    heading: 'Competências técnicas',
    intro: 'Tecnologias e ferramentas documentadas no percurso académico, agrupadas por área. Sem classificações de proficiência — apenas o que efetivamente utilizei.',
    groups: [
      { title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'React'] },
      { title: 'Backend', items: ['C#', '.NET', 'ASP.NET', 'Java', 'Node.js'] },
      { title: 'Bases de dados', items: ['SQL', 'PL/SQL', 'Oracle Database', 'MongoDB', 'Entity Framework'] },
      { title: 'APIs e integração', items: ['REST APIs', 'Web APIs', 'SOAP', 'Postman', 'Auth0'] },
      { title: 'Análise de dados', items: ['Python', 'Jupyter Notebook', 'Pandas', 'NumPy'] },
      { title: '3D e web interativa', items: ['Three.js', 'WebGL', 'JavaScript', 'HTML', 'CSS'] },
      { title: 'Ferramentas e práticas', items: ['Git', 'GitHub', 'Bitbucket', 'Docker', 'Linux', 'POO', 'MVC', 'Padrões de desenho', 'UML', 'Testes unitários', 'Agile', 'Scrum'] }
    ]
  },
  education: {
    index: '04',
    label: 'Formação e método',
    heading: 'Formação e forma de trabalhar',
    degree: 'Licenciatura em Engenharia Informática',
    institution: 'Instituto Superior de Engenharia do Porto (ISEP)',
    period: 'Setembro 2022 — Junho 2026',
    degreeNote: 'Percurso académico com projetos de desenvolvimento full-stack, bases de dados, análise de dados e visualização 3D.',
    approachTitle: 'Trabalho em equipa e método',
    approachItems: [
      'Organização de projetos com metodologias Agile e Scrum: reuniões regulares e gestão de tarefas num backlog.',
      'Desenvolvimento de projetos em equipa, com divisão de responsabilidades e integração de camadas.'
    ],
    mentorshipTitle: 'Mentoria',
    mentorshipText: 'Participação em atividades de mentoria e sessões de desenvolvimento pessoal no programa Par a Par 4BEST.',
    languagesTitle: 'Línguas',
    languages: [
      { name: 'Português', level: 'Língua materna' },
      { name: 'Inglês', level: 'B2 compreensão oral e leitura · B1 produção oral, interação oral e escrita' }
    ]
  },
  contact: {
    index: '05',
    label: 'Contacto',
    heading: 'Vamos conversar.',
    text: 'Estou disponível para conversar sobre oportunidades profissionais, projetos freelance e colaborações. O canal de contacto confirmado é o GitHub — envie uma mensagem ou consulte o meu trabalho.',
    githubLabel: 'github.com/RafiLS',
    note: 'Contacto direto por email ou LinkedIn disponível mediante pedido através do GitHub.'
  },
  footer: {
    tagline: 'Engenharia Informática — ISEP',
    top: 'Voltar ao topo',
    rights: 'Portefólio de Rafael Santos.'
  }
};