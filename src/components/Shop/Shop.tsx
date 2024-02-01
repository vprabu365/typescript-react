import React, { useContext } from "react";
import MultiSelect from "../MultiSelect/MultiSelect";
import Product from "./Product/Product";
import { ShopContext } from "./ShopContextProvider";
import "./shop.css";

const Shop = () => {
  const { sortedProducts } = useContext(ShopContext);

  return (
    <div>
      <h1>Enjoy Shopping!</h1>
      <MultiSelect />
      <div className="shop-container">
        {sortedProducts.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
};

export default Shop;
