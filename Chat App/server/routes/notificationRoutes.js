const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");

// Firebase Admin SDK ka setup
const serviceAccount = require("../config/firebase-service-account.json"); // Apni downloaded JSON file ka path

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

router.post("/save-token", (req, res) => {
  const { fcmToken } = req.body;
  console.log("Received FCM Token:", fcmToken);
  if (!fcmToken) {
    return res.status(400).json({ error: "Invalid or missing FCM token" });
  }
  // Aap token database me save kar sakte ho (MongoDB)
  res.status(200).json({ message: "Token received and saved" });
});

router.post("/send-notification", async (req, res) => {
  const { fcmToken, title, body } = req.body;
  const message = {
    token: fcmToken,
    notification: {
      title,
      body,
    },
  };

  try {
    const response = await admin.messaging().send(message);
    console.log("Notification sent successfully:", response);
    res.status(200).json({ message: "Notification sent", response });
  } catch (err) {
    console.error("Error sending notification:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
