import "../styles/Navbar.css";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { shopContextProvider } from "./ShopCartLogic";

function Navbar() {
  const { totalQuantity } = useContext(shopContextProvider);

  return (
    <nav className="navbar">
      <div className="navContentBox">
        <h2>SHOPPIFY</h2>
        <div className="shopContainer">
          <Link to="/">Home</Link>
          <Link to="/shopping-page">Shop</Link>
          <Link to="/allAddedItems" className="cartImage_container">
            <FiShoppingCart size={30} />
            <span className="cartImage">{totalQuantity()}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
