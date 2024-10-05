import React from 'react';
import './Home.css'; 

const Home = () => {
  return (
    <div className='main'> 
      <h1>Hello, I'm  <span className="highlight">Egor Grebenuk</span></h1>
      <h2>Welcome to My Portfolio</h2>
      <p>I'm <span className="highlightFullDev">Full-Stack Developer</span> specializing with best <span className="highlightFrontend">Front-end</span> and <span className="highlightBackend">Back-end</span> technologies for hight quality poducts.</p>
    </div>
  );
};

export default Home;
