import React, { useState } from "react";
import { signupUser, loginUser } from "../api";
import "../styles/AuthForm.css"; // Make sure this path is correct

const AuthForm = ({ onAuthSuccess }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      let response;
      if (isSignup) {
        response = await signupUser(formData);
      } else {
        response = await loginUser(formData);
      }

      if (response.token) {
        localStorage.setItem("token", response.token);
        localStorage.setItem("user", JSON.stringify(response.user));
        onAuthSuccess(response.user);
      } else {
        setError(response.message || "Authentication failed");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <h2>{isSignup ? "Sign Up" : "Login"}</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        {isSignup && (
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="auth-input"
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="auth-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="auth-input"
        />
        <button type="submit" className="auth-button">
          {isSignup ? "Sign Up" : "Login"}
        </button>
      </form>
      {error && <p className="auth-error">{error}</p>}
      <p>
        {isSignup ? "Already have an account?" : "Don't have an account?"}
        <span className="auth-toggle" onClick={() => setIsSignup(!isSignup)}>
          {isSignup ? " Login" : " Sign Up"}
        </span>
      </p>
    </div>
  );
};

export default AuthForm;
