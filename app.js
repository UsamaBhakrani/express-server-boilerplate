const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.json({ hello: "hello" });
});
app.get("/about", (req, res) => {
  res.json({ About: "About Page" });
});

app.all("*", (req, res) => {
  res.send("<h1>Resource Not Found</h1>").status(404);
});

app.listen(port, (req, res) => {
  console.log("Server Running on port " + port);
});
