var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var db = require('./routes/DbConnection');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testAPIRouter = require('./routes/testAPI');
var emailcheckRouter = require('./routes/emailcheck');
var usernamecheckRouter = require('./routes/usernamecheck');
var registeruserRouter = require('./routes/registeruser');
var getuserbyemailRouter = require('./routes/getuserbyemail');
var loginuserRouter = require('./routes/loginuser');
var passwordcompareRouter = require('./routes/passwordcompare');
var mailerRouter = require('./routes/mailer');
var updateuseremailRouter = require('./routes/updateuseremail');
var updateuserpasswordRouter = require('./routes/updateuserpassword');
var forgotpasswordRouter = require('./routes/forgotpassword');
var addBookRouter = require('./routes/addbook');
var getBookByIdRouter = require('./routes/getbookbyid');
var getChaptersByBookIdRouter = require('./routes/getchaptersbybookid');
var getNextChapterByBookIdRouter = require('./routes/getnextchapterbybookid');
var addNewChapterRouter = require('./routes/addnewchapter');
var getBookListRouter = require('./routes/getbooklist');
var editChapterRouter = require('./routes/editchapter');
var deleteBookRouter = require('./routes/deletebook');
var editBookBlurbRouter = require('./routes/editbookblurb');
var editBookCoverRouter = require('./routes/editbookcover');
var editBookTitleRouter = require('./routes/editbooktitle');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.urlencoded({
  parameterLimit: 100000,
  extended: false,
  limit: '50mb'
}));
app.use(express.json({ limit: '50mb', type: 'application/json' }));

app.use(logger('dev'));
app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/testAPI', testAPIRouter);
app.use('/emailcheck', emailcheckRouter);
app.use('/usernamecheck', usernamecheckRouter);
app.use('/registeruser', registeruserRouter);
app.use('/getuserbyemail', getuserbyemailRouter);
app.use('/loginuser', loginuserRouter);
app.use('/passwordcompare', passwordcompareRouter);
app.use('/mailer', mailerRouter);
app.use('/updateuseremail', updateuseremailRouter);
app.use('/updateuserpassword', updateuserpasswordRouter);
app.use('/forgotpassword', forgotpasswordRouter);
app.use('/addbook', addBookRouter);
app.use('/getbookbyid', getBookByIdRouter);
app.use('/getchaptersbybookid', getChaptersByBookIdRouter);
app.use('/getnextchapterbybookid', getNextChapterByBookIdRouter);
app.use('/addnewchapter', addNewChapterRouter);
app.use('/getbooklist', getBookListRouter);
app.use('/editchapter', editChapterRouter);
app.use('/deletebook', deleteBookRouter);
app.use('/editbookblurb', editBookBlurbRouter);
app.use('/editbookcover', editBookCoverRouter);
app.use('/editbooktitle', editBookTitleRouter);
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
