const express = require('express');

const landingRoute = require("./index");
const notesRoute = require("./notes");

const app = express();

app.use("/notes", notesRoute);
app.use("/index", landingRoute);
app.use("/", landingRoute);
app.use("*", landingRoute);