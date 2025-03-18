const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/admin-panel";
const connectDB = async () => {
  try {
    const connected = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
};

module.exports = connectDB;
