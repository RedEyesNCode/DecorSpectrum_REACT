import React, { useState,useEffect } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem,Stack } from '@mui/material';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import logoImg from '../images/logo-1.png';
import { getAllCategory } from '../api/apiInterface';
import Imageslide2 from '../pages/Image2slide';
import ImageSlider from './ImageSlider';

const MaterialNavBar = ({slidesx}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const [mainCategory, setMainCategory] = useState (null);


  useEffect(() => {
    const fetchAllCategories = async () => {
      const allCategoriesResponse = await getAllCategory();
      console.log("Get All category response -->", allCategoriesResponse);

      setMainCategory(allCategoriesResponse);
    };
    fetchAllCategories();
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack>
      <AppBar position="static">
      <Toolbar style={{backgroundColor : "#ffffff", height : "130px"}} >
        <img src={logoImg} width="200px" style={{padding : "40px"}} height="180px" alt="Example" />

        <Typography variant="h6" component="div" style={{color : "#000000",marginLeft : "50px"}} >
          Home
        </Typography>

        {mainCategory && mainCategory.data.map((category,index) => (
              <IconButton
              aria-label="more"
              aria-controls="dropdown-menu"
              aria-haspopup="true"
              color="black"
              onClick={handleClick}
              style={{fontSize : "20px"}}
            >
               {category.name} {anchorEl ? <FaAngleUp /> : <FaAngleDown />}
            </IconButton>
                  
                ))}



        <div>
          <IconButton
            aria-label="more"
            aria-controls="dropdown-menu"
            aria-haspopup="true"
            color="black"
            style={{fontSize : "20px"}}
          >
            About Us
          </IconButton>
          
        </div>
        <div>
          <IconButton
            aria-label="more"
            aria-controls="dropdown-menu"
            aria-haspopup="true"
            color="black"
            style={{fontSize : "20px"}}
          >
            Blogs
          </IconButton>
          
        </div>
        <div>
          <IconButton
            aria-label="more"
            aria-controls="dropdown-menu"
            aria-haspopup="true"
            color="black"
            style={{fontSize : "20px"}}
          >
            Contact Us
          </IconButton>
          
        </div>

      </Toolbar>
    </AppBar>

    {/* <ImageSlider images={slidesx.data} /> */}
    </Stack>
    
  );
}

export default MaterialNavBar;
