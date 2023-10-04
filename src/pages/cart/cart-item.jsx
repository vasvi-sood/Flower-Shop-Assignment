import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: Rs. {price}</p>
        <div className="countHandler">
          <button className="addToCartBttn" onClick={() => addToCart(id)}> Remove from cart </button>
        </div>
      </div>
    </div>
  );
};
