const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// Initialize Express app
const app = express();
const port = 3006;

// Apply CORS middleware
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Define Mongoose Schema and Model
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

// get api...............................
app.get("/", async (req, res) => {
  try {
    const data = await User.find({});
    res.json({
      success: true,
      message: "data get successfully",
      data: data,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// post api..........................
app.post("/create", async (req, res) => {
  try {
    const data = new User(req.body);
    await data.save();
    res.json({
      success: true,
      message: "data save successfully",
      data: data,
    });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(400).json({ success: false, message: error.message });
  }
});

// put api..........................

app.put("/update", async (req, res) => {
  try {
    console.log(req.body);
    const { _id, ...updateData } = req.body;
    console.log(updateData);
    const data = await User.updateOne({ _id: _id }, updateData);
    res.json({
      success: true,
      message: "data update successfully",
      data: data,
    });
  } catch (error) {
    console.error("Error updating data:", error);
    res.status(400).json({ success: false, message: error.message });
  }
});

// delete api..................
app.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const data = await User.deleteOne({ _id: id });
    res.send({
      success: true,
      message: "data delete successfully",
      data: data,
    });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(400).json({ success: false, message: error.message });
  }
});

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/project")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
