import React, { useEffect, useState } from 'react';
import "./InnovativeDesign.css"
import { delay, motion } from 'framer-motion';
const InnovativeDesign = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const mainvariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 2,
        delay:1,
        delayChildren: 2, // Delay for all children
        staggerChildren: 2, // Delay between each child
      },
    },
  };
  const text1Variants = {
    initial: {
        x: 50,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            delay:2,
            staggerChildren: 0.1,
        },
    }
};
const centerimageVariants={
  initial: {
    opacity: 0,
},
animate: {
    opacity: 1,
    transition: {
        duration: 1,
        delay:3,
        staggerChildren: 0.1,
    },
}
}

const rightVariants = {
  initial: {
      x: 50,
      opacity: 0,
  },
  animate: {
      x: 0,
      opacity: 1,
      transition: {
          duration: 1,
          delay:5,
          staggerChildren: 0.1,
      },
  }
};

const leftVariants = {
  initial: {
    x: -50,
    opacity: 0,
},
animate: {
    x: 0,
    opacity: 1,
    transition: {
        duration: 1,
        delay:4,
        staggerChildren: 0.1,
    },
}
};

const bootomVariants = {
  initial: {
    y: 100,
    opacity: 0,
},
animate: {
    y: 0,
    opacity: 1,
    transition: {
        duration: 1,
        delay:2,
        staggerChildren: 0.1,
    },
}
};

useEffect(() => {
    const handleScroll = () => {
        setScrollPosition(window.scrollY);
        // console.log(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);


  
  return (
    <>
    <motion.div variants={mainvariants} initial="initial" animate={scrollPosition > 2500 ? "animate" : "initial"} className='in_container_main'>
      <motion.div  className='container_left'>
        <motion.img variants={leftVariants} initial="initial" animate={scrollPosition > 2500 ? "animate" : "initial"} src="http://colourking.co.in/code/decor/photos/box%202a.webp" alt="" />
      </motion.div>
      <motion.div  className='container_right'>
        <motion.div variants={text1Variants} initial="initial" animate={scrollPosition > 2500 ? "animate" : "initial"} className='right_container_top'>
          <h1>Innovative Design is Our Passion</h1>
          <p>Vivamus nulla montes vehicula ex semper mus finibus quis eleifend facilisi. Turpis consectetur pulvinar auctor vestibulum quisque. Velit quisque ante interdum consectetuer habitant blandit.</p>
          <button>View Collection</button>
        </motion.div>

        <motion.div className='right_container_buttom'>
          <motion.img variants={rightVariants} initial="initial" animate={scrollPosition > 2500 ? "animate" : "initial"} src="http://colourking.co.in/code/decor/photos/handicarft%202.webp" alt="" />
        </motion.div>
      </motion.div>
      <motion.img variants={centerimageVariants} initial="initial" animate={scrollPosition > 2500 ? "animate" : "initial"} className='center_image' src="http://colourking.co.in/code/decor/photos/handicraft%203.jpg" alt="" />
    </motion.div>
    <div className='in_container_bottom'>
      <motion.h1 variants={bootomVariants} initial="initial" animate={scrollPosition > 3000 ? "animate" : "initial"} >Handicraft Importers Since</motion.h1>
      <motion.h1 variants={bootomVariants} initial="initial" animate={scrollPosition > 3000 ? "animate" : "initial"} >2009</motion.h1>
    </div>
    </>
  );
};

export default InnovativeDesign;
