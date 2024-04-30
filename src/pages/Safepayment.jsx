import React, { useEffect, useState } from 'react';
import "./Safepayment.css"
import { GiCityCar } from "react-icons/gi";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { motion } from 'framer-motion';
import { Hidden, duration } from '@mui/material';

const SafePayment = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const mainvariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        delayChildren: 2, // Delay for all children
        staggerChildren: 1, // Delay between each child
      },
    },
  };
  const leftVariants = {
    initial: {
        x: -100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 3,
            delay:3,
            staggerChildren: 0.1,
        },
    }
};
const betweenVariants = {
  initial: {
      y: 500,
      opacity: 0,
  },
  animate: {
      y: 0,
      opacity: 1,
      transition: {
          duration: 3,
          delay:3,
          staggerChildren: 0.1,
      },
  }
};
const rightVariants = {
  initial: {
      x: 100,
      opacity: 0,
  },
  animate: {
      x: 0,
      opacity: 1,
      transition: {
          duration: 3,
          delay:3,
          staggerChildren: 0.1,
      },
  }
};

useEffect(() => {
  const handleScroll = () => {
      setScrollPosition(window.scrollY);
      // console.log(window.screenY);
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
      window.removeEventListener('scroll', handleScroll);
  };
}, []);
  return (
    <div className="container-fluid" style={{overflow:"hidden"}}>
      <motion.div variants={mainvariants} initial="initial"  animate={scrollPosition > 1750? "animate" : "initial"}  className="row box4" style={{display:"flex", flexDirection:"row",overflow:"hidden"}}>
       
        <motion.div variants={leftVariants} initial="initial"  animate={scrollPosition > 1750 ? "animate" : "initial"}  className="col-md text-center box4a" data-aos="slide-right" style={{ display: 'flex', flexDirection:"column", justifyContent: 'center', alignItems: 'center' }}>
            <GiCityCar  style={{ color: 'rgb(2, 34, 31)', fontSize: '60px', justifyItems:"center"}}/>
          <h5 style={{ fontWeight: 'bold', fontSize: '24px' }}>Free Shipping</h5>
          <p style={{paddingLeft:"20px",paddingRight:"20px",paddingBottom:"20px"}}>Adipiscing sociosqu placerat <br /> platea rutrum ut eros vestibulum posuere dictum
            blandit massa porttitor amet.</p>
        </motion.div>

        <motion.div variants={betweenVariants} initial="initial"  animate={scrollPosition > 1750 ? "animate" : "initial"}  className="col-md text-center box4b" data-aos="slide-up" style={{ display: 'flex', flexDirection:"column", justifyContent: 'center', alignItems: 'center' }}>
          <FaFileInvoiceDollar style={{ fontSize: '40px' }} />
          <h5 style={{ fontWeight: 'bold', fontSize: '24px' }}>Safe Payment</h5>
          <p style={{paddingLeft:"20px",paddingRight:"20px",paddingBottom:"20px"}}>Adipiscing sociosqu placerat <br /> platea rutrum ut eros vestibulum posuere dictum
            blandit massa porttitor amet.</p>
        </motion.div>

        <motion.div variants={rightVariants} initial="initial"  animate={scrollPosition > 1750 ? "animate" : "initial"} className="col-md text-center box4c" data-aos="slide-left" style={{ display: 'flex', flexDirection:"column", justifyContent: 'center', alignItems: 'center' }}>
          <i className="fa-solid fa-phone-volume" style={{ color: 'rgb(2, 34, 31)', fontSize: '50px' }}></i>
          <MdOutlineWifiCalling3  style={{ color: 'rgb(2, 34, 31)', fontSize: '40px' }}/>
          <h5 style={{ fontWeight: 'bold', fontSize: '24px' }}>Online Support</h5>
          <p style={{paddingLeft:"20px",paddingRight:"20px",paddingBottom:"20px"}}>Adipiscing sociosqu placerat <br /> platea rutrum ut eros vestibulum posuere dictum
            blandit massa porttitor amet.</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SafePayment;
