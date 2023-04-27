import React from "react";
import "../styles/Home.css";
import homeBackground from "../assets/Background.jpg";

function Home() {
  return (
    <div className="home">
      <div
        className="homeBoxGrid"
        style={{ backgroundImage: `url(${homeBackground})` }}
      >
        <h3>
          Shopping made easy
          <br /> with
          <br /> <span className="shoppifyText">shoppify</span>
        </h3>
      </div>
    </div>
  );
}

export default Home;
