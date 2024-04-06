import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

const RelatedProductItem = ({  }) => {
  // Destructure the necessary product properties if they are coming from a prop
  const products = [
    {
      id: 1,
      imageUrl: 'https://via.placeholder.com/300',
      title: 'Product 1',
      description: 'Description for Product 1',
    },
    {
      id: 2,
      imageUrl: 'https://via.placeholder.com/300',
      title: 'Product 2',
      description: 'Description for Product 2',
    },
    {
        id: 2,
        imageUrl: 'https://via.placeholder.com/300',
        title: 'Product 2',
        description: 'Description for Product 2',
      },
     {
      id: 2,
      imageUrl: 'https://via.placeholder.com/300',
      title: 'Product 2',
      description: 'Description for Product 2',
    },
    {
        id: 2,
        imageUrl: 'https://via.placeholder.com/300',
        title: 'Product 2',
        description: 'Description for Product 2',
      },
      
    // Add more products as needed
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'start' }}>
    {products.map((product) => (
       <Card sx={{ maxWidth: 345, m: 2 }} >
       <CardMedia
         component="img"
         height="300"
         image='https://via.placeholder.com/300'
         alt='Product Image'
       />
       <CardContent>
         <Typography gutterBottom variant="h5" component="div">
           Product Category
         </Typography>
         <Typography variant="body2" color="text.secondary">
           Product Description
         </Typography>
       </CardContent>
       <CardActions>
         <Button size="small">Add to Cart</Button>
       </CardActions>
     </Card>
    ))}
  </div>
   
  );
};

export default RelatedProductItem;
