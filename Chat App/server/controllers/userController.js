const User = require("../model/userModel");
const bcrypt = require("bcrypt");
module.exports.register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const usernameCheck = await User.findOne({ username });
    if (usernameCheck)
      return res.json({ msg: "Username already used", status: false });
    const emailCheck = await User.findOne({ email });
    if (emailCheck)
      return res.json({ msg: "Email already used", status: false });
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      username,
      password: hashedPassword,
    });
    delete user.password;
    return res.json({ status: true, user });
  } catch (ex) {
    next(ex);
  }
};

module.exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    // Find the user by username
    const user = await User.findOne({ username });

    // If user not found
    if (!user) {
      return res.json({ msg: "Incorrect username or password", status: false });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);

    // If password is invalid
    if (!isPasswordValid) {
      return res.json({
        msg: "Incorrect username or password",
        status: false,
      });
    }

    // Successful login
    delete user.password;
    return res.json({ status: true, user });
  } catch (ex) {
    next(ex);
  }
};

module.exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({ _id: { $ne: req.params.id } }).select([
      "email",
      "username",
      "avatarImage",
      "_id",
    ]);
    return res.json(users);
  } catch (ex) {
    next(ex);
  }
};

module.exports.setAvatar = async (req, res, next) => {
  try {
    const userId = req.params.id; // Get the User ID from the params
    const { avatarImage } = req.body; // Extract 'avatarImage' from the request body

    // Validate the data
    if (!avatarImage) {
      return res.status(400).json({ msg: "Avatar image is required." });
    }

    // Update the user in the database
    const userData = await User.findByIdAndUpdate(
      userId,
      {
        isAvatarImageSet: true,
        avatarImage, // Update the avatarImage
      },
      { new: true } // This ensures the updated document is returned
    );

    if (!userData) {
      return res.status(404).json({ msg: "User not found." });
    }

    // Send the updated data back
    return res.json({
      isSet: userData.isAvatarImageSet,
      image: userData.avatarImage,
    });
  } catch (ex) {
    next(ex); // Handle exceptions
  }
};
module.exports.logOut = (req, res, next) => {
  try {
    const userId = req.params.id;
    console.log("Logging out user:", userId); // Debugging

    if (!userId) {
      return res.status(400).json({ msg: "User ID is required" });
    }

    // अगर यूज़र ऑनलाइन है तो उसे हटाओ
    if (global.onlineUsers.has(userId)) {
      console.log("User found in onlineUsers. Removing now...");
      global.onlineUsers.delete(userId);
    } else {
      console.log("User not found in onlineUsers.");
    }

    return res.status(200).json({ msg: "User logged out successfully." });
  } catch (error) {
    next(error);
  }
};
