// Backend: Add Clear Chat Route in messagesRoutes.js
const {
  getAllMessages,
  addMessage,
  clearMessages,
  deleteChat,
} = require("../controllers/messageController");
const router = require("express").Router();

router.get("/getmsg", getAllMessages);
router.post("/addmsg", addMessage);
router.post("/clearchat", clearMessages); // New Route for Clearing Chat
router.delete("/deletechat/:userId", deleteChat);

module.exports = router;
