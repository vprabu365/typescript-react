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
  const itemCount: any = getItemCount();

  return (
    <div className="cart-container">
      <h1>{itemCount > 0 ? "Your Items" : "Cart is empty"}</h1>
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
          <>
            Subtotal ({itemCount}
            {itemCount === 1 ? " item" : " items"}): <b>${totalAmount}</b>
          </>
        </div>
      )}
      {itemCount > 0 && (
        <button className="btn-checkout btn btn-warning">
          Proceed to checkout
        </button>
      )}
    </div>
  );
};

export default Cart;
