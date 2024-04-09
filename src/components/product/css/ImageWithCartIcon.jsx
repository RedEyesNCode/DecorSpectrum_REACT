import React, { useState } from 'react';
import './ProductCSS.css'; // Import your CSS file for styling
import { BsCartCheckFill } from 'react-icons/bs';

const ImageWithCartIcon = ({ imageUrl, productName }) => {
  const [showCartIcon, setShowCartIcon] = useState(false);

  return (
    <div
      className="image-container"
      onMouseEnter={() => setShowCartIcon(true)}
      onMouseLeave={() => setShowCartIcon(false)}
    >
      <img
        src={imageUrl}
        alt={productName}
        style={{ width: "180px", height: "190px", objectFit: "cover" }}
      />
      {showCartIcon && (
        <div className="cart-icon">
            <BsCartCheckFill/>
        </div>
      )}
    </div>
  );
};

export default ImageWithCartIcon;
