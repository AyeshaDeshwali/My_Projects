const messageModel = require("../model/messageModel"); // Make sure path is correct
const User = require("../model/userModel");

module.exports.addMessage = async (req, res, next) => {
  try {
    const { from, to, message } = req.body;

    // Make sure message is not empty
    if (!message || !message.trim()) {
      return res.status(400).json({ msg: "Message text is required" });
    }

    const data = await messageModel.create({
      message: { text: message },
      users: [from, to],
      sender: from,
    });

    if (data) {
      return res.json({ msg: "Message added successfully." });
    } else {
      return res.json({ msg: "Failed to add message to the database" });
    }
  } catch (ex) {
    next(ex);
  }
};

// // Controller to fetch messages between two users
module.exports.getAllMessages = async (req, res, next) => {
  try {
    const { from, to } = req.query;

    const messages = await messageModel
      .find({
        users: {
          $all: [from, to],
        },
      })
      .sort({ updatedAt: 1 });

    const projectedMessages = messages.map((msg) => {
      return {
        fromSelf: msg?.sender?.toString() === from, // Optional Chaining (?.) का उपयोग करें
        message: msg?.message?.text || "No Message", // Default वैल्यू if undefined
      };
    });

    res.json(projectedMessages);
  } catch (ex) {
    next(ex);
  }
};

module.exports.clearMessages = async (req, res, next) => {
  try {
    const { from, to } = req.body;

    await messageModel.deleteMany({
      // Change Message to messageModel
      users: { $all: [from, to] },
    });

    return res.json({ msg: "Chat cleared successfully." });
  } catch (ex) {
    next(ex);
  }
};

exports.deleteChat = async (req, res) => {
  try {
    console.log("Params:", req.params);
    console.log("Body:", req.body);

    const { userId } = req.params;
    const { currentUserId } = req.body;

    if (!userId || !currentUserId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    // 1️⃣ Remove the user from contacts list
    await User.findByIdAndUpdate(currentUserId, {
      $pull: { contacts: userId },
    });

    // 2️⃣ Delete Messages (Fix: Use `messageModel` instead of `Message`)
    await messageModel.deleteMany({
      users: { $all: [currentUserId, userId] },
    });

    res.status(200).json({ message: "Chat deleted successfully" });
  } catch (error) {
    console.error("Error deleting chat:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
