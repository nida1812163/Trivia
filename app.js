var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//-------------------------------------------------------------
mongoose.connect('mongodb+srv://NidaNadeem:blackswan@19@cluster0.dnzsj.mongodb.net/test', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
  console.log('Connected to Database')
})
.catch((err)=>{
  console.log('Could not connect to the database: ',err);
  process.exit();
});

//app.use('/listP',function(req, res, next){
//  next();
//});

//app.get('/listP', function(req, res) {
//  res.send('Parts: ' + req.params.Name);
//  console.log('Parts: ', req.params.Name);
//});

app.use('/', indexRouter);
app.use('/users', usersRouter);

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