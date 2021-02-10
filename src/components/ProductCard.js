import React from "react";

const ProductCard = (props) => {
  return (
    <div className="productCard">
      <div className="productImage">
        <img src={props.productImage} alt="Product" />
      </div>
      <div className="productType">{props.productType}</div>
      <div className="productName">{props.productName}</div>
    </div>
  );
};

export default ProductCard;
