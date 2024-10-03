import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';


const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contain">
        <h2>ME CONTACTER</h2>
        <div className='txt'>
          <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
        </div>
        <div className="contact-form-container">
          <div className="contact-form">
            <h3>Formulaire de contact</h3>
            <form>
              <input type="text" placeholder="Votre nom" required />
              <input type="email" placeholder="Votre adresse email" required />
              <input type="tel" placeholder="Votre numéro de téléphone" required />
              <input type="text" placeholder="Sujet" required />
              <textarea placeholder="Votre message" required></textarea>
              <button type="submit">Envoyer</button>
            </form>
          </div>
          <div className="contact-info">
            <h3>Mes coordonnées</h3>
            <p><FontAwesomeIcon icon={faMapMarkerAlt} className="logo1" /> 40 Rue Laure Diebold, 69009 Lyon, France</p>
            <p><FontAwesomeIcon icon={faPhoneAlt} className="logo1" /> 06 20 30 40 50</p>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.243909992375!2d4.820574716011809!3d45.76404321995425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea9e29f98dd5%3A0x13a7fbd920e5dbb5!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon%2C%20France!5e0!3m2!1sen!2sfr!4v1633704547821!5m2!1sen!2sfr"
                width="100%" height="330" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
