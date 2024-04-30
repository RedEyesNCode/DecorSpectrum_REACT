import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
  IconButton,
  Typography,
  Stack,
  Divider,
} from "@mui/material";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdDeleteForever, MdRemoveShoppingCart } from "react-icons/md";
import "../components/product/css/ProductCSS.css";
import { LOCAL_STORAGE_KEY } from "../session/Constants";
import LocalStorageManager from "../session/LocalStorageManager";
import { deleteCartItem, getCart, updateCartItem } from "../api/apiInterface";
import { IoAddOutline, IoRemoveCircle, IoRemoveOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom"; // Import useHistory from react-router-dom

// Sample cart data (replace with your actual cart data)

function CartTable() {
  const navigate = useNavigate(); // Initialize useHistory

  const handleRemoveItem = (index) => {
    removeCartItem(index);
  };
  const sessionUser = LocalStorageManager.getItem(LOCAL_STORAGE_KEY.USER_DATA);
  const [cartData, setCartData] = useState(null);

  const [itemQuantity, setItemQuantity] = useState(0);

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

  const removeCartItem = async (cartID) => {
    const rawJson = {
      cart_id: cartID,
    };
    const responseRemoveCartItem = await deleteCartItem(rawJson);
    getUserCart();
  };
  const updateCartItemApi = async (cartID, productID,quantityNew) => {
    const rawJSON = {
      cart_id: cartID,
      product_id: productID,
      quantity: quantityNew,
    };
    const responseUpdateCartItem = await updateCartItem(rawJSON);
    window.alert(responseUpdateCartItem.message);
    
    getUserCart();
  };
  const handleAddtoCart = () =>{

    navigate("/square-checkout")

  }

  useEffect(() => {
    const getUserCart = async () => {
      const rawJson = {
        user_id: sessionUser.id,
      };
      const cartResponse = await getCart(rawJson);

      if (cartResponse.code == 200) {
        setCartData(cartResponse);
      }else{
        setCartData(null);

      }
    };
    getUserCart();
  }, []);
  const updateQuantity = (index, newQuantity) => {
    const updatedCartData = [...cartData.data];
    updatedCartData[index].quantity = newQuantity;
    setCartData({ ...cartData, data: updatedCartData });
  
    // Assuming you want to update the cart immediately upon quantity change
    updateCartItemApi(updatedCartData[index].cartId, updatedCartData[index].productId, newQuantity);
  };
  if (cartData === undefined || cartData === null) {
    return <Typography
        variant="h5"
        style={{ fontFamily: "Rosario-Regular", padding: "10px" }}
      >
        No Items in the Cart !
      </Typography>;
  }


  return (
    <Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="cart table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography
                  style={{ fontFamily: "Rosario-Regular", fontSize: 21 }}
                  variant="body1"
                  sx={{ color: "#000000" }}
                >
                  Product Image
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography
                  style={{ fontFamily: "Rosario-Regular", fontSize: 21 }}
                  variant="body1"
                  sx={{ color: "#000000" }}
                >
                  Product
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography
                  style={{ fontFamily: "Rosario-Regular", fontSize: 21 }}
                  variant="body1"
                  sx={{ color: "#000000" }}
                >
                  Price
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography
                  style={{ fontFamily: "Rosario-Regular", fontSize: 21 }}
                  variant="body1"
                  sx={{ color: "#000000" }}
                >
                  Quantity
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography
                  style={{ fontFamily: "Rosario-Regular", fontSize: 21 }}
                  variant="body1"
                  sx={{ color: "#000000" }}
                >
                  Subtotal
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography
                  style={{ fontFamily: "Rosario-Regular", fontSize: 21 }}
                  variant="body1"
                  sx={{ color: "#000000" }}
                >
                  Remove
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartData !== null &&
              cartData.data.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <img
                      src={item.image}
                      alt={item.product.productName}
                      style={{ width: 50 }}
                    />
                  </TableCell>
                  <TableCell align="right">
                    {item.product.productName}
                  </TableCell>
                  <TableCell align="right">${item.product.maxPrice}</TableCell>
                  <TableCell align="right">
                    <Stack direction="row" spacing={1}>
                      <IconButton
                        onClick={() => updateQuantity(index, item.quantity - 1)}
                      >
                        <IoRemoveOutline />
                      </IconButton>
                      <Typography>{item.quantity}</Typography>
                      <IconButton
                        onClick={() => updateQuantity(index, item.quantity + 1)}
                      >
                        <IoAddOutline />
                      </IconButton>
                    </Stack>
                  </TableCell>
                  <TableCell align="right">
                    ${item.cartTotal}
                  </TableCell>
                  <TableCell align="right">
                    <IconButton onClick={() => handleRemoveItem(item.cartId)}>
                      <MdDeleteForever />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Stack
        direction="column"
        style={{
          margin: "10px",
          position: "relative",
          left: "65%",
          width: "450px",
        }}
      >
        <Box sx={{ border: 2, borderColor: "divider", p: 2 }}>
          <Typography
            style={{
              fontFamily: "Rosario-Regular",
              fontSize: 26,
              backgroundColor: "#FBFBFB",
              padding: "10px",
            }}
            sx={{ color: "#000000" }}
          >
            Cart Total
          </Typography>

          <Box
            display="flex"
            justifyContent="space-between"
            mb={1}
            style={{ padding: "10px" }}
          >
            <Typography
              variant="body1"
              style={{
                fontFamily: "Rosario-Regular",
                fontWeight: 400,
                fontSize: 21,
              }}
              sx={{ color: "#626262" }}
            >
              Sub total
            </Typography>
            <Typography
              variant="body1"
              style={{
                fontFamily: "Rosario-Regular",
                fontWeight: 400,
                fontSize: 21,
              }}
              sx={{ color: "#000000" }}
            >
              $ SubTotal
            </Typography>
          </Box>
          <Divider />

          <Box
            display="flex"
            justifyContent="space-between"
            mb={1}
            style={{ padding: "10px" }}
          >
            <Typography
              variant="body1"
              style={{
                fontFamily: "Rosario-Regular",
                fontWeight: 400,
                fontSize: 21,
              }}
              sx={{ color: "#626262" }}
            >
              Shipping
            </Typography>
            <Typography
              variant="body1"
              style={{
                fontFamily: "Rosario-Regular",
                fontWeight: 400,
                fontSize: 21,
              }}
              sx={{ color: "#B39373" }}
            >
              Calculate shipping
            </Typography>
          </Box>
          <Divider />

          <Box
            display="flex"
            justifyContent="space-between"
            mb={1}
            style={{ padding: "10px" }}
          >
            <Typography
              variant="body1"
              style={{
                fontFamily: "Rosario-Regular",
                fontWeight: 400,
                fontSize: 21,
              }}
              sx={{ color: "#626262" }}
            >
              Sales Tax
            </Typography>
            <Typography
              variant="body1"
              style={{
                fontFamily: "Rosario-Regular",
                fontWeight: 400,
                fontSize: 21,
              }}
            >
              $ Sales Taxes
            </Typography>
          </Box>
          <Divider />

          <Box
            display="flex"
            justifyContent="space-between"
            mt={2}
            style={{ padding: "10px" }}
          >
            <Typography
              variant="h6"
              style={{
                fontFamily: "Rosario-Regular",
                fontWeight: 400,
                fontSize: 21,
              }}
              sx={{ color: "#626262" }}
            >
              Total
            </Typography>
            <Typography
              variant="h6"
              style={{
                fontFamily: "Rosario-Regular",
                fontWeight: 400,
                fontSize: 21,
              }}
              sx={{ color: "#000000" }}
            >
              $ Total Cost
            </Typography>
          </Box>
          <Divider />
          <button
            style={{ width: "420px", marginTop: "40px" }}
            class="custom-button"
            onClick={handleAddtoCart}
          >
            Add to Cart
          </button>
        </Box>
      </Stack>
      <Typography
        variant="h4"
        style={{ fontFamily: "Rosario-Regular", padding: "10px" }}
      >
        Disclaimer
      </Typography>
      <Typography
        variant="body1"
        style={{ fontFamily: "Rosario-Regular", padding: "10px" }}
      >
        We will take utmost care to ship you the product of your choice.
        However, due to the handmade nature of the items, there could be a
        possibility of slight variation in color and design of the products.
      </Typography>
    </Stack>
  );
}

export default CartTable;
