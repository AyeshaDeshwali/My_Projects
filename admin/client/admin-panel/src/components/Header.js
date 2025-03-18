// src/components/Header.js
import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <h3>Admin Panel</h3>
      <div className="user-info">
        <span>Welcome, Admin</span>
      </div>
    </header>
  );
};

export default Header;
