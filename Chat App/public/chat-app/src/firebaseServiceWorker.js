export const registerServiceWorker = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/firebase-messaging-sw.js")
      .then(function (registration) {
        console.log("Service Worker registered:", registration);
      })
      .catch(function (err) {
        console.log("Service Worker registration failed:", err);
      });
  }
};
