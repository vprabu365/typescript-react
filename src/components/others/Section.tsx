import React, { useState } from "react";
import { data } from "../data";

const Section = () => {
  const [images, setImages] = useState(data);

  const handleChange = (id: unknown) => {
    const check = images.filter((image) => image.id !== id);
    setImages(check);
  };
  return (
    <article>
      <div>
        <img src={images[0].image} />
        <button onClick={() => handleChange(images[0].id)}>Click Me</button>
      </div>
      <div>
        <img src={images[1].image} />
        <button onClick={() => handleChange(images[1].id)}>Click Me</button>
      </div>
    </article>
  );
};

export default Section;
