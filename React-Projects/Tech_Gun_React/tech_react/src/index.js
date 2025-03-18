// index.js
import React from "react";
import ReactDOM from "react-dom/client"; // Updated import
import "./index.css";
import App from "./App";

// Old code: ReactDOM.render(<App />, document.getElementById('root'));

// New code using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
