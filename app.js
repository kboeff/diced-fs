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
const routes = require('./routes');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const Bundler = require('parcel-bundler');


// Express app setup
const app = express();

// use parcel bundler
if (process.env.NODE_ENV !== 'production') {
  const bundler = new Bundler('./src/index.js', {
    outDir: 'public/js',
    watch: true,
  });
  
  bundler.bundle();
  
  app.use(bundler.middleware());
}

// logger
app.use(logger('combined'));

// view engine
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

// serve static files from 'public'
app.use(express.static(path.join(__dirname, './public')));

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// cookie parser
app.use(cookieParser());

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

module.exports = app;
