// Importaciones
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var favicon = require('serve-favicon')
var moment = require('moment');

// Rutas
var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');

// Login
var bodyParser = require('body-parser');
var session = require('express-session');

// Iniciamos aplicación
var app = express();
app.use(favicon(path.join(__dirname, 'public', 'images/favicon.ico')))

// Se indica el directorio donde se almacenarán las plantillas 
app.set('views', path.join(__dirname, 'views'));

// Se indica el motor del plantillas a utilizar
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Para las sesiones
app.use(session({
	secret: 'k4012j4h1290dkJAsbv',
	resave: true,
	saveUninitialized: true,
	cookie: {
		// La sesión expira luego de 2 horas de inactividad
		expires: 7200000
	}
}));

// Librerías necesarias
app.use(express.static(__dirname + '/public'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/css', express.static(__dirname + '/node_modules/sweetalert2/dist'));
app.use('/js', express.static(__dirname + '/node_modules/sweetalert2/dist'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/js', express.static(__dirname + '/node_modules/popper.js/dist'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));

app.use('/', indexRouter);
app.use('/api', apiRouter);

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


require('express-dynamic-helpers-patch')(app);
app.dynamicHelpers({
session: function (req, res) {
    return req.session;
    }
});


module.exports = app;
