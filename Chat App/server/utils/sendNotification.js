// send - notification.js;
const admin = require("firebase-admin");
const path = require("path");

// Firebase app ko dobara initialize hone se roknay ke liye check
if (!admin.apps.length) {
  const serviceAccount = require(path.resolve(
    __dirname,
    "../config/firebase-service-account.json"
  ));

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
} else {
  admin.app(); // already initialized app ko use karo
}

const sendNotification = async (fcmToken, title, body) => {
  const fcmTokenRegex = /^[a-zA-Z0-9:_-]+$/; // basic token pattern
  if (!fcmTokenRegex.test(fcmToken)) {
    console.error("Invalid FCM token format:", fcmToken);
    return { success: false, error: "Invalid FCM token format" };
  }

  const message = {
    token: fcmToken,
    notification: {
      title: title,
      body: body,
    },
  };

  try {
    const response = await admin.messaging().send(message);
    console.log("Notification sent successfully:", response);
    return { success: true, response: response };
  } catch (err) {
    console.error("Error sending notification:", err.message);
    return { success: false, error: err.message };
  }
};

module.exports = sendNotification;
