// ProductList.jsx
import React from "react";
import ProductItem from "./ProductItem"; // assuming ProductItem.jsx is in the same directory
import { Grid } from "@mui/material";

const ProductList = ({ products }) => {
  return (
    <Grid container spacing={5}>
      {products.data.map((product, index) => (
        <Grid key={index} item xs={2} sm={2} md={2} lg={2} margin={5}>
          {/* Adjust the xs, sm, md, lg values to control the number of items per row */}
          <ProductItem
          productPrice={product.productTable.sellingPrice}
          product_id={product.productTable.id}
          imageUrl={product.media && product.media.length > 0 ? product.media[0].link : null}
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
