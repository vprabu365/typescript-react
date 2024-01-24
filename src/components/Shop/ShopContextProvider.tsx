import React, { createContext, useState, ReactNode, useEffect } from "react";
import data from "./data";

type ContextProps = {
  cartItems: { [itemId: number]: number };
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  getItemCount: () => number;
  calculateTotalPrice: () => number;
  updateCartItemCount: (newAmount: number, itemId: number) => void;
};
const defaultValues: ContextProps = {
  cartItems: {},
  addToCart: () => {},
  removeFromCart: () => {},
  getItemCount: () => 0,
  calculateTotalPrice: () => 0,
  updateCartItemCount: () => {},
};

type ShopContextProviderProps = {
  children: ReactNode;
};

const getDefaultCart = () => {
  const cart: { [itemId: number]: number } = {};
  data.forEach((item) => {
    const itemId = item.id;
    if (itemId) {
      cart[itemId] = 0;
    }
  });
  return cart;
};

export const ShopContext = createContext(defaultValues);

export const ShopContextProvider: React.FC<ShopContextProviderProps> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : getDefaultCart();
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemId: number) => {
    setCartItems((current) => ({
      ...current,
      [itemId]: (current[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((current) => ({
      ...current,
      [itemId]: Math.max(0, (current[itemId] || 0) - 1),
    }));
  };

  const getItemCount = () => {
    const totalItems = Object.values(cartItems).reduce(
      (acc, curr) => acc + curr,
      0
    );
    return totalItems || 0;
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const calculateTotalPrice = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const itemInfo = data.find((item) => item.id === Number(itemId));
        totalAmount += cartItems[itemId] * itemInfo?.price;
      }
    }
    return parseFloat(totalAmount.toFixed(2));
  };

  return (
    <ShopContext.Provider
      value={{
        addToCart,
        removeFromCart,
        cartItems,
        getItemCount,
        calculateTotalPrice,
        updateCartItemCount,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
