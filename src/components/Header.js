import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [animate, setAnimate] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false); // State to toggle menu visibility
  const location = useLocation();

  useEffect(() => {
    // Trigger animation on location change
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 1000);
    return () => clearTimeout(timer);
  }, [location]);

  // Toggle the menu's visibility
  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  // Effect to close menu on location change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header className={`header ${animate ? 'animate-header' : ''}`}>
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>
      
      <nav className={`menu ${isMenuOpen ? 'menu-active' : ''}`}>
        <button className="close-button" onClick={toggleMenu}>
          ×
        </button>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
