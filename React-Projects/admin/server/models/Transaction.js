// models/Transaction.js
const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  // Add other fields as necessary
});

module.exports = mongoose.model("Transaction", transactionSchema);
