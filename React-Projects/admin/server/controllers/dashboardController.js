// controllers/dashboardController.js

const User = require("../models/User"); // Import the User model
const Transaction = require("../models/Transaction"); // Import the Transaction model
const Issue = require("../models/Issue"); // Import the Issue model

exports.getDashboardData = async (req, res) => {
  try {
    // Get the count of users
    const userCount = await User.countDocuments();

    // Get the count of transactions
    const transactionCount = await Transaction.countDocuments();

    // Calculate total revenue from transactions
    const revenue = await Transaction.aggregate([
      { $group: { _id: null, totalRevenue: { $sum: "$amount" } } },
    ]);

    // Get the count of issues
    const issueCount = await Issue.countDocuments();

    // Prepare the response data
    const data = {
      users: userCount,
      transactions: transactionCount,
      revenue: revenue.length > 0 ? revenue[0].totalRevenue : 0,
      issues: issueCount,
    };

    // Send the data as a response
    res.json(data);
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    res.status(500).json({ message: "Failed to fetch data" });
  }
};
