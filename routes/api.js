const express = require('express');
const fs = require('fs');
const db = require("../db/db.json");

const api = express();

api.use(express.json());

api.get("/notes", (req, res) => {
    res.json(db);
})

api.post("/notes", (req, res) => {

    db.push(req.body);
    console.log(db);
    const newJson = JSON.stringify(db);
    fs.writeFile("./db/db.json", newJson, (err) => {
        if (err) {
            console.error(err);
            res.status(500);
        } else {
            res.status(201);
            console.log("new note saved to note database");
        }
    })
})

module.exports = api;