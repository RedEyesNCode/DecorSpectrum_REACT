import { Typography, Box, Stack } from '@mui/material';
import { Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import React, { useState, useEffect } from "react";
import { getAllProductDetails } from '../api/apiInterface';

const Imageslide2 = () => {
  // Array of data for each component instance
  const [products, setProductsData] = useState(null);
  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const response = await getAllProductDetails();
        setProductsData(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };
    fetchProductsData();
  }, []);

  return (
    <Stack style={{margin : "80px"}}>
      <Typography variant='h4' style={{marginBottom : "25px",color : "#000000"  , fontFamily: "Rosario-Regular", fontSize: 60 }}>Trending Products</Typography>
      <div id="scroll-container" style={{ display: 'flex', overflowX: 'hidden' }}>
        {products && products.map(item => (
          <div key={item.productTable.id} style={{ flex: '0 0 auto', margin: '0 10px' }}>
            {item.media && item.media.length > 0 && item.media[0].link && (
              <img src={item.media[0].link} alt={item.productTable.productName} style={{ width: '200px', height: '200px', borderRadius: '8px' }} />
            )}
            <div style={{ marginTop: '16px' }}>
              <p style={{fontFamily: "Rosario-Regular", fontSize: 20,fontWeight : 600 }}>{item.productTable.productName}</p>
              <p style={{fontFamily: "Rosario-Regular", fontSize: 20,fontWeight : 400 }}>{item.category.name}</p>
            </div>
          </div>
        ))}
      </div>
    </Stack>
  );
};

export default Imageslide2;
