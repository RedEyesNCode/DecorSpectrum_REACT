import React from 'react';
import '../components/product/css/ImageGalleryCSS.css'; // Import your CSS file for styling
import vaseImage from '../images/ic_static_vase.png'
import floorLamp from '../images/ic_floor_lamp.png'
import thisnthat from '../images/ic_thisnthat.webp'
import decorPlate from '../images/ic_decorative_plate.png'
const ImageGallery = () => {
  return (
    <div className="image-gallery-container" >
      <div className="image-wrapper">
        <img src={vaseImage} alt="Image 1" />
        <div className="overlay-text">Vases</div>
      </div>
      <div className="image-wrapper">
        <img src={decorPlate} alt="Image 2" />
        <div className="overlay-text">Decorative Plates</div>
      </div>
      <div className="image-wrapper">
        <img src={floorLamp} alt="Image 3" />
        <div className="overlay-text">Floor Lamps</div>
      </div>
      <div className="image-wrapper">
        <img src={thisnthat} alt="Image 4" />
        <div className="overlay-text">This And That</div>
      </div>
    </div>
  );
};

export default ImageGallery;
