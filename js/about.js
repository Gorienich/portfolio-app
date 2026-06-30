document.addEventListener('DOMContentLoaded', function () {
  // Scroll to Top button behavior
  const scrollToTopBtn = document.querySelector('.scroll-to-top');

  function toggleVisibility() {
    if (!scrollToTopBtn) return;
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add('visible');
    } else {
      scrollToTopBtn.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', toggleVisibility);

  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Engineering SVG diagrams
  const networkDiagramSVG = `
  <div class="project-diagram-wrapper">
    <svg viewBox="0 0 400 50" class="tech-diagram" xmlns="http://www.w3.org/2000/svg">
      <style>
        .node-rect { fill: rgba(10, 14, 23, 0.8); stroke: rgba(56, 189, 248, 0.4); stroke-width: 1; }
        .node-text { fill: aqua; font-family: 'SFMono-Regular', Consolas, monospace; font-size: 9px; font-weight: bold; text-anchor: middle; }
        .arrow-line { stroke: rgba(56, 189, 248, 0.4); stroke-width: 1.5; fill: none; }
        .arrow-head { fill: rgba(56, 189, 248, 0.4); }
      </style>
      <rect x="5" y="10" width="80" height="30" rx="2" class="node-rect" />
      <text x="45" y="28" class="node-text">Workstation</text>
      
      <line x1="85" y1="25" x2="101" y2="25" class="arrow-line" />
      <polygon points="101,22 107,25 101,28" class="arrow-head" />

      <rect x="107" y="10" width="80" height="30" rx="2" class="node-rect" />
      <text x="147" y="28" class="node-text">FortiGate</text>

      <line x1="187" y1="25" x2="203" y2="25" class="arrow-line" />
      <polygon points="203,22 209,25 203,28" class="arrow-head" />

      <rect x="209" y="10" width="80" height="30" rx="2" class="node-rect" />
      <text x="249" y="28" class="node-text">VPN Link</text>

      <line x1="289" y1="25" x2="305" y2="25" class="arrow-line" />
      <polygon points="305,22 311,25 305,28" class="arrow-head" />

      <rect x="311" y="10" width="84" height="30" rx="2" class="node-rect" />
      <text x="353" y="28" class="node-text">Citrix Server</text>
    </svg>
  </div>`;

  const automationDiagramSVG = `
  <div class="project-diagram-wrapper">
    <svg viewBox="0 0 400 50" class="tech-diagram" xmlns="http://www.w3.org/2000/svg">
      <style>
        .node-rect { fill: rgba(10, 14, 23, 0.8); stroke: rgba(56, 189, 248, 0.4); stroke-width: 1; }
        .node-text { fill: #38bdf8; font-family: 'SFMono-Regular', Consolas, monospace; font-size: 9px; font-weight: bold; text-anchor: middle; }
        .arrow-line { stroke: rgba(56, 189, 248, 0.4); stroke-width: 1.5; fill: none; }
        .arrow-head { fill: rgba(56, 189, 248, 0.4); }
      </style>
      <rect x="5" y="10" width="80" height="30" rx="2" class="node-rect" />
      <text x="45" y="28" class="node-text">Google Sheet</text>
      
      <line x1="85" y1="25" x2="101" y2="25" class="arrow-line" />
      <polygon points="101,22 107,25 101,28" class="arrow-head" />

      <rect x="107" y="10" width="80" height="30" rx="2" class="node-rect" />
      <text x="147" y="28" class="node-text">Apps Script</text>

      <line x1="187" y1="25" x2="203" y2="25" class="arrow-line" />
      <polygon points="203,22 209,25 203,28" class="arrow-head" />

      <rect x="209" y="10" width="80" height="30" rx="2" class="node-rect" />
      <text x="249" y="28" class="node-text">Drive Archive</text>

      <line x1="289" y1="25" x2="305" y2="25" class="arrow-line" />
      <polygon points="305,22 311,25 305,28" class="arrow-head" />

      <rect x="311" y="10" width="84" height="30" rx="2" class="node-rect" />
      <text x="353" y="28" class="node-text">Audit Log</text>
    </svg>
  </div>`;

  // Project database structure
  const projectData = {
    security: [
      {
        id: 1,
        name: 'Network Telemetry & MTU Analysis',
        category: 'Infrastructure & Networking',
        diagram: networkDiagramSVG,
        problem: 'Intermittent CRM freezes, Citrix session reconnections, and connectivity disruptions affected daily operations, while limited visibility into network paths, packet loss, latency, and MTU behavior made root-cause analysis difficult.',
        solution: 'Developed a PowerShell-based network diagnostic utility that continuously monitors connectivity, collects network telemetry, validates Citrix and SIP service ports, performs route and hop analysis, captures PathPing packet-loss statistics, executes MTU fragmentation tests, and automatically gathers diagnostic evidence when failures are detected.',
        techStack: ['PowerShell', 'FortiGate IPsec', 'Citrix Receiver', 'Ivanti VPN', 'VoIP / SIP', 'MTU Diagnostics'],
        impact: [
          'Improved troubleshooting visibility',
          'Standardized diagnostic evidence collection',
          'Accelerated root-cause investigation'
        ],
        links: [
          { text: 'View Source Code', url: 'https://github.com/Gorienich/Networking' },
          { text: 'View Documentation', url: 'https://github.com/Gorienich/Networking' }
        ]
      }
    ],
    business: [
      {
        id: 2,
        name: 'Automation backup System',
        category: 'Automation & Operations',
        diagram: automationDiagramSVG,
        problem: 'Manual daily work processes, backup preparation, morning workspace setup, and reporting checks created repetitive operational work, inconsistent Drive organization, and limited visibility into completed tasks.',
        solution: 'Engineered a Google Apps Script pipeline to automate daily file staging, generate timestamped monthly archives, write immutable audit logs to Google Sheets, and dispatch instant email warnings strictly upon script execution errors to ensure zero silent failures.',
        techStack: ['Google Apps Script', 'Google Sheets', 'Google Drive API', 'Audit Logs', 'IT Automation'],
        impact: [
          'Improved archive consistency',
          'Created audit visibility',
          'Reduced repetitive manual work'
        ],
        links: [
          { text: 'View Automation Logic', url: 'https://github.com/Gorienich/Drive-Automations-/tree/main/data-and%20flow/WorkDayInstalations' },
          { text: 'View Source Code', url: 'https://github.com/Gorienich/Drive-Automations-/tree/main/data-and%20flow/WorkDayInstalations' }
        ]
      }
    ],
    API: [
    {
    id: 3,
    name: 'Israel Address Validator',
    category: 'API',
    diagram: networkDiagramSVG,
    problem:
      'A nationwide address lookup required real-time validation against official government data. The application needed to search cities and streets across Israel, validate user input using authoritative datasets, and always reflect the latest available information without relying on static or manually maintained data.',    
    solution:
      'Built a lightweight Vanilla JavaScript application that integrates directly with the Israeli Government Open Data CKAN API. The system retrieves live city and street data, validates official address relationships, performs client-side house number validation, caches API responses for performance, and visualizes validated addresses in Google Maps. The architecture demonstrates how a frontend can consume and validate real-world API data while remaining easily adaptable to backend services.',
    techStack: [
      'Vanilla JavaScript',
      'HTML5',
      'CSS3',
      'CKAN REST API',
      'Fetch API',
      'AbortController',
      'localStorage',
      'Google Maps'
    ],

    impact: [
      'Integrated live Government Open Data',
      'Eliminated hardcoded address datasets',
      'Implemented reusable API validation architecture',
      'Demonstrated scalable frontend API integration'
    ],

    links: [
      {
        text: 'Live Demo',
        url: 'https://gorienich.github.io/Israel-Address-Validator/'
      },
      {
        text: 'GitHub Repository',
        url: 'https://github.com/Gorienich/Israel-Address-Validator'
      }
    ]
  }
],
    all: []
  };

  projectData.all = [...projectData.security, ...projectData.business];

  let selectedCategory = 'all';

  function handleCategoryChange(category) {
    selectedCategory = category;
    
    // Update active state in desktop buttons
    const filterButtons = document.querySelectorAll('.projects-filter button');
    filterButtons.forEach(btn => {
      if (btn.id === category) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    displayProjects();
  }

  const mobileSelect = document.getElementById('projectsFilter');
  if (mobileSelect) {
    mobileSelect.addEventListener('change', (event) => {
      handleCategoryChange(event.target.value);
    });
  }

  function displayProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;

    projectsGrid.innerHTML = '';

    const list = projectData[selectedCategory] || [];
    if (list.length === 0) {
      projectsGrid.innerHTML = '<div class="no-projects" style="grid-column:1/-1; text-align:center; padding: 2rem; color: var(--text-secondary); font-family: var(--font-mono);">No active diagnostic tools or automations in this view.</div>';
      return;
    }

    list.forEach((project) => {
      const projectItem = document.createElement('article');
      projectItem.classList.add('project-item');

      // Create tech stack tags markup
      const techTagsMarkup = project.techStack
        .map((tech) => `<span class="tech-tag">${tech}</span>`)
        .join('');

      // Create links markup
      const linksMarkup = project.links
        .map((link) => `<a href="${link.url}" target="_blank" rel="noopener">${link.text}</a>`)
        .join('');

      // Create impact points markup
      const impactMarkup = project.impact
        .map((item) => `<li>${item}</li>`)
        .join('');

      projectItem.innerHTML = `
        ${project.diagram}
        <div class="project-body">
          <span class="project-badge">${project.category}</span>
          <h3>${project.name}</h3>
          
          <div class="project-field">
            <span class="field-title">Problem Statement</span>
            <p>${project.problem}</p>
          </div>
          
          <div class="project-field">
            <span class="field-title">Diagnostic / Archiving Solution</span>
            <p>${project.solution}</p>
          </div>

          <div class="project-field">
            <span class="field-title">Key Impact Outcomes</span>
            <ul class="impact-outcomes-list">
              ${impactMarkup}
            </ul>
          </div>

          <div class="project-tech-stack">
            ${techTagsMarkup}
          </div>
          
          <div class="project-links">
            ${linksMarkup}
          </div>
        </div>
      `;

      projectsGrid.appendChild(projectItem);
    });
  }

  const allBtn = document.getElementById('all');
  const businessBtn = document.getElementById('business');
  const securityBtn = document.getElementById('security');
  const APIBtn = document.getElementById('API');

  if (allBtn) allBtn.addEventListener('click', () => handleCategoryChange('all'));
  if (businessBtn) businessBtn.addEventListener('click', () => handleCategoryChange('business'));
  if (securityBtn) securityBtn.addEventListener('click', () => handleCategoryChange('security'));
  if (APIBtn) APIBtn.addEventListener('click', () => handleCategoryChange('API'));
  
  // Render on load
  handleCategoryChange('all');
});


