import React from "react";
import "./ContactBox.css";

const ContactBox = () => (
  <div className="contact-box">
    <h3 className="contact-title">Nuestras redes</h3>
    <div className="social-icons">
      <button
        onClick={() => console.log("Facebook Pressed")}
        className="social-button"
      >
        <img
          src="https://img.icons8.com/ios/50/000000/facebook.png"
          alt="Facebook"
          className="social-icon"
        />
      </button>
      <button
        onClick={() => console.log("Twitter Pressed")}
        className="social-button"
      >
        <img
          src="https://img.icons8.com/ios/50/000000/x.png"
          alt="Twitter"
          className="social-icon"
        />
      </button>
      <button
        onClick={() => console.log("Instagram Pressed")}
        className="social-button"
      >
        <img
          src="https://img.icons8.com/ios/50/000000/instagram-new.png"
          alt="Instagram"
          className="social-icon"
        />
      </button>
    </div>
  </div>
);

export default ContactBox;
