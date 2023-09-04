const routing = require('express').Router();

routing.get("/", (req, res) => {
    console.log(`GET request received at /notes`);
    res.sendFile(path.join(__dirname, "notes.html"));
})

module.exports = routing;