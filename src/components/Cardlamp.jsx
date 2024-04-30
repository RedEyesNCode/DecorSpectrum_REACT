import React, { useEffect, useState } from 'react';
import "./Cardlamp.css"
import { motion, useAnimation } from 'framer-motion';

const Cardlamp = () => {
  const [isVisble,SetisVisible]=useState(false);
  const controls=useAnimation();
  const [scrollPosition, setScrollPosition] = useState(0);

    const textVariants = {
        initial: {
            rotateY:90,
            opacity:0,
        },
        animate: {
          rotateY:0,
          opacity:1,
            transition: {
                duration: 1,
                staggerChildren: 0.1,
            },
        },
        scrollButton: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 2,
                repeat: Infinity,
            },
        },
    };

  
  useEffect(() => {
    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);
  

  return (
    <div className="container-fluid"style={{ color: '#CFD8DC',marginTop:"45px" }}>
      <motion.div className="row box-1" variants={textVariants} animate={scrollPosition > 100 ? "animate" : "initial"} initial="initial"  transition={{  duration: 1 }}  data-aos="flip-left" style={{display:'flex', flexDirection:'row', justifyContent:"center",alignItems:'center'}}>
        <div className="col-lg box-1a">
          <div>
            <h4 style={{fontSize:"28px", marginBottom:"15px"}}>New Lamp </h4>
            <h4 style={{fontSize:"28px", marginBottom:"15px"}}>Light Collection</h4>
            <h4 style={{ color: 'rgba(207, 216, 220, 0.932)', fontWeight: 'bold' ,fontSize:"28px", marginBottom:"25px"}}>30% Off</h4>
            <a style={{padding:"5px",borderRadius:"10px"}} href="/" target="_top" className="btn btn-success">Read More</a>
          </div>
          <div>
            <img src="http://colourking.co.in/code/decor/photos/lamp_2-removebg-preview.png" alt="" width="150px" style={{ backgroundColor: 'transparent' }} />
          </div>
        </div>
        <div className="col-lg box-1a">
          <div>
            <h4 style={{fontSize:"28px", marginBottom:"15px"}}>New Lamp </h4>
            <h4 style={{fontSize:"28px", marginBottom:"15px"}}>Light Collection</h4>
            <h4 style={{ color: 'rgba(207, 216, 220, 0.932)', fontWeight: 'bold' ,fontSize:"28px", marginBottom:"25px"}}>30% Off</h4>
            <a style={{padding:"5px",borderRadius:"10px"}} href="index.html" target="_top" className="btn btn-success">Read More</a>
          </div>
          <div>
            <img src="http://colourking.co.in/code/decor/photos/lamp_2-removebg-preview.png" alt="" width="150px" style={{ backgroundColor: 'transparent' }} />
          </div>
        </div>
        <div className="col-lg box-1a">
          <div>
            <h4 style={{fontSize:"28px", marginBottom:"15px"}}>New Lamp </h4>
            <h4 style={{fontSize:"28px", marginBottom:"15px"}}>Light Collection</h4>
            <h4 style={{ color: 'rgba(207, 216, 220, 0.932)', fontWeight: 'bold',fontSize:"28px", marginBottom:"25px" }}>30% Off</h4>
            <a style={{padding:"5px",borderRadius:"10px"}} href="index.html" target="_top" className="btn btn-success">Read More</a>
          </div>
          <div>
            <img src="http://colourking.co.in/code/decor/photos/lamp_2-removebg-preview.png" alt="" width="150px" style={{ backgroundColor: 'transparent' }} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Cardlamp;
