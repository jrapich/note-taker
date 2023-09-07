const indexRouting = require('express').Router();
const path = require('path');

//this will route all GET requests with any path specified that is NOT /notes or /api, to the default landing page
indexRouting.get("*", (req, res) => {
    console.log(`GET request received at /index or /`);
    res.sendFile(path.join(__dirname, "../public/index.html"));
})

module.exports = indexRouting;