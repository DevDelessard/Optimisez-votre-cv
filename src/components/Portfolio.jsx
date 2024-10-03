import React from 'react';
import './Portfolio.css';
import banner from '../assets/images/banner.jpg';
import bannerTablet from '../assets/images/banner-tablette.jpg';
import bannerMobile from '../assets/images/banner-mobile.jpg';
import restoJap from '../assets/images/portfolio/restaurant-japonais.jpg';
import freshFood from '../assets/images/portfolio/fresh-food.jpg';
import EspaceBien from '../assets/images/portfolio/espace-bien-etre.jpg';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <picture className='picture'>
        <source srcSet={banner} media="(min-width: 1024px)" />
        <source srcSet={bannerTablet} media="(min-width: 768px)" />
        <img src={bannerMobile} alt="Bannière" className="home-banner" />
      </picture>
      <div className="container">
        <h2>PORTFOLIO</h2>
        <h3>Voici quelques-unes de mes réalisations</h3>
        <div className="blue-bar"></div>
        <div className="portfolio-items">
          <div className="fresh-food">
            <img src={freshFood} alt="Profil" />
            <div className="portfolio-item">Fresh Food</div>
            <h3>Réalisation d'un site avec commande en ligne</h3>
            <a href="#" className="btn-view">Voir</a>
            <div className="footer-info">Site réalisé avec PHP et MySQL</div>
          </div>
          <div className="restau">
            <img src={restoJap} alt="Profil" />
            <div className="portfolio-item">Restaurant Akira</div>
            <h3>Réalisation d'un site vitrine</h3>
            <a href="#" className="btn-view">Voir</a>
            <div className="footer-info">Site réalisé avec WordPress</div>
          </div>
          <div className="Espace">
            <img src={EspaceBien} alt="Profil" />
            <div className="portfolio-item">Espace bien-être</div>
            <h3>Réalisation d'un site vitrine pour un praticien de bien-être</h3>
            <a href="#" className="btn-view">Voir</a> 
            <div className="footer-info">Site réalisé en HTML/CSS</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;