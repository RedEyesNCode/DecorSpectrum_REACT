import React from "react";
import "./MiddleHomepage.css"; // Import your CSS file for styling
import image4 from "../images/image-4.webp";
import image5 from "../images/decore-2.jpg";
import { Typography, Box, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useHistory from react-router-dom
import LocalStorageManager from "../session/LocalStorageManager";
import { LOCAL_STORAGE_KEY } from "../session/Constants";
import "../components/product/css/ProductCSS.css";
import { BiArrowToRight } from "react-icons/bi";
const Middle = () => {
  const navigate = useNavigate(); // Initialize useHistory

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
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "150px",
      }}
    >
      <div>
        <Stack>
          <Typography
            variant="h2"
            className="rosaria-text"
            style={{ padding: "10px" }}
          >
            We Offer Top Quality Products
          </Typography>
          <Typography
            variant="h4"
            className="rosaria-text"
            style={{
              marginTop: "20px",
              padding: "10px",
              color: "#C19B76",
              fontWeight: 700,
            }}
          >
            A Statement in Style
          </Typography>
          <Typography
            variant="body1"
            className="rosaria-text"
            style={{
              marginTop: "12px",
              marginRight: "20px",
              padding: "10px",
              color: "#000000",
            }}
          >
            Huge selection of Exotic handmade Turkish Chandeliers, Lamps,
            Ceiling Lights & Ceramics. Choose from our fast-selling colors or
            customize a unique combination.
          </Typography>

          <Box
            onClick={() => navigateProductCategory("10")}
            style={{
              backgroundColor: "#82705d",
              height: "30px",
              width: "200px",
              borderTopLeftRadius: "30px",
              borderTopRightRadius: "5px",
              borderBottomLeftRadius: "5px",
              borderBottomRightRadius: "30px",
              paddingTop: "20px",
              paddingRight: "25px",
              paddingLeft: "25px",
              paddingBottom: "20px",
              fontFamily: "Poppins, sans-serif",
              fontSize: "16px",
              display: "flex", // Set display to flex
              alignItems: "center", // Align items vertically
              justifyContent: "center", // Center the items horizontally
            }}
          >
            <Typography
              className="rosaria-text"
              style={{ color: "#FFFFFF", marginRight: "10px" }}
              variant="body1"
            >
              View Our Collection
            </Typography>
            <BiArrowToRight
              style={{ color: "#FFFFFF", width: "25px", height: "25px" }}
            />
          </Box>
        </Stack>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={
            "https://www.decorspectrum.com/wp-content/uploads/elementor/thumbs/IMG_4694-scaled-1-e1670854127657-pz231i86feigmor6hfv2dpvz8c29zwau7ptop9fp18-qembgj68es2551p6d6f258rjsntn726py1fi84js70.jpg"
          }
          alt="Example"
          style={{
            borderTopLeftRadius: "200px",
            borderTopRightRadius: "200px",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            height: "350px",
            width: "auto",
            marginRight: "10px",
          }}
        />

        <img
          src={
            "https://www.decorspectrum.com/wp-content/uploads/elementor/thumbs/IMG_4650-scaled-1-pz22ew7z8qdpvkfvlq88kpt6lomg1jpdikg1ayhstw-qembglzs74zkn2fdzrv110kbdujs1oo016ysv9yrsk.jpg"
          }
          alt="Example"
          style={{
            marginRight: "20px",
            borderTopLeftRadius: "150px",
            borderTopRightRadius: "20px",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "50px",
            height: "553px",
          }}
        />
      </div>
    </div>
  );
};

export default Middle;
