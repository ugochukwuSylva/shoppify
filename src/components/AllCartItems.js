import React from "react";
import "../styles/AllCartItems.css";
import { PRODUCT_DATA } from "../helpers/ProductsArray";
import { useContext } from "react";
import { shopContextProvider } from "./ShopCartLogic";
import CartItemsAdded from "./CartItemsAdded";
import { useNavigate } from "react-router-dom";

function AllCartItems() {
  const { cartItems, totalQuantity } = useContext(shopContextProvider);
  const navigate = useNavigate();
  return (
    <div>
      <div className="addedItemsContainer ">
        <div className="itemAdded">
          <h2>Your Cart Items:</h2>
          {PRODUCT_DATA.filter((el) => cartItems[el.id] !== 0).map(
            (product) => {
              return <CartItemsAdded data={product} key={product.id} />;
            }
          )}
        </div>
      </div>
      {totalQuantity !== 0 ? (
        <div className="btnContainer">
          <button
            className="shop_btn"
            onClick={() => navigate("/shopping-page")}
          >
            Continue Shopping
          </button>
          <button className="shop_btn">Checkout</button>
        </div>
      ) : (
        <h1>Your Cart Item is empty</h1>
      )}
    </div>
  );
}

export default AllCartItems;
// if (cartItems[product.id] !== 0) {
//   return <CartItemsAdded data={product} />;
// }
