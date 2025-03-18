const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const userRoutes = require("./routes/userRoutes");
const messageRoutes = require("./routes/messagesRoutes");
const socket = require("socket.io");
const admin = require("firebase-admin");
const fs = require("fs");
const notificationRoutes = require("./routes/notificationRoutes");

require("dotenv").config();

const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

if (!serviceAccountPath || !fs.existsSync(serviceAccountPath)) {
  console.error("Firebase service account key not found or invalid path.");
  process.exit(1); // Stop server if key is missing
}

const serviceAccount = require(serviceAccountPath);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use("/api/auth", userRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api", notificationRoutes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

const server = app.listen(process.env.PORT, () => {
  console.log(`Server started on Port ${process.env.PORT}`);
});

const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

global.onlineUsers = new Map();

const sendNotification = async (token, title, body) => {
  try {
    const payload = {
      notification: {
        title: title,
        body: body,
      },
      token: token,
    };

    const response = await admin.messaging().send(payload);
    console.log("Notification sent successfully:", response);
  } catch (error) {
    console.error("Error sending notification:", error);
  }
};

io.on("connection", (socket) => {
  global.chatSocket = socket;

  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", async (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      io.to(sendUserSocket).emit("msg-recieve", {
        message: data.message,
        from: data.from,
      });
    } else {
      try {
        const user = await mongoose.model("User").findById(data.to);
        if (user && user.fcmToken) {
          await sendNotification(user.fcmToken, "New Message", data.message);
        }
      } catch (error) {
        console.error("Failed to send push notification:", error);
      }
    }
  });

  socket.on("disconnect", () => {
    for (let [key, value] of global.onlineUsers.entries()) {
      if (value === socket.id) {
        console.log(`User ${key} disconnected, removing from onlineUsers.`);
        global.onlineUsers.delete(key);
      }
    }
  });
});
