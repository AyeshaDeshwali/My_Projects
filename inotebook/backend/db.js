const mongoose = require("mongoose");
const URL = "mongodb://localhost:27017/harry";
const connenctToMongodb = async (req, res) => {
  await mongoose.connect(URL);
  console.log("connected succssfully");
};
module.exports = connenctToMongodb;
