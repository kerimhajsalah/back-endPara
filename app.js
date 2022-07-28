var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db = require("./models");
const cors = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
productsRouter = require('./routes/products');
var commandeRouter = require("./routes/commande");
var categorieRouter = require("./routes/categories");
var promotionRouter = require ("./routes/promotion");
var homepic = require("./routes/pictures");
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// const sequelize = new Sequelize('pfe_db', 'postgres', 'postgres', {
//   host: 'localhost',
//   dialect:'postgres'
// });
db.sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
db.sequelize.sync();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter)
app.use('/commandes', commandeRouter);
app.use('/categories', categorieRouter);
app.use('/promotion',promotionRouter );
app.use('/homepic',homepic );


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
