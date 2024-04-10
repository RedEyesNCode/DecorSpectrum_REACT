import React from "react";
import "./Headbottom1.css";
import { RiTeamFill } from "react-icons/ri";
import { AiTwotoneLike } from "react-icons/ai";
import { MdPriceChange } from "react-icons/md";
import image12 from "../images/ic_blue_lamp.jpg";

import { Typography, Box, Stack } from "@mui/material";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { ImPriceTag } from "react-icons/im";
import { BiLike, BiPlay, BiStar, BiVideoPlus } from "react-icons/bi";
const Headbottom = () => {
  const videoId = "VIDEO_ID_HERE";

  return (
    <div style={{ backgroundColor: "#2C1A00" }}>
      <Stack direction="row" style={{ backgroundColor: "#2C1A00" }}>
        <div style={{ position: "relative", width: "70%" }}>
          <img
            width="100%"
            src={image12}
            title="YouTube video player"
            alt="YouTube video player"
            style={{ display: "block" }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="circle-wrapper">
              <div className="circle"></div>
              <BiPlay
                style={{
                  width: "50px",
                  height: "50px",
                  color: "#000000",
                  zIndex: "1",
                }}
              />
            </div>
          </div>
        </div>
        <Stack direction="column" style={{ marginLeft: "20px",padding : '80px' }}>
          <Typography
            className="rosaria-text"
            style={{ color: "#ffffff", fontSize: "48px", fontWeight: "300",marginBottom : '50px' }}
          >
            Passionate About Elegance and Beauty In Design
          </Typography>

          <Stack direction="row">
          <div
                style={{
                  position: "absolute",
                  backgroundColor: "#b39373",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  paddingBottom : '12px',
                  paddingTop: "15px",
                  overflow: "hidden",
                  width: "fit-content",
                  borderBottomLeftRadius: "5px",
                  borderBottomRightRadius: "5px",
                  borderTopLeftRadius: "40px",
                  borderTopRightRadius: "5px",
                }}
              >
                <BiStar
                  style={{
                    width: "30px",
                    height: "30px",
                    color: "#ffffff",
                  }}
                />
              </div>
            <Stack  direction="column" style={{ padding: "10px",marginLeft : '80px' }}>
              <Typography
                className="rosaria-text"
                style={{
                  fontSize: "26px",
                  fontStyle: "normal",
                  color: "#ffffff",
                }}
              >
                100 % Guarantee
              </Typography>
              <Typography
                variant="body1"
                style={{
                  color: "#ffffff",
                  fontSize: 20,
                  fontFamily: "Rosario-Regular",
                }}
              >
                We stand behind the quality of our products and assure you that
                you will fall in love with them.
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row">
          <div
                style={{
                  position: "absolute",
                  backgroundColor: "#b39373",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  paddingBottom : '12px',
                  paddingTop: "15px",
                  overflow: "hidden",
                  width: "fit-content",
                  borderBottomLeftRadius: "5px",
                  borderBottomRightRadius: "5px",
                  borderTopLeftRadius: "40px",
                  borderTopRightRadius: "5px",
                }}
              >
                <BiLike
                  style={{
                    width: "30px",
                    height: "30px",
                    color: "#ffffff",
                  }}
                />
              </div>
            <Stack  direction="column" style={{ padding: "10px",marginLeft : '80px' }}>
              <Typography
                className="rosaria-text"
                style={{
                  fontSize: "26px",
                  fontStyle: "normal",
                  color: "#ffffff",
                  textAlign : 'left'
                }}
              >
                Professional Staff
              </Typography>
              <Typography
                variant="body1"
                style={{
                  color: "#ffffff",
                  fontSize: 20,
                  fontFamily: "Poppins",
                }}
              >
                We are a family-owned business that respects the need of every customer.We provide friendly customer service and are always happy to help
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row">
          <div
                style={{
                  position: "absolute",
                  backgroundColor: "#b39373",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  paddingBottom : '12px',
                  paddingTop: "15px",
                  overflow: "hidden",
                  width: "fit-content",
                  borderBottomLeftRadius: "5px",
                  borderBottomRightRadius: "5px",
                  borderTopLeftRadius: "40px",
                  borderTopRightRadius: "5px",
                }}
              >
                <ImPriceTag
                  style={{
                    width: "30px",
                    height: "30px",
                    color: "#ffffff",
                  }}
                />
              </div>
            <Stack  direction="column" style={{ padding: "10px",marginLeft : '80px' }}>
              <Typography
                className="rosaria-text"
                style={{
                  fontSize: "26px",
                  fontStyle: "normal",
                  color: "#ffffff",
                }}
              >
                Affordable Prioe
              </Typography>
              <Typography
                variant="body1"
                style={{
                  color: "#ffffff",
                  fontSize: 20,
                  fontFamily: "Rosario-Regular",
                }}
              >
                We import directly from manufacturers without the help of any middle-men or agents.We therefore guarantee most competitive price in town.

              </Typography>
            </Stack>
          </Stack>
          
          <Typography
            style={{
              color: "#ffffff",
              fontSize: 20,
              marginLeft: "10px",
              padding : '25px'
            }}
          >
            Explore our huge selection of Exotic handmade Turkish Chandeliers,
            Lamps, Ceiling Lights and Ceramics. Choose from our fast-selling
            colors or customize your own unique combination of
          </Typography>
        </Stack>
      </Stack>
    </div>
  );
};

export default Headbottom;
