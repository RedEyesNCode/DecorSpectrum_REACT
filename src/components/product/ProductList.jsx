// ProductList.jsx
import React from "react";
import ProductItem from "./ProductItem"; // assuming ProductItem.jsx is in the same directory
import { Grid } from "@mui/material";

const ProductList = ({ products }) => {
  return (
    <Grid container spacing={2}>
      {products.map((product, index) => (
        <Grid key={index} item xs={6} sm={3} md={3} lg={3} margin={5}>
          {/* Adjust the xs, sm, md, lg values to control the number of items per row */}
          <ProductItem
            imageUrl={product.imageUrl}
            productName={product.productName}
            productCategory={product.productCategory}
            isOutOfStock={true}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;