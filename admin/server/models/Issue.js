// models/Issue.js
const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ["open", "closed"], default: "open" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Issue", issueSchema);
