const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/restapi")
  .then(() => {
    console.log("connection successfully");
  })
  .catch((error) => {
    console.log("no connect");
  });
