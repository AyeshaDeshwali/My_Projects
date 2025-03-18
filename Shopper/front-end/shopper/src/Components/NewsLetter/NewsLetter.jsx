import React from "react";
import "./NewLetter.css";
function NewsLetter() {
  return (
    <div className="newletter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newletter and stay updated</p>
      <div>
        <input type="email" placeholder="Enter Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default NewsLetter;
