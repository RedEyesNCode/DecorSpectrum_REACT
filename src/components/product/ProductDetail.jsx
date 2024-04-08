import React, { useState, useEffect } from "react";
import { Box, Grid, Stack, Typography, Button } from "@mui/material";
import ProductColors from "../product/ProductColors ";
import ProductTabs from "./ProductTabs";
import RelatedProductItem from "./RelatedProductItem";
import LocalStorageManager from "../../session/LocalStorageManager";
import { LOCAL_STORAGE_KEY } from "../../session/Constants";
import { getProductFullDetails } from "../../api/apiInterface";

const ProductDetail = ({ product }) => {
  const colors = ["#FF5733", "#33FF57", "#3357FF"];
  const [count, setCount] = useState(0);
  const sessionProduct = LocalStorageManager.getItem(
    LOCAL_STORAGE_KEY.PRODUCT_SESSION
  );
  const [productDetailData, setProductDetailData] = useState(null);
  const [allProductData,setAllProductData] =useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const reqJSON = { product_id: sessionProduct.productId };
        const getAllProductResponse = await getProductFullDetails(reqJSON);
        console.log("Get All Product Detail --->", getAllProductResponse);
        setAllProductData(getAllProductResponse);

        if (getAllProductResponse.status === "success") {
          setProductDetailData(getAllProductResponse.productTable);

        } else {
          window.alert(getAllProductResponse.message);
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
        // Handle error
      }
    };
    fetchProductData();
  }, []); // Add sessionProduct.productId to the dependency array if needed

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    // Prevents the count from going below 0
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return (
    <Box sx={{ backgroundColor: "#FFFFFF", p: 2 }}>
      {productDetailData && allProductData && (

        <Stack direction="column">
           <Typography variant="h6" sx={{ color: "#B5BBB6" }}>
           {allProductData.category.name} /  {allProductData.subcategory.name}

              </Typography>
              <Grid container spacing={2}>
          
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={productDetailData.image}
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack direction="column" spacing={2}>
              <Typography variant="h6" sx={{ color: "#B5BBB6" }}>
                {allProductData.category.name} /  {allProductData.subcategory.name}
              </Typography>
              <Typography variant="h3" sx={{ color: "#000000" }}>
                {productDetailData.productName}
              </Typography>
              <Typography variant="body1" sx={{ color: "#000000" }}>
                {productDetailData.description}
              </Typography>
              <Typography>Dimensions: 35 cm x 18cm x 16cm</Typography>
              <Typography>SKU: {productDetailData.sku}</Typography>
              <Typography>Availability: {productDetailData.quantity} In Stock</Typography>
              <Stack direction="row">
                <Typography>Colors :</Typography>
                <ProductColors colors={colors} />
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <Button
                  variant="contained"
                  onClick={decrementCount}
                  sx={{ minWidth: "40px" }}
                >
                  -
                </Button>
                <Typography>{count}</Typography>
                <Button
                  variant="contained"
                  onClick={incrementCount}
                  sx={{ minWidth: "40px" }}
                >
                  +
                </Button>
                <Button
                  variant="contained"
                  style={{ width: "140px" }}
                  sx={{ backgroundColor: "#726251", textTransform: "none" }}
                >
                  Add to Cart
                </Button>
              </Stack>
              <Typography>${productDetailData.sellingPrice}</Typography>
              <Typography style={{ alignContent: "center" }}>
                Guaranteed Safe Checkout
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        </Stack>
        
        
      )}
      <ProductTabs />

      {allProductData && (<RelatedProductItem categoryID={allProductData.category.category_id} />)}
      
    </Box>
  );
};

export default ProductDetail;
