import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import React, { useState, useEffect } from "react";
import { getProductsForCategory } from '../../api/apiInterface';

const RelatedProductItem = ({ categoryID }) => {
  // Destructure the necessary product properties if they are coming from a prop
  const [products, setProductsData] = useState(null);
  useEffect(() => {
    const fetchLeadsData = async () => {
      const reqJSON = { category_id: categoryID };
      const getAllLeadsResponse = await getProductsForCategory(reqJSON);

      setProductsData(getAllLeadsResponse.data);

      console.log("Get All Category Products --->", getAllLeadsResponse);

      // window.alert(getAllLeadsResponse.message);

    };
    fetchLeadsData();
  }, []); // Add categoryId to the dependency array

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'start' }}>
    {products &&  products.slice(0,6).map((product) => (
       <Card sx={{ maxWidth: 345, m: 2 }} >
       <CardMedia
         component="img"
         height="300"
         image={product.media && product.media.length > 0 ? product.media[0].link : null}
         alt='Product Image'
       />
       <CardContent>
       <Typography gutterBottom variant="h5" component="div">
           {product.productTable.productName}
         </Typography>
         <Typography gutterBottom variant="body2" component="div">
           {product.category.name}/{product.subcategory.name}
         </Typography>
         <Typography variant="body2" color="text.secondary">
           {product.productTable.description}
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
