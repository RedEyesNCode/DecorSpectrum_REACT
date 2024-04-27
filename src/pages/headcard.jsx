import React from "react";
import "./Headcard1.css";
import { Box, Typography, Stack } from "@mui/material";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom"; // Import useHistory from react-router-dom
import LocalStorageManager from "../session/LocalStorageManager";
import { LOCAL_STORAGE_KEY } from "../session/Constants";

const Headcard = () => {
  const navigate = useNavigate(); // Initialize useHistory
  const navigateProductCategory = (category_id,category_name) => {
    const sessionCategory = { categoryId: category_id, categoryName: category_name };
    LocalStorageManager.setItem(
      LOCAL_STORAGE_KEY .CATEGORY_SESSION,
      sessionCategory
    );

    navigate("/product-category/" + category_id, {
      state: { category_id: category_id.toString(), category_name: category_name },
    });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center",padding : "50px", backgroundColor:"#D2DBDE" }}>
      <Stack direction="column"  alignItems="center">

        <Stack direction="row" alignItems="center" justifyContent="center">
          <Stack direction="column" alignItems="center" width="25%">
            <img
              style={{
                height: "280px",
                width: "380px",
                alignItems: "center",
              }}
              src="https://www.decorspectrum.com/wp-content/uploads/elementor/thumbs/2322-pz22vpk1i1co6nzqerull5k00ae7wyiypc38a9zce4-qembhafl4tvbn5f10udy8iw9obups5fh03fx9ldm64.jpg"
              alt="Leather Animal Decor"
            />

            <Typography
              style={{
                color: "#000000",
                fontFamily: "'Rosario', sans-serif",
                fontSize: "25px",
                fontStyle: "normal",
                fontWeight: 400,
                textAlign: "center",
                lineHeight: "45.5px",
              }}
            >
              Leather Animal Decor
            </Typography>
            <Typography
              variant="body1"
              className="rosaria-text"
              style={{
                padding: "2px",
                color: "#626262",
                fontSize:"15px",
                textAlign : 'center'
              }}
            >
              Huge selection of Exotic handmade Turkish Chandeliers, Lamps,
              Ceiling Lights & Ceramics. Choose from our fast-selling colors or
              customize a unique combination.
            </Typography>
            <Box
                        onClick={() => navigateProductCategory("2","Leather Animal Decor")}

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
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                className="rosaria-text"
                style={{ color: "#FFFFFF", marginRight: "10px" }}
                variant="body1"
              >
                View Gallery
              </Typography>
              <BsArrowRight
                style={{ color: "#FFFFFF", width: "25px", height: "25px" }}
              />
            </Box>
          </Stack>
          <Stack direction="column" alignItems="center" width="35%">
            <img
              style={{
                height: "280px",
                width: "380px",
                alignItems: "center",
              }}
              
              src="https://www.decorspectrum.com/wp-content/uploads/elementor/thumbs/IMG_4650-scaled-1-pz22ew7z8qc0hsf0li6uzeb5g59u7vrtq3yj82wvp8-qembhf4s301r97879ef32zpkn97jumy4oqpcnz6nb0.jpg"
              alt="Leather Animal Decor"
            />

            <Typography
              style={{
                color: "#000000",
                fontFamily: "'Rosario', sans-serif",
                fontSize: "25px",
                fontStyle: "normal",
                fontWeight: 400,
                textAlign: "center",
                lineHeight: "45.5px",
              }}
            >
              Turkish Lamp & Chandeliers
            </Typography>
            <Typography
              variant="body1"
              className="rosaria-text"
              style={{
                padding: "2px",
                color: "#626262",
                fontSize:"15px",
                textAlign : 'center'
              }}
            >
              Stunning 16th century Turkish Mosaic art brought to your doorstep. You are sure to get blown away while you navigate through the wide array of colors and patterns.
              
            </Typography>
            <Box
                        onClick={() => navigateProductCategory("1","Turkish Decor")}

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
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                
              }}
            >
              <Typography
                className="rosaria-text"
                style={{ color: "#FFFFFF", marginRight: "10px" }}
                variant="body1"
              >
                View Gallery
              </Typography>
              <BsArrowRight
                style={{ color: "#FFFFFF", width: "25px", height: "25px" }}
              />
            </Box>
          </Stack>
          <Stack direction="column" alignItems="center"width="30%">
            <img
              style={{
               height: "280px",
                width: "380px",
                alignItems: "center",
              }}
              src="https://www.decorspectrum.com/wp-content/uploads/elementor/thumbs/New-Project-2022-12-18T164412.798-qempzcyj16jm292xi0fama5vfomw050fs3pk19as8s.jpg"
              alt="Leather Animal Decor"
            />

            <Typography
              style={{
                color: "#000000",
                fontFamily: "'Rosario', sans-serif",
                fontSize: "25px",
                fontStyle: "normal",
                fontWeight: 400,
                textAlign: "center",
                lineHeight: "45.5px",
              }}
            >
              Turkish Ceramics
            </Typography>
            <Typography
              variant="body1"
              className="rosaria-text"
              style={{
                padding: "2px",
                color: "#626262",
                fontSize:"15px",
                textAlign : 'center'
              }}
            >
              This user-friendly style of pottery.
            </Typography>
            <Box
                        onClick={() => navigateProductCategory("3","Ceramics")}

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
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                className="rosaria-text"
                style={{ color: "#FFFFFF", marginRight: "10px" }}
                variant="body1"
              >
                View Gallery
              </Typography>
              <BsArrowRight
                style={{ color: "#FFFFFF", width: "25px", height: "25px" }}
              />
            </Box>
          </Stack>

          {/* Repeat the above stack for other images and text */}
        </Stack>
      </Stack>
    </div>
    // <>nknkkk</>
  );
};

export default Headcard;
