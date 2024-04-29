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
      <div className="scroll_div_container" ref={scrollContainerRef} style={{ overflowX: "hidden" }}>
        <div className="items" style={{ display: "flex" }}>

          <div className="card">
            <div className="media media-2x1 gd-primary">
              <img className="profile-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL9Yfk5l9vJOi2tHDW7ROt2cbDWXJONs-MWw&s" alt="testimonial" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Delbert Simonas</h5>
              <div className="rating" id="rating">
                <span className="star" ></span>
                <span className="star" ></span>
                <span className="star" ></span>
                <span className="star" ></span>
                <span className="star"></span>
              </div>
              <p className="card-text">"Online reviews can make or break a customer's decision to make a purchase. Read about these customer review on site"</p>
            </div>
          </div>
          <div className="card">
            <div className="media media-2x1 gd-primary">
              <img className="profile-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL9Yfk5l9vJOi2tHDW7ROt2cbDWXJONs-MWw&s" alt="testimonial" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Delbert Simonas</h5>
              <div className="rating" id="rating">
                <span className="star" ></span>
                <span className="star" ></span>
                <span className="star" ></span>
                <span className="star" ></span>
                <span className="star"></span>
              </div>
              <p className="card-text">"Online reviews can make or break a customer's decision to make a purchase. Read about these customer review on site"</p>
            </div>
          </div>
          <div className="card">
            <div className="media media-2x1 gd-primary">
              <img className="profile-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnn84jCxET9T1zwIdRdGESUXS_hdXyW-GH-g&s" alt="testimonial" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Delbert Simonas</h5>
              <div className="rating" id="rating">
                <span className="star" ></span>
                <span className="star" ></span>
                <span className="star" ></span>
                <span className="star" ></span>
                <span className="star"></span>
              </div>
              <p className="card-text">"Online reviews can make or break a customer's decision to make a purchase. Read about these customer review on site"</p>
            </div>
          </div>
          <div className="card">
            <div className="media media-2x1 gd-primary">
              <img className="profile-image" src="https://st2.depositphotos.com/1037987/42002/i/450/depositphotos_420021494-stock-photo-portrait-female-owner-gift-store.jpg" alt="testimonial" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Delbert Simonas</h5>
              <div className="rating" id="rating">
                <span className="star" ></span>
                <span className="star" ></span>
                <span className="star" ></span>
                <span className="star" ></span>
                <span className="star"></span>
              </div>
              <p className="card-text">"Online reviews can make or break a customer's decision to make a purchase. Read about these customer review on site"</p>
            </div>
          </div>
          <div className="card">
            <div className="media media-2x1 gd-primary">
              <img className="profile-image" src="https://images.unsplash.com/photo-1484517186945-df8151a1a871?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxNzI5MjU4fHxlbnwwfHx8fHw%3D" alt="testimonial" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Delbert Simonas</h5>
              <div className="rating" id="rating">
                <span className="star" ></span>
                <span className="star" ></span>
                <span className="star" ></span>
                <span className="star" ></span>
                <span className="star"></span>
              </div>
              <p className="card-text">"Online reviews can make or break a customer's decision to make a purchase. Read about these customer review on site"</p>
            </div>
          </div>
          <div className="card">
            <div className="media media-2x1 gd-primary">
              <img className="profile-image" src="https://images.unsplash.com/photo-1484517186945-df8151a1a871?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxNzI5MjU4fHxlbnwwfHx8fHw%3D" alt="testimonial" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Delbert Simonas</h5>
              <div className="rating" id="rating">
                <span className="star" ></span>
                <span className="star" ></span>
                <span className="star" ></span>
                <span className="star" ></span>
                <span className="star"></span>
              </div>
              <p className="card-text">"Online reviews can make or break a customer's decision to make a purchase. Read about these customer review on site"</p>
            </div>
          </div>

          {/* Repeat this card structure for additional testimonials */}

        </div>
      </div>
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
