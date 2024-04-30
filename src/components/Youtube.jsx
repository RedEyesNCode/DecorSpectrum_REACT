import React, { useEffect, useRef } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Slider from "react-slick";

const YouTubeSlider = () => {
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
          <div className="items" style={{ width:"100%", display: "flex", gap:"20px" }}>
  
            <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/ikzX3f8fUIs?si=U3919eD_YP7TPFtW&amp;controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/ikzX3f8fUIs?si=U3919eD_YP7TPFtW&amp;controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/ikzX3f8fUIs?si=U3919eD_YP7TPFtW&amp;controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/ikzX3f8fUIs?si=U3919eD_YP7TPFtW&amp;controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/ikzX3f8fUIs?si=U3919eD_YP7TPFtW&amp;controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/ikzX3f8fUIs?si=U3919eD_YP7TPFtW&amp;controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/ikzX3f8fUIs?si=U3919eD_YP7TPFtW&amp;controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
  
            {/* Repeat this card structure for additional testimonials */}
  
          </div>
        </div>
        {/* Left navigation button */}
        <button
          className="scroll-button left"
          onClick={handleScrollLeft}
          style={{ position: "absolute", color: "black", backgroundColor: "#A0A0A0", padding: "5px", borderRadius: "25px", fontSize: "13px", left: "30px", top: "50%", transform: "translateY(-50%)" }}
        >
          <BsChevronLeft />
        </button>
        {/* Right navigation button */}
        <button
          className="scroll-button right"
          onClick={handleScrollRight}
          style={{ position: "absolute", color: "black", backgroundColor: "#A0A0A0", padding: "5px", borderRadius: "25px", fontSize: "13px", right: "30px", top: "50%", transform: "translateY(-50%)" }}
        >
          <BsChevronRight />
        </button>
      </div>
    );
};

export default YouTubeSlider;
