import React, { useContext } from "react";
import items from "../Product/data";
import { ShopContext } from "../../components/context";
import Item from "../Item/Item";
import "./cart.css";

const Cart = () => {
  const { cartItems, addToCart, removeItemFromCart, calculateTotalPrice } =
    useContext(ShopContext);
  const totalAmount = calculateTotalPrice();
  return (
    <div className="cart-container">
      <h1>Your Items </h1>
      {items.map((item) => {
        if (cartItems[item.id] > 0) {
          return (
            <div className="cart-item" key={item.id}>
              <Item
                id={item.id}
                name={item.title}
                price={item.price}
                productImage={item.img}
                inCart
              />
              <div className="countHandler">
                <button
                  className="removebtn"
                  onClick={() => removeItemFromCart(item.id)}
                >
                  -
                </button>
                <input value={cartItems[item.id]} readOnly />
                <button
                  className="removebtn"
                  onClick={() => addToCart(item.id)}
                >
                  +
                </button>
              </div>
            </div>
          );
        }
      })}
      {Object.values(cartItems).some((value) => value >= 1) && (
        <p className="totalprice">Total price is {totalAmount}</p>
      )}
    </div>
  );
};

export default Cart;
