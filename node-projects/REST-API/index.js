const express = require("express");
const app = express();
require("./db/connection");
const router = require("./routers/routes");
const port = 5001;
app.use(express.json());
app.use(router);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
