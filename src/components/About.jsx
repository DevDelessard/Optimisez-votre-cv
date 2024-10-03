import React from 'react';
import './About.css'; 
import johnDoeabout from '../assets/images/johnDoeabout.jpg';

const About = () => {
  return (

      <div className="about-container">
        <div className="about-text">
          <h2>À propos</h2>
          <p>
            Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation 
            d'<strong>intégrateur-développeur web</strong> au CEF. Au cours de cette formation, j'ai pu acquérir des bases 
            solides pour travailler dans le domaine du <strong>développement web</strong>.
          </p>
          <p>
            Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <strong>développeur web full stack</strong>.
          </p>
          <p>
            J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.
          </p>
        </div>
        <div className="skills-section">
            <div className="skills-header">
              <img src={johnDoeabout} alt="Profil" />
              <h3>Mes compétences</h3>
            </div>
            <div className="skill">
              <span>HTML5 90%</span>
              <div className="skill-bar">
                <div className="skill-level html"></div>
              </div>
            </div>
            <div className="skill">
              <span>CSS3 80%</span>
              <div className="skill-bar">
                <div className="skill-level css"></div>
              </div>
            </div>
            <div className="skill">
              <span>JAVASCRIPT 70%</span>
              <div className="skill-bar">
                <div className="skill-level javascript"></div>
              </div>
            </div>
            <div className="skill">
              <span>PHP 60%</span>
              <div className="skill-bar">
                <div className="skill-level php"></div>
              </div>
            </div>
            <div className="skill">
              <span>REACT 50%</span>
              <div className="skill-bar">
                <div className="skill-level react"></div>
              </div>
            </div>
          </div>
      </div>
    
    
  );
};

export default About;