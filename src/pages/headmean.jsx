import React from "react";
import image11 from "../images/image-3.webp";
import image12 from "../images/ic_blue_lamp.jpg";
import image1 from "../images/image-14.jpg";
import imageLamp from "../images/ic_light_lamp.jpg";

const Headmean = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        margin: "25px",
      }}
    >
      <div style={{ position: "relative" }}>
        <img
          src={imageLamp}
          alt="First Image"
          style={{
            borderEndEndRadius: "20px",
            borderEndStartRadius: "20px",
            borderStartEndRadius: "20px",
            borderStartStartRadius: "50px",
            width: "100%",
            transform: "translateY(20%)",
            height: "350px", // Increased size
          }}
        />
        <img
          src={image12}
          alt="Second Image"
          style={{
            borderEndEndRadius: "20px",
            borderEndStartRadius: "50px",
            borderStartEndRadius: "50px",
            borderStartStartRadius: "20px",
            position: "absolute",
            bottom: 0,
            left: "90%",
            transform: "translateX(-30%)",
            width: "40%",
            height: "auto",
          }}
        />
        {/* Text Above Overlapping Image */}
        <p style={{ position: "absolute", bottom: "90px", left: "110%", transform: "translate(150%, -20%)", textAlign: "center", backgroundColor: "rgba(255, 255, 255, 0.8)", padding: "10px" }}>Your Text Above Overlapping Image</p>
        {/* Overlapping Image */}
        <img
          src={image1}
          alt="Overlapping Image"
          style={{
            borderEndEndRadius: "57px",
            borderEndStartRadius: "20px",
            borderStartEndRadius: "20px",
            borderStartStartRadius: "20px",
            position: "absolute",
            width: "150%", // Increased size
            height: "auto",
            bottom: "-80%",
            left: "110%",
          }}
        />
      </div>
      <div style={{ marginTop: "60px" }}>
        <p>Handicraft Importers Since 2009</p>
      </div>
    </div>
  );
};

export default Headmean;
