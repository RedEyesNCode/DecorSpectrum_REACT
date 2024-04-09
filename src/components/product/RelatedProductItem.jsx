import React, { useState, useEffect, useRef } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  Box,
} from "@mui/material";
import { getProductsForCategory } from "../../api/apiInterface";
import ImageWithCartIcon from "./css/ImageWithCartIcon"; // Assuming similar image handling
import "../product/css/ProductCSS.css"; // Assuming this contains relevant styles including .custom-button

const styles = {
  dosisMedium: {
    fontFamily: "DosisMedium",
  },
  dosisBold: {
    fontFamily: "DosisBold",
  },
};

const RelatedProductItem = ({ categoryID }) => {
  const [products, setProducts] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const reqJSON = { category_id: categoryID };
        const response = await getProductsForCategory(reqJSON);
        setProducts(response.data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [categoryID]);
  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        containerRef.current.scrollLeft += 1; // Adjust the scroll speed as needed
        if (containerRef.current.scrollLeft + containerRef.current.clientWidth >= containerRef.current.scrollWidth) {
          // Duplicate products array to create the effect of infinite scrolling
          setProducts((prevProducts) => [...prevProducts, ...products]);
        }
      }
    }, 1); // Continuous scrolling

    return () => clearInterval(interval);
  }, [products]);

  return (

    <div style={{ overflowX: 'hidden' }}>
      <div
        style={{ overflowX: "auto", whiteSpace: "nowrap" }}
      >
        {products.slice(0, 6).map((product) => (
        <Card key={product.id} sx={{ display: 'inline-block', width: 250, margin: '0 10px' }}>
        <ImageWithCartIcon
              imageUrl={product.media?.[0]?.link || "default-image-url"}
              alt="Product Image"
            />
            {product.isOutOfStock && (
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
                <Typography
                  sx={styles.dosisBold}
                  style={{ fontWeight: 900 }}
                  variant="h7"
                >
                  OUT OF STOCK
                </Typography>
              </Box>
            )}
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {product.category.name}/{product.subcategory.name}
              </Typography>
              <Typography
                sx={styles.dosisMedium}
                variant="h6"
                style={{ fontWeight: 700, fontSize: 16 }}
                gutterBottom
              >
                {product.productTable.productName}
              </Typography>

              <Stack direction="row" spacing={2}>
                <button className="custom-button">Add to Cart</button>
                {/* Assuming a View Details or similar action is desired */}
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#726251", textTransform: "none" }}
                >
                  View Details
                </Button>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </div>
      </div>
      
  );
};

export default RelatedProductItem;
