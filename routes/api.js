const api = require('express').Router();
const path = require('path');
const db = require("../db/db.json");

api.get("/notes", (req, res) => {
    res.json(db);
})

module.exports = api;