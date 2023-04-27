import React from "react";
import { useContext } from "react";
import "../styles/shopProductsRender.css";
import { shopContextProvider } from "./ShopCartLogic";

function ProductsRender(props) {
  const { id, image, description, price } = props.data;
  const { addToCart, cartItems } = useContext(shopContextProvider);
  const cartNum = cartItems[id];

  return (
    <div className="contentAndButton">
      <div className="allProductInfo">
        <div className="imageContainer">
          <img src={image} alt="productImage" className="product-image" />
        </div>
        <h3>{description}</h3>
        <p>${price}</p>
      </div>
      <button className="cartButton" onClick={() => addToCart(id)}>
        Add to Cart {cartNum > 0 && <>({cartNum})</>}
      </button>
    </div>
  );
}

export default ProductsRender;
