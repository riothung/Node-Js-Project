const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors({ credentials: true, origin: "*" }));
app.use(bodyParser.json());

app.get("/api", function (req, res) {
  res.json("Hello World!").status(200);
});

app.post("/login", function (req, res) {
  console.log(req.body);
  res.json(req.body).status(200);
});

app.listen(3000);
// console.log("blablaball");
