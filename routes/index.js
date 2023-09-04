const routing = require('express').Router();

routing.get("/", (req, res) => {
    console.log(`GET request received at /index or /`);
    res.sendFile(path.join(__dirname, "../public/index.html"));
})

module.exports = routing;