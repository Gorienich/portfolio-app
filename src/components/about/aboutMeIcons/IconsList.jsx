// src/components/IconsList.jsx
import React from 'react';
import Icon from './Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faSyncAlt, faLightbulb, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import './IconsList.css'; // Import the CSS for styling

// Sample icon data with appropriate FontAwesome icons
const iconsData = [
  {
    icon: <FontAwesomeIcon icon={faBolt} />,
    alt: 'Fast',
    description: 'Fast load times and lag-free interaction, my highest priority.',
  },
  {
    icon: <FontAwesomeIcon icon={faSyncAlt} />,
    alt: 'Dynamic',
    description: 'Websites don\'t have to be static. I love making pages come to life.',
  },
  {
    icon: <FontAwesomeIcon icon={faLightbulb} />,
    alt: 'Intuitive',
    description: 'Strong preference for easy to use, intuitive UX/UI.',
  },
  {
    icon: <FontAwesomeIcon icon={faMobileAlt} />,
    alt: 'Responsive',
    description: 'My layouts will work on any device, big or small.',
  },
  // Add more icons as needed
];

const IconsList = () => {
  return (
    <div className="icons-list">
      {iconsData.map((iconData, index) => (
        <Icon
          key={index}
          icon={iconData.icon}
          alt={iconData.alt}
          description={iconData.description}
        />
      ))}
    </div>
  );
};

export default IconsList;
