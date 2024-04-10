import React, { useRef, useState,useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from '@mui/material';
import '../components/product/css/ProductCSS.css';

const ImageSlider = ({ images }) => {
  const sliderRef = useRef(null);
  const [zoomIndex, setZoomIndex] = useState(0);
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000, // Adjust the speed as needed
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // Adjust autoplay speed as needed
    cssEase: "linear",
    afterChange: handleAfterChange
  };

  function handleAfterChange(index) {
    setZoomIndex(index);
  }

  return (
    <div style={{ width: "100%", height: "650px", backgroundColor: "#000000" }}>
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={image.id}>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "650px",
              }}
            >
              <img
                src={image.bannerLink}
                alt={image.alt}
                style={{
                  objectFit: "fill",
                  width: "100%",
                  height: "100%",
                  transition: zoomIndex === index ? "transform 7s ease-in-out" : "none", // Apply transition only to the active slide
                  transform: zoomIndex === index ? "scale(1.5)" : "scale(1)", // Zoom effect for active slide
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                <Typography style={{ marginBottom: '60px', fontFamily: 'Poppins, sans-serif', fontSize: '35px', fontWeight: 700 }}>Unique Turkish Decor Collection</Typography>
                <Typography variant="h1" className="rosaria-text">Statement in Style</Typography>
                <Box 
                  style={{ 
                    backgroundColor: "#C19B76", 
                    padding: "10px", 
                    width: "150px", 
                    height: "50px", 
                    margin: "0 auto", 
                    display: "flex", 
                    justifyContent: "center", 
                    alignItems: "center",
                    transition: "background-color 0.3s, color 0.3s", // Smooth transition effect for color change
                    cursor: "pointer" // Change cursor to pointer on hover
                  }}
                  alignContent="center" 
                  justifyContent="center" 
                  display="flex"
                  textAlign="center"
                  hoverbgcolor="#000000"
                  hovercolor="#C19B76"
                  >
                  <Typography className="rosaria-text" style={{ margin: "0 auto" }}>
                    FIND MORE
                  </Typography>
                </Box>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
