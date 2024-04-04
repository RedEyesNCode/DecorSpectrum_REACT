import React from 'react';
import './MiddleHomepage.css'; // Import your CSS file for styling
import image4 from '../images/image-4.webp';
import image5 from '../images/image5.jpg';


const Middle = () => {
  return (
    <div className="container">
      <div className="row">
        <h1 className="heading">We Offer Top Quality Products -
A Statement In Style</h1>
        <p className="paragraph">Huge selection of Exotic handmade Turkish Chandeliers, Lamps, Ceiling Lights & Ceramics. Choose from our fast-selling colors or customize a unique combination.</p>
        </div>
        <div className='gap'></div>
        <img src={image4} alt="Example" className="rounded-image1"/>
        <div className='gap'></div>
        <img src={image5} alt="Example" className="rounded-image"/>
    
    </div>
  );
}

export default Middle;
