import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSignup.css";

const LoginSignup = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate(); // React Router ka hook use kiya

  const handleClose = () => {
    setIsVisible(false); // Form ko hide karne ke liye
    navigate("/"); // Home page par redirect
  };

  if (!isVisible) return null; // Form hide kar diya

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <i className="fa-solid fa-xmark close-icon" onClick={handleClose}></i>
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Enter Your Name..." />
          <input type="email" placeholder="Enter Your Email..." />
          <input type="password" placeholder="Enter Your Password..." />
        </div>
        <button>Continue</button>
        <div className="loginsignup-login">
          <p>
            Already have an account? <span>Login here</span>
          </p>
          <div className="loginsignup-agree">
            <input type="checkbox" />
            <p>By continue, I agree to the terms of use & privacy policy.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
