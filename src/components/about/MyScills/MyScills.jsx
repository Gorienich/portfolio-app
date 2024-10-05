import React, { useState, useEffect } from 'react';
import './MySkills.css';

const Skills = () => {
  const [showSkills, setShowSkills] = useState(false);

  const frontendSkills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 90 },
    { name: 'Java', level: 90 },
    { name: 'Python', level: 90 },
    { name: 'JS', level: 90 },
    { name: 'React', level: 75 },
    { name: 'PHP', level: 75 },
    { name: 'DB', level: 75 },
    { name: 'Docker', level: 90 },
    { name: 'Cloud', level: 75 },
    
   
    
  ];

  const renderSkills = (skills) => {
    return skills.map((skill, index) => (
      <div className="skill-item" key={index}>
        <div className="skill-name">{skill.name}</div>
        <div
          className="skill-bar"
          style={{
            '--lvl': showSkills ? `${skill.level}%` : '0%', // Use CSS variable for width
          }}
        >
          <span className="skill-percentage">{skill.level}%</span>
        </div>
      </div>
    ));
  };

  const handleToggleSkills = () => {
    setShowSkills((prevShowSkills) => !prevShowSkills);
  };

  useEffect(() => {
    if (showSkills) {
      // Reset animation by removing and re-adding the class
      document.querySelectorAll('.skill-bar').forEach((bar) => {
        bar.classList.remove('animate');
        void bar.offsetWidth; // Trigger reflow
        bar.classList.add('animate');
      });
    }
  }, [showSkills]);

  return (
    <div className={`skills-container ${showSkills ? 'show' : 'hide'}`}>
      <div className="skillsBtn">
        <button className="Btn" onClick={handleToggleSkills}>
          {showSkills ? 'Hide Skills' : 'Show Skills'}
        </button>
      </div>
      <div className="skills-section">
        {renderSkills(frontendSkills)}
      </div>
    </div>
  );
};

export default Skills;
