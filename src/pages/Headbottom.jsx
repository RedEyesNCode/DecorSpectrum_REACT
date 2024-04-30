import React, { useEffect, useState } from "react";
import "./Headbottom1.css";
import { RiTeamFill } from "react-icons/ri";
import { AiTwotoneLike } from "react-icons/ai";
import { MdPriceChange } from "react-icons/md";
import image12 from "../images/ic_blue_lamp.jpg";

import { Typography, Box, Stack } from "@mui/material";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { ImPriceTag } from "react-icons/im";
import { BiLike, BiPlay, BiStar, BiVideoPlus } from "react-icons/bi";
import { delay, motion } from "framer-motion";
const Headbottom = () => {
  const videoId = "VIDEO_ID_HERE";
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".collections");
      if (element) {
        const top = element.getBoundingClientRect().top;
        const isVisible = top < window.innerHeight;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial visibility

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [scrollPosition, setScrollPosition] = useState(0);
  
  const text1Variants = {
    initial: {
        x: -100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            delay:1,
            staggerChildren: 0.1,
        },
    }
};
const text2variants={
  initial: {
    opacity: 0,
    x:100,
},
animate: {
  x:0,
    opacity: 1,
    transition: {
        duration: 1,
        delay:2,
        staggerChildren: 0.1,
    },
}
}

const text3Variants = {
  initial: {
      y: 50,
      opacity: 0,
  },
  animate: {
      y: 0,
      opacity: 1,
      transition: {
          duration: 1,
          delay:3,
      },
  }
};

const text4Variants = {
  initial: {
      y: 50,
      opacity: 0,
  },
  animate: {
      y: 0,
      opacity: 1,
      transition: {
          duration: 1,
          delay:4,
      },
  }
};
const text5Variants = {
  initial: {
      y: 50,
      opacity: 0,
  },
  animate: {
      y: 0,
      opacity: 1,
      transition: {
          duration: 1,
          delay:4,
      },
  }
};

const text6Variants = {
  initial: {
      x: 100,
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

useEffect(() => {
    const handleScroll = () => {
        setScrollPosition(window.scrollY);
        console.log(window.scrollY);  
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

  return (
    <div style={{  height:"100vh",marginBottom:"50px",overflow:"hidden" }}>
      <Stack direction="row" style={{ height:"100%" }}>
        <motion.div variants={text1Variants} initial="initial" animate={scrollPosition > 5000 ? "animate" : "initial"}  style={{ height:"100%", position: "relative", width: "40%",overflow:"hidden",objectFit:"cover" }}>
          <img
            width="100%"
            src={image12}
            title="YouTube video player"
            alt="YouTube video player"
            style={{ display: "block",objectFit:"contain" }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="circle-wrapper">
              <div className="circle"></div>
              <BiPlay
                style={{
                  width: "50px",
                  height: "50px",
                  color: "black",
                  zIndex: "1",
                }}
              />
            </div>
          </div>
        </motion.div>
        <Stack  direction="column" style={{height:"100%",padding : '50px',width:"60%" ,backgroundColor: "#02221F" }}>
          <motion.Typography
          variants={text2variants} initial="initial" animate={scrollPosition > 5100 ? "animate" : "initial"} 
            className="rosaria-text"
            style={{ color: "#C1CCCF", fontSize: "42px", fontWeight: "300",marginBottom : '50px', textAlign:"center" }}
          >
            Passionate About Elegance and Beauty In Design
          </motion.Typography>

          <motion.Stack variants={text3Variants} initial="initial" animate={scrollPosition > 5100 ? "animate" : "initial"}  direction="row">
          <div
                style={{
                  position: "absolute",
                  
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  paddingBottom : '12px',
                  paddingTop: "15px",
                  overflow: "hidden",
                  width: "fit-content",
                 
                }}
              >
                <BiStar
                  style={{
                    width: "50px",
                    height: "50px",
                    color: "#C1CCCF",
                  }}
                />
              </div>
            <Stack  direction="column" style={{ padding: "10px",marginLeft : '80px' }}>
              <Typography
                className="rosaria-text"
                style={{
                  fontSize: "26px",
                  fontStyle: "normal",
                  color: "#C1CCCF",
                }}
              >
                100 % Guarantee
              </Typography>
              <Typography
                variant="body1"
                style={{
                  color: "#C1CCCF",
                  fontSize: "16px",
                  fontFamily: "Rosario-Regular",
                }}
              >
                We stand behind the quality of our products and assure you that
                you will fall in love with them.
              </Typography>
            </Stack>
          </motion.Stack>
          <motion.Stack variants={text4Variants} initial="initial" animate={scrollPosition > 5300 ? "animate" : "initial"}  direction="row">
          <div
                style={{
                  position: "absolute",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  paddingBottom : '12px',
                  paddingTop: "15px",
                  overflow: "hidden",
                  width: "fit-content",
                }}
              >
                <BiLike
                  style={{
                    width: "50px",
                    height: "50px",
                    color: "#C1CCCF",
                  }}
                />
              </div>
            <Stack  direction="column" style={{ padding: "10px",marginLeft : '80px' }}>
              <Typography
                className="rosaria-text"
                style={{
                  fontSize: "26px",
                  fontStyle: "normal",
                  color: "#C1CCCF",
                  textAlign : 'left'
                }}
              >
                Professional Staff
              </Typography>
              <Typography
                variant="body1"
                style={{
                  color: "#C1CCCF",
                  fontSize: "16px",
                  fontFamily: "Poppins",
                }}
              >
                We are a family-owned business that respects the need of every customer.We provide friendly customer service and are always happy to help
              </Typography>
            </Stack>
          </motion.Stack>
          <motion.Stack variants={text5Variants} initial="initial" animate={scrollPosition > 5400 ? "animate" : "initial"}  direction="row">
          <div
                style={{
                  position: "absolute",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  paddingBottom : '12px',
                  paddingTop: "15px",
                  overflow: "hidden",
                  width: "fit-content",
                }}
              >
                <ImPriceTag
                  style={{
                    width: "30px",
                    height: "30px",
                    color: "#C1CCCF",
                  }}
                />
              </div>
            <Stack  direction="column" style={{ padding: "10px",marginLeft : '80px' }}>
              <Typography
                className="rosaria-text"
                style={{
                  fontSize: "26px",
                  fontStyle: "normal",
                  color: "#C1CCCF",
                }}
              >
                Affordable Prioe
              </Typography>
              <Typography
                variant="body1"
                style={{
                  color: "#C1CCCF",
                  fontSize: "16px",
                  fontFamily: "Rosario-Regular",
                }}
              >
                We import directly from manufacturers without the help of any middle-men or agents.We therefore guarantee most competitive price in town.

              </Typography>
            </Stack>
          </motion.Stack>
          
          <motion.Typography
          variants={text6Variants} initial="initial" animate={scrollPosition > 5600 ? "animate" : "initial"} 
            style={{
              color: "#C1CCCF",
              marginTop:"20px",
              fontSize: "18px",
              marginLeft: "10px",
              textAlign:"center"
            }}
          >
            Explore our huge selection of Exotic handmade Turkish Chandeliers, <br />
            Lamps, Ceiling Lights and Ceramics.  Choose from our fast-selling
            colors or <br /> customize your own unique combination of
          </motion.Typography>
        </Stack>
      </Stack>
    </div>
  );
};

export default Headbottom;
