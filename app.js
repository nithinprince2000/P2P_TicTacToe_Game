const express = require("express");
const app = express();

app.use(express.static('public'));
app.set("view engine", "ejs");

app.get("/game", (req, res) => {
    res.render("index");
});

module.exports = app;