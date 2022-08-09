const express = require("express");
const app = express();
const studentsName = require("../studentsName");

app.get("/", (req, res) => {
  res.json(studentsName);
});

module.exports = app;
