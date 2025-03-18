const express = require("express");

const router = new express.Router();
const user = require("../models/main");
router.post("/createdata", async (req, res) => {
  try {
    const adding = new user(req.body);
    await adding.save();
    res.status(201).send(adding); // Send back the saved data
  } catch (error) {
    res.status(400).send(error); // Send error if any
  }
});

router.get("/getdata", async (req, res) => {
  try {
    const getdata = await user.find({}).sort({ user: 1 });
    res.status(201).send(getdata); // Send back the saved data
  } catch (error) {
    res.status(400).send(error); // Send error if any
  }
});

router.get("/getdata/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getdata = await user.findById({ _id });
    res.status(201).send(getdata); // Send back the saved data
  } catch (error) {
    res.status(400).send(error); // Send error if any
  }
});

router.patch("/update/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getdata = await user.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(201).send(getdata); // Send back the saved data
  } catch (error) {
    res.status(500).send(error); // Send error if any
  }
});

router.delete("/deletedata/:id", async (req, res) => {
  try {
    const userID = req.params.id;
    const getdata = await user.findByIdAndDelete(userID);
    res.status(201).send(getdata); // Send back the saved data
  } catch (error) {
    res.status(500).send(error); // Send error if any
  }
});

module.exports = router;
