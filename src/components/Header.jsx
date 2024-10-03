import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <h1>JOHN DOE</h1>
        <div className={`burger-icon ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <nav className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
          <ul>
            <li><Link to="/" onClick={toggleMenu}>ACCUEIL</Link></li>
            <li><Link to="/services" onClick={toggleMenu}>SERVICES</Link></li>
            <li><Link to="/portfolio" onClick={toggleMenu}>RÉALISATIONS</Link></li>
            <li><Link to="/blog" onClick={toggleMenu}>BLOG</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>ME CONTACTER</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;