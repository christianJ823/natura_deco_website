import React from "react";
import CarouselItem from "../components/Carousel";
import ContactBox from "../components/ContactBox";
import PromoInfo from "../components/PromotionBox";
import ShippingInfo from "../components/ShippingInfoBox";
import { carouselItems } from "../assets/carousel-items";
import "./MainScreen.css";

const MainScreen = () => {
  return (
    <div className="main-container">
      <div className="main-scroll-content">
        <div className="welcome-section">
          <h1 className="welcome-title">Bienvenido a NaturaDECO</h1>
          <p className="welcome-subtitle">
            Descubre nuestra colección de productos únicos
          </p>
        </div>
        <div className="carousel-container">
          {carouselItems.map((item) => (
            <CarouselItem key={item.id} item={item} />
          ))}
        </div>
        <div className="info-container">
          <PromoInfo />
          <ShippingInfo />
        </div>
        <ContactBox />
      </div>
    </div>
  );
};

export default MainScreen;
