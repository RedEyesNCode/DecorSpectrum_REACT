import React, { useState, useEffect } from "react";
import { Box, Grid, Stack, Typography, Button } from "@mui/material";
import ProductColors from "../product/ProductColors ";
import ProductTabs from "./ProductTabs";
import RelatedProductItem from "./RelatedProductItem";
import LocalStorageManager from "../../session/LocalStorageManager";
import { LOCAL_STORAGE_KEY } from "../../session/Constants";
import { addToCart, getProductFullDetails, loginUser, registerUser } from "../../api/apiInterface";
import MaterialNavBar from "../MaterialNavBar";
import { useNavigate } from "react-router-dom"; // Import useHistory from react-router-dom

import Footer from "../../pages/Footer";
import "../product/css/ProductCSS.css"; // Import your CSS file for styling
import visa from "../../images/visa.png";
import amex from "../../images/american-express.png";
import paypal from "../../images/paypal.png";
import mastercard from "../../images/mastercard.png";
import upi from "../../images/ic_upi.jpg";


function generateRandomUser() {
  const randomString = (length) => {
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
  };

  const randomEmail = randomString(8) + '@gmail.com';
  const randomPassword = randomString(8);
  const randomFirstName = randomString(8);
  const randomLastName = randomString(6);
  const randomTelephone = Math.floor(Math.random() * 10000000000).toString();

  return {
      "email": randomEmail,
      "password": randomPassword,
      "first_name": randomFirstName,
      "isVerified": Math.random() < 0.5, // Random boolean value
      "last_name": randomLastName,
      "telephone": randomTelephone
  };
}

const ProductDetail = ({ product }) => {
  const navigate = useNavigate(); // Initialize useHistory

  const colors = ["#FF5733", "#33FF57", "#3357FF"];
  const [count, setCount] = useState(0);
  const sessionProduct = LocalStorageManager.getItem(
    LOCAL_STORAGE_KEY.PRODUCT_SESSION
  );
  const sessionUser = LocalStorageManager.getItem(
    LOCAL_STORAGE_KEY.USER_DATA
  );
  const [productDetailData, setProductDetailData] = useState(null);
  const [allProductData, setAllProductData] = useState(null);

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

  const registerUserApiCall = async () =>{
    const randomUserJson = generateRandomUser();
    const registerResponse = await registerUser(randomUserJson);
    
    if(registerResponse.code==200){
      
      const loginUserRawJson = {
        email : randomUserJson.email,
        password : randomUserJson.password
      };
      const loginResponse = await loginUser(loginUserRawJson);
      LocalStorageManager.setItem(
        LOCAL_STORAGE_KEY.USER_DATA,
        loginResponse
      );
      if(loginResponse!=null){
        // call the add to cart api.
        const rawJson = {
          product_id : sessionProduct.productId.toString(),
          user_id : loginResponse.id.toString(),
          quantity : count.toString()
        }
        const responseAddToCart = await addToCart(rawJson);

        if(responseAddToCart.code==200){
          navigate("/checkout");
        }else{
          window.alert(responseAddToCart.message);

        }
      }


    }



  }
  

  const handleNavigate = () =>{
    // create new user first and then store in session for userId.
    registerUserApiCall();
    
  }

  return (
    <div>
      <MaterialNavBar />
      <Box sx={{ backgroundColor: "#FFFFFF", p: 2 }}>
        {productDetailData && allProductData && (
          <Stack direction="column">
            <Typography variant="h6" sx={{ color: "#B5BBB6" }}>
              {allProductData.category.name} / {allProductData.subcategory.name}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src={
                    allProductData.media && allProductData.media.length > 0
                      ? allProductData.media[0].link
                      : null
                  }
                  width="100%"
                  height="100%"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack direction="column" spacing={2}>
                  <Typography
                    style={{ fontFamily: "Rosario-Regular" }}
                    variant="h6"
                    sx={{ color: "#000000" }}
                  >
                    {allProductData.category.name} /{" "}
                    {allProductData.subcategory.name}
                  </Typography>
                  <Typography
                    style={{ fontFamily: "Rosario-Regular", fontSize: 75 }}
                    variant="h3"
                    sx={{ color: "#000000" }}
                  >
                    {productDetailData.productName}
                  </Typography>
                  <Typography
                    style={{ fontFamily: "Rosario-Regular", fontSize: 21 }}
                    variant="body1"
                    sx={{ color: "#000000" }}
                  >
                    {productDetailData.description}
                  </Typography>
                  <Typography style={{ fontFamily: "Rosario-Regular", fontSize: 19 }}>
                    Dimensions: 35 cm x 18cm x 16cm
                  </Typography>
                  <Typography style={{ fontFamily: "Rosario-Regular", fontSize: 19 }}>
                    SKU: {productDetailData.sku}
                  </Typography>
                  <Typography style={{ fontFamily: "Rosario-Regular", fontSize: 19 }}>
                    Availability: {productDetailData.quantity} In Stock
                  </Typography>
                  <Stack direction="row">
                    <Typography style={{ fontFamily: "Rosario-Regular", fontSize: 19,fontWeight : 600 }}>
                      Colors :
                    </Typography>
                    <ProductColors colors={colors} />
                  </Stack>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Button
                    style={{backgroundColor : "#726251"}}
                      variant="contained"
                      onClick={decrementCount}
                      sx={{ minWidth: "40px" }}
                    >
                      -
                    </Button>
                    <Typography style={{ fontFamily: "Rosario-Regular", fontSize: 19,fontWeight : 600 }}>
                      {count}
                    </Typography>
                    <Button
                    
                      variant="contained"
                      onClick={incrementCount}
                      


                      sx={{ minWidth: "40px" }}
                      style={{ fontFamily: "Rosario-Regular",backgroundColor : "#726251" }}
                    >
                      +
                    </Button>
                    <button style={{ padding: 10 }} onClick={handleNavigate} class="custom-button">
                      Add to Cart
                    </button>
                  </Stack>
                  <Typography
                    style={{
                      alignContent: "center",
                      fontFamily: "Rosario-Regular",
                      fontSize: 32,
                      fontWeight: 900,
                    }}
                  >
                    ${productDetailData.sellingPrice}
                  </Typography>
                  <Typography
                    style={{
                      textAlign: "center",
                      fontFamily: "Rosario-Regular",
                      fontSize: 25,
                      fontWeight : 900
                    }}
                  >
                    Guaranteed Safe Checkout
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={10}
                    style={{
                      border: '4px dotted grey', // Creates the dotted border
                      padding: '5px', // Adds some space inside the box around the content
                      // Add more styling as needed here
                    }}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <img
                      src={visa}
                      width="50px"
                      height="50px"
                      alt="visa logo"
                    />
                    <img
                      src={paypal}
                      width="50px"
                      height="50px"
                      alt="paypal logo"
                    />
                    <img src={upi} width="50px" height="50px" alt="upi logo" />
                    <img
                      src={mastercard}
                      width="50px"
                      height="50px"
                      alt="mastercard logo"
                    />
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        )}
        <ProductTabs />

        {allProductData && (
          <RelatedProductItem
            categoryID={allProductData.category.category_id}
          />
        )}
      </Box>
      <Footer />
    </div>
  );
};

export default ProductDetail;
