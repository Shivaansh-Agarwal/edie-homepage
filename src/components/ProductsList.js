import React from "react";
import ProductCard from "./ProductCard";
import imgProd1 from "../assets/smarthome.jpg";
import imgProd2 from "../assets/onboard.png";
import imgProd3 from "../assets/booking.png";
import imgProd4 from "../assets/juice-product.png";

const ProductsList = () => {
  const productsData = [
    {
      productImage: imgProd1,
      productType: "Full stack application",
      productName: "Smart home dashboard",
    },
    {
      productImage: imgProd2,
      productType: "UX/UI design",
      productName: "Onboard application",
    },
    {
      productImage: imgProd3,
      productType: "Mobile application",
      productName: "Booking system",
    },
    {
      productImage: imgProd4,
      productType: "Front End application",
      productName: "Juice product homepage",
    },
  ];
  return (
    <div className="productsList">
      <div id="productsListTitle">Good design means good business</div>
      <div className="productsListWrapper">
        {productsData.map((product, index) => (
          <ProductCard
            productImage={product.productImage}
            productType={product.productType}
            productName={product.productName}
            key={index}
          />
        ))}
      </div>
      <div id="productsSeeMore">
        <a href="/">See More</a>
        <span className="material-icons">arrow_right_alt</span>
      </div>
    </div>
  );
};

export default ProductsList;
