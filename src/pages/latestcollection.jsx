import { Typography, Box, Stack } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import { getAllProductDetails } from "../api/apiInterface";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import './latestCollection.css';
import { motion } from "framer-motion";

const LatestCollection = () => {
  const [products, setProductsData] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const textVariants = {
    initial: {
        x: 50,
        opacity: 1,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 4,
            delay:3,
            staggerChildren: 1,
        },
    }
};
const abcVariants = {
  initial: {
      opacity: 0,
  },
  animate: {
      opacity: 1,
      transition: {
          duration: 2,
          delay:2,
          staggerChildren: 0.1,
      },
  }
};
useEffect(() => {
  const handleScroll = () => {
      setScrollPosition(window.scrollY);
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
        container.scrollLeft -= container.offsetWidth; // Adjusted to scroll right
        if (container.scrollLeft <= 0) {
          container.scrollLeft = container.scrollWidth - container.offsetWidth;
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
    <div className="collections" style={{position:"relative"}}>
      <Stack style={{ marginLeft: "80px",marginRight: "80px"  }}>
        <motion.Typography
          variant="h4"
          variants={textVariants}
        initial="initial"
        animate={scrollPosition > 100 ? "animate" : "initial"}
          style={{
            marginBottom: "35px",
            color: "White",
            fontFamily: "'Rosario', sans-serif",
            fontSize: "35px",
            fontStyle: "normal",
            fontWeight: 600,
            textAlign: "Center",
            textSizeAdjust: "100%",
            lineHeight: "45.5px",
          }}
        >
          Latest Collection
        </motion.Typography>
        <motion.div
        variants={abcVariants}
        initial="initial"
        animate={scrollPosition > 100 ? "animate" : "initial"}
          id="scroll-container"
          ref={scrollContainerRef}
          style={{ display: "flex", overflowX: "hidden", scrollBehavior: "smooth" }}
        >
          {products &&
            products.map((item) => <ProductItem key={item.productTable.id} item={item} />)}
        </motion.div>
        {/* Left navigation button */}
        <motion.button
        variants={abcVariants}
        initial="initial"
        animate={scrollPosition > 100 ? "animate" : "initial"}
          className="scroll-button left"
          onClick={handleScrollLeft}
          style={{position: "absolute", color:"white", backgroundColor:"#02221F", padding:"5px", borderRadius:"25px", fontSize:"30px", right:"30px", top: "55%", transform: "translateY(-50%)"}}
        >
          <BsChevronLeft />
        </motion.button>
        {/* Right navigation button */}
        <motion.button
        variants={abcVariants}
        initial="initial"
        animate={scrollPosition > 100 ? "animate" : "initial"}
          className="scroll-button right"
          onClick={handleScrollRight}
          style={{position: "absolute", color:"white", backgroundColor:"#02221F", padding:"5px", borderRadius:"25px", fontSize:"30px", left:"10px", top: "55%", transform: "translateY(-50%)"}}
        >
          <BsChevronRight />
        </motion.button>
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
      style={{ flex: "0 0 auto", margin: "0 10px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          position: "relative",
          width: "350px",
          height: "320px",
          overflow: "hidden",
          marginBottom: "30px",
          borderTopLeftRadius:"90px",
          boxShadow:"10px white"
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
      <Typography
        className="rosaria-text"
        style={{
          color: "white",
          fontSize: "16px",
          fontWeight: 600,
          textAlign: "center",
          fontStyle: "normal",
          marginBottom: "8px",
        }}
      >
        {truncatedProductName}
      </Typography>
      <Typography
        className="rosaria-text"
        style={{
          fontSize: "12px",
          fontStyle: "normal",
          fontWeight: 500,
          color: "white",
          letterSpacing: "normal",
          textAlign: "center",
          lineHeight: "20.8px",
          textSizeAdjust: "100%",
        }}
      >
        {item.category.name}
      </Typography>
    </div>
  );
};

export default LatestCollection;
