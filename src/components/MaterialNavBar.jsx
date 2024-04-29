import React, { useState,useEffect } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem,Stack,Button } from '@mui/material';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import logoImg from '../images/logo-1.png';
import { getAllCategory, getAllSubcategories } from '../api/apiInterface';
import Imageslide2 from '../pages/Image2slide';
import ImageSlider from './ImageSlider';
import { useNavigate } from "react-router-dom"; // Import useHistory from react-router-dom
import LocalStorageManager from '../session/LocalStorageManager';
import { LOCAL_STORAGE_KEY } from '../session/Constants';

const MaterialNavBar = ({slidesx}) => {
  const navigate = useNavigate(); // Initialize useHistory

  const navigateAboutUs =  () =>{
    navigate("/about-us");
  }
  const navigateHome = () =>{
    navigate("/");
  }
  const [anchorEl, setAnchorEl] = useState(null);

  const [mainCategory, setMainCategory] = useState (null);

  const [mainSubCategory, setMainSubCategory] = useState(null);
  

  useEffect(() => {
    const fetchAllCategories = async () => {
      const allCategoriesResponse = await getAllSubcategories();
      console.log("Get All category response -->", allCategoriesResponse);

      setMainSubCategory(allCategoriesResponse);
    };
    fetchAllCategories();
  }, []);

  useEffect(() => {
    const fetchAllCategories = async () => {
      const allCategoriesResponse = await getAllCategory();
      console.log("Get All category response -->", allCategoriesResponse);

      setMainCategory(allCategoriesResponse);
    };
    fetchAllCategories();
  }, []);

  const handleClick = (event,categoryName) => {
    if(categoryName=="Turkish Decor"){
      const sessionCategory = {categoryId : "1", categoryName : "Turkish Decor"}
      LocalStorageManager.setItem(LOCAL_STORAGE_KEY.CATEGORY_SESSION,sessionCategory);
      navigate("/product-category/"+"1", { state: { category_id: "1",category_name : "Ceramics" } });
    

    }else if(categoryName=="Leather Animal Decor"){
      const sessionCategory = {categoryId : "2", categoryName : "Leather Animal Decor"}
      LocalStorageManager.setItem(LOCAL_STORAGE_KEY.CATEGORY_SESSION,sessionCategory);
      navigate("/product-category/"+"2", { state: { category_id: "2",category_name : "Leather Animal Decor" } });
    

    }else if(categoryName=="Agate Decor"){
      const sessionCategory = {categoryId : "3", categoryName : "Agate Decor"}
      LocalStorageManager.setItem(LOCAL_STORAGE_KEY.CATEGORY_SESSION,sessionCategory);
      navigate("/product-category/"+"3", { state: { category_id: "3",category_name : "Agate Decor" } });
    
    }

  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack>
      <AppBar position="static">
      <Toolbar style={{backgroundColor : "#ffffff", height : "130px"}} >
        <img src={logoImg} width="100px" style={{padding : "40px"}} height="100px" alt="Example" />

        <Button onClick={navigateHome} variant="h6" component="div" style={{color : "#000000",marginLeft : "50px"}} >
          Home
        </Button>

        {mainCategory && mainCategory.data.map((category,index) => (
              <IconButton
              aria-label="more"
              aria-controls="dropdown-menu"
              aria-haspopup="true"
              color="black"
              onClick={(e) => handleClick(e,category.name)}
              style={{fontSize : "20px"}}
            >
               {category.name} 
            </IconButton>
                  
                ))}



        <div>
          <IconButton
            aria-label="more"
            aria-controls="dropdown-menu"
            aria-haspopup="true"
            color="black"
            onClick={navigateAboutUs}
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