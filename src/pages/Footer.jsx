import React from "react";
import {
  Container,
  Grid,
  Typography,
  Stack,
  Link,
  Divider,
} from "@mui/material";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { PiLinkDuotone } from "react-icons/pi";
import logo from "../images/logo-1.png";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#2C1A00", color: "#FFFFFF" }}>
      <Container sx={{ py: 10 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <img
              src={logo}
              alt="Example"
              style={{
                width: "150px",
                marginBottom: "1rem",
              }}
            />
            <Typography variant="h6">Follow Us</Typography>
            <div style={{ display: "flex" }}>
              <Link href="#" style={{ marginRight: "1rem" }}>
                <FaFacebook />
              </Link>
              <Link href="#" style={{ marginRight: "1rem" }}>
                <FaTwitter />
              </Link>
              <Link href="#">
                <PiLinkDuotone />
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6">Get Help</Typography>
            <Stack direction="column">
              <li>
                <Link href="#">Support</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Address</Link>
              </li>
              <li>
                <Link href="#">Primary Location</Link>
              </li>
            </Stack>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6">Get In Touch</Typography>
			<li>
			Question or feedback? We’d love to hear from you

				</li>
            
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6">Explore Support</Typography>

            <Stack direction="column">
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Shop</Link>
              </li>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Divider />
      <Typography variant="body2" sx={{ textAlign: "center", py: 2 }}>
        Designed by Megma IT
      </Typography>
    </footer>
  );
};

export default Footer;
