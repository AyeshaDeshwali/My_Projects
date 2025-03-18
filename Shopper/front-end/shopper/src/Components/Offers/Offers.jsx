import React from "react";
import "./Offers.css";
function Offers() {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offers-rigth">
        <img
          src="https://www.designstub.com/png-resources/wp-content/uploads/2023/02/Smiling-young-girl-png.png"
          style={{ width: "340px", height: "400px" }}
          alt=""
        />
      </div>
    </div>
  );
}

export default Offers;
