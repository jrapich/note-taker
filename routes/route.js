const express = require('express');

const landingRoute = require("./index.js");
const notesRoute = require("./notes.js");

const app = express();

app.use("/notes", notesRoute);
app.use("/index", landingRoute);
app.use("/", landingRoute);
app.use("*", landingRoute);

module.exports = app;