let { MongoClient } = require("mongodb");
let url = "mongodb://localhost:27017";
let client = new MongoClient(url);

async function findData() {
  let database = await client.connect();
  let collections = await database.db("e-comm");
  let result = await collections.collection("products").find().toArray();
  console.log(result);
}
findData();

async function insert() {
  let data = await client.connect();
  let collections = await data.db("e-comm");
  let result = await collections.collection("products");
  let insert = await result.insertOne({
    name: "Ayesha",
    age: 20,
    city: "Merta",
  });
  console.log(insert);
}
insert();

async function update() {
  let data = await client.connect();
  let collections = await data.db("e-comm");
  let result = await collections.collection("products");
  let insert = await result.updateOne(
    { name: "Ayesha" },
    { $set: { name: "Aastana" } }
  );
  console.log(insert);
}
update();

async function deleteData() {
  let data = await client.connect();
  let collections = await data.db("e-comm");
  let result = await collections.collection("products");
  let insert = await result.deleteMany({ name: "Aastana" });
  console.log(insert);
}
deleteData();
