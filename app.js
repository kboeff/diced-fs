/**
 * app.js
 */
const path = require('path');
const express = require('express');
const routes = require('./routes/index');

// Express app setup
const app = express();

// view engine
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

// use routes
app.use('/', routes);

module.exports = {
  app,
};
