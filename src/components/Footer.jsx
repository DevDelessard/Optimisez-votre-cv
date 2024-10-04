import React, { useState, useEffect } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScroll(true);  
      } else {
        setShowScroll(false); 
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); 
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h3>John Doe</h3>
          <p>40 Rue Laure Diebold</p>
          <p>69009 Lyon, France</p>
          <p>Téléphone : 06 20 30 40 50</p>
          <div className="footer-socials">
            <a href="https://github.com/github-john-doe" target='blank'><i className="fab fa-github"></i>
              <FontAwesomeIcon icon={faGithub} className="logo" />
            </a>
            <a href="#"><i className="fab fa-twitter"></i>
              <FontAwesomeIcon icon={faTwitter} className="logo" />
            </a>
            <a href="#"><i className="fab fa-linkedin"></i>
              <FontAwesomeIcon icon={faLinkedin} className="logo" />
            </a>
          </div>
        </div>
        <div className="footer-links">
          <h4>Liens utiles</h4>
          <ul>
            <li>
              <FontAwesomeIcon icon={faChevronRight} className="icon" />
              <a href="/"> Accueil</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faChevronRight} className="icon" />
              <a href="/about"> À propos</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faChevronRight} className="icon" />
              <a href="/services"> Services</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faChevronRight} className="icon" />
              <a href="/contact"> Me contacter</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faChevronRight} className="icon" />
              <a href="/legal"> Mentions légales</a>
            </li>
          </ul>
        </div>
        <div className="footer-projects">
          <h4>Mes dernières réalisations</h4>
          <ul>
            
            <li>
              <FontAwesomeIcon icon={faChevronRight} className="icon" />
              <a href="/portfolio"> Fresh food</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faChevronRight} className="icon" />
              <a href="/portfolio"> Restaurant Akira</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faChevronRight} className="icon" />
              <a href="/portfolio"> Espace bien-être</a>
            </li>
          </ul>
        </div>
        <div className="footer-articles">
          <h4>Mes derniers articles</h4>
          <ul>
            <li>
              <FontAwesomeIcon icon={faChevronRight} className="icon" />
              <a href="/blog"> Coder son site en HTML/CSS</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faChevronRight} className="icon" />
              <a href="/blog"> Vendre ses produits sur le web</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faChevronRight} className="icon" />
              <a href="/blog"> Se positionner sur Google</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Designed by John Doe</p>
        <a href="#" className={`scroll-to-top ${showScroll ? 'visible' : ''}`}  id="scrollToTopLink" onClick={scrollToTop}><FontAwesomeIcon icon={faChevronUp} />&nbsp;Retour en haut</a>
      </div>
    </footer>
  );
};

export default Footer;