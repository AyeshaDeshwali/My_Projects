let { MongoClient } = require("mongodb");
let url = "mongodb://localhost:27017";
let client = new MongoClient(url);
let database = "e-comm";
const PORT = 8000;
let express = require("express");
let app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  let dbConnect = await client.connect();
  let data = await dbConnect.db(database);
  let collection = await data.collection("products");
  let findData = await collection.find({}).toArray();
  console.log(findData);
});

app.post("/", async (req, res) => {
  let dbConnect = await client.connect();
  let data = await dbConnect.db(database);
  let collection = await data.collection("products");
  let insertData = await collection.insertOne({ name: "ayesha", age: 20 });
  console.log(insertData);
  res.send("data is inserted");
});

app.put("/", async (req, res) => {
  let dbConnect = await client.connect();
  let data = await dbConnect.db(database);
  let collection = await data.collection("products");
  let update = await collection.updateOne(
    { name: "ayesha" },
    { $set: { name: "Aashiya" } }
  );
  console.log(update);
  res.send("data is updated");
});

app.delete("/", async (req, res) => {
  let dbConnect = await client.connect();
  let data = await dbConnect.db(database);
  let collection = await data.collection("products");
  let deleteData = await collection.deleteOne({ name: "Ayesha" });
  console.log(deleteData);
  res.send("data deleted.");
});

app.listen(PORT, () => {
  console.log(`Server is running: ${PORT}`);
});
