import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img
          src="https://t3.ftcdn.net/jpg/05/06/75/80/360_F_506758046_vb98YfQhYf6RmwPkgQQH80qPSIoNMYyW.jpg"
          alt=""
        />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-socials-icon">
        <div className="footer-icons-container">
          <img
            src="https://icons.veryicon.com/png/o/miscellaneous/offerino-icons/instagram-53.png"
            alt=""
          />
        </div>
        <div className="footer-icons-container">
          <img
            src="https://i.pinimg.com/originals/f0/52/ca/f052cab81ccc4c36a62b805c4696f80d.png"
            alt=""
          />
        </div>
        <div className="footer-icons-container">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1384/1384023.png"
            alt=""
          />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>© Crafted with ❤️ by Ayesha | All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
