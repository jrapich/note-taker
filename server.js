const express = require('express');
const fs = require('fs');

const app = express();
const PORT = process.env.port || 3001;

app.use(express.static('public'));


app.listen(PORT, () =>
  console.log(`Serving static asset routes at http://localhost:${PORT}!`)
);