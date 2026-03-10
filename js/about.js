document.addEventListener('DOMContentLoaded', function () {
  const progressBars = document.querySelectorAll('.progress');
  progressBars.forEach((bar) => {
    const skillValue = bar.getAttribute('data-skill');
    bar.style.width = skillValue;
  });

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

  const projectData = {
    business: [
      {
        id: 1,
        name: 'Saar Tikshoret',
        category: 'Business systems',
        description: 'Business website and operational ecosystem for a sales and telemarketing organization with CRM-driven positioning and service pages.',
        liveLink: 'https://saartikshoret.co.il/',
        githubLink: 'https://github.com/Gorienich',
        image: 'static/project_icons/smeta.png'
      },
      {
        id: 2,
        name: 'My Space CRM / Technology',
        category: 'Business systems',
        description: 'CRM-oriented technology presentation covering sales operations, dashboards, lead workflows and business tooling direction.',
        liveLink: 'https://saartikshoret.co.il/technology',
        githubLink: 'https://github.com/Gorienich',
        image: 'static/project_icons/openAI.png'
      },
      {
        id: 3,
        name: 'HOT Sales',
        category: 'Business systems',
        description: 'Commercial website and content system focused on HOT packages, comparison pages and lead-generation journeys.',
        liveLink: 'https://hot-sales.co.il/',
        githubLink: 'https://github.com/Gorienich',
        image: 'static/project_icons/bakyHeader.png'
      }
    ],
    security: [
      {
        id: 4,
        name: 'Endpoint Lockdown Workflow',
        category: 'Security & IT',
        description: 'Secure workstation design for call-center environments balancing strong restrictions with working access for Pulse, Citrix, SIP and admin recovery paths.',
        liveLink: 'https://saartikshoret.co.il/technology',
        githubLink: 'https://github.com/Gorienich',
        image: 'static/project_icons/python1.png'
      },
      {
        id: 5,
        name: 'IT Operations & Access Reliability',
        category: 'Security & IT',
        description: 'Hands-on user environment support across VPN, Citrix, access troubleshooting, workstation policy control and business continuity.',
        liveLink: 'https://saartikshoret.co.il/about',
        githubLink: 'https://github.com/Gorienich',
        image: 'static/project_icons/python2.png'
      }
    ],
    web: [
      {
        id: 6,
        name: 'Saar Tikshoret Magazine',
        category: 'Web & content',
        description: 'Content platform for guides, sales insights, customer service knowledge and digital growth content in a business publishing format.',
        liveLink: 'https://saartikshoret.co.il/magazine',
        githubLink: 'https://github.com/Gorienich',
        image: 'static/project_icons/todoListReact.png'
      },
      {
        id: 7,
        name: 'Legacy GitHub Projects',
        category: 'Web & content',
        description: 'Earlier Java, Python and web prototypes that show my development foundation and technical range.',
        liveLink: 'https://github.com/Gorienich',
        githubLink: 'https://github.com/Gorienich',
        image: 'static/project_icons/Oop.jpg'
      }
    ],
    all: []
  };

  projectData.all = [...projectData.business, ...projectData.security, ...projectData.web];

  let selectedCategory = 'all';

  function handleCategoryChange(category) {
    selectedCategory = category;
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

    projectData[selectedCategory].forEach((project) => {
      const projectItem = document.createElement('article');
      projectItem.classList.add('project-item');

      projectItem.innerHTML = `
        <img class="project-image" src="${project.image}" alt="${project.name}">
        <div class="project-body">
          <span class="project-badge">${project.category}</span>
          <h3>${project.name}</h3>
          <p>${project.description}</p>
          <div class="project-links">
            <a href="${project.liveLink}" target="_blank" rel="noopener">Open link</a>
            <a href="${project.githubLink}" target="_blank" rel="noopener">GitHub</a>
          </div>
        </div>
      `;

      projectsGrid.appendChild(projectItem);
    });
  }

  const allBtn = document.getElementById('all');
  const businessBtn = document.getElementById('business');
  const securityBtn = document.getElementById('security');
  const webBtn = document.getElementById('web');

  if (allBtn) allBtn.addEventListener('click', () => handleCategoryChange('all'));
  if (businessBtn) businessBtn.addEventListener('click', () => handleCategoryChange('business'));
  if (securityBtn) securityBtn.addEventListener('click', () => handleCategoryChange('security'));
  if (webBtn) webBtn.addEventListener('click', () => handleCategoryChange('web'));

  displayProjects();
});
