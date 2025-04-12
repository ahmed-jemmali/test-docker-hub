const express = require("express");

const app = express();

app.route("/0").get((req, res) => {
  res.send("hello world 0");
});

app.get("/1", (req, res) => res.send("hello world 1"));

app.get("/2", (req, res) => {
  return res.status(200).json({ message: "hello world 2" });
});

module.exports = app;
