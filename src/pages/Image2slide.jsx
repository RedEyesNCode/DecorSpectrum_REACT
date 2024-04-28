import { Typography, Box, Stack } from "@mui/material";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"; // Import left and right icons
import React, { useState, useEffect, useRef } from "react";
import { getAllProductDetails } from "../api/apiInterface";
import '../components/product/css/ProductCSS.css';
import { BsEye } from "react-icons/bs";

const Imageslide2 = () => {
  const [products, setProductsData] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef(null);

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
    }, 3000); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <Stack style={{ margin: "80px", position: "relative" }}>
      <Typography
        variant="h4"
        style={{
          marginBottom: "25px",
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
      </Typography>
      <div
        id="scroll-container"
        ref={scrollContainerRef}
        style={{ display: "flex", overflowX: "hidden", scrollBehavior: "smooth" }}
      >
        {products && products.map((item) => <ProductItem key={item.productTable.id} item={item} />)}
      </div>
      {/* Left navigation button */}
      <button
        style={{ position: "absolute", color:"white", backgroundColor:"#02221F", padding:"5px", borderRadius:"25px", fontSize:"30px", left:"10px", top: "50%", transform: "translateY(-50%)" }}
        onClick={() => { if (scrollContainerRef.current) scrollContainerRef.current.scrollLeft -= 100 }}
      >
        <BsChevronLeft />
      </button>
      {/* Right navigation button */}
      <button
        style={{ position: "absolute", color:"white", backgroundColor:"#02221F", padding:"5px", borderRadius:"25px", fontSize:"30px", top: "50%", right: "10px", transform: "translateY(-50%)" }}
        onClick={() => { if (scrollContainerRef.current) scrollContainerRef.current.scrollLeft += 100 }}
      >
        <BsChevronRight />
      </button>
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
      style={{ flex: "0 0 auto", margin: "0 10px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          position: "relative",
          width: "238px",
          height: "238px",
          overflow: "hidden",
          marginBottom: "30px"
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
                backgroundColor: "rgba(2, 2, 2, 0.5)",
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
      <Typography className="rosaria-text" sx={{ color: '#2c1a00', fontSize: '16px', fontWeight: 600, textAlign: 'left', fontStyle: 'normal', marginBottom: '8px' }}>{truncatedProductName}</Typography>
      <Typography className="rosaria-text" sx={{ fontSize: '16px', fontStyle: 'normal', fontWeight: 500, color: '#626262', letterSpacing: 'normal', textAlign: 'left', lineHeight: '20.8px', textSizeAdjust: '100%' }}>{item.category.name}</Typography>
    </div>

  );
};

export default Imageslide2;
