import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/cart-context";
import "./PurchaseDetailsScreen.css";

const PurchaseDetailsScreen = () => {
  const navigate = useNavigate();
  const { cartItems, getTotalPrice, clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simular procesamiento de pedido
    clearCart();
    navigate("/thank-you");
  };

  return (
    <div className="purchase-details-container">
      <div className="purchase-details-header">
        <button onClick={() => navigate(-1)} className="back-button">
          ← Volver
        </button>
        <h1 className="purchase-details-title">Orden</h1>
      </div>

      <div className="purchase-details-content">
        <div className="order-summary">
          <h2>Resumen del pedido</h2>
          <p>Total de productos: {cartItems.length}</p>
          <p className="total-amount">Total: $ {getTotalPrice()}</p>
        </div>

        <form onSubmit={handleSubmit} className="purchase-form">
          <h2>Información de envío</h2>

          <div className="form-group">
            <label htmlFor="name">Nombre completo:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Dirección:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="city">Ciudad:</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="zipCode">Código postal:</label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="phone">Teléfono:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="form-input"
              required
            />
          </div>

          <button type="submit" className="submit-order-button">
            Confirmar pedido
          </button>
        </form>
      </div>
    </div>
  );
};

export default PurchaseDetailsScreen;
