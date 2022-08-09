const express = require("express");
const app = express();
const studentsName = require("../studentsName");

app.get("/", (req, res) => {
  res.json(studentsName);
});

app.post("/", (req, res) => {
  const student = {
    id: studentsName.length + 1,
    name: req.body.name,
  };

  studentsName.push(student);
  res.json(student);
});

module.exports = app;
