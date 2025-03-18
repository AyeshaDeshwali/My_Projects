let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/e-comm");

let productSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const saveInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = new Product({
    name: "ayesha",
    age: 20,
  });
  const result = await data.save();
  console.log(result);
};
saveInDB();

let main = async () => {
  let ProductsModel = mongoose.model("products", productSchema);
  let data = await ProductsModel.find();
  console.log(data);
};
main();

const updateInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = await Product.updateOne(
    { name: "husain" },
    {
      $set: { name: "mo. husain" },
    }
  );
  console.log(data);
};
updateInDB();

const deleteInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = await Product.deleteOne({ name: "mo. husain" });
  console.log(data);
};
deleteInDB();
