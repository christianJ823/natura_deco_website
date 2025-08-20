import React from "react";
import "./Carousel.css";

const CarouselItem = ({ item }) => (
  <div className="carousel-item-container">
    <img src={item.image} alt={item.description} className="carousel-image" />
    <div className="description-container">
      <p className="description-text">{item.description}</p>
    </div>
  </div>
);

export default CarouselItem;
