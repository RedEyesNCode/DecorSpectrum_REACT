import React, { useEffect, useState } from 'react';
import "./Cardlamp.css"
import { motion, useAnimation } from 'framer-motion';

const Cardlamp = () => {
  const [isVisble,SetisVisible]=useState(false);
  const controls=useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the distance from the top of the window to the top of the component
      const distanceToTop = document.querySelector('.box-1').getBoundingClientRect().top;
      
      // If the distance is less than the window height, the component is in view
      SetisVisible(distanceToTop < window.innerHeight);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    // When the component is in view, start the animation
    if (isVisble) {
      controls.start({ rotateY: 0 });
    } else {
      controls.start({ rotateY: 90 });
    }
  }, [isVisble, controls]);

  return (
    <motion.div className="container-fluid"style={{ color: '#CFD8DC',marginTop:"25px" }}>
      <motion.div className="row box-1"  animate={controls} transition={{ delay:1,repeat:Infinity, duration: 2 }}  data-aos="flip-left" style={{display:'flex', flexDirection:'row', justifyContent:"center",alignItems:'center'}}>
        <div className="col-lg box-1a">
          <div>
            <h4 style={{fontSize:"28px", marginBottom:"10px"}}>New Lamp </h4>
            <h4 style={{fontSize:"28px", marginBottom:"10px"}}>Light Collection</h4>
            <h4 style={{ color: 'rgba(207, 216, 220, 0.932)', fontWeight: 'bold' ,fontSize:"28px",marginTop:"12px", marginBottom:"16px"}}>30% Off</h4>
            <a style={{padding:"5px",borderRadius:"10px"}} href="/" target="_top" className="btn btn-success">Read More</a>
          </div>
          <div>
            <img src="http://colourking.co.in/code/decor/photos/lamp_2-removebg-preview.png" alt="" width="150px" style={{ backgroundColor: 'transparent' }} />
          </div>
        </div>
        <div className="col-lg box-1a">
          <div>
            <h4 style={{fontSize:"28px", marginBottom:"10px"}}>New Lamp </h4>
            <h4 style={{fontSize:"28px", marginBottom:"10px"}}>Light Collection</h4>
            <h4 style={{ color: 'rgba(207, 216, 220, 0.932)', fontWeight: 'bold' ,fontSize:"28px",marginTop:"12px", marginBottom:"16px"}}>30% Off</h4>
            <a style={{padding:"5px",borderRadius:"10px"}} href="index.html" target="_top" className="btn btn-success">Read More</a>
          </div>
          <div>
            <img src="http://colourking.co.in/code/decor/photos/lamp_2-removebg-preview.png" alt="" width="150px" style={{ backgroundColor: 'transparent' }} />
          </div>
        </div>
        <div className="col-lg box-1a">
          <div>
            <h4 style={{fontSize:"28px", marginBottom:"10px"}}>New Lamp </h4>
            <h4 style={{fontSize:"28px", marginBottom:"10px"}}>Light Collection</h4>
            <h4 style={{ color: 'rgba(207, 216, 220, 0.932)', fontWeight: 'bold',fontSize:"28px",marginTop:"12px", marginBottom:"16px" }}>30% Off</h4>
            <a style={{padding:"5px",borderRadius:"10px"}} href="index.html" target="_top" className="btn btn-success">Read More</a>
          </div>
          <div>
            <img src="http://colourking.co.in/code/decor/photos/lamp_2-removebg-preview.png" alt="" width="150px" style={{ backgroundColor: 'transparent' }} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Cardlamp;
