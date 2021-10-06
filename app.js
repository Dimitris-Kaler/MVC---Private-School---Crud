var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var bodyParser = require('body-parser');
// const app = express();
// const urlencodedParser = bodyParser.urlencoded({ extended: false });


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var studentsRouter = require('./routes/students')
var trainersRouter = require("./routes/trainers")
var coursesRouter = require('./routes/courses')
var assignmentsRouter = require("./routes/assignments")
var customersRouter = require('./routes/customers')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/CCB_Students-Form', studentsRouter)
app.use('/CCB_Trainers-Form', trainersRouter)
app.use('/CCB_Courses-Form', coursesRouter)
app.use('/CCB_Assignments-Form', assignmentsRouter)
app.use('/CCB_Customers-Table', customersRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
// //validation error
// app.use(function(req,res,next){
//   next(createError(410));
// });

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });



module.exports = app;
