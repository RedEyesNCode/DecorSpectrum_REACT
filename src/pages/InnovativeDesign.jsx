import React from 'react';
import "./InnovativeDesign.css"
const HandicraftBox = ({ imgSrc, altText, width, aosAnimation }) => {
  return (
    <div className={`box5a-photo ${aosAnimation}`}>
      <img src={imgSrc} width={width} alt={altText} />
    </div>
  );
};

const InnovativeDesign = () => {
  return (
    // <div className="container-fluid">
    //   <div className="row box5">
    //     <div className="col-lg-7 box5a" style={{display:"flex",alignItems:"center"}}>
    //       <HandicraftBox imgSrc="http://colourking.co.in/code/decor/photos/handicarft%202.webp" altText="Handicraft 3" width="100%" aosAnimation="slide-up" />
    //       <HandicraftBox imgSrc="http://colourking.co.in/code/decor/photos/box%202a.webp" altText="Box 2a" width="70%" aosAnimation="slide-right" />
    //       <br /><br />
    //       <div className="box5-heading" data-aos="slide-up">Handicraft Importers Since 2009 </div><br /><br /><br />
    //     </div>
    //     <div className="col-lg-5 box5b">
    //       <div style={{ marginLeft: '13%' }} data-aos="slide-left">
    //         <span className="box5-heading">Innovative Design is Our Passion </span><br />
    //         <p style={{ fontSize: '20px', color: 'rgba(207, 216, 220, 0.932)' }}>
    //           <br /> Vivamus nulla montes vehicula ex semper mus finibus quis eleifend facilisi.
    //           Turpis consectetur pulvinar auctor vestibulum quisque. Velit quisque ante interdum
    //           consectetuer habitant blandit.
    //         </p>
    //         <br />
    //         <a href="index.html" className="btn btn-success" target="_top">View Collection</a>
    //         <br /><br />
    //       </div>

    //       <div className="box5b-photo" data-aos="slide-left">
    //         <img src="http://colourking.co.in/code/decor/photos/box%202a.webp" alt="Handicraft 2" height="auto" width="100%" />
    //       </div>
    //     </div>
       
    //   </div>
    // </div>
    <>Innovative Design</>
  );
};

export default InnovativeDesign;
