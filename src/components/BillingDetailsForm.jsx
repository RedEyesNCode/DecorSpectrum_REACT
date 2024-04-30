import React from 'react';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';

function BillingDetailsForm() {
  return (
    <div style={{ padding: '20px' }}> {/* Add padding around the form */}

    <Grid container spacing={2}>
        <Grid item>

        <TextField
        label="First Name"
        variant="standard"
        
        margin="normal"
        fullWidth
        required
        InputLabelProps={{ shrink: true }} // Add InputLabelProps
        sx={{ 
          '& .MuiOutlinedInput-root': {  // Target input field
            borderRadius: '4px',
            backgroundColor: '#F2F2F2', 
            fontSize: '14px' 
          },
          '& .Mui-focused .MuiInputBase-root': { // Target focused state
            border: '2px solid #007bff', // Change border on focus
          },
          '& .MuiInputBase-root': { // Target input field root element
            border: '1px solid #ccc', // Set border width, color
            borderRadius: '4px', // Add rounded corners (optional)
          },
        }}
      />
        </Grid>
        <Grid item>
        <TextField
        label="Last Name"
        variant="standard"
        
        margin="normal"
        fullWidth
        required
        InputLabelProps={{ shrink: true }} // Add InputLabelProps
        sx={{ 
          '& .MuiOutlinedInput-root': {  // Target input field
            borderRadius: '4px',
            backgroundColor: '#F2F2F2', 
            fontSize: '14px' 
          },
          '& .Mui-focused .MuiInputBase-root': { // Target focused state
            border: '2px solid #007bff', // Change border on focus
          },
          '& .MuiInputBase-root': { // Target input field root element
            border: '1px solid #ccc', // Set border width, color
            borderRadius: '4px', // Add rounded corners (optional)
          },
        }}
      />
        </Grid>
       
    </Grid>
     
      
      {/* ... (Similar style changes for other TextFields) */}
    </div>
  );
}

export default BillingDetailsForm;
