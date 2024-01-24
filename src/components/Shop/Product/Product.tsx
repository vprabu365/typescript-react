import React, { useContext } from "react";
import { ShopContext } from "../ShopContextProvider";
import "./product.css";
type Props = {
  id: number;
  title: string;
  price: number;
  img: string;
  showAddToCartButton?: boolean;
};
const Product = ({
  id,
  title,
  price,
  img,
  showAddToCartButton = true,
}: Props) => {
  const { addToCart, cartItems } = useContext(ShopContext);

  return (
    <div className="product">
      <img src={img} alt={title} />
      <div className="details-container">
        <h2>{title}</h2>
        <p>${price}</p>
      </div>

      {showAddToCartButton && (
        <button
          className="check btn btn-outline-secondary"
          onClick={() => addToCart(id)}
        >
          {cartItems[id] > 0
            ? `Added to cart (${cartItems[id]})`
            : "Add to cart"}
        </button>
      )}
    </div>
  );
};

export default Product;
