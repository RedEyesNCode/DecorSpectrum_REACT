import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Tab, Tabs, Typography,Stack } from '@mui/material';
import '../components/product/css/ProductCSS.css'
const ImageSlider = ({ images }) => {
  const settings = React.useMemo(
    () => ({
      dots: false,
      infinite: true,
      speed: 1, // Adjust the speed as needed
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear",
    }),
    []
  );

  return (
    <div style={{ width: "100%", height: "650px", backgroundColor: "#000000" }}>
      <Slider {...settings}>
        {images.map((image) => (
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
                  opacity: 0.80, // Set the opacity here (value between 0 and 1)

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
                  alignContent : "center",
                  justifyContent : "center",
                  justifyItems : "center",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                <Typography className="rosaria-text" variant="h4">Unique Turkish Decor Collection</Typography>
                  <Typography variant="h2" className="rosaria-text">Statement in Style</Typography>
                  <Box   style={{  marginLeft : "120px",  backgroundColor : "#C19B76",padding : "20px",width : "250px",height : "50px"}} alignContent="center" 
                  justifyItems="center">
                    <Typography className="rosaria-text">
                      FIND OUT MORE
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
