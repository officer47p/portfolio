const experience = [
  {
    role: 'Core Blockchain Engineer', company: 'Daisy Smart Chain', period: 'February 2026 – Present',
    highlights: [
      'Deployed and operated monitoring across approximately 20 services and hosts for a custom EVM network, including validator and archive nodes, databases, RPC endpoints, backends, and frontends. Used that visibility to identify bottlenecks and reduce AWS spend by 50%.',
      'Designed and implemented a Go rate limiter for HTTP and WebSocket RPC traffic, with service tiers, plans, burst limits, and a React dashboard for policy management.',
      'Built a load-testing framework to benchmark chain and RPC behavior under sustained and burst traffic.',
      'Wrote a technical roadmap for infrastructure priorities, security milestones, and engineering delivery.',
      'Established runbooks for monitoring, node configuration, incident response, and security hardening to improve onboarding and reduce reliance on individual knowledge.',
      'Lead recurring sessions on infrastructure operations, security tooling, and engineering practices.'
    ]
  },
  {
    role: 'AI & Blockchain Software Engineer', company: 'if3.xyz', url: 'https://if3.xyz', period: 'January 2025 – January 2026',
    highlights: [
      'Designed and deployed generative AI and traditional ML inference workloads on H200 GPU clusters using Kubernetes, vLLM, and TensorFlow, supporting more than 10,000 concurrent users with 10 GPUs in a six-person team.',
      'Built production AI agents and backend workflows in Go and Python using LangChain and n8n.',
      'Engineered the trade engine for an on-chain perpetual futures platform in Go, TypeScript, and Rust, including market-maker integrations and transaction workflows.',
      'Built and extended Model Context Protocol (MCP) servers connecting developer tools with internal systems to automate operational workflows.'
    ]
  },
  {
    role: 'Backend & Cloud Technical Lead', company: 'Karafsapp.com', url: 'https://karafsapp.com', period: 'May 2024 – January 2025',
    highlights: [
      'Rebuilt the internal backend engineering function after insourcing the platform from external agencies, maintaining uninterrupted service for 100,000 daily active users.',
      'Led cross-functional iOS, Android, data, frontend, and backend teams; stabilized deployments and standardized engineering processes, documentation, and release pipelines.',
      'Refactored legacy code and addressed security vulnerabilities in support of pending security certifications.',
      'Audited infrastructure across AWS, GCP, Cloudflare, and DigitalOcean, reducing monthly technology costs by 15% in four months.',
      'Designed the engineering onboarding process to improve knowledge transfer and new-hire ramp-up.'
    ]
  },
  {
    role: 'Senior Backend & Cloud Software Engineer', company: 'Nobitex.ir', url: 'https://nobitex.ir', period: 'February 2023 – May 2024',
    highlights: [
      'Led nine engineers through the migration of legacy JavaScript and Python services to TypeScript and Go.',
      'Implemented unit, integration, and end-to-end test suites with over 90% coverage, enabling safer refactoring and faster releases.',
      'Migrated on-premise infrastructure and systemd services to cloud-based Kubernetes deployments, covering containerization, configuration and secrets, persistent storage, ingress, and monitoring.'
    ]
  },
  {
    role: 'Backend Software Engineer', company: 'Deriv.com', url: 'https://deriv.com', period: 'December 2020 – February 2023',
    highlights: [
      'Maintained high-volume backend systems serving more than 70,000 daily active traders, collaborating with core PostgreSQL and Perl contributors on a 25-year-old codebase.',
      'Migrated critical services from Perl to TypeScript and Node.js to improve performance, scalability, and maintainability.',
      'Diagnosed and resolved production incidents across deposits, withdrawals, and trading operations.',
      'Delivered internal training on cryptography and cryptocurrency fundamentals.'
    ]
  }
];

const categories = [
  { name: 'Web sites and application backends', items: [
    ['hotel-reservation', 'Go and MongoDB hotel booking backend.'],
    ['my-car-value', 'NestJS backend for car valuation reports.'],
    ['nextjs-corp', 'Next.js car factory corporate site demo.'],
    ['nextjs-snippets', 'Next.js and Prisma code snippet app.'],
    ['project-management', 'Flutter project management web app.'],
    ['project-management-demo', 'Flutter task management demo.'],
    ['simple-nestjs-messages', 'NestJS message storage example.'],
    ['storefront', 'Django shopping app.'],
    ['threejs-landing', 'Three.js landing page.'],
    ['ticketing', 'Microservices ticketing app with Node.js, NATS, Redis, Docker, and Kubernetes.'],
    ['ticketing-3d', 'Interactive 3D seat selection interface in Next.js.']
  ] },
  { name: 'Developer tools and infrastructure', items: [
    ['go-gui', 'Experiments with graphical interfaces in Go.'],
    ['go-helpers', 'Reusable Go helper library.'],
    ['goperf', 'Goroutine performance benchmark.'],
    ['guardians-of-the-cluster', 'Multi-instance rate limiting service experiment.'],
    ['nats-test', 'NATS Streaming event bus test app.'],
    ['node-ts-boilerplate', 'Minimal Node.js and TypeScript starter.'],
    ['object-to-array', 'JavaScript object to array conversion package.'],
    ['simple-microservices-app', 'JavaScript microservices and event bus example.'],
    ['threejs-typescript-boilerplate', 'Three.js and TypeScript project starter.']
  ] },
  { name: 'AI, computer vision, and data visualization', items: [
    ['brah', 'Go command line AI agent.'],
    ['fist-and-palm-detector', 'OpenCV hand gesture detector.'],
    ['gorag', 'Go experiment with chat completion and embeddings; the checked code does not establish a full RAG pipeline.'],
    ['image-brightness-classification', 'Batch and HTTP image classification service using a brightness model.'],
    ['iss-graph', 'Plots International Space Station locations.'],
    ['matplotlib-earth-height-map', 'Plots Earth elevation data with Python.'],
    ['matplotlib-tutorial', 'Matplotlib tutorial code.'],
    ['my-ml-journey', 'Machine learning study notebook and sample datasets.']
  ] },
  { name: 'Finance, blockchain, and security', items: [
    ['addressport', 'Graphs EVM blockchain transactions and addresses.'],
    ['bitcoin-ticker-flutter', 'Flutter cryptocurrency price ticker.'],
    ['cryptography-course', 'Python Caesar and reverse cipher exercises.'],
    ['decaffeth-presentations', 'Bitcoin token presentation diagram.'],
    ['eth-programming', 'Ethereum token farming dapp with Solidity and React.'],
    ['go-zk-auth', 'Go zero knowledge authentication proof implementation.'],
    ['mastering-bitcoin', 'Code exercises from Mastering Bitcoin.'],
    ['open-password-manager', 'Deterministic password manager.'],
    ['open-payment-gateway', 'Self hosted EVM cryptocurrency payment gateway.'],
    ['personal-expenses', 'Flutter personal spending tracker and charts.'],
    ['python-mnemonic-generation', 'Mnemonic phrase generation demonstration.'],
    ['rust-bank', 'Simple bank implementation in Rust.']
  ] },
  { name: 'Robotics and simulation', items: [
    ['6DOF-Simulator', 'Interactive six axis robot arm simulator in Three.js.'],
    ['bittle-sim', 'Godot 4 quadruped joint simulator with servo controls and pose presets.'],
    ['drivesim', 'Godot vehicle simulator with a telemetry and control bridge.'],
    ['robo-sim', 'Godot robotics simulator with sensors and programmatic control.'],
    ['three-kinematic', 'Three.js kinematics visualization experiment.']
  ] },
  { name: 'Hardware and embedded systems', items: [
    ['pico-github', 'Raspberry Pi Pico display of GitHub contributions.'],
    ['symmetrical-barnacle', 'Arduino or ESP mesh network and web server example.']
  ] },
  { name: 'Game development and game tools', items: [
    ['2d-survivors-game', 'Godot arena survival game with enemies, experience, and upgrades.'],
    ['block-breaker', 'Unity paddle and block breaking game.'],
    ['CyberBugWars', 'Multiplayer browser .io game built with p5.js and Socket.IO.'],
    ['flutter-game-controller', 'Flutter gamepad app with a Python WebSocket bridge.'],
    ['godot-multiplayer-2d', 'Godot 2D multiplayer networking example.'],
    ['godot-raycast-vehicle', 'Godot raycast car physics sandbox.'],
    ['Lazer-Defender-Game', 'Unity space shooter prototype.'],
    ['Project-Boost', 'Godot rocket game.'],
    ['robo-rampage', 'Godot first person shooter.']
  ] },
  { name: 'Mobile and small consumer apps', items: [
    ['bmi-calculator', 'Flutter body mass index calculator.'],
    ['deli-meals', 'Flutter meal browsing app.'],
    ['flash-chat', 'Flutter and Firebase chat app.'],
    ['flutter-grayscale-camera', 'Flutter camera app producing grayscale frames.'],
    ['flutter-note-app', 'Flutter note app.'],
    ['flutter-pet-adoption', 'Flutter pet adoption app.'],
    ['flutter-shop-app', 'Flutter and Firebase shop app.'],
    ['great-places', 'Flutter app to save places with photos and locations.'],
    ['i_am_rich', 'Flutter recreation of the I Am Rich app.'],
    ['quiz_app', 'Flutter quiz app.'],
    ['quizzler', 'Flutter quiz app with prepared questions.'],
    ['todoey', 'Flutter to do app.'],
    ['vine-boom', 'One button sound effect web app.']
  ] }
];

const skills = [
  ['Languages', 'Go', 'TypeScript', 'Python', 'Perl', 'Dart'],
  ['AI / ML', 'TensorFlow', 'PyTorch', 'Keras', 'Scikit-Learn', 'Transformers', 'LangChain'],
  ['Blockchain', 'EVM', 'SVM', 'Smart contract integrations', 'On-chain analytics'],
  ['Databases & Messaging', 'PostgreSQL', 'MongoDB', 'Redis', 'NATS'],
  ['Cloud & Infrastructure', 'Docker', 'Kubernetes', 'AWS', 'GCP', 'CI/CD'],
  ['Practices', 'Test-Driven Development', 'Distributed Systems', 'Clean Architecture']
];

const el = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
};

const experienceRoot = document.querySelector('#experience-list');
experience.forEach((job, index) => {
  const item = el('article', 'experience-item');
  const rail = el('div', 'experience-rail');
  rail.append(el('span', 'rail-number', String(index + 1).padStart(2, '0')));
  const body = el('div', 'experience-body');
  const head = el('div', 'experience-head');
  const headings = el('div');
  headings.append(el('h3', '', job.role));
  const company = job.url ? el('a', 'company-link', job.company) : el('span', 'company-link', job.company);
  if (job.url) {
    company.href = job.url;
    company.target = '_blank';
    company.rel = 'noopener noreferrer';
  }
  headings.append(company);
  head.append(headings, el('time', 'date-chip', job.period));
  const list = el('ul', 'highlights');
  job.highlights.forEach((highlight) => list.append(el('li', '', highlight)));
  body.append(head, list);
  item.append(rail, body);
  experienceRoot.append(item);
});

const repositoryRoot = document.querySelector('#repository-list');
categories.forEach((category, index) => {
  const details = el('details', 'repo-folder');
  const summary = el('summary');
  summary.append(el('span', 'folder-icon', '▣'), el('span', 'folder-name', category.name), el('span', 'folder-count', `${category.items.length} repositories`), el('span', 'folder-chevron', '+'));
  const list = el('div', 'repo-items');
  category.items.forEach(([name, description]) => {
    const item = el('div', 'repo-item');
    const link = el('a', '', name);
    link.href = `https://github.com/officer47p/${encodeURIComponent(name)}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    item.append(link, el('span', '', description), el('span', 'repo-arrow', '↗'));
    list.append(item);
  });
  details.append(summary, list);
  if (index === 0) details.open = true;
  repositoryRoot.append(details);
});

const skillsRoot = document.querySelector('#skills-grid');
skills.forEach(([group, ...items], index) => {
  const card = el('div', 'skill-card');
  card.append(el('span', 'skill-index', String(index + 1).padStart(2, '0')), el('h3', '', group));
  const list = el('div', 'skill-tags');
  items.forEach((skill) => list.append(el('span', '', skill)));
  card.append(list);
  skillsRoot.append(card);
});
