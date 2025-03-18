// About.js
import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <h2 className="about">
        <span>About</span> US
      </h2>
      <img
        src="https://static.vecteezy.com/system/resources/previews/004/589/363/original/cartoon-man-and-woman-drinking-tea-looking-into-each-other-s-eyes-couple-love-winter-camping-vector.jpg"
        alt="About Us"
        className="aboutImg"
      />
      <div className="text">
        <h1 className="why">Why choose us?</h1>
        <p>
          Welcome to House Essentials! We specialize in providing top-quality
          products for every corner of your home. From stylish furniture and
          kitchen gadgets to elegant home decor, we offer a wide range of items.
        </p>
        <p>
          Our mission is to simplify your home improvement journey by offering a
          curated selection of essential and innovative products. We believe in
          delivering exceptional value and unmatched convenience to our
          customers.
        </p>
        <p style={{ marginTop: "10px" }}>
          At House Essentials, we are dedicated to enhancing your living space
          with carefully selected items designed to improve both function and
          style. Our commitment is to offer products that cater to your unique
          preferences and needs, ensuring that your home is both function
          beautiful and practical.
        </p>
        <p>
          Explore our collection and discover how we can help make your house a
          perfect home. Whether you're redecorating, upgrading, or simply
          looking for the right essentials, Whether you're redecorating House
          Essentials is here to provide you with the best solutions for every
          part of your home.
        </p>

        <button>Learn More</button>
      </div>

      <div class="icons-container">
        <div class="icons">
          <img
            src="https://t3.ftcdn.net/jpg/04/14/78/90/360_F_414789044_6xD0f4z9YcHfQimfnighWoUCIqgEJ66G.jpg"
            alt=""
          />
          <div class="info">
            <h3>Free Delivery</h3>
            <span>on all orders</span>
          </div>
        </div>
        <div class="icons">
          <img
            src="https://s3.amazonaws.com/cdn.fibreglast.com/images/0829_EasyReturns.jpg"
            alt=""
          />
          <div class="info">
            <h3>Easy Returns</h3>
            <span> moneyback garantee</span>
          </div>
        </div>
        <div class="icons">
          <img src="https://pngimg.com/d/gift_PNG100381.png" alt="" />
          <div class="info">
            <h3>Offer &amp; Gifts</h3>
            <span>on all orders</span>
          </div>
        </div>
        <div class="icons">
          <img
            src="https://img.freepik.com/premium-vector/secure-payment-credit-card-icon-with-shield-secure-transaction-vector-stock-illustration_100456-11325.jpg"
            alt=""
          />
          <div class="info">
            <h3>Secure Payments</h3>
            <span>protected by paypal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
