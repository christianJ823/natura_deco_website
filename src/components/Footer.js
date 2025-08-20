import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">NaturaDECO</h3>
          <p className="footer-description">
            Tu tienda de confianza para productos únicos de decoración y estilo
            de vida.
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Enlaces rápidos</h4>
          <ul className="footer-links">
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/products">Productos</a>
            </li>
            <li>
              <a href="/login">Mi cuenta</a>
            </li>
            <li>
              <a href="/cart">Carrito</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Contacto</h4>
          <div className="footer-contact">
            <p>📧 info@naturadeco.com</p>
            <p>📞 +1 (555) 123-4567</p>
            <p>📍 123 Calle Principal, Ciudad</p>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Síguenos</h4>
          <div className="footer-social">
            <a href="#" className="social-link">
              Facebook
            </a>
            <a href="#" className="social-link">
              Instagram
            </a>
            <a href="#" className="social-link">
              Twitter
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 NaturaDECO. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
