const express = require('express');
const fs = require('fs');
const db = require("../db/db.json");

const api = express();

api.use(express.json());

api.get("/notes", (req, res) => {
    res.json(db);
})

api.post("/notes", (req, res) => {
    let newNote = req.body;
    let uuid = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    //line 15, i copied this random id generator from class module 11 Express, activity 19
    //line 18, fellow student Brian Whisler helped me better understand how object arrays work
    newNote["id"] = uuid();

    

    db.push(newNote);
    console.log(db);
    const newJson = JSON.stringify(db);
    console.log(newJson);
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