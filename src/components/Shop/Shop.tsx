import React from "react";
import data from "./data";
import Product from "./Product/Product";
import "./shop.css";

const Shop = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <div className="shop-container">
        {data.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
};

export default Shop;
