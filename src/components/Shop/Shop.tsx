import React, { useContext } from "react";
import PRODUCTS from "../data";
import "../Product/product.css";
import Product from "../Product/Product";
import { ShopContext } from "../ShopContext";

const Shop = React.memo(() => {
  const { cartItems } = useContext(ShopContext);
  return (
    <div>
      <h1>Aishu's Shop</h1>
      <div className="product--container">
        {PRODUCTS.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
});

export default Shop;
