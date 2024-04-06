import React from 'react';
import './head.css'; // Import your CSS file where you'll define the layout styles
import image11 from '../images/image-3.webp';
import image12 from '../images/image1.jpg';
import image1 from '../images/image-14.jpg';



const Headmean = () => {
    return (
        <div className="header">
        <div className="container">
        <div className="row">
          </div>
          <div className='gap'></div>
          <img src={image11} alt="Example" className="rounded-image"/>
          <div className='gap'></div>
          <img src={image12} alt="Example" className="rounded-image2"/><br/>
         <div className='text-container'>
      
          <h1>Innovative Design is Our Passion</h1>
            <p>We Strive to bring you the latest in designs, directly from our manufacturers.<br></br> We give you the option and flexibility to choose the styles of globes and create your own chandelier patterns.</p>
</div>

         </div>


         <div className="container-1">
      <h1 className="heading">
Lamp
Handicraft Importers Since 2009</h1>
     
      <div className="image-row">
       
      <img src={image1} alt="Example" className="rounded-image12"/><br/>
      </div>
    </div>
      </div>
     
    );
  }
  
  export default Headmean;
  
