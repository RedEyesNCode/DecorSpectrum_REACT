import { Typography, Box, Stack } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import './css/Latestblog.css';
import { getAllProductDetails } from "../../api/apiInterface";
import { motion } from "framer-motion";

const Latestblog = () => {
  const [products, setProductsData] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const mainvariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 2,
        delay:1,
        delayChildren: 2, // Delay for all children
        staggerChildren: 2, // Delay between each child
      },
    },
  };
  const text1Variants = {
    initial: {
      rotateX: 90, // Initial rotation to hide the text
      opacity: 0,
    },
    animate: {
      rotateX: 0, // Rotate back to 0 degrees
      opacity: 1,
      transition: {
        duration: 2,
        delay: 1,
        staggerChildren: 0.1,
      },
    }
  };
  
  useEffect(() => {
    const handleScroll = () => {
        setScrollPosition(window.scrollY);
        // console.log(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);


  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const response = await getAllProductDetails();
        setProductsData(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };
    fetchProductsData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        container.scrollLeft += container.offsetWidth;
        if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
          container.scrollLeft = 0;
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 100;
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 100;
    }
  };

  
  return (
    <div className="collection" style={{position:"relative",marginBottom:"50px"}}>
      <Stack style={{ marginLeft: "80px",marginRight: "80px"  }}>
        <Typography
          variant="h4"
          style={{
            marginBottom: "35px",
            color: "Black",
            fontFamily: "'Rosario', sans-serif",
            fontSize: "35px",
            fontStyle: "normal",
            fontWeight: 600,
            textAlign: "Left",
            textSizeAdjust: "100%",
            lineHeight: "45.5px",
          }}
        >
          Latest Blog
        </Typography>
        <motion.div
       variants={text1Variants} initial="initial" animate={scrollPosition > 4300 ? "animate" : "initial"}
          id="scroll-container"
          ref={scrollContainerRef}
          style={{ display: "flex", overflowX: "hidden", scrollBehavior: "smooth" }}
        >
          {products &&
            products.map((item) => <ProductItem key={item.productTable.id} item={item} />)}
        </motion.div>
        {/* Left navigation button */}
        <button
          className="scroll-button left"
          onClick={handleScrollLeft}
          style={{position: "absolute", color:"black", backgroundColor:"#D2DBDE", padding:"5px", borderRadius:"25px", fontSize:"15px", left:"30px", top: "55%", transform: "translateY(-50%)"}}
        >
          <BsChevronLeft />
        </button>
        {/* Right navigation button */}
        <button
          className="scroll-button right"
          onClick={handleScrollRight}
          style={{position: "absolute", color:"black", backgroundColor:"#D2DBDE", padding:"5px", borderRadius:"25px", fontSize:"15px", right:"30px", top: "55%", transform: "translateY(-50%)"}}
        >
          <BsChevronRight />
        </button>
      </Stack>
    </div>
  );
};

const ProductItem = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  const hasValidImage = item.media && item.media.length > 0 && item.media[0].link;
  const truncatedProductName =
    item.productTable.productName.length > 20
      ? `${item.productTable.productName.substring(0, 20)}...`
      : item.productTable.productName;

  return (
    <div
      style={{ flex: "0 0 auto", margin: "0 10px",borderRadius:"11px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          position: "relative",
          width: "450px",
          height: "350px",
          overflow: "hidden",
          borderTopLeftRadius:"11px",
          borderTopRightRadius:"11px",
        }}
      >
        {hasValidImage ? (
          <>
            <img
              src={item.media[0].link}
              alt={item.productTable.productName || "Product"}
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s ease-in-out",
                transform: isHovered ? "scale(1.1)" : "scale(1)",
              }}
            />
          </>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              backgroundColor: "#e0e0e0", // Placeholder background color
            }}
          >
            No Image Available
          </div>
        )}
      </div>
      <div style={{backgroundColor:"#D2DBDE",paddingBottom:"10px",borderBottomLeftRadius:"11px",
          borderBottomRightRadius:"11px",}}>
      <Typography
        className="rosaria-text"
        style={{
          color: "black",
          fontSize: "25px",
          fontWeight: "bold",
          fontFamily:"Rosario",
          textAlign: "left",
          fontStyle: "normal",
          marginBottom: "8px",
          paddingTop:"20px",
          marginLeft:"15px"
        }}
      >
        {truncatedProductName}
      </Typography>
      <Typography
        className="rosaria-text"
        style={{
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: 500,
          color: "#868787",
          fontFamily:"Rosario",
          letterSpacing: "normal",
          textAlign: "left",
          marginLeft:"15px",
          textSizeAdjust: "100%",
        }}
      >
        {item.category.name}
      </Typography>
      <Box 
                  style={{ 
                    backgroundColor: "transparent", 
                    border:"2px solid #02221F",
                    borderRadius:"10px",
                    padding: "10px", 
                    width: "150px", 
                    height: "50px", 
                    marginLeft: "15px", 
                    display: "flex", 
                    color:"#E8D0C6",
                    alignItems: "left",
                    marginBottom:"20px",
                    transition: "background-color 0.3s, color 0.3s", // Smooth transition effect for color change
                    cursor: "pointer" // Change cursor to pointer on hover
                  }} 
                  
                  textAlign="left"
                  hoverbgcolor="#000000"
                  hovercolor="#C19B76"
                  >
                  <Typography className="rosaria-text" style={{ fontSize:"15px",fontWeight:"bold", margin: "0 auto" }}>
                    READ MORE
                  </Typography>
                </Box>
      </div>
    </div>
  );
};

export default Latestblog;
