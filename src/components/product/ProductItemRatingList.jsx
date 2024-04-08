import React from "react";
import ProductItemRating from "./ProductItemRating";

const ProductItemRatingList = ({ products }) => {
  return (
    <div>
      {products.data.slice(0, 6).map((product, index) => (
        <ProductItemRating
          key={index}
          imageUrl={product.media[0]}
          title={product.productTable.productName}
          description={product.productTable.description}
        />
      ))}
    </div>
  );
};

export default ProductItemRatingList;
