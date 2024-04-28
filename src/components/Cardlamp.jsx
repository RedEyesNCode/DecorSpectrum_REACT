import React from 'react';
import "./Cardlamp.css"

const Cardlamp = () => {
  return (
    <div className="container-fluid" style={{ color: '#CFD8DC' }}>
      <div className="row box-1" data-aos="flip-left" style={{display:'flex', flexDirection:'row', justifyContent:"center",alignItems:'center'}}>
        <div className="col-lg box-1a">
          <div>
            <h4 style={{fontSize:"28px", marginBottom:"10px"}}>New Lamp </h4>
            <h4 style={{fontSize:"28px", marginBottom:"10px"}}>Light Collection</h4>
            <h4 style={{ color: 'rgba(207, 216, 220, 0.932)', fontWeight: 'bold' ,fontSize:"28px",marginTop:"12px", marginBottom:"16px"}}>30% Off</h4>
            <a style={{padding:"5px",borderRadius:"10px"}} href="/" target="_top" className="btn btn-success">Read More</a>
          </div>
          <div>
            <img src="http://colourking.co.in/code/decor/photos/lamp_2-removebg-preview.png" alt="" width="150px" style={{ backgroundColor: 'transparent' }} />
          </div>
        </div>
        <div className="col-lg box-1a">
          <div>
            <h4 style={{fontSize:"28px", marginBottom:"10px"}}>New Lamp </h4>
            <h4 style={{fontSize:"28px", marginBottom:"10px"}}>Light Collection</h4>
            <h4 style={{ color: 'rgba(207, 216, 220, 0.932)', fontWeight: 'bold' ,fontSize:"28px",marginTop:"12px", marginBottom:"16px"}}>30% Off</h4>
            <a style={{padding:"5px",borderRadius:"10px"}} href="index.html" target="_top" className="btn btn-success">Read More</a>
          </div>
          <div>
            <img src="http://colourking.co.in/code/decor/photos/lamp_2-removebg-preview.png" alt="" width="150px" style={{ backgroundColor: 'transparent' }} />
          </div>
        </div>
        <div className="col-lg box-1a">
          <div>
            <h4 style={{fontSize:"28px", marginBottom:"10px"}}>New Lamp </h4>
            <h4 style={{fontSize:"28px", marginBottom:"10px"}}>Light Collection</h4>
            <h4 style={{ color: 'rgba(207, 216, 220, 0.932)', fontWeight: 'bold',fontSize:"28px",marginTop:"12px", marginBottom:"16px" }}>30% Off</h4>
            <a style={{padding:"5px",borderRadius:"10px"}} href="index.html" target="_top" className="btn btn-success">Read More</a>
          </div>
          <div>
            <img src="http://colourking.co.in/code/decor/photos/lamp_2-removebg-preview.png" alt="" width="150px" style={{ backgroundColor: 'transparent' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardlamp;
