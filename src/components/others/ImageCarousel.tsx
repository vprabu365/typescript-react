import React, { useState } from "react";
import { data } from "../data";

const ImageCarousel = () => {
  const [current, setIsCurrent] = useState(0);

  const prevSlide = () => {
    setIsCurrent(current === 0 ? data.length - 1 : current - 1);
  };
  const nextSlide = () => {
    setIsCurrent(current === data.length - 1 ? 0 : current + 1);
  };

  return (
    <>
      <h3 className="header">Project 1 - Carousel</h3>
      <div className="carousel--container">
        <button
          onClick={prevSlide}
          className="carousel-control-prev-icon active"
          aria-hidden="true"
        ></button>
        <img
          src={data[current].image}
          className="image--container"
          alt={data[current].name}
        />
        <button
          onClick={nextSlide}
          className="carousel-control-next-icon"
          aria-hidden="true"
        ></button>
      </div>
    </>
  );
};

export default ImageCarousel;
