import React, { useRef } from 'react';
import { FaFacebook, FaLinkedin, FaInstagram, FaGlobe, FaEnvelope, FaPhone, FaFileAlt } from 'react-icons/fa';
import './component.css/Footer.css'

const Footer = () => {
  const socialIconsRef = useRef(null);
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h3>Síguenos en redes sociales</h3>
        <div className="social-icons" ref={socialIconsRef}>
          <a href="https://www.facebook.com/HectorCanoLeal/" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.linkedin.com/in/h%C3%A9ctor-cano-leal-010b3839/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="linkedin-icon" />
          </a>

          <a href="https://www.instagram.com/cariocadechile/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="footer-section">
        <h3>Sitio web</h3>
        <a href=" https://github.com/HectorCano1411?tab=repositories" target="_blank" rel="noopener noreferrer">
          <FaGlobe />  https://github.com/HectorCano1411
        </a>
      </div>
      <div className="footer-section">
        <h3>Contacto</h3>
        <div>
          <FaEnvelope /> hector.cano@inacapmail.cl
        </div>
        <div>
          <FaPhone /> +569 37002771
        </div>
      </div>
      <div className="footer-section">
        <h3>Términos y condiciones</h3>
        <a href="/terms" target="_blank" rel="noopener noreferrer">
          <FaFileAlt /> Ver términos y condiciones
        </a>
      </div>
    </footer>
  );
};

export default Footer;
