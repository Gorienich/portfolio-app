// src/components/Mypic.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Mypic.css';
import myPic from '../../../assets/me.png';


const Mypic = () => {
  const [showText, setShowText] = useState(false); // State to control text visibility
  const [textIndex, setTextIndex] = useState(0); // State to control text display

  useEffect(() => {
    // Set a timeout to show text after the picture animation completes
    const timer = setTimeout(() => setShowText(true), 1500); // Adjust the delay to match the picture animation

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Animate text character by character
    if (showText) {
      const text = "I'm a passionate and dedicated developer with experience in backend and frontend technologies. My expertise lies in creating efficient, scalable, and user-friendly applications. I thrive in solving complex problems and continuously learning new skills to enhance my craft. Whether it's building robust backend services or designing interactive user interfaces, I'm always up for the challenge. Let's create it!";
      const interval = setInterval(() => {
        setTextIndex((prevIndex) => {
          if (prevIndex < text.length) {
            return prevIndex + 1;
          } else {
            clearInterval(interval);
            return prevIndex;
          }
        });
      }, 20); // Adjust typing speed

      return () => clearInterval(interval);
    }
  }, [showText]);

  return (
    <div className="Mypic-container">
      <div className="picture-box">
        <img src={myPic} alt="me" className="picture" />
      </div>
      <div className={`About-text ${showText ? 'show' : ''}`}>
        <p>
          {textIndex > 0
            ? "I'm a passionate and dedicated developer with experience in backend and frontend technologies. My expertise lies in creating efficient, scalable, and user-friendly applications. I thrive in solving complex problems and continuously learning new skills to enhance my craft. Whether it's building robust backend services or designing interactive user interfaces, I'm always up for the challenge. "
              .slice(0, textIndex)
            : ''}
        </p>
        {textIndex >=
          "I'm a passionate and dedicated developer with experience in backend and frontend technologies. My expertise lies in creating efficient, scalable, and user-friendly applications. I thrive in solving complex problems and continuously learning new skills to enhance my craft. Whether it's building robust backend services or designing interactive user interfaces, I'm always up for the challenge. "
            .length && (
          <p style={{ textAlign: 'center' }}>
            <Link to="/contact" className="contact-link">
              {"Let's create it!".slice(
                0,
                textIndex -
                "I'm a passionate and dedicated developer with experience in backend and frontend technologies. My expertise lies in creating efficient, scalable, and user-friendly applications. I thrive in solving complex problems and continuously learning new skills to enhance my craft. Whether it's building robust backend services or designing interactive user interfaces, I'm always up for the challenge. "
                  .length
              )}
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default Mypic;
