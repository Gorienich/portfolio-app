document.addEventListener("DOMContentLoaded", function() {
  // Handle progress bars
  const progressBars = document.querySelectorAll('.progress');
  progressBars.forEach(bar => {
    const skillValue = bar.getAttribute('data-skill');
    bar.style.width = skillValue; // Set the width based on data-skill value
  });

  // Scroll-to-top button
  const scrollToTopBtn = document.querySelector('.scroll-to-top');
  
  // Toggle visibility of scroll-to-top button based on scroll position
  function toggleVisibility() {
    if (window.scrollY > 300) { // Button appears after scrolling 300px down
      scrollToTopBtn.classList.add('visible');
    } else {
      scrollToTopBtn.classList.remove('visible');
    }
  }

  // Event listener for scrolling
  window.addEventListener('scroll', toggleVisibility);

  // Smooth scroll to the top when the button is clicked
  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  // Projects section logic
  // Project data
  const projectData = {
    java: [
      { id: 1, name: 'Object Oriented', description: 'Java', githubLink: 'https://github.com/Gorienich/JAVA-OOP', image: 'static/project_icons/Oop.jpg' },
      { id: 2, name: 'Data Structure', description: 'Java', githubLink: 'https://github.com/Gorienich/JAVA-Data_Structure-Arrays', image: 'static/project_icons/dataStructure.jpg' }
    ],
    React: [
      { id: 3, name: 'OpenAI', description: 'Flask', githubLink: 'https://github.com/Gorienich/Flask/tree/main/openAI', image: 'static/project_icons/openAI.png' },
      { id: 4, name: 'Todo list', description: 'React/Node.js', githubLink: 'https://github.com/Gorienich/My-React/tree/main/todo', image: 'static/project_icons/todoListReact.png' }
    ],
    websites: [
      { id: 5, name: 'Optimed', description: 'PHP', githubLink: 'https://github.com/Gorienich/optimed', image: 'static/project_icons/optimed.jpg' },
      { id: 6, name: 'Repair-estimate', description: 'PHP', githubLink: 'gorienich.github.io/Repair-estimate', image: 'static/project_icons/smeta.png' },
      { id: 7, name: 'flying Controller', description: 'PHP', githubLink: 'https://github.com/Gorienich/Fly-project-/tree/main/Flyproject/app/NewProjectTest1', image: 'static/project_icons/Flyproject.png' }
    ],
    python: [
      { id: 8, name: 'Lock Master', description: 'Python', githubLink: 'https://github.com/Gorienich/python/tree/main/encoder-decoder%20transfer', image: 'static/project_icons/python1.png' },
      { id: 9, name: 'Encoder-Decoder Transfer', description: 'Python', githubLink: 'https://github.com/Gorienich/python/tree/main/lock%20master', image: 'static/project_icons/python2.png' }
    ],
    all: []
  };
  
  // Combine all projects into 'all' category
  projectData.all = [...projectData.java, ...projectData.React, ...projectData.websites, ...projectData.python];
  
  // Sort each category by description
  Object.keys(projectData).forEach(category => {
    projectData[category].sort((a, b) => a.description.localeCompare(b.description));
  });
  
  let selectedCategory = 'all';  // Default category
  
  // Handle category change
  function handleCategoryChange(category) {
    selectedCategory = category;
    displayProjects();
  }
  
  // Handle select change from dropdown
  document.getElementById('projectsFilter').addEventListener('change', (event) => {
    handleCategoryChange(event.target.value);
  });
  
  // Display the selected projects
  function displayProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = '';  // Clear previous content
  
    projectData[selectedCategory].forEach(project => {
      const projectItem = document.createElement('div');
      projectItem.classList.add('project-item');
  
      projectItem.innerHTML = `
        <img class="project-image" src="${project.image}" alt="${project.name}">
        <h3>${project.name}</h3>
        <p>${project.description}</p><br>
        <a href="${project.githubLink}" target="_blank">View on GitHub</a>
      `;
  
      projectsGrid.appendChild(projectItem);
    });
  }
  
  // Set up event listeners for category buttons
  document.getElementById('all').addEventListener('click', () => handleCategoryChange('all'));
  document.getElementById('java').addEventListener('click', () => handleCategoryChange('java'));
  document.getElementById('react').addEventListener('click', () => handleCategoryChange('React'));
  document.getElementById('python').addEventListener('click', () => handleCategoryChange('python'));
  document.getElementById('websites').addEventListener('click', () => handleCategoryChange('websites')); // Updated
  
  // Initially display all projects
  displayProjects();
  
});
