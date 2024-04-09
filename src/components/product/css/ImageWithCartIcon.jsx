import React, { useState } from 'react';
import './ProductCSS.css'; // Import your CSS file for styling
import { BsCartCheckFill } from 'react-icons/bs';
import { FaCartShopping } from 'react-icons/fa6';

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
        style={{ width: "250px", height: "250px",objectFit: "cover" }}
      />
      {showCartIcon && (
        <div className="cart-icon">
            <FaCartShopping/>
        </div>
      )}
    </div>
  );
};

export default ImageWithCartIcon;
