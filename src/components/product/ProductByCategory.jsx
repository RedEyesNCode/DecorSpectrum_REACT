import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import ProductItemRatingList from "./ProductItemRatingList";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Import useHistory from react-router-dom
import {
  getAllProductDetails,
  getProductsForCategory,
} from "../../api/apiInterface";
import LocalStorageManager from "../../session/LocalStorageManager";
import { LOCAL_STORAGE_KEY } from "../../session/Constants";
import MaterialNavBar from "../MaterialNavBar";
import Footer from "../../pages/Footer";

const ProductByCategory = () => {
  const navigate = useNavigate(); // Initialize useHistory

  const [categoryProductsData, setCategoryProductData] = useState(null);
  const [allProductsData, setProductsData] = useState(null);

  const sessionCategory = LocalStorageManager.getItem(
    LOCAL_STORAGE_KEY.CATEGORY_SESSION
  );

  useEffect(() => {
    const fetchLeadsData = async () => {
      const reqJSON = { category_id: sessionCategory.categoryId };
      const getAllLeadsResponse = await getProductsForCategory(reqJSON);

      const responseGetAllProducts = await getAllProductDetails();
      setProductsData(responseGetAllProducts);

      console.log("Get All Category Products --->", getAllLeadsResponse);
      console.log("Get All Product Details --->", responseGetAllProducts);

      // window.alert(getAllLeadsResponse.message);

      setCategoryProductData(getAllLeadsResponse);
    };
    fetchLeadsData();
  }, []); // Add categoryId to the dependency array

  return (
    <div>
      <MaterialNavBar/>
      <Stack direction="column">
        <Typography variant="h6" sx={{ margin: "15px", color: "#B5BBB6" }}>
          Home/{sessionCategory.categoryName}
        </Typography>
        <Typography variant="h3" sx={{ margin: "15px", color: "#051507" }}>
          {sessionCategory.categoryName}
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
            {categoryProductsData != undefined && (
              <ProductList products={categoryProductsData} />
            )}
          </Grid>
          <Grid item xs={12} md={3}>
            {allProductsData != undefined && (
              <ProductItemRatingList products={allProductsData} />
            )}
          </Grid>
        </Grid>
      </Stack>
      <Footer/>
    </div>
  );
};

export default ProductByCategory;
