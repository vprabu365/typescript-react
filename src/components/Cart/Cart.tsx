import React, { useContext } from "react";
import { ShopContext } from "../ShopContext";
import PRODUCTS from "../data";
import Product from "../Product/Product";

const Cart = () => {
  const { cartItems } = useContext(ShopContext);

  return (
    <div>
      <h1>Your Shopping Cart</h1>
      {PRODUCTS.map((product) => {
        if (cartItems[product.id] > 0) {
          return <Product key={product.id} {...product} />;
        }
      })}
    </div>
  );
};

export default Cart;
