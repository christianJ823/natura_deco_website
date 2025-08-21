import React from "react";
import "./PromotionBox.css";

const PromoInfo = () => (
  <div className="info-box">
    <h3 className="info-title">Promoción de Viaje</h3>
    <p className="info-description">
      Con tu compra participas en un viaje a Roma para dos personas con tour
      incluido y alojamiento en hotel 5 estrellas
    </p>
    <img
      src="https://plus.unsplash.com/premium_photo-1661964123160-8d049fa07f0c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA=="
      alt="Roma"
      className="promo-image"
    />
  </div>
);

export default PromoInfo;
