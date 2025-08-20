import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../context/cart-context";
import "./NavigationBar.css";

const NavigationBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);

  const cartItemsCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="top-navbar">
      <div className="navbar-container">
        {/* Logo/Brand */}
        <Link to="/" className="navbar-brand">
          <h1 className="brand-title">
            <span className="brand-natura">Natura</span>
            <span className="brand-deco">DECO</span>
          </h1>
        </Link>

        {/* Navigation Links */}
        <div className="navbar-links">
          <Link
            to="/"
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
          >
            🏠 Inicio
          </Link>
          <Link
            to="/products"
            className={`nav-link ${
              location.pathname === "/products" ? "active" : ""
            }`}
          >
            🛍️ Productos
          </Link>
          <Link
            to="/login"
            className={`nav-link ${
              location.pathname === "/login" ? "active" : ""
            }`}
          >
            👤 Mi Cuenta
          </Link>
        </div>

        {/* Cart Button */}
        <button onClick={() => navigate("/cart")} className="cart-button-nav">
          🛒 Carrito
          {cartItemsCount > 0 && (
            <span className="cart-badge">{cartItemsCount}</span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default NavigationBar;
