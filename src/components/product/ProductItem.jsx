import React, { useState } from "react";
import {
  Card,
  CardContent,
  Paper,
  Typography,
  Button,
  Box,
  Stack,
  colors,
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
  productPrice,
  imageUrl,
  productName,
  productCategory,
  isOutOfStock,
}) => {
  const [openProductDetail, setProductDetail] = useState(false);
  const navigate = useNavigate(); // Initialize useHistory
  const truncatedProductName = productName.length > 24
  ? `${productName.substring(0, 24)}...`
  : productName;
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
                    onClick={() => handleOpenProductDetail()}

        sx={{
          position: "relative",
          width: 300,
          borderWidth : "2px",
          borderColor : colors.grey,
          borderRadius : '40px',
          backgroundColor: "#FFFFFF",
        }}
      >
        <ImageWithCartIcon imageUrl={imageUrl} alt={productName} productName={productName} productID={product_id}/>
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
          style={{color : '#626262',fontFamily : 'Poppins, sans-serif',fontSize : '13px',fontStyle : 'normal',fontWeight : '400'}}
            gutterBottom
          >
            {productCategory}
          </Typography>
          <Typography
           style={{fontFamily : 'RosarioRegular',fontSize : '16px',fontWeight : '600',textAlign : 'left',marginBottom : '10px'}}
          >
            {truncatedProductName}
          </Typography>
          <Typography
            style={{fontFamily : 'RosarioRegular',fontSize : '14px',fontWeight : 700,marginBottom : '10px'}}
          >
            ${productPrice}
          </Typography>

          <Stack direction="row" spacing={2}>
          {/* <button class="custom-button">
  Add to Cart
</button> */}
<button class="blue-button" style={{borderRadius : '20px',borderColor : colors.yellow,borderWidth : '2px'}} >
  Select Options
</button>
            
          </Stack>
        </CardContent>
      </Stack>
    </div>
  );
};

export default ProductItem;
