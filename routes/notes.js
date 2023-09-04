const noteRouting = require('express').Router();
const path = require('path');

noteRouting.get("*", (req, res) => {
    console.log(`GET request received at /notes`);
    res.sendFile(path.join(__dirname, "../public/notes.html"));
})

module.exports = noteRouting;