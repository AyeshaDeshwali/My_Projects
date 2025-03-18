// routes/userRoutes.js
const express = require("express");
const User = require("../models/User");
const upload = require("../utils/multerConfig");
const router = express.Router();
const {
  addUser,
  deleteUser,
  updateUser,
  getAllUsers,
} = require("../controllers/userController");

router.get("/view/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found", user: null });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

router.get("/", getAllUsers);
// router.post("/add", addUser);

// Add user with image upload
router.post("/add", upload.single("image"), addUser);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

module.exports = router;
