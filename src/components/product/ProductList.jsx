// ProductList.jsx
import React from "react";
import ProductItem from "./ProductItem"; // assuming ProductItem.jsx is in the same directory
import { Grid } from "@mui/material";

const ProductList = ({ products }) => {
  return (
    <Grid container spacing={2}>
      {products.data.map((product, index) => (
        <Grid key={index} item xs={6} sm={3} md={3} lg={3} margin={5}>
          {/* Adjust the xs, sm, md, lg values to control the number of items per row */}
          <ProductItem
          product_id={product.productTable.id}
            imageUrl={product.media[0]}
            productName={product.productTable.productName}
            productCategory={product.category.name}
            isOutOfStock={false}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
