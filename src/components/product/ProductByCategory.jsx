import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import ProductItemRatingList from "./ProductItemRatingList";
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getProductsForCategory } from "../../api/apiInterface";

const ProductByCategory = () => {
  const { categoryId } = useParams();
  const [categoryProductsData, setCategoryProductData] = useState (null);


  useEffect(() => {
    const fetchLeadsData = async () => {
      const reqJSON = {category_id : categoryId.category_id}
      const getAllLeadsResponse = await getProductsForCategory(reqJSON);
      console.log("Get All catery navbar -->", getAllLeadsResponse);
      
      setCategoryProductData(getAllLeadsResponse);
    };
    fetchLeadsData();
  }, []);
  

  return (
    <div>
      <Stack direction="column">
        <Typography variant="h6" sx={{ margin: "15px", color: "#B5BBB6" }}>
          Home/{categoryId.category_name}
        </Typography>
        <Typography variant="h3" sx={{ margin: "15px", color: "#051507" }}>
          {categoryId.category_name}
        </Typography>

        <Box marginTop="50px">
          <Stack direction="row" justifyContent="space-between">
            <Typography
              variant="body1"
              sx={{ margin: "15px", color: "#000000" }}
            >
              Showing 1-12 of 40 results
            </Typography>
            <Typography
              variant="body1"
              sx={{ margin: "15px", color: "#000000" }}
            >
              Sort Products
            </Typography>
          </Stack>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} md={9}>
            {categoryProductsData!=undefined && (<ProductList products={categoryProductsData} />)}
            
          </Grid>
          {/* <Grid item xs={12} md={3}>
            <ProductItemRatingList products={dummyProducts} />
          </Grid> */}
        </Grid>
      </Stack>
    </div>
  );
};

export default ProductByCategory;
