import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// ✅ Service Worker registration for Firebase Messaging
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/firebase-messaging-sw.js")
    .then((registration) => {
      console.log("Service Worker registered successfully:", registration);
    })
    .catch((err) => {
      console.error("Service Worker registration failed:", err);
    });
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
