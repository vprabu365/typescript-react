import React from "react";
import "./product.css";
import items from "./data";
import Item from "../Item/Item";

const Product = () => {
  return (
    <div className="product-container">
      {items.map((item) => {
        return (
          <Item
            id={item.id}
            key={item.id}
            name={item.title}
            price={item.price}
            productImage={item.img}
          />
        );
      })}
    </div>
  );
};

export default Product;
