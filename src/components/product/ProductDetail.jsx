import React, { useState, useEffect } from "react";
import { Box, Grid, Stack, Typography, Button } from "@mui/material";
import ProductColors from "./ProductColors ";
import ProductTabs from "./ProductTabs";
import RelatedProductItem from "./RelatedProductItem";

const ProductDetail = ({ product }) => {
  const colors = ["#FF5733", "#33FF57", "#3357FF"];
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    // Prevents the count from going below 0
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return (
    <Box sx={{ backgroundColor: "#FFFFFF", p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="https://via.placeholder.com/150"
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack direction="column" spacing={2}>
            <Typography variant="h6" sx={{ color: "#B5BBB6" }}>
              Home/categoryName/subCategoryName
            </Typography>
            <Typography variant="h3" sx={{ color: "#000000" }}>
              Product Name
            </Typography>
            <Typography variant="body1" sx={{ color: "#000000" }}>
              These beautiful ceramic Kettles are handmade in Turkey. They are
              not only decorative, but can also be used for serving beverages
              like tea or coffee . The raised texture of the hand painted
              patterns adds a lot of character to these beautiful pieces of art.
              They are made using patterns and methods of traditional Iznik
              Turkish ceramic art of the 16th Century. The lead- free bright
              colorful glazes are heat resistant and hand washable. They make
              beautiful décor pieces. They are a unique gift item for any
              occasion.
            </Typography>
            <Typography>Dimensions: 35 cm x 18cm x 16cm</Typography>
            <Typography>
              Disclaimer: We will try our best to ship the product of your
              choice. However, please be aware that due to the handmade nature
              of the product, actual designs and color combinations might vary
              from the product image and will be shipped depending upon the
              availability of the pattern of choice.
            </Typography>

            <Stack direction="row">
              <Typography style={{ padding: "5px" }}>SKU : CK-N</Typography>
              <Typography style={{ padding: "5px" }}>Categories</Typography>
            </Stack>
            <Stack direction="row">
              <Typography>Colors :</Typography>
              <ProductColors colors={colors} />
            </Stack>
            <Typography>Availability : 2 In Stock</Typography>
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
            <Typography>$ 19.00</Typography>
            <Typography style={{ alignContent: "center" }}>
              Guaranteed Safe Checkout
            </Typography>

          </Stack>

        </Grid>
        <ProductTabs/>
        <RelatedProductItem/>

      </Grid>
    </Box>
  );
};

export default ProductDetail;
