// Firebase import
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDvNIPC3X2Fmefepkg_kVCHIhMT2TPxrlc",
  authDomain: "connectzone-47999.firebaseapp.com",
  projectId: "connectzone-47999",
  storageBucket: "connectzone-47999.firebasestorage.app",
  messagingSenderId: "671302598801",
  appId: "1:671302598801:web:3d0a6c35bcf496c1323f30",
  measurementId: "G-E6LMHW5Y9M",
};

// Firebase initialize
const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

// Messaging ko export karna zaroori hai
export { messaging };

// FCM Token generate karne ka function
export const getFCMToken = async () => {
  try {
    const token = await getToken(messaging, {
      vapidKey:
        "BKKplNE2c93n0ufrKOB5L8MROpTORngUmdFCz6PBfNggR11Q3lCCgi3mm2bXvI1A-q8gbbuqoYWBdJgDsgGKG6Y",
    });
    if (token) {
      console.log("Firebase Token:", token);
      return token; // Token ko return karenge
    } else {
      console.log("No registration token available.");
      return null;
    }
  } catch (err) {
    console.error("Error while retrieving token:", err);
    return null;
  }
};

// Foreground notification ko handle karne ka function
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("Foreground notification received:", payload);
      resolve(payload);
    });
  });
