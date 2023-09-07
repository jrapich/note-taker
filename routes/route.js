const express = require('express');

//import the routes from file that will handle them
const landingRoute = require("./index.js");
const notesRoute = require("./notes.js");
const api = require("./api.js");

const app = express();

//forward to the various files which handles the routes
app.use("/api", api);
app.use("/notes", notesRoute);
app.use("/index", landingRoute);
app.use("/", landingRoute);
app.use("*", landingRoute);

module.exports = app;