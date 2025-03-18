// // index.js
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const multer = require("multer");
const path = require("path");
const app = express();
const User = require("./models/User");
const upload = multer({ dest: "uploads/" });
const categoryRoutes = require("./routes/categoryRoutes");
const subCategoryRoutes = require("./routes/subCategoryRoutes");

const port = 5003;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // Serve uploaded files as static

// Multer storage setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Ensure the "uploads" folder exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // File name with extension
  },
});

// Use the multer middleware for file upload
app.post("/api/users", upload.single("image"), async (req, res) => {
  console.log("Request Body:", req.body); // Check request body
  console.log("Uploaded File:", req.file); // Check uploaded file

  const { name, email, phone, age, password, gender, bio, isAdmin, image } =
    req.body;
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

  // Create user with the form data including the image path
  const user = new User({
    name,
    email,
    phone,
    age,
    password,
    gender,
    bio,
    isAdmin,
    image: imageUrl,
  });
  console.log(req.body); // This will log the request body to check if the data is correct

  res.json({
    message: "User added successfully",
    user: user,
  });
  if (!phoneNumber) {
    return res.status(400).json({ message: "Phone number is required." });
  }
  const existingUser = await User.findOne({ phoneNumber });
  if (existingUser) {
    return res.status(400).json({ message: "Phone number already exists." });
  }
  try {
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating user", error: err.message });
  }
});

// Routes
app.use("/api/users", userRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/sub_category", subCategoryRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
