import React, { useContext } from "react";
import data from "../Shop/data";
import Product from "../Shop/Product/Product";
import { ShopContext } from "../Shop/ShopContextProvider";
import "./cart.css";

const Cart = () => {
  const {
    cartItems,
    calculateTotalPrice,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getItemCount,
  } = useContext(ShopContext);
  const totalAmount = calculateTotalPrice();
  const itemCount = getItemCount();

  return (
    <div className="cart-container">
      <h1>Your Items</h1>
      {data.map((product) => {
        if (cartItems[product.id] > 0) {
          return (
            <div className="cart-item" key={product.id}>
              <Product {...product} showAddToCartButton={false} />
              <div className="quantity-controls">
                <button onClick={() => removeFromCart(product.id)}> - </button>
                <input
                  value={cartItems[product.id]}
                  onChange={(e) =>
                    updateCartItemCount(Number(e.target.value), product.id)
                  }
                />
                <button onClick={() => addToCart(product.id)}> + </button>
              </div>
            </div>
          );
        }
      })}
      {Object.values(cartItems).some((value) => value >= 1) && (
        <div className="totalprice">
          <p>
            Subtotal ({itemCount}
            {itemCount === 1 ? " item" : " items"}): <b>${totalAmount}</b>
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
