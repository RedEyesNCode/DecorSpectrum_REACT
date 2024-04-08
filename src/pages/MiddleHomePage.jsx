import React from 'react';
import './MiddleHomepage.css'; // Import your CSS file for styling
import image4 from '../images/image-4.webp';
import image5 from '../images/decore-2.jpg';
import { Typography, Box, Stack } from '@mui/material';
import { useNavigate } from "react-router-dom"; // Import useHistory from react-router-dom

const Middle = () => {
  const navigate = useNavigate(); // Initialize useHistory

  const navigateProductCategory = (category_id) =>{
    navigate("/product-category/"+category_id, { state: { category_id: category_id.toString(),category_name : "Ceramics" } });



  };
  return (
    <div style={{ display: "flex", justifyContent: "space-between", margin: "150px" }}>
      <div>
        <Stack>
          <Typography variant='h2' style={{ fontFamily : 'Rosario-Regular', padding : "10px"}}>We Offer Top Quality Products</Typography>
          <Typography variant='h4' style={{ fontFamily : 'Rosario-Medium', marginTop : "20px",padding : "10px", color: "#C19B76", fontWeight: 700 }}>A Statement in Style</Typography>
          <Typography variant='body1' style={{ fontFamily : 'Rosario-Regular', marginTop: "12px",marginRight :"20px",padding : "10px", color: "#000000" }}>Huge selection of Exotic handmade Turkish Chandeliers, Lamps, Ceiling Lights & Ceramics. Choose from our fast-selling colors or customize a unique combination.</Typography>

          <Box onClick={()=> navigateProductCategory("1")}  sx={{ marginTop: "50px", backgroundColor: "#C19B76", padding: "20px", width: "250px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Typography style={{color : "#FFFFFF",fontFamily : 'Rosario-Medium'}}  variant="body1">View Our Collection</Typography>
          </Box>
        </Stack>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={image4} alt="Example" className="rounded-image2" style={{ marginRight: "20px" }} />
        <img src={image5} alt="Example" className="rounded-image2" />
      </div>
    </div>
  );
}

export default Middle;
