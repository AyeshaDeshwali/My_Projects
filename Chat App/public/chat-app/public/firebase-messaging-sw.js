// Firebase scripts import
importScripts(
  "https://www.gstatic.com/firebasejs/11.3.1/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/11.3.1/firebase-messaging-compat.js"
);

// Firebase initialization
firebase.initializeApp({
  apiKey: "AIzaSyDvNIPC3X2Fmefepkg_kVCHIhMT2TPxrlc",
  authDomain: "connectzone-47999.firebaseapp.com",
  projectId: "connectzone-47999",
  storageBucket: "connectzone-47999.appspot.com",
  messagingSenderId: "671302598801",
  appId: "1:671302598801:web:3d0a6c35bcf496c1323f30",
  measurementId: "G-E6LMHW5Y9M",
});

// Initialize Firebase messaging
const messaging = firebase.messaging();

// Handle background notifications
messaging.onBackgroundMessage((payload) => {
  console.log("Received background message: ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/firebase-logo.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
