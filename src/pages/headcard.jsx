import React, { useState } from "react";
import "./Headcard1.css";
import { Box, Typography, Stack } from "@mui/material";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import LocalStorageManager from "../session/LocalStorageManager";
import { LOCAL_STORAGE_KEY } from "../session/Constants";

const Headcard = ({ category }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const navigateProductCategory = (category_id, category_name) => {
    const sessionCategory = { categoryId: category_id, categoryName: category_name };
    LocalStorageManager.setItem(LOCAL_STORAGE_KEY.CATEGORY_SESSION, sessionCategory);

    navigate(`/product-category/${category_id}`, {
      state: { category_id: category_id.toString(), category_name: category_name },
    });
  };

  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      padding: "50px", 
      backgroundColor: "#D2DBDE", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      marginTop: "6vw",
      marginBottom: "10vw",  
      transition: "box-shadow 0.5s", // Added transition for box-shadow
      transitionBehavior: "normal",
      transitionDuration: "0.5s",
      transitionTimingFunction: "ease",
      transitionDelay: "0s",
      transitionProperty: "box-shadow"
    }}>
      <h1 style={{ fontSize: "60px", marginBottom: "10px" }}>Unique Handicraft Collection</h1>
      <p style={{ fontSize: "20px", marginBottom: "20px" }}>Explore are not range gifts and consectetur adipiscing elit</p>
      <Stack direction="column" alignItems="center" style={{ display: "flex", flexDirection: "row" }}>
        {category?.data?.map((category, index) => (
          <Stack key={index} direction="row" alignItems="center" marginLeft="50px" justifyContent="center" id={index}>
            <Stack direction="column" alignItems="center" style={{ position: "relative" }}>
              <img
                style={{ height: "250px", alignItems: "center", objectFit: "contain" }}
                src={category.image}
                alt={category.name}
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered()}
              />
              <div style={{ backgroundColor: "#02221F", width: "100%", transition: "background-color 0.3s" }}>
                <Typography
                  style={{
                    color: "#C1CCCF",
                    fontFamily: "'Rosario', sans-serif",
                    fontSize: "25px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    textAlign: "center",
                    lineHeight: "25.5px",
                    marginTop: "15px",
                    marginBottom: "5px",
                    transition: "color 0.3s"
                  }}
                >
                  {category.name}
                </Typography>
                <Typography
                  variant="body1"
                  className="rosaria-text"
                  style={{ color: "#C1CCCF", fontSize: "12px", textAlign: "center", transition: "color 0.3s" }}
                >
                  {category.description}
                </Typography>
                {isHovered === index && (
                  <Typography
                    variant="body1"
                    className="rosaria-text"
                    style={{ color: "#C1CCCF", fontSize: "12px", textAlign: "center", marginTop: "20px", marginBottom: "20px", transition: "transform 0.6s cubic-bezier(0.65, 0, 0.35, 1)" }}
                  >
                    5. Pour the mixture into a non-stick container and then freeze overnight. <br /> Take treating your dog a step further by turning it <br /> into an ice cream sundae party!
                  </Typography>
                )}
              </div>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </div>
    
  );
};

export default Headcard;
