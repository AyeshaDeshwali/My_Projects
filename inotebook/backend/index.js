const express = require("express");
const connenctToMongodb = require("./db");
const port = 5002;
const app = express();
app.use(express.json());
connenctToMongodb();
app.get("/getdata", (req, res) => {
  console.log(req.body);

  res.send("Hello World");
});
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));
app.listen(port, () => {
  console.log("server is running on port ", port);
});
// 53............;
