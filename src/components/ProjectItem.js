import React from 'react';
import './Projects.css';

const ProjectItem = ({ project }) => {
  return (
    <div className="project-item">
      <img 
        src={project.image} 
        alt={project.name} 
        className="project-image" 
      />
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
        Look
      </a>
    </div>
  );
};

export default ProjectItem;
