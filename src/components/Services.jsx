import React from 'react';
import './Services.css';
import banner from '../assets/images/banner.jpg';
import bannerTablet from '../assets/images/banner-tablette.jpg';
import bannerMobile from '../assets/images/banner-mobile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faFileCode, faSearchDollar } from '@fortawesome/free-solid-svg-icons';


const Services = () => {
  return (
    <section className="services">
      <picture className='picture'>
        <source srcSet={banner} media="(min-width: 1024px)" />
        <source srcSet={bannerTablet} media="(min-width: 768px)" />
        <img src={bannerMobile} alt="Bannière" className="home-banner" />
      </picture>
      <section className="services-section">
        <div className="container">
          <h2>MON OFFRE DE SERVICES</h2>
          <div className='txt'>Voici les prestations sur lesquelles je peux intervenir.</div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
               <FontAwesomeIcon icon={faDesktop} />
              </div>
              <h3>UX DESIGN</h3>
              <p>
                L’<strong>UX Design</strong> est une méthode de conception centrée sur l’utilisateur. Son but est d’offrir une expérience de navigation optimale à l’internaute.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
               <FontAwesomeIcon icon={faFileCode} />
              </div>
              <h3>Développement Web</h3>
              <p>
                Le <strong>développement de sites web</strong> repose sur l’utilisation des langages <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> et <strong>PHP</strong>.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
               <FontAwesomeIcon icon={faSearchDollar} />
              </div>
              <h3>Référencement</h3>
              <p>
                Le <strong>référencement naturel d'un site</strong>, aussi appelé SEO, consiste à mettre des techniques en œuvre pour améliorer sa position dans les résultats des moteurs de recherche.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
    
  );
};

export default Services;