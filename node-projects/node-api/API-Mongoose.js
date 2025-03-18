const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;
mongoose.connect("mongodb://localhost:27017/e-comm");
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  city: String,
});
const Product = mongoose.model("Product", productSchema);
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    let result = await Product.find({});
    res.send(result);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Server Error");
  }
});

app.post("/create", async (req, res) => {
  try {
    let result = await Product.create(req.body);
    res.send(result);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Server Error");
  }
});

app.put("/:id", async (req, res) => {
  try {
    let result = await Product.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.send(result);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Server Error");
  }
});

app.delete("/:id", async (req, res) => {
  try {
    let result = await Product.deleteOne({ _id: req.params.id });
    res.send(result);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
