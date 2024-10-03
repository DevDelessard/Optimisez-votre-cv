import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './Legal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown, faMapMarkerAlt, faPhoneAlt ,faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';

const Legal = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/*Helmet empêche l'indexation*/}
      <Helmet>
        <meta name="robots" content="noindex" />
        <title>Mentions Légales - John Doe</title>
      </Helmet>

      <section className="legal-section">
        <h2>Mentions Légales</h2>
        <div className="accordion">
          <div className="accordion-item">
            <div className="accordion-title" onClick={() => toggleAccordion(0)}>
              <span>Éditeur du site</span>
              <span>
                {activeIndex === 0 ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
              </span>
            </div>
            {activeIndex === 0 && (
              <div className="accordion-content">
                <div className="contact1">
                  <h3>John Doe</h3>
                  <p>
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="logo1" /> 40 Rue Laure Diebold, <br></br>69009 Lyon, France
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faPhoneAlt} className="logo1" />{' '}
                    <a href="tel:+33620304050" style={{ color: '#0066cc' }}>06 20 30 40 50</a>
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faEnvelope} className="logo1" />{' '}
                    <a href="mailto:john.doe@gmail.com" style={{ color: '#0066cc' }}>john.doe@gmail.com</a>
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="accordion-item">
            <div className="accordion-title" onClick={() => toggleAccordion(1)}>
              <span>Hébergeur</span>
              <span>
                {activeIndex === 1 ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
              </span>
            </div>
            {activeIndex === 1 && (
              <div className="accordion-content">
                <h3>Always Data</h3>
                <p>91 rue du Faubourg Saint-Honoré<br></br> 75008 Paris, France.</p>
                <p>
                  <FontAwesomeIcon icon={faGlobe} className="logo1" />
                  <a href="https://www.alwaysdata.com" target="_blank" rel="noopener noreferrer">
                    &nbsp;www.alwaysdata.com
                  </a>
                </p>
                
              </div>
            )}
          </div>

          <div className="accordion-item">
            <div className="accordion-title" onClick={() => toggleAccordion(2)}>
              <span>Crédits</span>
              <span>
                {activeIndex === 2 ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
              </span>
            </div>
            {activeIndex === 2 && (
              <div className="accordion-content">
                <h3>Crédits</h3>
                <p>Site développé par John Doe, étudiant du CEF.</p>
                <p>
                  Les images libres de droit sont issues du site{' '}
                  <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer">
                    Pixabay
                  </a>.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Legal;