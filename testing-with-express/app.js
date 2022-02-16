const express = require("express");
const app = express();
const bodyParse = require("body-parser");

app.use(bodyParse.json());

const student = ["andri", "putra", "azman", "iki"];

app.get("/", (req, res) => {
    return res.json(students);
});

app.listen(() => {
    console.log("Server starting on port 3000")
});

module.exports = app;