import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginScreen.css";

const LoginScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-header">
        <button onClick={() => navigate(-1)} className="back-button">
          ← Volver
        </button>
        <h1 className="login-title">Usuario</h1>
      </div>

      <div className="login-content">
        <h2>Iniciar Sesión</h2>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="tu@email.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              className="form-input"
              placeholder="••••••••"
            />
          </div>
          <button type="submit" className="login-button">
            Iniciar Sesión
          </button>
        </form>

        <div className="signup-section">
          <p>¿No tienes cuenta?</p>
          <button className="signup-button">Crear cuenta</button>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
