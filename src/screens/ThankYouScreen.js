import React from "react";
import { useNavigate } from "react-router-dom";
import "./ThankYouScreen.css";

const ThankYouScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="thank-you-container">
      <div className="thank-you-content">
        <div className="success-icon">✅</div>
        <h1 className="thank-you-title">¡Gracias por tu compra!</h1>
        <p className="thank-you-message">
          Tu pedido ha sido procesado exitosamente. Recibirás un email de
          confirmación en los próximos minutos.
        </p>
        <div className="order-info">
          <p>📦 Tu pedido será enviado en 3-5 días hábiles</p>
          <p>📧 Recibirás información de seguimiento por email</p>
        </div>
        <button
          className="continue-shopping-button"
          onClick={() => navigate("/")}
        >
          Continuar comprando
        </button>
      </div>
    </div>
  );
};

export default ThankYouScreen;
