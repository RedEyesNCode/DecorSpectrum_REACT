import React from "react";
import "./HandicraftPhotos.css"

const HandicraftPhotos = () => {
  return (
    <div className="container-fluid">
      <div className="row handicraft-container" style={{display:"flex", flexDirection:"row"}}>
        
        <div className="col-lg-3 col-md-6 handicraft-photo-b">
          <img src="http://colourking.co.in/code/decor/photos/card%20img%205.webp" alt="" style={{ width: "105%" }} />
          <div className="handicraft-title">
            <h2>Decorative Plates</h2>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 handicraft-photo-c">
          <img src="http://colourking.co.in/code/decor/photos/card%20img%204.webp" alt="" style={{ width: "105%" }} />
          <div className="handicraft-title">
            <h2>Floor Lamps</h2>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 handicraft-photo-d">
          <img src="http://colourking.co.in/code/decor/photos/card%20img2.webp" alt="" style={{ width: "105%" }} />
          <div className="handicraft-title">
            <h2>This And That</h2>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 handicraft-photo-d">
          <img src="http://colourking.co.in/code/decor/photos/card%20img2.webp" alt="" style={{ width: "105%" }} />
          <div className="handicraft-title">
            <h2>This And That</h2>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HandicraftPhotos;
