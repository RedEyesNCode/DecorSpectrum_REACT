import React, { useState } from "react";
import {
  Card,
  CardContent,
  Paper,
  Typography,
  Button,
  Box,
  Stack,
} from "@mui/material";
import DosisRegular from "../../fonts/Dosis-Regular.ttf";
import DosisMedium from "../../fonts/Dosis-Medium.ttf";
import DosisBold from "../../fonts/Dosis-Bold.ttf";
import { useNavigate } from "react-router-dom"; // Import useHistory from react-router-dom
import LocalStorageManager from "../../session/LocalStorageManager";
import { LOCAL_STORAGE_KEY } from "../../session/Constants";
import '../product/css/ProductCSS.css'
import ImageWithCartIcon from "./css/ImageWithCartIcon";
const styles = {
  dosisRegular: {
    fontFamily: "DosisRegular", // Specify the font family name
    src: `url(${DosisRegular})`,
  },
  dosisMedium: {
    fontFamily: "DosisMedium", // Specify the font family name
    src: `url(${DosisMedium})`,
  },
  dosisBold: {
    fontFamily: "DosisBold", // Specify the font family name
    src: `url(${DosisBold})`,
  },
};
const ProductItem = ({
  product_id,

  imageUrl,
  productName,
  productCategory,
  isOutOfStock,
}) => {
  const [openProductDetail, setProductDetail] = useState(false);
  const navigate = useNavigate(); // Initialize useHistory

  const handleOpenProductDetail = () => {
    const sessionProduct = { productId: product_id };
    LocalStorageManager.setItem(
      LOCAL_STORAGE_KEY.PRODUCT_SESSION,
      sessionProduct
    );
    navigate("/product-detail");
  };

  return (
    <div>
      <Stack
        sx={{
          position: "relative",
          width: 350,
          backgroundColor: "#FFFFFF",
          m: "8px", // Add margin between cards
        }}
      >
        <ImageWithCartIcon imageUrl={imageUrl} alt={productName}/>
        {/* <img
          src={imageUrl}
          alt={productName}
          style={{ width: "180px", height: "190px", objectFit: "cover" }}
        /> */}
        {isOutOfStock && (
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",

              transform: "translate(-50%, -50%)",
              backgroundColor: "rgba(241, 244, 247, 0.7)",
              color: "#726251",
              padding: "10px 15px",
              zIndex: 1,
            }}
          >
            <Typography style={{fontFamily : 'Rosario-Bold',fontWeight : 900}} sx={styles.dosisBold} fontWeight="900" variant="h7">
              OUT OF STOCK
            </Typography>
          </Box>
        )}

        <CardContent>
          <Typography
            fontWeight="1"
            variant="subtitle1"
            style={{ color: "#000000", fontFamily : 'Rosario-Bold',fontWeight : 400,fontSize : 15 }}
            gutterBottom
          >
            {productCategory}
          </Typography>
          <Typography
            sx={styles.dosisMedium}
            variant="h6"
            component="div"
            style={{ fontWeight: 700 }}
            gutterBottom
          >
            {productName}
          </Typography>
          <Typography
            sx={styles.dosisBold}
            style={{ fontSize: "20px", fontWeight: "900" }}
            component="div"
            gutterBottom
          >
            $19.99
          </Typography>

          <Stack direction="row" spacing={2}>
          <button class="custom-button">
  Add to Cart
</button>
            <Button
              variant="contained"
              style={{ width: "140px" }}
              onClick={() => handleOpenProductDetail()}
              sx={{ backgroundColor: "#726251", textTransform: "none" }}
            >
              View Details
            </Button>
          </Stack>
        </CardContent>
      </Stack>
    </div>
  );
};

export default ProductItem;
