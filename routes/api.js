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
    const newJson = JSON.stringify(db);
    fs.writeFile("./db/db.json", newJson, (err) => {
        if (err) {
            console.error(err);
            res.sendStatus(500);
        } else {
            const response = {
                status: 'success',
                body: db
              };
            res.status(201).json(response);
            console.log("new note saved to note database");
        }
    })
})

api.delete("/notes/:id", (req, res)=>{
    //i had no clue how .filter() worked so I based this line on an answer I found on stackoverflow
    const newJson = JSON.stringify(db.filter(({id}) => id !== req.params.id));
    fs.writeFile("./db/db.json", newJson, (err) => {
        if (err) {
            console.error(err);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
            console.log(`note id ${req.params.id} deleted from note database`);
        }
    })
})

module.exports = api;