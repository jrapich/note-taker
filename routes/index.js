const indexRouting = require('express').Router();
const path = require('path');

indexRouting.get("*", (req, res) => {
    console.log(`GET request received at /index or /`);
    res.sendFile(path.join(__dirname, "../public/index.html"));
})

module.exports = indexRouting;