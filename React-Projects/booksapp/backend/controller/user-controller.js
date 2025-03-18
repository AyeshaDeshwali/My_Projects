const User = require("../model/user");
const bcryptjs = require("bcryptjs");
const signup = async (req, res) => {
  try {
    console.log("Incoming request data:", req.body);

    const { fullname, email, password } = req.body;

    if (!fullname || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashPassword = await bcryptjs.hash(password, 10);
    const newUser = new User({
      fullname: fullname,
      email: email,
      password: hashPassword,
    });

    await newUser.save();

    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error in signup:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    console.log(req.body); // Add this to debug incoming data

    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email }); // Await is required
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Compare the passwords
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // If match is successful
    res.status(200).json({
      message: "Login successful",
      user: { _id: user.id, fullname: user.fullname, email: user.email },
    });
  } catch (error) {
    console.error("Error in login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { signup, login };
