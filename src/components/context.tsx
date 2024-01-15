import React, { createContext, useState } from "react";
import items from "./Product/data";

type ContextProps = {
  cartItems: { [itemId: number]: number };
  addToCart: (itemId: number) => void;
  removeItemFromCart: (itemId: number) => void;
  getTotalItems: () => number;
  calculateTotalPrice: () => number;
};

const defaultValues: ContextProps = {
  cartItems: {},
  addToCart: () => {},
  removeItemFromCart: () => {},
  getTotalItems: () => 0,
  calculateTotalPrice: () => 0,
};

export const ShopContext = createContext<ContextProps>(defaultValues);
const getDefaultCart = () => {
  const cart: { [itemId: number]: number } = {};
  items.forEach((item) => {
    const itemId = item.id;
    if (itemId) {
      cart[itemId] = 0;
    }
  });
  return cart;
};

export const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId: number) => {
    setCartItems((curr) => ({
      ...curr,
      [itemId]: curr[itemId] + 1,
    }));
  };
  const removeItemFromCart = (itemId: number) => {
    setCartItems((curr) => ({
      ...curr,
      [itemId]: curr[itemId] - 1,
    }));
  };

  const getTotalItems = () => {
    const reducer = (total: number, quantity: number) => total + quantity;
    return Object.values(cartItems).reduce(reducer);
  };

  const calculateTotalPrice = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const itemInfo = items.find((item) => item.id === Number(itemId));
        console.log("333", itemInfo);
        totalAmount += cartItems[itemId] * itemInfo?.price;
      }
    }
    return parseFloat(totalAmount.toFixed(2));
  };

  return (
    <ShopContext.Provider
      value={{
        cartItems,
        addToCart,
        removeItemFromCart,
        getTotalItems,
        calculateTotalPrice,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
