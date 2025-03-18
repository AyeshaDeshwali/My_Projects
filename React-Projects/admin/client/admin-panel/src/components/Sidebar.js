import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    // Fetch categories
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:5003/api/categories");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <aside className="sidebar">
      <div className="logo">
        <img
          src="https://cdn.vectorstock.com/i/500p/50/89/user-profile-or-my-account-avatar-login-icon-vector-31775089.jpg"
          alt="Logo"
          style={{ width: "70px", height: "70px", borderRadius: "50%" }}
        />
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <button
              className="dropdown-toggle btn"
              style={{ color: "white" }}
              onClick={() => setActiveCategory((prev) => !prev)}
            >
              Categories
            </button>
            {activeCategory && (
              <ul className="dropdown">
                {categories.map((category) => (
                  <li key={category._id}>
                    <Link to={`/categories/${category._id}`}>
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
