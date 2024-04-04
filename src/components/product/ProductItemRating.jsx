import React from "react";
import { Typography, Box, Rating } from "@mui/material";

const ProductItemRating = ({ imageUrl, title, description, rating }) => {
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
        <Typography variant="body1" gutterBottom>
          {description}
        </Typography>
        <Rating name="product-rating" value={rating} readOnly />
      </Box>
    </Box>
  );
};

export default ProductItemRating;
