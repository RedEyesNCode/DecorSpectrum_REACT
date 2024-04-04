import React from "react";
import ProductItemRating from "./ProductItemRating";

const ProductItemRatingList = ({ products }) => {
  return (
    <div>
      {products.map((product, index) => (
        <ProductItemRating
          key={index}
          imageUrl={product.imageUrl}
          title={product.title}
          description={product.description}
          rating={product.rating}
        />
      ))}
    </div>
  );
};

export default ProductItemRatingList;
