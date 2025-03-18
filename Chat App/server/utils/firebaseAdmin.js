// firebase-admin;.js

const admin = require("firebase-admin");
const fs = require("fs");

const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

if (!serviceAccountPath || !fs.existsSync(serviceAccountPath)) {
  console.error("Firebase service account key not found or invalid path.");
  process.exit(1); // Stop server if key is missing
}

const serviceAccount = require(serviceAccountPath);

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

  console.log("Firebase initialized successfully");
} catch (err) {
  console.error("Firebase initialization error:", err);
}

module.exports = admin;
