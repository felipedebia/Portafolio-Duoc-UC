// Importaciones
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var favicon = require('serve-favicon')
const cors = require('cors');

// Rutas
var rutasRouter = require('./routes/rutas');
var extrasRouter = require('./routes/extras');
var contratosRouter = require('./routes/contratos');
var frutasRouter = require('./routes/frutas');
var ofertasRouter = require('./routes/ofertas');
var ordenesRouter = require('./routes/ordenes');
var pedidosRouter = require('./routes/pedidos');
var productosRouter = require('./routes/productos');
var subastasRouter = require('./routes/subastas');
var usuariosRouter = require('./routes/usuarios');
var ventasRouter = require('./routes/ventas');
var segurosRouter = require('./routes/seguros');
var informesRouter = require('./routes/informes');
var frutasRestantesRouter = require('./routes/frutasRestantes');
var reportesRouter = require('./routes/Reportes');
var misComprasRouter = require('./routes/miscompras');
var pagosRouter = require('./routes/pagos');

// Login
var bodyParser = require('body-parser');
var session = require('express-session');

// Iniciamos aplicación
var app = express();
// Favicon
app.use(favicon(path.join(__dirname, 'public', 'images/favicon.ico')))

// Se indica el directorio donde se almacenarán las plantillas 
app.set('views', path.join(__dirname, 'views'));

// Se indica el motor del plantillas a utilizar
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({
  origin: '*'
}));
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


app.use('/', rutasRouter);
app.use('/api_extras', extrasRouter);
app.use('/api_contratos', contratosRouter);
app.use('/api_frutas', frutasRouter);
app.use('/api_ofertas', ofertasRouter);
app.use('/api_ordenes', ordenesRouter);
app.use('/api_pedidos', pedidosRouter);
app.use('/api_productos', productosRouter);
app.use('/api_subastas', subastasRouter);
app.use('/api_usuarios', usuariosRouter);
app.use('/api_ventas', ventasRouter);
app.use('/api_seguros', segurosRouter);
app.use('/api_informes', informesRouter);
app.use('/api_frutasrestantes', frutasRestantesRouter);
app.use('/api_reportes', reportesRouter);
app.use('/api_miscompras', misComprasRouter);
app.use('/api_pagos', pagosRouter);

// Para mostrar errores
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
