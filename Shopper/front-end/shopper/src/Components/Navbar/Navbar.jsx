import React, { useContext, useState } from "react";
import "./Navbar.css";
// import logo from "../Assets/logo.png";
// import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [menuOpen, setMenuOpen] = useState(false);

  const { getTotalCartItems } = useContext(ShopContext);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img
          src="https://t3.ftcdn.net/jpg/05/06/75/80/360_F_506758046_vb98YfQhYf6RmwPkgQQH80qPSIoNMYyW.jpg"
          alt="logo"
        />
        <p>SHOPPER</p>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
      </div>

      <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <li
          onClick={() => {
            setMenu("shop");
            setMenuOpen(false);
          }}
        >
          <Link to="/">Shop</Link>
          {menu === "shop" && <hr />}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
            setMenuOpen(false);
          }}
        >
          <Link to="/mens">Men</Link>
          {menu === "mens" && <hr />}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
            setMenuOpen(false);
          }}
        >
          <Link to="/womens">Women</Link>
          {menu === "womens" && <hr />}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
            setMenuOpen(false);
          }}
        >
          <Link to="/kids">Kids</Link>
          {menu === "kids" && <hr />}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/001/504/962/small/shopping-cart-icon-free-vector.jpg"
            alt="cart"
          />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
