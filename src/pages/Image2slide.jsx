import React from 'react';
import './Imageslide-1.css'; // Import your CSS file
import image14 from '../images/decore-1.jpg';
import image15 from '../images/decore-2.jpg';
import image16 from '../images/this n that.jpg';


const Imageslide2 = () => {
  const images = [
    <img src={image14} alt="Example" className="rounded-image"/>
    
  ];

  return (
    <div className='app-3'>
    <div className="app">
      <div className='app-1'>
      <img src={image14} alt="Example" className="rounded-image5"/>

      <div className='gap'></div>
      <img src={image15} alt="Example" className="rounded-image5"/>
      <div className='gap'></div>
      <img src={image16} alt="Example" className="rounded-image5"/>
    </div>
    </div>
    </div>
  );
};

export default Imageslide2;
