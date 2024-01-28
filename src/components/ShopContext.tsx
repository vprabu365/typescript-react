import React, { createContext, useState, ReactNode } from "react";
import PRODUCTS from "./data";

type ContextProps = {
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartItems: { [item: number]: number };
  getItemCount: () => number;
};

const defaultValues: ContextProps = {
  addToCart: () => {},
  removeFromCart: () => {},
  cartItems: {},
  getItemCount: () => 0,
};

const defaultShopItems = () => {
  const cart: { [item: number]: number } = {};
  PRODUCTS.forEach((product) => {
    const { id } = product;
    if (id) {
      cart[id] = 0;
    }
  });
  return cart;
};

export const ShopContext = createContext(defaultValues);

type MyProviderProps = {
  children: ReactNode;
};

export const ShopProvider: React.FC<MyProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState(defaultShopItems());

  const addToCart = (itemId: number) => {
    setCartItems((current) => ({
      ...current,
      [itemId]: current[itemId] + 1,
    }));
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((current) => ({
      ...current,
      [itemId]: current[itemId] - 1,
    }));
  };

  const getItemCount = () => {
    const items = Object.values(cartItems).reduce((acc, curr) => acc + curr, 0);
    return items;
  };

  return (
    <ShopContext.Provider
      value={{ cartItems, addToCart, removeFromCart, getItemCount }}
    >
      {children}
    </ShopContext.Provider>
  );
};
