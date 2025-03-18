// controllers/userController.js
const User = require("../models/User");

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });

    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }
};

// // Add a user
// exports.addUser = async (req, res) => {
//   try {
//     const { name, age, email, password } = req.body;
//     if (!email || !password) {
//       return res
//         .status(400)
//         .json({ message: "Email and password are required." });
//     }
//     const newUser = new User({ name, age, email, password });
//     await newUser.save();
//     res.status(201).json(newUser);
//   } catch (error) {
//     res.status(500).json({ message: "Error creating user", error });
//   }
// };

// Add a user
exports.addUser = async (req, res) => {
  try {
    const {
      name,
      email,
      age,
      password,
      phoneNumber,
      gender,
      image,
      bio,
      address,
    } = req.body;

    // Check if the email already exists
    const existingUserByEmail = await User.findOne({ email });
    if (existingUserByEmail) {
      return res.status(400).json({ message: "Email already exists." });
    }

    // Check if the phone number already exists
    const existingUserByPhone = await User.findOne({ phoneNumber });
    if (existingUserByPhone) {
      return res.status(400).json({ message: "Phone number already exists." });
    }

    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    // Create a new user
    const newUser = new User({
      name,
      email,
      age,
      password,
      phoneNumber,
      gender,
      bio,
      image,
      address,
      image: imageUrl,
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Error creating user", error });
  }
};

// Delete a user
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error });
  }
};

// Update a user
// exports.updateUser = async (req, res) => {
//   try {
//     const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     if (!updatedUser)
//       return res.status(404).json({ message: "User not found" });
//     res.json(updatedUser);
//   } catch (error) {
//     res.status(500).json({ message: "Error updating user", error });
//   }
// };

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    // Handle optional file upload
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : undefined;

    // Extract other fields from the body
    const { name, email, phoneNumber, age, password, gender, bio, isAdmin } =
      req.body;

    // Build the update object
    const updateData = {
      name,
      email,
      phoneNumber,
      age,
      password,
      gender,
      bio,
      isAdmin,
    };

    // Add image URL if new image is uploaded
    if (imageUrl) {
      updateData.image = imageUrl;
    }

    // Find and update the user
    const updatedUser = await User.findByIdAndUpdate(id, updateData, {
      new: true, // Return updated document
      runValidators: true, // Run schema validations
    });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User updated successfully", updatedUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating user", error: error.message });
  }
};

exports.getPaginatedUsers = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const search = req.query.search || "";

  const query = {
    name: { $regex: search, $options: "i" }, // Case-insensitive search
  };

  try {
    const totalUsers = await User.countDocuments(query);
    const users = await User.find(query)
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({
      users,
      totalPages: Math.ceil(totalUsers / limit),
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching paginated users", error });
  }
};
