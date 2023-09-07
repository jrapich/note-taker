const express = require('express');
const fs = require('fs');
const path = require('path');
const routes = require('./routes/route.js');

const app = express();
const PORT = process.env.port || 3001;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//wildcard routes. ALL get, post, delete requests that don't meet the static middleware are routed to route.js for further routing
app.get("*", routes);
app.post("*", routes);
app.delete("*", routes);

app.listen(PORT, () =>
  console.log(`Serving static asset routes at http://localhost:${PORT}!`)
);