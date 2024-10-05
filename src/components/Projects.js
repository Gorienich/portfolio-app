import React, { useState } from 'react';
import ProjectItem from './ProjectItem';
import ScrollToTopButton from './buttons/ButtonToTop';
import './Projects.css';

// Import images
import OopImage from '../assets/Oop.jpg';
import DataStructureImage from '../assets/dataStructure.jpg';
import optimed from '../assets/optimed.jpg';
import rafiAzerTours from '../assets/rafiAzerTours.png';
import openAI from '../assets/openAI.png';
import todoList from '../assets/todoListReact.png';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projectData = {
    java: [
      { id: 1, name: 'Object Oriented', description: 'Java', githubLink: 'https://github.com/Gorienich/Java-OOP', image: OopImage },
      { id: 2, name: 'Data Structure', description: 'Java', githubLink: 'https://github.com/Gorienich/Java-dataStructure', image: DataStructureImage },
    ],
    React: [
      { id: 3, name: 'OpenAI', description: 'Flask', githubLink: 'https://github.com/Gorienich/openAI-chat', image: openAI },
      { id: 4, name: 'todo list', description: 'React/Node.js', githubLink: 'https://github.com/Gorienich/Todo-React', image: todoList },
    ],
    websites: [
      { id: 5, name: 'optimed', description: 'PHP', githubLink: 'https://github.com/Gorienich/optimed', image: optimed },
      { id: 6, name: 'Rafi AzerTours', description: 'WordPress', githubLink: 'https://github.com/yourprofile/project6', image: rafiAzerTours },
    ],
    all: [
      { id: 1, name: 'Object Oriented', description: 'Java', githubLink: 'https://github.com/Gorienich/Java-OOP', image: OopImage },
      { id: 2, name: 'Data Structure', description: 'Java', githubLink: 'https://github.com/Gorienich/Java-dataStructure', image: DataStructureImage },
      { id: 3, name: 'OpenAI', description: 'Flask', githubLink: 'https://github.com/Gorienich/openAI-chat', image: openAI },
      { id: 4, name: 'Todo List', description: 'React', githubLink: 'https://github.com/Gorienich/Todo-React', image: todoList },
      { id: 5, name: 'Optimed', description: 'PHP', githubLink: 'https://github.com/Gorienich/optimed', image: optimed },
      { id: 6, name: 'Rafi AzerTours', description: 'WordPress', githubLink: 'https://github.com/yourprofile/project6', image: rafiAzerTours },
    ],
  };

  // Sort each category by description
  Object.keys(projectData).forEach(category => {
    projectData[category].sort((a, b) => a.description.localeCompare(b.description));
  });

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="projects-container">
      <div className="projects-filter">
        <button onClick={() => handleCategoryChange('all')}>All</button>
        <button onClick={() => handleCategoryChange('java')}>Java</button>
        <button onClick={() => handleCategoryChange('React')}>React</button>
        <button onClick={() => handleCategoryChange('websites')}>Websites</button>
      </div>
      <div className="projects-grid">
        {projectData[selectedCategory].map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>

      <div>
        <div className='gitHubLink'>
          <a href="https://github.com/Gorienich" target="_blank" rel='noreferrer' class="github-button">
            <span class="github-text">View me GitHub</span>
            <span class="github-icon">&#xf09b;</span>
          </a>
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default Projects;
