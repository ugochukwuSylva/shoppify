import React, { createContext, useState } from "react";
import { PRODUCT_DATA } from "../helpers/ProductsArray";
export const shopContextProvider = createContext(null);

const getItemIDs = function () {
  let cart = {};
  for (let i = 1; i < PRODUCT_DATA.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

function ShopCartLogic(props) {
  const [cartItems, setCartItems] = useState(getItemIDs());

  const totalQuantity = function () {
    let total = 0;
    for (const cart in cartItems) {
      if (cartItems[cart] > 0) {
        PRODUCT_DATA.find((product) => product.id === +cart);
        // total += allProductCart.price * cartItems[cart];
        total += cartItems[cart];
      }
    }
    return total;
  };
  // const allProductAddedToCart = function () {
  //   setCartItems((prev) => {
  //     let total = 0;
  //     for (let [_, value] of Object.entries(prev)) {
  //       total += Number(`${value}`);
  //     }
  //     return total;
  //   });
  // };

  const addToCart = function (itemId) {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = function (itemId) {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const inputValueChanger = function (newAmount, itemId) {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const getReusableElement = {
    cartItems,
    addToCart,
    removeFromCart,
    inputValueChanger,
    totalQuantity,
  };

  return (
    <shopContextProvider.Provider value={getReusableElement}>
      {props.children}
    </shopContextProvider.Provider>
  );
}

export default ShopCartLogic;
