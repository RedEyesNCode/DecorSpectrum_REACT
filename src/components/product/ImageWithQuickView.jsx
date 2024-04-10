import { Typography, Box, Stack } from "@mui/material";
import React from "react";
import '../product/css/ProductCSS.css'


function ImageWithQuickView({ item }) {
    const imageUrl = item.media && item.media[0] && item.media[0].link;

    return (
      <div
        style={{
          position: 'relative',
          width: '238px',
          height: '238px',
          overflow: 'hidden',
        }}
      >
        <img
          src={imageUrl}
          alt={item.productTable.productName}
          style={{
            display: 'block',
            width: '100%', // Use 100% to make it responsive
            height: '100%',
            objectFit: 'cover', // Ensures the image covers the area without distortion
            transition: 'transform 0.3s ease-in-out', // Smooth transition for zoom
          }}
          className="zoom-effect"
        />
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFF',
            fontSize: '18px',
            backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent overlay
            opacity: '0', // Initially hidden
            transition: 'opacity 0.3s ease-in-out', // Smooth transition for visibility
          }}
          className="quick-view"
        >
          Quick View
        </div>
      </div>
    );
  }

export default ImageWithQuickView