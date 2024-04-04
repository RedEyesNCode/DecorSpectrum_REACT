import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Stack,
} from "@mui/material";
import DosisRegular from "../../fonts/Dosis-Regular.ttf";
import DosisMedium from "../../fonts/Dosis-Medium.ttf";
import DosisBold from "../../fonts/Dosis-Bold.ttf";

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
  imageUrl,
  productName,
  productCategory,
  isOutOfStock,
}) => {
  return (
    <div>
      <Card
        sx={{
          position: "relative",
          width: 350,
          backgroundColor: "#FFFFFF",
          m: "8px", // Add margin between cards
        }}
      >
        <img
          src={imageUrl}
          alt={productName}
          style={{ width: "100%", height: 250, objectFit: "cover" }}
        />
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
            <Typography sx={styles.dosisBold} fontWeight="900" variant="h7">
              OUT OF STOCK
            </Typography>
          </Box>
        )}

        <CardContent>
          <Typography
            fontWeight="1"
            variant="subtitle1"
            color="text.secondary"
            gutterBottom
            sx={styles.dosisRegular}
          >
            {productCategory}
          </Typography>
          <Typography
            sx={styles.dosisMedium}
            variant="h5"
            component="div"
            style={{ fontWeight: "11px" }}
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
            <Button
              variant="contained"
              style={{ width: "140px" }}
              sx={{ backgroundColor: "#726251", textTransform: "none" }}
            >
              Add to Cart
            </Button>
            <Button
              variant="contained"
              style={{ width: "140px" }}
              sx={{ backgroundColor: "#726251", textTransform: "none" }}
            >
              Select Options
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductItem;
