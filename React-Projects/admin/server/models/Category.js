const mongoose = require("mongoose");

// Category Schema
const categorySchema = new mongoose.Schema({
  name: { type: String, required: true }, // Category name
  createdAt: { type: Date, default: Date.now }, // Timestamp
});

// Export the model
module.exports = mongoose.model("Category", categorySchema);
