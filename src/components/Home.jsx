import React, { useState } from 'react';
import './Home.css';
import About from './About'; 

const Home = () => {
  const [showAbout, setShowAbout] = useState(false);
  const toggleAboutSection = () => {
    console.log("Bouton cliqué!"); 
    setShowAbout(!showAbout);
    console.log("showAbout:", !showAbout);
  };

  return (
    <section className="home">
      <div className="banner">
        <h2>Bonjour, je suis John Doe</h2>
        <h3>Développeur web full stack</h3>
        <button onClick={toggleAboutSection}>
          {showAbout ? "Masquer" : "En savoir plus"}
        </button>
      </div>
      <div className={`about-section ${showAbout ? 'show' : ''}`}>
        <About />
      </div>
    </section>
  );
};

export default Home;