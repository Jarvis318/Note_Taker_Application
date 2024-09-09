const path = require('path');
const express = require('express');
const routes = require('./controllers/index.js'); //Can only remove the name of the index.js if it's called index.js

const PORT = process.env.PORT || 3001;

const app = express();


//Middlewear
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use(routes); //Makes sure the routes are after the middelwear, so the request can go through the middelwear first, then sent back through the routes.


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
