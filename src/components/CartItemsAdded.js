import React from "react";
import "../styles/CartItemsAdded.css";
import { useContext } from "react";
import { shopContextProvider } from "./ShopCartLogic";

function CartItemsAdded(props) {
  const { id, image, description, price } = props.data;
  const { cartItems, addToCart, removeFromCart, inputValueChanger } =
    useContext(shopContextProvider);
  const cartNum = cartItems[id];
  // const getTotalPrice = totalPrice();

  return (
    <div>
      <div className="itemsAddedContainer">
        <img src={image} alt="cart-items" />

        <div className="itemText">
          <h3>{description}</h3>
          <p>@ ${price} / Item</p>
          <div className="button_FieldContainer">
            <button className="btn-minus" onClick={() => removeFromCart(id)}>
              -
            </button>
            <input
              value={cartNum}
              onChange={(e) => inputValueChanger(Number(e.target.value), id)}
            />
            <button className="btn-plus" onClick={() => addToCart(id)}>
              +
            </button>
          </div>
          <p className="item_price">
            <span>Total:</span> ${cartItems[id] * price}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartItemsAdded;
