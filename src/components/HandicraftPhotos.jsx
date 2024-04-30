import React from "react";
import "./HandicraftPhotos.css"
import image4 from "../images/card img2.webp"
import image3 from "../images/card img 4.webp"
import image1 from "../images/card img 5.webp"
import image2 from "../images/unique card 3.webp"

const HandicraftPhotos = () => {
  return (
    <div className="container-fluid">
      <div className="row handicraft-container" style={{display:"flex", flexDirection:"row"}}>
        
      <div className="col-lg-3 col-md-6 handicraft-photo-d">
          <img src={image4} alt="" style={{ width: "100%" }} />
          <div className="handicraft-title">
            <h2>This And That</h2>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 handicraft-photo-b">
          <img src={image1} alt="" style={{ width: "100%" }} />
          <div className="handicraft-title">
            <h2>Decorative Plates</h2>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 handicraft-photo-c">
          <img src={image3} alt="" style={{ width: "105%" }} />
          <div className="handicraft-title">
            <h2>Floor Lamps</h2>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 handicraft-photo-d">
          <img src={image4} alt="" style={{ width: "105%" }} />
          <div className="handicraft-title">
            <h2>This And That</h2>
          </div>
        </div>
        

      </div>
    </div>
  );
};

export default HandicraftPhotos;
