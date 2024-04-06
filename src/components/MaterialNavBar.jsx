import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem,Stack } from '@mui/material';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import logoImg from '../images/logo-1.png';

const MaterialNavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar style={{backgroundColor : "#ffffff"}}>
        <img src={logoImg} alt="Example" className="rounded-image29" />

        <Typography variant="h6" component="div" style={{color : "#000000",marginLeft : "50px"}} >
          Home
        </Typography>

        <div>
          <IconButton
            aria-label="more"
            aria-controls="dropdown-menu"
            aria-haspopup="true"
            color="black"
            onClick={handleClick}
            style={{fontSize : "20px"}}
          >
            Turkish {anchorEl ? <FaAngleUp /> : <FaAngleDown />}
          </IconButton>
          <Menu
            id="turkish-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            width= "100px"
            style={{padding : "80px", width : "200px"}}
          >
            <Stack direction="column">
            <MenuItem onClick={handleClose} style={{color : "#000000"}}>Option 1</MenuItem>
            <MenuItem onClick={handleClose}>Option 2</MenuItem>
            <MenuItem onClick={handleClose}>Option 3</MenuItem>
            </Stack>
            
          </Menu>
          
        </div>

        <div>
          <IconButton
            aria-label="more"
            aria-controls="dropdown-menu"
            aria-haspopup="true"
          
            color="black"
            style={{fontSize : "20px"}}
          >
            Leather Animal Decor {anchorEl ? <FaAngleUp /> : <FaAngleDown />}
          </IconButton>
          
        </div>

        <div>
          <IconButton
            aria-label="more"
            aria-controls="dropdown-menu"
            color="black"
            style={{fontSize : "20px"}}

            aria-haspopup="true"
            
          >
            Agate Decor {anchorEl ? <FaAngleUp /> : <FaAngleDown />}
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
  );
}

export default MaterialNavBar;
