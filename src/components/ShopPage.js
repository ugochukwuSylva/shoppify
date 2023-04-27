import React from "react";
import "../styles/ShopPage.css";

import { PRODUCT_DATA } from "../helpers/ProductsArray";
import ProductsRender from "./shopProductsRender";

function ShopPage() {
  return (
    <div className="parentSHopContainer">
      <h2>Our Products</h2>
      <div className="productsContainer">
        {PRODUCT_DATA.map((product) => {
          return <ProductsRender data={product} key={product.id} />;
        })}
      </div>
    </div>
  );
}

export default ShopPage;
