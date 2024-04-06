import React, { useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css"; 

const ImageSlider = ({ images }) => {
  const settings = useMemo(() => ({    
    dots: false,
    infinite: true,
    speed: 11,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  }), []);

  return (
    <div className="image-slider">
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id}>
            <img src={image.bannerLink} alt={image.alt} style={{height : "300px",objectFit : "cover"}} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
