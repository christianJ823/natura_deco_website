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
      src="https://raw.githubusercontent.com/chrisrm86/media-resources/main/images/italy_rome_colosseum_architecture_58374_960x544.jpg"
      alt="Roma"
      className="promo-image"
    />
  </div>
);

export default PromoInfo;
