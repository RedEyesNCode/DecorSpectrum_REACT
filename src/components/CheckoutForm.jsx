import React, { useState } from 'react';
import {
    Card,
    CardContent,
    Paper,
    Typography,
    Button,
    Box,
    Stack,
    Radio,
    Grid,
    FormControlLabel,
    FormLabel,
    RadioGroup,
    TextField,
    FormControl,

  } from "@mui/material";
import BillingDetailsForm from './BillingDetailsForm';



const CheckoutForm = () => {
  const [creditCardType, setCreditCardType] = useState('visa');

  const handleChange = (event) => {
    setCreditCardType(event.target.value);
  };

  return (
    <Grid container spacing={0}> {/* Equal spacing optional */}
    <Grid item xs={12} sm={6}> 
      {/* Content for the left half */}
      <BillingDetailsForm/>
      
    </Grid>
    <Grid item xs={12} sm={6}> 
      {/* Content for the right half */}
      <h1>CARD LAYOUT</h1>
    </Grid>
  </Grid>
  );
};

export default CheckoutForm;
