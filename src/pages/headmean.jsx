import React from "react";
import image11 from "../images/image-3.webp";
import image12 from "../images/ic_blue_lamp.jpg";
import image1 from "../images/image-14.jpg";
import imageLamp from "../images/ic_light_lamp.jpg";
import { Typography, Box, Stack } from '@mui/material';
import { useNavigate } from "react-router-dom"; // Import useHistory from react-router-dom
import '../components/product/css/ProductCSS.css'
import { BiSolidArrowFromLeft } from "react-icons/bi";
import LatestCollection from "./latestcollection";
import SafePayment from "./Safepayment";
import InnovativeDesign from "./InnovativeDesign";
const Headmean = () => {
  const navigate = useNavigate(); // Initialize useHistory

  const navigateAboutUs =  () =>{
    navigate("/about-us")
    
  }
  return (
    <>skamsk</>
    
  );
};

export default Headmean;
