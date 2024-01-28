import React, { useContext, useEffect } from "react";
import { ShopContext } from "../ShopContext";

type Props = {
  id: number;
  img: string;
  title: string;
  price: number;
};

const Product = React.memo(({ id, img, title, price }: Props) => {
  const { cartItems, addToCart } = useContext(ShopContext);

  // console.log("veda", cartItems[id]);
  let itemCount = cartItems[id] || 0;
  console.log("dasd", itemCount);

  // Log whenever cartItems change
  // useEffect(() => {
  //   // console.log("CartItems changed:", cartItems);
  // }, [cartItems]);
  // console.log("vyas", cartItems);

  return (
    <div className="product-details" key={id}>
      <img src={img} />
      <h2>{title}</h2>
      <p>${price}</p>
      <button className="btn btn-outline-dark" onClick={() => addToCart(id)}>
        Add to cart
        {/* {cartItems[id] > 0 ? `Added to Cart: ${getItemCount()}` : "Add to Cart"} */}
      </button>
    </div>
  );
});

export default Product;
