import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img
              src="https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-3d/512/Waving-Hand-3d-Default-icon.png"
              alt=""
            />
          </div>
          <p>collection</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>
            {" "}
            <h4> Letest Collection </h4>
          </div>
          <img
            className="right-icon-in-btn"
            src="https://www.pngall.com/wp-content/uploads/13/White-Arrow-PNG-Pic.png"
            alt=""
          />
        </div>
      </div>
      <div className="hero-right">
        <img
          src="https://clipart-library.com/image_gallery2/Shopping-Download-PNG.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
