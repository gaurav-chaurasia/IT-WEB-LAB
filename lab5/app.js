const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session')
const logger = require('morgan');

const indexRouter = require('./routes/index');
const userRouter = require('./routes/users');

const app = express();


// ----------------------------------------
// view engine setup
// ----------------------------------------
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieSession({
  name: 'session',
  keys: [
    '1234-5678-9087-6543-2109', 
    '0987-6543-2109-8765-4321'
  ]
}))


// ----------------------------------------
// add routes
// ----------------------------------------
app.get('*', (req, res, next) => {
  // Update views
  req.session.views = (req.session.views || 0) + 1;
  next();
})
app.use('/', indexRouter);
app.use('/users', userRouter);



// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {err: err});
});

module.exports = app;
