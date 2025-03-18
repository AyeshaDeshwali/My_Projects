const express = require("express");
const getBook = require("../controller/book-controller"); // Correct path
const router = express.Router();

// Define routes
router.get("/", getBook);

module.exports = router;
