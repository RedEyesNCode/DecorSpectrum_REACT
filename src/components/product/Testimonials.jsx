import React, { useEffect, useRef } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "./css/Testimonials.css";
import { Typography, Box, Stack } from "@mui/material";

const Testimonials = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        container.scrollLeft += container.offsetWidth; // Adjusted to scroll right
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
    <div className="box9" style={{ marginTop: "8vw", marginBottom: "5vw", position: "relative" }}>
      <Stack>
        <div className="items" ref={scrollContainerRef} style={{ display: "flex", overflowX: "auto" }}>

        <div class="card">
            <div class="media media-2x1 gd-primary">
              <img class="profile-image" src="http://colourking.co.in/code/decor/photos/testi%201.jpg" />
            </div>
            <div class="card-body">
              <h5 class="card-title">Delbert Simonas</h5>
              <div class="rating" id="rating">
                <span class="star" ></span>
                <span class="star" ></span>
                <span class="star" ></span>
                <span class="star" ></span>
                <span class="star"></span>
              </div>
              <p class="card-text">"Online reviews can make or break a customer's decision to make a purchase. Read about
              these customer review on site"</p>
            </div>
          </div>
          <div class="card">
            <div class="media media-2x1 gd-primary">
              <img class="profile-image" src="http://colourking.co.in/code/decor/photos/testi%201.jpg" />
            </div>
            <div class="card-body">
              <h5 class="card-title">Delbert Simonas</h5>
              <div class="rating" id="rating">
                <span class="star" ></span>
                <span class="star" ></span>
                <span class="star" ></span>
                <span class="star" ></span>
                <span class="star"></span>
              </div>
              <p class="card-text">"Online reviews can make or break a customer's decision to make a purchase. Read about
              these customer review on site"</p>
            </div>
          </div>

          <div class="card">
            <div class="media media-2x1 gd-primary">
              <img class="profile-image" src="http://colourking.co.in/code/decor/photos/testi%201.jpg" />
            </div>
            <div class="card-body">
              <h5 class="card-title">Delbert Simonas</h5>
              <div class="rating" id="rating">
                <span class="star" ></span>
                <span class="star" ></span>
                <span class="star" ></span>
                <span class="star" ></span>
                <span class="star"></span>
              </div>
              <p class="card-text">"Online reviews can make or break a customer's decision to make a purchase. Read about
              these customer review on site"</p>
            </div>
          </div>
          <div class="card">
            <div class="media media-2x1 gd-primary">
              <img class="profile-image" src="http://colourking.co.in/code/decor/photos/testi%201.jpg" />
            </div>
            <div class="card-body">
              <h5 class="card-title">Delbert Simonas</h5>
              <div class="rating" id="rating">
                <span class="star" ></span>
                <span class="star" ></span>
                <span class="star" ></span>
                <span class="star" ></span>
                <span class="star"></span>
              </div>
              <p class="card-text">"Online reviews can make or break a customer's decision to make a purchase. Read about
              these customer review on site"</p>
            </div>
          </div>
          

          {/* Additional testimonial cards go here */}
          
        </div>
      </Stack>
      {/* Left navigation button */}
      <button
        className="scroll-button left"
        onClick={handleScrollLeft}
        style={{ position: "absolute", color: "black", backgroundColor: "#02221F", padding: "5px", borderRadius: "25px", fontSize: "30px", left: "10px", top: "50%", transform: "translateY(-50%)" }}
      >
        <BsChevronLeft />
      </button>
      {/* Right navigation button */}
      <button
        className="scroll-button right"
        onClick={handleScrollRight}
        style={{ position: "absolute", color: "white", backgroundColor: "#02221F", padding: "5px", borderRadius: "25px", fontSize: "30px", right: "30px", top: "50%", transform: "translateY(-50%)" }}
      >
        <BsChevronRight />
      </button>
    </div>
  );
};

export default Testimonials;
