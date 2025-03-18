import React from "react";
import "./Breadcrums.css";

function Breadcrums(props) {
  const { product = {} } = props;

  return (
    <div className="breadcrums">
      HOME{" "}
      <img
        src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
        alt="arrow"
        style={{ width: "10px", height: "10px" }}
      />{" "}
      SHOP{" "}
      <img
        src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
        alt="arrow"
        style={{ width: "10px", height: "10px" }}
      />{" "}
      {product.category}{" "}
      <img
        src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
        alt="arrow"
        style={{ width: "10px", height: "10px" }}
      />{" "}
      {product.name}
    </div>
  );
}

export default Breadcrums;
