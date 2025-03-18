let http = require("http");
http
  .createServer((req, res) => {
    res.write("hello world");
    res.end();
  })
  .listen(2000);

let http = require("http");
let port = 2000;
http
  .createServer((req, res) => {
    res.write(
      JSON.stringify({
        name: "ayesha",
        email: "ayesha@gmail.com",
        mobile: 879486299,
      })
    );
    res.end();
  })
  .listen(port, () => {
    console.log(`example http listening on port ${port}`);
  });

let express = require("express");
let app = express();
app.get("/", (req, res) => {
  res.send("<h1>this is a home page</h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1>this is a about page</h1>");
});
app.get("/content", (req, res) => {
  res.send("<h1>this is a content page</h1>");
});
app.listen(2001);

let express = require("express");
let app2 = express();
app2.get("/", (req, res) => {
  res.send("<h1>this is a home page</h1>");
});
app2.get("/about", (req, res) => {
  res.send(`<a href="content"><h1>go to content page<h1></a>`);
});
app2.get("/content", (req, res) => {
  res.send(`<a href="about"><h1>go to about page<h1></a`);
});
app2.listen(2002);
