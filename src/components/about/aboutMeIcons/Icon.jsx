// src/components/Icon.jsx
import React from 'react';
import './Icon.css'; // Import CSS for styling

const Icon = ({ icon, alt, description }) => {
  return (
    <div className="icon-container">
      <div className="icon-fontawesome">{icon}</div>
      <p className="icon-description">{description}</p>
    </div>
  );
};

export default Icon;
