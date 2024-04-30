import { Typography, Box, Stack } from "@mui/material";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"; // Import left and right icons
import React, { useState, useEffect, useRef } from "react";
import { getAllProductDetails } from "../api/apiInterface";
import '../components/product/css/ProductCSS.css';
import { BsEye } from "react-icons/bs";
import { delay, motion } from "framer-motion";

const Imageslide2 = () => {
  const [products, setProductsData] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const textVariants = {
      initial: {
          x: 50,
          opacity: 0,
      },
      animate: {
          x: 0,
          opacity: 1,
          transition: {
              duration: 1,
              delay:2,
              staggerChildren: 0.1,
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
            duration: 1,
            delay:1,
            staggerChildren: 0.1,
        },
    }
  };


  useEffect(() => {
      const handleScroll = () => {
          setScrollPosition(window.scrollY);
          // console.log(window.screenY);
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
        // Check if reached the end
        if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
          container.scrollLeft = 0; // Reset to beginning
        }
      }
    }, 5000); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <Stack style={{ margin: "80px", position: "relative", }}>
      <motion.Typography
        variant="h4"
        variants={textVariants}
        initial="initial"
        animate={scrollPosition > 100 ? "animate" : "initial"}
        style={{
          marginBottom: "25px",
          paddingleft: "7%",
          fontWeight: "bold",
          color: "#000000",
          fontFamily: "'Rosario', sans-serif",
          fontSize: "35px",
          fontStyle: "normal",
          fontWeight: 600,
          textAlign: "left",
          textSizeAdjust: "100%",
          lineHeight: "45.5px",
        }}
      >
        Trending Products
      </motion.Typography>
      
      <motion.div
       variants={abcVariants}
       initial="initial"
       animate={scrollPosition > 850 ? "animate" : "initial"}
        id="scroll-container"
        ref={scrollContainerRef}
        style={{ display: "flex", overflowX: "hidden", boxShadow:"5px rgb(161, 163, 164)", scrollBehavior: "smooth" }}
      >
        {products && products.map((item) => <ProductItem key={item.productTable.id} item={item} />)}
      </motion.div>
      {/* Left navigation button */}
      <motion.button
       variants={abcVariants}
       initial="initial"
       animate={scrollPosition > 850 ? "animate" : "initial"}
        style={{ position: "absolute", color:"black", backgroundColor:"#C1CCCF", padding:"5px", borderRadius:"25px", fontSize:"20px", left:"-60px", top: "60%", transform: "translateY(-50%)" }}
        onClick={() => { if (scrollContainerRef.current) scrollContainerRef.current.scrollLeft -= 100 }}
      >
        <BsChevronLeft />
      </motion.button>
      {/* Right navigation button */}
      <motion.button
       variants={abcVariants}
       initial="initial"
       animate={scrollPosition > 850 ? "animate" : "initial"} 
        style={{ position: "absolute", color:"", backgroundColor:"#C1CCCF", padding:"5px", borderRadius:"25px", fontSize:"20px", top: "60%", right: "-50px", transform: "translateY(-50%)" }}
        onClick={() => { if (scrollContainerRef.current) scrollContainerRef.current.scrollLeft += 100 }}
      >
        <BsChevronRight />
      </motion.button>
    </Stack>
  );
};

const ProductItem = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  const hasValidImage = item.media && item.media.length > 0 && item.media[0].link;
  const truncatedProductName = item.productTable.productName.length > 20
    ? `${item.productTable.productName.substring(0, 20)}...`
    : item.productTable.productName;

  return (
    <div
      style={{ flex: "0 0 auto", margin: "0 10px" ,boxShadow:"50px solid rgb(161, 163, 164)" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          position: "relative",
          width: "300px",
          height: "300px",
          overflow: "hidden",
          borderTopLeftRadius: "80px",
            borderTopRightRadius: "80px",
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
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFFFFFF",
                fontSize: "18px",
                opacity: isHovered ? "1" : "0",
                transition: "opacity 0.3s ease-in-out",
              }}
            >
              <p style={{ color: '#FFFFFF' }}>Quick View</p>
              <BsEye style={{ marginLeft: '10px', color: '#FFFFFF' }} />
            </div>
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
      <div style={{backgroundColor:"#02221F",paddingBottom:"10px",display:"flex",flexDirection:"column", borderBottomLeftRadius:"11px",borderBottomRightRadius:"11"}}>
      <h1 className="rosaria-text" style={{ color: '#C1CCCF', fontFamily:'"Rosario", "sans-serif"',fontSize: '22px', fontWeight: "bold", textAlign: 'left', fontStyle: 'normal', marginBottom: '2px', margintop: '8px', paddingLeft:"10px" ,paddingTop:"10px",paddingBottom:"5px"}}>{truncatedProductName}</h1>
      <h1 className="rosaria-text" style={{ color:"#C1CCCF", fontSize: '16px', textAlign:"left", fontStyle: 'normal', fontWeight: "bold",paddingLeft:"10px"}}>{item.category.name}</h1>
      </div>
    </div>

  );
};

export default Imageslide2;
