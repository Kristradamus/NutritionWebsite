import "./ImageSlider.css";
import cosmetics from "../images/cosmetics.jpg";
import fatPeople from "../images/fatPeople.jpg";
import promotions from "../images/promotions.jpg";
import protein from "../images/protein.jpg";
import vitamins from "../images/vitamins.jpg";
import React, { useState, useEffect } from "react";

export default function ImageSlider() {
  const images = [cosmetics, fatPeople, promotions, protein, vitamins];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">
      <div
        className="slides"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            className="slide"
            src={image}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>
      <button className="prevSlide" onClick={prevSlide}>
        <i className="fa-solid fa-angle-left"></i>
      </button>
      <button className="nextSlide" onClick={nextSlide}>
        <i className="fa-solid fa-angle-right"></i>
      </button>
    </div>
  );
}
