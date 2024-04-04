import React, { useState } from 'react';
import './SlideCard.css'; // Import your CSS file where you'll define the slide card styles

function SlideCard({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="slide-card">
      <button onClick={handlePrev}>&lt;</button>
      <div className="card">
        <img src={items[currentIndex].imageUrl} alt={items[currentIndex].alt} />
        <div className="content">
          <h2>{items[currentIndex].title}</h2>
          <p>{items[currentIndex].description}</p>
        </div>
      </div>
      <button onClick={handleNext}>&gt;</button>
    </div>
  );
}

export default SlideCard;
