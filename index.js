const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(cors({ credentials: true, origin: "*" }));
app.use(bodyParser.json());

// getting-started.js

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb+srv://mariothung:ddD09R5jSwmSj55x@arsip-surat.g08ylwf.mongodb.net/?retryWrites=true&w=majority");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.get("/api", function (req, res) {
  res.json("Hello World!").status(200);
});

app.post("/login", function (req, res) {
  console.log(req.body);
  res.json(req.body).status(200);
});

app.listen(3000);
// console.log("blablaball");
