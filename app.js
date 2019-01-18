/**
 * app.js
 */
const dotenv = require('dotenv');

// use dotenv as early as possible
dotenv.config({
  silent: true,
});
const logger = require('morgan');
const path = require('path');
const express = require('express');
const routes = require('./routes/index');

// Express app setup
const app = express();

// logger
app.use(logger('combined'));

// view engine
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

// serve static files from 'public'
app.use(express.static(path.join(__dirname, './public')));

// use routes
app.use('/', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: app.get('env') === 'development' ? err : {},
  });
  next();
});

module.exports = {
  app,
};
