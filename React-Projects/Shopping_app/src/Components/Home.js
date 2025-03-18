import React from "react";
import "./Home.css";
function content() {
  return (
    <>
      <div className="content" id="home">
        <div className="left-side">
          <div className="text">
            <p>interior Needs</p>
            <h2>Various new collections of</h2>
            <h2>furniture to decorate the corner of</h2>
            <h2>your house </h2>
            <button>Shop Now</button>{" "}
          </div>
          {/* <img
            src="https://png.pngtree.com/png-vector/20240131/ourmid/pngtree-png-isolated-house-png-image_11576774.png"
            alt=""
            className="homeImg"
          /> */}
          <img
            src="https://png.pngtree.com/png-vector/20240615/ourmid/pngtree-a-vector-illustration-of-small-house-with-porch-depicted-on-white-png-image_12642457.png"
            alt=""
            className="homeImg"
          />
        </div>
      </div>
    </>
  );
}

export default content;
