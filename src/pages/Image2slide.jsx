import React, { useEffect } from 'react';
import image14 from '../images/decore-1.jpg';
import { Typography, Box, Stack } from '@mui/material';

const Imageslide2 = () => {
  // Array of data for each component instance
  const data = [
    { id: 1, text1: 'Product Name', text2: 'Product Category' },
    { id: 1, text1: 'Product Name', text2: 'Product Category' },
    { id: 1, text1: 'Product Name', text2: 'Product Category' },
    { id: 1, text1: 'Product Name', text2: 'Product Category' },
    { id: 1, text1: 'Product Name', text2: 'Product Category' },
    { id: 1, text1: 'Product Name', text2: 'Product Category' },
    { id: 1, text1: 'Product Name', text2: 'Product Category' },
    { id: 1, text1: 'Product Name', text2: 'Product Category' },
    { id: 1, text1: 'Product Name', text2: 'Product Category' },
    { id: 1, text1: 'Product Name', text2: 'Product Category' },
    { id: 1, text1: 'Product Name', text2: 'Product Category' },
    { id: 1, text1: 'Product Name', text2: 'Product Category' },
    { id: 1, text1: 'Product Name', text2: 'Product Category' },

    

    // Add more data items as needed
  ];

  useEffect(() => {
    const container = document.getElementById('scroll-container');
    const scrollWidth = container.scrollWidth;
    const containerWidth = container.offsetWidth;

    let scrollPos = 0;
    const speed = 50; // Adjust scrolling speed as needed

    const scroll = () => {
      scrollPos += 1;
      if (scrollPos >= scrollWidth - containerWidth) {
        scrollPos = 0;
      }
      container.scrollTo(scrollPos, 0);
    };

    const scrollInterval = setInterval(scroll, speed);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <Stack style={{margin : "80px"}}>
            <Typography variant='h4' style={{marginBottom : "25px",color : "#000000"}}>Trending Products</Typography>
            <div id="scroll-container" style={{ display: 'flex', overflowX: 'hidden' }}>
      {data.map(item => (
        <div key={item.id} style={{ flex: '0 0 auto', margin: '0 10px' }}>
          <img src={image14} alt="Example" style={{ width: '200px', height: 'auto', borderRadius: '8px' }} />
          <div style={{ marginTop: '16px' }}>
            <p>{item.text1}</p>
            <p>{item.text2}</p>
          </div>
        </div>
      ))}
    </div>
    </Stack>
   
  );
};

export default Imageslide2;
