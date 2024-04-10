import React from "react";
import { Typography, Box, Rating } from "@mui/material";

const ProductItemRating = ({ imageUrl, title, description, rating,price }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", margin: 5 }}>
      <img
        src={imageUrl}
        alt={title}
        style={{ width: 100, height: 100, marginRight: 10 }}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Rating/>
        <Typography style={{color : "#626262",fontSize : '16px',fontFamily : 'Rosario, sans-serif',fontWeight : '500'}} gutterBottom>
          ${price}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductItemRating;
