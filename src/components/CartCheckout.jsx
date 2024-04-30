import React, { useState, useEffect } from "react";
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
import { useNavigate } from "react-router-dom"; // Import useHistory from react-router-dom

const CartCheckout = () => {
  const navigate = useNavigate(); // Initialize useHistory

 
  const sessionUser = LocalStorageManager.getItem(LOCAL_STORAGE_KEY.USER_DATA);

  const [cartData, setCartData] = useState(null);

  useEffect(() => {
    const getUserCart = async () => {
      const rawJson = {
        user_id: sessionUser.id,
      };
      const cartResponse = await getCart(rawJson);
      setCartData(cartResponse);

      if (cartResponse.code == 200) {
        setCartData(cartResponse);
      }
    };
    getUserCart();
  }, []);

  return (
    <Stack direction="column" className="bg-zinc-500 ">
      <MaterialNavBar/>
      <Typography
        variant="h2"
        // style={{ fontFamily: "Rosario-Regular", padding: "10px" }}
        className="text-[#2C1A00] font-['Rosario-Regular'] px-3"
      >
        Cart
      </Typography>
      <CartTable />
      <Footer />
    </Stack>
  );
};

export default CartCheckout;
