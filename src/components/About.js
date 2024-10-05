import React from 'react';
import IconsList from './about/aboutMeIcons/IconsList'; // Adjusted the path
import Mypic from './about/Mypic/Mypic'; // Adjusted the path
import Skills from './about/MyScills/MyScills'; // Adjusted the pat
const About = () => {
  return (
    <div>
      <IconsList />
      <Mypic />
      <Skills />
    </div>
  );
};

export default About;
