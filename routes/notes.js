const noteRouting = require('express').Router();
const path = require('path');

//this will route all GET requests to /notes to the notes page
noteRouting.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
})

module.exports = noteRouting;