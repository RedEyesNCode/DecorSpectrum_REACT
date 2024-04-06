import React from 'react';
import './Headcard1.css'; 
import image13 from '../images/donkey-1.jpg';
import image14 from '../images/donkey-2.jpg';
import image15 from '../images/donkey-3.jpg';

const headcard = () => {
  return (
    <div className="container-3">
      <h1 className="upper-heading">Unique Handicrafts Collection</h1>
      <p className="paragraph">Explore our vast range of gifts and accents- we have something to please everyone!</p>
      <div className="card-row">
        <div className="card">
        <img src={image13} alt="Example" className="rounded-image3"/>
          <div className="card-content">
            <h3 className="card-title">Leather Animal Decor</h3>
            <p className="card-description">These handcrafted pieces of art are made with passion, imitating every wrinkle in the animals’ skin, closest to the original. Truly art at its best!</p>
          </div>
        </div>
        <div className="card">
        <img src={image14} alt="Example" className="rounded-image3"/>
          <div className="card-content">
            <h3 className="card-title">Turkish Lamps & Chandeliers</h3>
            <p className="card-description">Stunning 16th century Turkish Mosaic art brought to your doorstep. You are sure to get blown away while you navigate through the wide array of colors and patterns.</p>
          </div>
        </div>
        <div className="card">
        <img src={image15} alt="Example" className="rounded-image3"/>
          <div className="card-content">
            <h3 className="card-title">Turkish Ceramics</h3>
            <p className="card-description">This user-friendly style of pottery, also called Iznik cini is an age old traditional Turkish art that incorporates motifs like Tulips, Carnations, 3 spot, Rumi etc that having symbolic meanings and unique styles from 16th century onwards. </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default headcard;
