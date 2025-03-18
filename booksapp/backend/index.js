const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bookRoute = require("./route/book-route");
const userRoute = require("./route/user-route");
const cors = require("cors");
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4001;
const URI = process.env.MongoDBURI;

// Parse JSON middleware
app.use(express.json());
app.use(cors());

// Base route
app.get("/", (req, res) => {
  res.send("Hello");
});

// MongoDB Connection
try {
  mongoose.connect(URI);
  console.log("Connected to MongoDB");
} catch (error) {
  console.error("Error connecting to MongoDB:", error);
}

// Use bookRoute
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.listen(PORT, () => {
  console.log("Server is running on", PORT);
});
