const express = require("express");
const router = express.Router();
const { signup, login } = require("../controller/user-controller");
router.post("/signup", signup); // This is correct for signup
router.post("/login", login); // This is correct for login

module.exports = router;
