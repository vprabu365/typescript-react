import React, { useState } from "react";
import { data } from "../data";

const Hero = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const handleImage = () => {
    setImageIndex((prevState) => (prevState + 1) % data.length);
  };

  return (
    <>
      <div className="hero--container">
        <img
          src={data[imageIndex].image}
          alt={data[imageIndex].name}
          key={data[imageIndex].name}
        />

        <button className="btn btn-primary" onClick={handleImage}>
          Click Me
        </button>
      </div>
    </>
  );
};

export default Hero;
