import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import ProductList from "./ProductList";
import ProductItemRatingList from "./ProductItemRatingList";
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ProductByCategory = () => {
  const { categoryId } = useParams();

  const products = [
    {
      imageUrl:
        "https://www.decorspectrum.com/wp-content/uploads/2019/10/DSC_0139.png.webp",
      productName: "Camel Accent Stool",
      productCategory: "Animal Faced Sitting Stools",
    },
    {
      imageUrl:
        "https://www.decorspectrum.com/wp-content/uploads/2019/10/DSC_0139.png.webp",
      productName: "Camel Accent Stool",
      productCategory: "Animal Faced Sitting Stools",
    },
    {
      imageUrl:
        "https://www.decorspectrum.com/wp-content/uploads/2019/10/DSC_0139.png.webp",
      productName: "Camel Accent Stool",
      productCategory: "Animal Faced Sitting Stools",
    },
    {
      imageUrl:
        "https://www.decorspectrum.com/wp-content/uploads/2019/10/DSC_0139.png.webp",
      productName: "Camel Accent Stool",
      productCategory: "Animal Faced Sitting Stools",
    },
    {
      imageUrl:
        "https://www.decorspectrum.com/wp-content/uploads/2019/10/DSC_0139.png.webp",
      productName: "Camel Accent Stool",
      productCategory: "Animal Faced Sitting Stools",
    },
    {
      imageUrl:
        "https://www.decorspectrum.com/wp-content/uploads/2019/10/DSC_0139.png.webp",
      productName: "Camel Accent Stool",
      productCategory: "Animal Faced Sitting Stools",
    },
    {
      imageUrl:
        "https://www.decorspectrum.com/wp-content/uploads/2019/10/DSC_0139.png.webp",
      productName: "Camel Accent Stool",
      productCategory: "Animal Faced Sitting Stools",
    },
    // Add more dummy data as needed
  ];
  const dummyProducts = [
    {
      imageUrl: "https://via.placeholder.com/150",
      title: "Product 1",
      description: "Description of product 1",
      rating: 4,
    },
    {
      imageUrl: "https://via.placeholder.com/150",
      title: "Product 2",
      description: "Description of product 2",
      rating: 3.5,
    },
    {
      imageUrl: "https://via.placeholder.com/150",
      title: "Product 3",
      description: "Description of product 3",
      rating: 5,
    },
    {
      imageUrl: "https://via.placeholder.com/150",
      title: "Product 2",
      description: "Description of product 2",
      rating: 3.5,
    },
    {
      imageUrl: "https://via.placeholder.com/150",
      title: "Product 2",
      description: "Description of product 2",
      rating: 3.5,
    },
    {
      imageUrl: "https://via.placeholder.com/150",
      title: "Product 2",
      description: "Description of product 2",
      rating: 3.5,
    },
    {
      imageUrl: "https://via.placeholder.com/150",
      title: "Product 2",
      description: "Description of product 2",
      rating: 3.5,
    },
    {
      imageUrl: "https://via.placeholder.com/150",
      title: "Product 2",
      description: "Description of product 2",
      rating: 3.5,
    },
    {
      imageUrl: "https://via.placeholder.com/150",
      title: "Product 2",
      description: "Description of product 2",
      rating: 3.5,
    },
  ];

  return (
    <div>
      <Stack direction="column">
        <Typography variant="h6" sx={{ margin: "15px", color: "#B5BBB6" }}>
          Home/categoryName/subCategoryName
        </Typography>
        <Typography variant="h3" sx={{ margin: "15px", color: "#051507" }}>
          Product Category Name
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
            <ProductList products={products} />
          </Grid>
          <Grid item xs={12} md={3}>
            <ProductItemRatingList products={dummyProducts} />
          </Grid>
        </Grid>
      </Stack>
    </div>
  );
};

export default ProductByCategory;
