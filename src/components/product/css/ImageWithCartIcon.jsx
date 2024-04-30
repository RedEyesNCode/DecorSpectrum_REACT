import React, { useState } from 'react';
import './ProductCSS.css'; // Import your CSS file for styling
import { BsCartCheckFill } from 'react-icons/bs';
import { FaCartShopping } from 'react-icons/fa6';
import LocalStorageManager from '../../../session/LocalStorageManager';
import { LOCAL_STORAGE_KEY } from '../../../session/Constants';
import { useNavigate } from "react-router-dom"; // Import useHistory from react-router-dom

const ImageWithCartIcon = ({ imageUrl, productName,productID }) => {
  const [showCartIcon, setShowCartIcon] = useState(false);
  const navigate = useNavigate(); // Initialize useHistory

  const handleOpenProductDetail = (productID) => {
    const sessionProduct = { productId: productID };
    LocalStorageManager.setItem(
      LOCAL_STORAGE_KEY.PRODUCT_SESSION,
      sessionProduct
    );
    navigate("/product-detail");
  };

  return (
    <div
      className="image-container"
      onMouseEnter={() => setShowCartIcon(true)}
      onMouseLeave={() => setShowCartIcon(false)}
      onClick={() => handleOpenProductDetail()}

    >
      <img
        src={imageUrl}
        alt={productName}
        style={{ width: "350px", height: "250px",objectFit: "cover",borderTopLeftRadius : '40px',borderTopRightRadius : '40px' }}
      />
      {showCartIcon && (
        <div className="cart-icon">
            <FaCartShopping style={{width : '20px',height : '20px'}}/>
        </div>
      )}
    </div>
  );
};

export default ImageWithCartIcon;
