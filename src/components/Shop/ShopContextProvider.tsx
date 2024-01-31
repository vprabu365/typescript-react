import React, { createContext, useState, ReactNode, useEffect } from "react";
import data from "./data";

export const sortProductsByPrice = (products: any[], order: string) => {
  const sortedProducts = [...products];

  if (order === "lowToHigh") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (order === "highToLow") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  return sortedProducts;
};

type ContextProps = {
  cartItems: { [itemId: number]: number };
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  getItemCount: () => number | { [key: string]: any };
  calculateTotalPrice: () => number;
  updateCartItemCount: (newAmount: number, itemId: number) => void;
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  sortedProducts: any[];
  handleSortChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};
const defaultValues: ContextProps = {
  cartItems: {},
  addToCart: () => {},
  removeFromCart: () => {},
  getItemCount: () => 0,
  calculateTotalPrice: () => 0,
  updateCartItemCount: () => {},
  sortBy: "",
  setSortBy: () => {},
  sortedProducts: [],
  handleSortChange: () => {},
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

  const [sortBy, setSortBy] = useState("");

  const [sortedProducts, setSortedProducts] = useState(data);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    setSortedProducts(sortProductsByPrice(data, sortBy));
  }, [cartItems, data, sortBy]);

  const addToCart = (itemId: number) => {
    setCartItems((current: any) => ({
      ...current,
      [itemId]: (current[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((current: any) => ({
      ...current,
      [itemId]: Math.max(0, (current[itemId] || 0) - 1),
    }));
  };

  const getItemCount = () => {
    const totalItems = Object.values(cartItems).reduce(
      (acc: any, curr: any) => acc + curr,
      0
    );
    return totalItems || 0;
  };

  const updateCartItemCount = (newAmount: number, itemId: number) => {
    setCartItems((prev: any) => ({ ...prev, [itemId]: newAmount }));
  };

  const calculateTotalPrice = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const itemInfo = data.find((item) => item.id === Number(itemId));
        if (itemInfo) {
          totalAmount += cartItems[itemId] * itemInfo.price;
        }
      }
    }
    return parseFloat(totalAmount.toFixed(2));
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
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
        handleSortChange,
        sortedProducts,
        sortBy,
        setSortBy,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
