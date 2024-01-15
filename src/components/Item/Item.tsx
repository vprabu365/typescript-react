import React, { useContext } from "react";
import { ShopContext } from "../../components/context";

type Props = {
  id: number;
  price: number;
  name: string;
  productImage: string;
  inCart?: boolean;
};

const Item: React.FC<Props> = ({ id, price, name, productImage, inCart }) => {
  const { cartItems, addToCart } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];

  return (
    <div className="item">
      <img src={productImage} alt="" />
      <div className="item-description">
        <span>
          <b>{name}</b>
        </span>
        <span>${price}</span>
      </div>
      {inCart ? (
        <></>
      ) : (
        <button
          className="btn btn-outline-dark addToCart-btn"
          onClick={() => addToCart(id)}
        >
          Add to cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
      )}
    </div>
  );
};

export default Item;
