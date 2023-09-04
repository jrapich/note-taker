const express = require('express');

const landingRoute = require("./index.js");
const notesRoute = require("./notes.js");
const api = require("./api.js");

const app = express();

app.use("/api", api);
app.use("/notes", notesRoute);
app.use("/index", landingRoute);
app.use("/", landingRoute);
app.use("*", landingRoute);

module.exports = app;