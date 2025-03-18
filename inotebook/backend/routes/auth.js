const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs"); // Import bcrypt for password hashing'
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");
const JWT_SECRET = "ayeshaisagoodgirl";

// Route 1: Create a new user
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Enter a valid password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Check if user with same email already exists
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        // Correct condition: user should be found
        return res
          .status(400)
          .json({ error: "Sorry, a user with this email already exists" });
      }

      // Hash the password before saving
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt); // Hashing password with 10 salt rounds

      // Create user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      const data = {
        user: {
          id: user.id,
        },
      };
      let authtoken = jwt.sign(data, JWT_SECRET);
      console.log(authtoken);

      res.json({ authtoken });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// post ------- /api/auth/login......................

router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "password cannot be blank").isLength({ min: 5 }),
  ],
  async (req, res) => {
    console.log("Login attempt:", req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "Please try to login with credentials" });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res
          .status(400)
          .json({ error: "Please try to login with credentials...." });
      }

      const data = {
        user: {
          id: user.id,
        },
      };
      let authtoken = jwt.sign(data, JWT_SECRET);
      console.log(authtoken);

      res.json({ authtoken });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// ROUTE 3  -------get loggedin user details user: POST  /api/auth/getuser  login required......................

router.post("/getuser", fetchuser, async (req, res) => {
  try {
    let userId = req.user.id;

    // Await the result of findById
    const user = await User.findById(userId).select("-password"); // Use await here

    // Check if user exists
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Send user data (will not include password)
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
