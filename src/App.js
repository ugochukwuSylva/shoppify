import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ShopPage from "./components/ShopPage";
import ShopCartLogic from "./components/ShopCartLogic";
import AllCartItems from "./components/AllCartItems";

function App() {
  return (
    <div className="App">
      <ShopCartLogic>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shopping-page" element={<ShopPage />} />
            <Route path="/allAddedItems" element={<AllCartItems />} />
          </Routes>
          <Footer />
        </Router>
      </ShopCartLogic>
    </div>
  );
}

export default App;
