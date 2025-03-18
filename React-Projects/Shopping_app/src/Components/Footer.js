import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="connect">
          <h4> Connect With us</h4>
          <span className="footer-info">
            Reach us at{" "}
            <span className="under-line">hello@instruction-design.org</span> or
            through our <br />
            <span className="under-line">online contact form.</span>{" "}
          </span>
          <br />
          <div className="icons">
            <i className="fa-brands fa-facebook"></i>{" "}
            <i className="fa-brands fa-twitter"></i>{" "}
            <i className="fa-brands fa-pinterest pinterest-icon"></i>{" "}
            <i className="fa-brands fa-linkedin"></i>{" "}
            <i className="fa-brands fa-instagram"></i>
          </div>
          <br />
          <span className="footer-info">
            Here questions? Check our{" "}
            <span className="under-line">frequently asked questions.</span>
          </span>
        </div>
        <div className="get">
          <h4>Get Inspired Weekly</h4>
          <span className="footer-info">
            Join 1:86.187 designers get our <br />{" "}
            <span className="under-line">
              weekly inspiration and designs tips{" "}
            </span>
            in your inbox
          </span>

          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
            <button
              class="input-group-text footer-btn"
              id="inputGroup-sizing-default"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      {/* ////////////////////////////////////////////////////////////////////////////// */}
      <div class="center-footer-border"></div>

      {/* ///////////////////////////////////////////////////////////////// */}
      <div className="next">
        <div className="footer-list">
          <h5>RESOURCES</h5>
          <ul>
            <li>Shopping Guides</li>
            <li>Product Reviews</li>
            <li>Return Policies</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="footer-list">
          <h5>OFFERS</h5>
          <ul>
            <li>Festival Sales</li>
            <li>Exclusive Discounts</li>
            <li>Weekly Deals</li>
            <li>Clearance Sale</li>
          </ul>
        </div>
        <div className="footer-list">
          <h5>COMMUNITY</h5>
          <ul>
            <li>Forums</li>
            <li>Ambassadors</li>
            <li>Influencers Program</li>
            <li>Events</li>
          </ul>
        </div>
        <div className="footer-list">
          <h5>ACCOUNT</h5>
          <ul>
            <li>Login</li>
            <li>Create Account</li>
            <li>Order History</li>
            <li>Wishlist</li>
          </ul>
        </div>
        <div className="footer-list">
          <h5>CUSTOMER SUPPORT</h5>
          <ul>
            <li>Contact Us</li>
            <li>Shipping Information</li>
            <li>Return & Exchange</li>
            <li>Order Tracking</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
