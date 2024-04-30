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
    const sessionCategory = { categoryId: category_id, categoryName: "Turkish Decor" };
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
        marginTop:"150px",
        overflow:"hidden"
      }}
    >
      <motion.div animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -100 }}
        transition={{ duration: 2 }} style={{width:"50%"}}>
        <Stack>
        <Typography
            variant="h2"
            className="rosaria-text"
            style={{ padding: "10px", fontSize:"25px", fontWeight:"bold",color:"rgb(2 34 31)",fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif" }}
          >
            WHO WE ARE
          </Typography>
          <Typography
            variant="h2"
            className="rosaria-text"
            style={{ padding: "10px",fontSize: "calc(2.2vw + 1rem)", fontWeight:"bold",lineHeight:"4vw",color:"black",fontFamily:'"Rosario", "sans-serif"', }}
          >
            We Offer Top Quality Products - <span style={{color: "rgb(2, 34, 31)"}}> A <br /> Statement in Style</span>
          </Typography>
          <Typography
            variant="body1"
            className="rosaria-text"
            style={{
              marginTop: "10px",
              fontSize:"20px",
              padding: "10px",
              color: "#484B4F",
            }}
          >
            Vivamus nulla montes vehicula ex semper mus finibus quis eleifend facilisi. Turpis consectetur pulvinar auctor vestibulum quisque. Velit quisque ante interdum consectetuer habitant blandit.
          </Typography>

          <Box
            onClick={() => navigateProductCategory("10")}
            style={{
              cursor:"pointer",
              backgroundColor: "rgba(207, 216, 220, 0.932)",
              height: "35px",
              width: "200px",
              borderTopLeftRadius: "40px",
              borderBottomRightRadius: "40px",
              marginTop:"5%",
              paddingTop: "5%",
              paddingRight: "5%",
              paddingLeft: "5%",
              paddingBottom: "5%",
              boxShadow:"0px 0px 10px 0px rgba(207, 216, 220, 0.932)",
              border:"1px solid rgb(2 34 31)",
              display: "flex", // Set display to flex
              alignItems: "center", // Align items vertically
              justifyContent: "center", // Center the items horizontally
            }}
          >
            <Typography
              className="rosaria-text"
              style={{ color: "rgb(2 34 31)", fontFamily: "Poppins, sans-serif",
              fontWeight:"bold",
              fontSize:"15px", }}
              variant="body1"
            >
              View  Collection
            </Typography>
          </Box>
        </Stack>
      </motion.div>
      <div style={{position:"relative",width:"35%" }}>
        <motion.img
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 1000,x:isVisible?0:1000 }}
        transition={{ duration: 3, }}
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
