import React, { useEffect, useState } from "react";
import "./MiddleHomepage.css"; // Import your CSS file for styling
import image4 from "../images/image-4.webp";
import image5 from "../images/decore-2.jpg";
import { Typography, Box, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useHistory from react-router-dom
import LocalStorageManager from "../session/LocalStorageManager";
import { LOCAL_STORAGE_KEY } from "../session/Constants";
import "../components/product/css/ProductCSS.css";
import { BiArrowToRight } from "react-icons/bi";
import { motion } from "framer-motion";
const Middle = () => {
  const navigate = useNavigate(); // Initialize useHistory
  const [isVisible,setIsVisible]=useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const middleSection = document.querySelector(".Section1");
      if (middleSection) {
        const distanceToTop = middleSection.getBoundingClientRect().top;
        setIsVisible(distanceToTop < window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigateProductCategory = (category_id) => {
    const sessionCategory = { categoryId: "1", categoryName: "Turkish Decor" };
    LocalStorageManager.setItem(
      LOCAL_STORAGE_KEY.CATEGORY_SESSION,
      sessionCategory
    );

    navigate("/product-category/" + category_id, {
      state: { category_id: category_id.toString(), category_name: "Ceramics" },
    });
  };
  return (
    <>
    <motion.div className="Section1"
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginLeft:"15px",
        marginTop:"50px",
        overflow:"hidden"
      }}
    >
      <motion.div animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -100 }}
        transition={{ duration: 2 }} style={{width:"50%"}}>
        <Stack>
        <Typography
            variant="h2"
            className="rosaria-text"
            style={{ padding: "10px", fontSize:"22px", fontWeight:"600" }}
          >
            WHO WE ARE
          </Typography>
          <Typography
            variant="h2"
            className="rosaria-text"
            style={{ padding: "10px",fontSize:"70px", fontWeight:"600",color:"black" }}
          >
            We Offer Top Quality Products - <span style={{fontSize:"60px",}}> A <br /> Statement in Style</span>
          </Typography>
          <Typography
            variant="body1"
            className="rosaria-text"
            style={{
              marginTop: "10px",
              fontSize:"22px",
              padding: "10px",
              color: "#484B4F",
            }}
          >
            Huge selection of Exotic handmade Turkish Chandeliers, Lamps,
            Ceiling Lights & Ceramics. Choose from our fast-selling colors or
            customize a unique combination.
          </Typography>

          <Box
            onClick={() => navigateProductCategory("1")}
            style={{
              cursor:"pointer",
              backgroundColor: "#D2DBDE",
              height: "40px",
              width: "250px",
              borderTopLeftRadius: "30px",
              borderTopRightRadius: "5px",
              borderBottomLeftRadius: "5px",
              borderBottomRightRadius: "30px",
              marginTop:"10px",
              paddingTop: "25px",
              paddingRight: "25px",
              paddingLeft: "25px",
              paddingBottom: "25px",
              fontFamily: "Poppins, sans-serif",
              fontSize: "16px",
              display: "flex", // Set display to flex
              alignItems: "center", // Align items vertically
              justifyContent: "center", // Center the items horizontally
            }}
          >
            <Typography
              className="rosaria-text"
              style={{ color: "black" }}
              variant="body1"
            >
              View Our Collection
            </Typography>
            <BiArrowToRight
              style={{ color: "#FFFFFF", width: "25px", height: "25px" }}
            />
          </Box>
        </Stack>
      </motion.div>
      <div style={{position:"relative",width:"35%" }}>
        <motion.img
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 1000 }}
        transition={{ duration: 1, }}
          src={
            "https://www.decorspectrum.com/wp-content/uploads/elementor/thumbs/IMG_4694-scaled-1-e1670854127657-pz231i86feigmor6hfv2dpvz8c29zwau7ptop9fp18-qembgj68es2551p6d6f258rjsntn726py1fi84js70.jpg"
          }
          alt="Example"
          style={{
            borderTopLeftRadius: "80px",
            borderTopRightRadius: "80px",
            borderBottomRightRadius: "80px",
            height: "400px",
            width: "auto",
            marginRight: "10px",
            position:"absolute",
            top:"22%",
            right:"75%",
            zIndex:1,
          }}
        />

        <motion.img
         animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 300 }}
         transition={{ duration: 2 }}
          src={
            "https://www.decorspectrum.com/wp-content/uploads/elementor/thumbs/IMG_4650-scaled-1-pz22ew7z8qdpvkfvlq88kpt6lomg1jpdikg1ayhstw-qembglzs74zkn2fdzrv110kbdujs1oo016ysv9yrsk.jpg"
          }
          alt="Example"
          style={{
            marginRight: "80px",
            width:"100%",
            borderTopLeftRadius: "150px",
            borderTopRightRadius: "20px",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "50px",
            height: "480px",
          }}
        />
      </div>
    </motion.div>
    </>
    
  );
};

export default Middle;
