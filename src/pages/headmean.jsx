import React from "react";
import image11 from "../images/image-3.webp";
import image12 from "../images/ic_blue_lamp.jpg";
import image1 from "../images/image-14.jpg";
import imageLamp from "../images/ic_light_lamp.jpg";
import { Typography, Box, Stack } from '@mui/material';
import { useNavigate } from "react-router-dom"; // Import useHistory from react-router-dom

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
        padding : "100px",
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
        <div style={{ position: "absolute", bottom: "-90px",  transform: "translate(150%, -30%)",  backgroundColor: "rgba(255, 255, 255, 0.8)", padding: "10px" }}>
          <Stack direction="column">
          <Typography variant='h2' style={{ fontFamily : 'Rosario-Regular', padding : "10px"}}>Innovative Design is our passion</Typography>
          <Typography variant='body1' style={{ fontFamily : 'Rosario-Regular', marginTop: "12px",marginRight :"20px",padding : "10px", color: "#000000" }}>We Strive to bring you the latest in designs, directly from our manufacturers. We give you the option and flexibility to choose the styles of globes and create your own chandelier patterns.</Typography>
          <Box onClick={navigateAboutUs} sx={{ marginTop: "50px",borderEndEndRadius : 70,borderEndStartRadius: 40,borderStartEndRadius : 40, borderStartStartRadius : 70, backgroundColor: "#C19B76", padding: "20px", width: "250px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Typography style={{color : "#FFFFFF",fontFamily : 'Rosario-Medium'}}  variant="body1">Read More </Typography>
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
