const express = require("express");
const app = express();
const studentsName = require("../studentsName");

// Récupérer la liste complète
app.get("/", (req, res) => {
  res.json(studentsName);
});

app.get("/:id", (req, res) => {
  const { id } = req.params;
  const student = studentsName.find((student) => student.id === Number(id));

  if (student) {
    res.json(`${student.name}`);
  } else {
    res.status(404).send("Not found");
  }
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
