import React from "react";
import ProductItemRating from "./ProductItemRating";

const ProductItemRatingList = ({ products }) => {
  return (
    <div>
      {products.data.slice(0, 20).map((product, index) => (
        <ProductItemRating
          key={index}
          imageUrl={product.media && product.media.length > 0 ? product.media[0].link : null}
          title={product.productTable.productName}
          description={product.productTable.description}
          price={product.productTable.sellingPrice}
        />
      ))}
    </div>
  );
};

export default ProductItemRatingList;
