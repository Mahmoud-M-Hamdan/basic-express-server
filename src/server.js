'use strict';

const express = require('express');
require('dotenv').config();

const app = express();

const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middleware/logger');
const validator = require("./middleware/validator");

const PORT = process.env.PORT || 80001;



app.get('/', (req, res) => {
  res.status(200).send(' All is good in Express Town! 🏛️');
});




app.get('/error', (req, res, next) => {
  // next('You made an Error 🛑❗');
  throw new Error('You made an Error 🛑❗');
});

app.get('/person', (req,res) => {
    res.status(200).json({
      name: req.query.name  
    });
});

// this is a global middleware
app.use('*', notFoundHandler);
app.use(logger);
app.use(validator);
app.use(errorHandler);

function start() {
  app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
  });
}


module.exports = {
  server: app,
  start: start
}