import React, { useState } from 'react';
import '../styles/Imageslider.css';


const ImageSlider = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevSlide = () => {
    const newIndex = (activeIndex - 1 + images.length) % images.length;
    setActiveIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = (activeIndex + 1) % images.length;
    setActiveIndex(newIndex);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="image-slider-container">
      <div className="image-slider">
        <div className="slide">
          <img src={images[activeIndex].url} alt={`Slide ${activeIndex}`} />
        </div>
        <button className="prev" onClick={goToPrevSlide}>❮</button>
        <button className="next" onClick={goToNextSlide}>❯</button>
      </div>
      <div className="index-circles">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === activeIndex ? 'circle active' : 'circle'}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
