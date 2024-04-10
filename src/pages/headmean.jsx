import React from "react";
import image11 from "../images/image-3.webp";
import image12 from "../images/ic_blue_lamp.jpg";
import image1 from "../images/image-14.jpg";
import imageLamp from "../images/ic_light_lamp.jpg";
import { Typography, Box, Stack } from '@mui/material';
import { useNavigate } from "react-router-dom"; // Import useHistory from react-router-dom
import '../components/product/css/ProductCSS.css'
import { BiSolidArrowFromLeft } from "react-icons/bi";
const Headmean = () => {
  const navigate = useNavigate(); // Initialize useHistory

  const navigateAboutUs =  () =>{
    navigate("/about-us")
    
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        padding : "170px",
        marginTop : "150px",
        backgroundColor : "#2C1A00",
      }}
    >
      <div style={{ position: "relative" }}>
        <img
          src={imageLamp}
          alt="First Image"
          style={{
            borderEndEndRadius: "20px",
            borderEndStartRadius: "20px",
            borderStartEndRadius: "20px",
            borderStartStartRadius: "50px",
            width: "100%",
            transform: "translateY(20%)",
            height: "350px", // Increased size
          }}
        />
        <img
          src={image12}
          alt="Second Image"
          style={{
            borderEndEndRadius: "20px",
            borderEndStartRadius: "50px",
            borderStartEndRadius: "50px",
            borderStartStartRadius: "20px",
            position: "absolute",
            bottom: 10,
            left: "90%",
            transform: "translateX(-10%)",
            width: "210px",
            height: "auto",
          }}
        />
        {/* Text Above Overlapping Image */}
        <div style={{ position: "absolute", bottom: "-76px",  transform: "translate(150%, -30%)", padding: "10px" }}>
          <Stack direction="column">
          <Typography style={{color : '#FFFFFF',fontSize : '48px', fontStyle : 'normal', fontWeight : '600'}} className="rosaria-text">Innovative Design is our passion</Typography>
          <Typography style={{color : '#ffffff',marginBottom :'20px',fontSize : '16px'}} className="rosaria-text">We Strive to bring you the latest in designs, directly from our manufacturers. We give you the option and flexibility to choose the styles of globes and create your own chandelier patterns.</Typography>
          <Box
            onClick={navigateAboutUs}
            style={{
              backgroundColor: "#82705d",
              height: "30px",
              width: "200px",
              borderTopLeftRadius: "30px",
              borderTopRightRadius: "5px",
              borderBottomLeftRadius: "5px",
              borderBottomRightRadius: "30px",
              paddingTop: "20px",
              paddingRight: "25px",
              paddingLeft: "25px",
              paddingBottom: "20px",
              fontFamily: "Poppins, sans-serif",
              fontSize: "16px",
              display: "flex", // Set display to flex
              alignItems: "center", // Align items vertically
              justifyContent: "center", // Center the items horizontally
            }}
          >
            <Typography
              className="rosaria-text"
              style={{ color: "#FFFFFF", marginRight: "10px" }}
              variant="body1"
            >
              Read More
            </Typography>
            <BiSolidArrowFromLeft
              style={{ color: "#FFFFFF", width: "25px", height: "25px" }}
            />
          </Box>
          </Stack>

        </div>
        {/* Overlapping Image */}
        <img
          src={image1}
          alt="Overlapping Image"
          style={{
            borderEndEndRadius: "57px",
            borderEndStartRadius: "20px",
            borderStartEndRadius: "20px",
            borderStartStartRadius: "20px",
            position: "absolute",
            width: "150%", // Increased size
            height: "auto",
            bottom: "-80%",
            left: "120%",
          }}
        />
      </div>
      <div style={{ marginTop: "60px" }}>
      <Typography variant='h4' style={{ fontFamily : 'Rosario-Bold',color : "#FFFFFF",fontWeight : 500, padding : "10px"}}>{'Handicraft Importers Since  2009'}</Typography>

        
      </div>
    </div>
  );
};

export default Headmean;
