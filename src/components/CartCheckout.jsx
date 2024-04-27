import React, { useState,useEffect } from "react";
import {
  Card,
  CardContent,
  Paper,
  Typography,
  Button,
  Box,
  Stack,
  Grid,
} from "@mui/material";
import MaterialNavBar from "./MaterialNavBar";
import Footer from "../pages/Footer";
import CartTable from "./CartTable";
import LocalStorageManager from "../session/LocalStorageManager";
import { LOCAL_STORAGE_KEY } from "../session/Constants";
import { getCart } from "../api/apiInterface";
const CartCheckout = () => {
  const sessionUser = LocalStorageManager.getItem(
    LOCAL_STORAGE_KEY.USER_DATA
  );

  const [cartData,setCartData] = useState(null);


  
  useEffect(() => {
    const getUserCart = async () =>{
      const rawJson = {
        user_id : sessionUser.id
      }
      const cartResponse = await getCart(rawJson);
      setCartData(cartResponse);

      if(cartResponse.code==200){
        setCartData(cartResponse);
      }
      
    }
    getUserCart();

      
  },[]);

  return (
    <Stack direction="column">

      <MaterialNavBar/>
      <Typography
        variant="h2"
        style={{ fontFamily: "Rosario-Regular", padding: "10px" }}
      >
        Cart
      </Typography>
      <CartTable />
      <Footer/>
    </Stack>
  );
};

export default CartCheckout;
