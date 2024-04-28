import React from 'react';
import "./InnovativeDesign.css"
const HandicraftBox = ({ imgSrc, altText, width, aosAnimation }) => {
  return (
    <div className={`box5a-photo ${aosAnimation}`}>
      <img src={imgSrc} width={width} alt={altText} />
    </div>
  );
};

const InnovativeDesign = () => {
  return (
    <>
    <div className='in_container_main'>
      <div className='container_left'>
        <img src="http://colourking.co.in/code/decor/photos/box%202a.webp" alt="" />
      </div>
      <div className='container_right'>
        <div className='right_container_top'>
          <h1>Innovative Design is Our Passion</h1>
          <p>Vivamus nulla montes vehicula ex semper mus finibus quis eleifend facilisi. Turpis consectetur pulvinar auctor vestibulum quisque. Velit quisque ante interdum consectetuer habitant blandit.</p>
          <button>View Collection</button>
        </div>

        <div className='right_container_buttom'>
          <img src="http://colourking.co.in/code/decor/photos/handicarft%202.webp" alt="" />
        </div>
      </div>
      <img className='center_image' src="http://colourking.co.in/code/decor/photos/handicraft%203.jpg" alt="" />
    </div>
    <div className='in_container_bottom'>
      <h1>Handicraft Importers Since</h1>
      <h1>2009</h1>
    </div>
    </>
  );
};

export default InnovativeDesign;
