import React from "react";
import "./HandicraftPhotos.css"

const HandicraftPhotos = () => {
  return (
    <div className="container-fluid">
      <div className="row handicraft-container" style={{display:"flex", flexDirection:"row"}}>
        
        <div className="col-lg-3 col-md-6 handicraft-photo-b">
          <img src="https://androidbucket3577.s3.ap-south-1.amazonaws.com/1714215624099_0L1A1264JPEG-clear-1024x769.jpg.webp" alt="" style={{ width: "105%" }} />
          <div className="handicraft-title">
            <h2>Decorative Plates</h2>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 handicraft-photo-c">
          <img src="https://androidbucket3577.s3.ap-south-1.amazonaws.com/1714215624099_0L1A1264JPEG-clear-1024x769.jpg.webp" alt="" style={{ width: "105%" }} />
          <div className="handicraft-title">
            <h2>Floor Lamps</h2>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 handicraft-photo-d">
          <img src="https://androidbucket3577.s3.ap-south-1.amazonaws.com/1714215624099_0L1A1264JPEG-clear-1024x769.jpg.webp" alt="" style={{ width: "105%" }} />
          <div className="handicraft-title">
            <h2>This And That</h2>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 handicraft-photo-d">
          <img src="https://androidbucket3577.s3.ap-south-1.amazonaws.com/1714215624099_0L1A1264JPEG-clear-1024x769.jpg.webp" alt="" style={{ width: "105%" }} />
          <div className="handicraft-title">
            <h2>This And That</h2>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HandicraftPhotos;
