import { Box, Grid, Stack, Typography, CircularProgress } from "@mui/material";
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
import MessageSnackbar from "../base/MessageSnackbar";

const ProductByCategory = () => {
  const navigate = useNavigate(); // Initialize useHistory

  const [loading, setLoading] = useState(true); // State to control loading indicator
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
      setLoading(false); // Set loading to false after receiving response
    };
    fetchLeadsData();
  }, [sessionCategory]); // Add categoryId to the dependency array

  return (
    <div>
      <MaterialNavBar />
      <MessageSnackbar message="Products by category"  />

      <Stack direction="column">
        <Typography style={{ fontFamily: 'Rosario-Regular' }} variant="h6" sx={{ margin: "15px", color: "#B5BBB6" }}>
          Home/{sessionCategory.categoryName}
        </Typography>
        <Typography style={{ fontFamily: 'Rosario-Bold', fontWeight: 900 }} variant="h3" sx={{ margin: "15px", color: "#051507" }}>
          {sessionCategory.categoryName}
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={9}>
            {/* Show loading indicator if loading is true */}
            {loading ? (
              <Box display="flex" justifyContent="center" alignItems="center" height="200px">
                <CircularProgress />
              </Box>
            ) : (
              categoryProductsData != undefined && (
                <ProductList products={categoryProductsData} />
                
              )
            )}
          </Grid>
          <Grid item xs={12} md={3}>
            {/* Show loading indicator if loading is true */}
            {loading ? (
              <Box display="flex" justifyContent="center" alignItems="center" height="200px">
                <CircularProgress />
              </Box>
            ) : (
              allProductsData != undefined && (
                <ProductItemRatingList products={allProductsData} />

              )
            )}
          </Grid>
        </Grid>
      </Stack>
      <Footer />
    </div>
  );
};

export default ProductByCategory;
