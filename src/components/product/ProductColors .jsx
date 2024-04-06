import React, { useState } from 'react';
import { Box, Stack, Button } from '@mui/material';

const ProductColors = ({ colors }) => {
  // State to track the currently selected color
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <Stack direction="row" spacing={2}>
      {colors.map((color, index) => (
        <Button
          key={index}
          onClick={() => setSelectedColor(color)}
          sx={{
            minWidth: '40px',
            height: '40px',
            backgroundColor: color,
            border: selectedColor === color ? '2px solid #fff' : '1px solid #ddd',
            '&:hover': {
              backgroundColor: color,
              opacity: '0.8',
            },
          }}
        />
      ))}
    </Stack>
  );
};

export default ProductColors;

// Usage
// Assuming you have an array of color strings (hex, rgb, etc.)
const colors = ['#FF5733', '#33FF57', '#3357FF'];

const App = () => {
  return <ProductColors colors={colors} />;
};
