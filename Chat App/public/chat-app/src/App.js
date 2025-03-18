import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import SetAvatar from "./pages/SetAvatar";
import { messaging, getFCMToken, onMessageListener } from "./firebase";
import { getToken } from "firebase/messaging";

export default function App() {
  useEffect(() => {
    // Notification permission le rahe hain
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("Notification permission granted.");
        getFCMToken(); // Token lene ka function
      }
    });
  }, []);

  // Token generate aur backend bhejne ka function
  const getFCMToken = async () => {
    try {
      const token = await getToken(messaging, {
        vapidKey:
          "BKKplNE2c93n0ufrKOB5L8MROpTORngUmdFCz6PBfNggR11Q3lCCgi3mm2bXvI1A-q8gbbuqoYWBdJgDsgGKG6Y", // Apni vapid key yahan lagayein
      });
      if (token) {
        console.log("FCM Token:", token);
        sendTokenToBackend(token);
      } else {
        console.log("No registration token available.");
      }
    } catch (err) {
      console.error("Error while retrieving token:", err);
    }
  };

  const sendTokenToBackend = async (token) => {
    try {
      const response = await fetch("http://localhost:5000/api/save-token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fcmToken: token }),
      });
      if (response.ok) {
        console.log("Token sent to backend successfully!");
      } else {
        console.error("Failed to send token to backend.");
      }
    } catch (err) {
      console.error("Error sending token to backend:", err);
    }
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setAvatar" element={<SetAvatar />} />
        <Route path="/" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}
