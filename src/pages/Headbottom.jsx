import React from "react";
import "./Headbottom1.css";
import { RiTeamFill } from "react-icons/ri";
import { AiTwotoneLike } from "react-icons/ai";
import { MdPriceChange } from "react-icons/md";

import { Typography, Box, Stack } from "@mui/material";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { ImPriceTag } from "react-icons/im";
const Headbottom = () => {
  const videoId = "VIDEO_ID_HERE";

  return (
    <div style={{ backgroundColor: "#2C1A00" }}>
      <Stack direction="row" style={{ backgroundColor: "#2C1A00" }}>
        <iframe
          width="70%"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <Stack direction="column" style={{ margin: "10px" }}>
          <Typography
            variant="h2"
            style={{ color: "#ffffff", fontFamily: "Rosario-Regular" }}
          >
            Passionate About Elegance and Beauty In Design
          </Typography>

          <Stack direction="row">
            <ImPriceTag
              style={{
                width: "30px",
                height: "30px",
                color: "#ffffff",
                marginTop: "25px",
              }}
            />
            <Stack direction="column" style={{ padding: "10px" }}>
              <Typography
                variant="h6"
                style={{
                  color: "#ffffff",
                  fontSize: 25,
                  fontFamily: "Rosario-Regular",
                  marginLeft: "10px",
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
                  marginLeft: "10px",
                }}
              >
                We stand behind the quality of our products and assure you that you will fall in love with them.
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row">
            <ImPriceTag
              style={{
                width: "30px",
                height: "30px",
                color: "#ffffff",
                marginTop: "25px",
              }}
            />
            <Stack direction="column" style={{ padding: "10px" }}>
              <Typography
                variant="h6"
                style={{
                  color: "#ffffff",
                  fontSize: 25,
                  fontFamily: "Rosario-Regular",
                  marginLeft: "10px",
                }}
              >
                Professional Staff 
              </Typography>
              <Typography
                variant="body1"
                style={{
                  color: "#ffffff",
                  fontSize: 20,
                  fontFamily: "Rosario-Regular",
                  marginLeft: "10px",
                }}
              >
                We are a family-owned business that respects the needs of every customer. We provide friendly customer service and are always happy to help.
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row">
            <ImPriceTag
              style={{
                width: "30px",
                height: "30px",
                color: "#ffffff",
                marginTop: "25px",
              }}
            />
            <Stack direction="column" style={{ padding: "10px" }}>
              <Typography
                variant="h6"
                style={{
                  color: "#ffffff",
                  fontSize: 25,
                  fontFamily: "Rosario-Regular",
                  marginLeft: "10px",
                }}
              >
                Afforadable Price
              </Typography>
              <Typography
                variant="body1"
                style={{
                  color: "#ffffff",
                  fontSize: 20,
                  fontFamily: "Rosario-Regular",
                  marginLeft: "10px",
                }}
              >
                We import directly from the manufacturers without the help of any middle-men or agents. We therefore guarantee the most competitive price in town.
              </Typography>
            </Stack>
            
          </Stack>
          <Typography
                variant="body1"
                style={{
                  color: "#ffffff",
                  fontSize: 20,
                  fontFamily: "Rosario-Regular",
                  marginLeft: "10px",
                }}
              >
               Explore our huge selection of Exotic handmade Turkish Chandeliers, Lamps, Ceiling Lights and Ceramics. Choose from our fast-selling colors or customize your own unique combination of 
              </Typography>
        </Stack>
      </Stack>
    </div>
  );
};

export default Headbottom;
