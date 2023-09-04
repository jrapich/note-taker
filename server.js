const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.port || 3001;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/notes", (req, res) => {
    console.log(`GET request received at /notes`);
    res.sendFile("notes.html");
})


app.listen(PORT, () =>
  console.log(`Serving static asset routes at http://localhost:${PORT}!`)
);