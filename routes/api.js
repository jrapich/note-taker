const express = require('express');
const fs = require('fs');
//import the notes database json file
const db = require("../db/db.json");

const api = express();

api.use(express.json());

//any GET request to /api/notes will return the entire stored note database in JSON
//the front end uses this to access any stored notes and display them on the page
api.get("/notes", (req, res) => {
    res.json(db);
})

//any POST request to /api/notes will save the body of the request to the nodes.db file, with a simple unique ID
//this is the main method the front end will use to submit notes to the server for storage when the user clicks the save button
api.post("/notes", (req, res) => {
    let newNote = req.body;
    let uuid = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    //line 15, i copied this random id generator from class module 11 Express, activity 19
    //line 18, fellow student Brian Whisler helped me better understand how object arrays work
    newNote["id"] = uuid();

    
    //the current notes db is read. the body of the POST request is pushed to the notes db array, and re saved as a new file to db.json
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

//this handles any DELETE request to /api/notes
//the front end will submit requests to delete notes to the /api/notes/<ID here> path
//this will successfully delete the note from the note db, but will not remove it from the front end display
//I havent been able to debug yet why this bug is occurring on the front end yet
api.delete("/notes/:id", (req, res)=>{
    //i had no clue how .filter() worked so I based this line on an answer I found on stackoverflow
    //since the notes db is stored as an array, this will create a new array without the specified note to delete
    //and write the new notes db to db.json
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