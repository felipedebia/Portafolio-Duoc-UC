// Importaciones
const express = require('express');
const router = express.Router();
const BD = require('../bin/configbd');
const request = require('request');
var moment = require('moment');

// Contraseña
var SimpleCrypto = require("simple-crypto-js").default
const secretKey = "1X42JJKLjkuid"
const simpleCryp = new SimpleCrypto(secretKey)

// Función API ListadoUsuarios
async function requestApiListadoUsuarios() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_usuarios/listarUsuarios', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				return resolve(importedJSON);
		});
	});
};

var listadoUsuarios = requestApiListadoUsuarios();

// Función API ListadoContratos
async function requestApiListadoContratos() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_otros/listarContratos', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				return resolve(importedJSON);
		});
	});
};

var listadoContratos = requestApiListadoContratos();

// Función API ListadoSubastasFrutas
async function requestApiListadoSubastasFrutas() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_otros/listarSubastasFrutas', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				return resolve(importedJSON);
		});
	});
};

var listadoSubastasFrutas = requestApiListadoSubastasFrutas();

// Función API ListadoSubastasTransportes
async function requestApiListadoSubastasTransportes() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_otros/listarSubastasTransportes', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				return resolve(importedJSON);
		});
	});
};

var listadoSubastasT = requestApiListadoSubastasTransportes();



// Rutas de usuarios

router.get('/', function(req, res, next) {
	if (req.session.isLoggedIn) {
		res.redirect('panel');
	} else {
		res.render('login', { title: 'Ingresar - Maipo Grande', funca:false});
	}
});


// POST: Login de usuario
router.post('/auth', async (req, res) => {
	if (req.body.correo && req.body.password) {
		binds = { "correo_bind": req.body.correo};
		sql = 'SELECT correo, nombre, apellido, tipo_usuario, num_documento, password, id_usuario FROM usuario WHERE correo = :correo_bind';

        result = await BD.Open(sql, binds, false);

		  	// Si encuentra los datos
			if (result.rows.length > 0) {

				var passwordDecrypted = simpleCryp.decrypt(result.rows[0][5])
				// Si la contraseña desencriptada es igual a la que viene por post
				if(req.body.password == passwordDecrypted) {
					
					// Convertimos el id de tipo_usuario a texto
					var tiposUsuarios = {
						1 : "Administrador",
						2 : "Transportista",
						3 : "Cliente Externo",
						4 : "Cliente Interno",
						5 : "Productor",
						6 : "Consultor"
					};
	
					var tipoUsuarioTexto = tiposUsuarios[result.rows[0][3]];
	
					req.session.isLoggedIn = true;
					// Guardamos datos del usuario en session
					req.session.correo = result.rows[0][0];
					req.session.nombre = result.rows[0][1];
					req.session.apellido = result.rows[0][2];
					req.session.tipo_usuario = result.rows[0][3];
					req.session.tipo_usuario_texto = tipoUsuarioTexto;
					req.session.num_documento = result.rows[0][4];
					req.session.id_usuario = result.rows[0][6];
					res.redirect('/panel');
					console.log("[!] Usuario " + req.body.correo + " conectado con éxito");

				} else {
					console.log("[!] Intento de conexión fallido usando " + req.body.correo);
					res.render('login', {title: 'Ingresar - Maipo Grande', funca:true});
				}

			} else {
				console.log("[!] Intento de conexión fallido usando " + req.body.correo);
				res.render('login', {title: 'Ingresar - Maipo Grande', funca:true});
			}
	}
});

router.get('/panel', function(req, res) {
	if (req.session.isLoggedIn) {
		res.render('panel', { title: 'Panel de Administración - Maipo Grande' });
	} else {
		res.redirect('/');
	}
	res.end();
});

router.get('/logout', function(req, res, next) {
	req.session.isLoggedIn = false;
	res.redirect('/');
});


// CRUD USUARIOS

// Modificar
router.get('/modificarUsuario', async function(req, res, next) {
	res.send('Debes ingresar un ID para modificar un usuario');
})

router.get('/modificarUsuario/:id_usuario', async function(req, res, next) {
	if (req.session.isLoggedIn) {

		// Hacemos una consulta trayendo todos los datos del usuario
		const { id_usuario } = req.params;

		binds = {"id_usuario": id_usuario};
		sql = "SELECT num_documento, tipo_usuario, nombre, apellido, fecha_nacimiento, genero, correo, estado_cuenta, telefono, password FROM usuario WHERE id_usuario = :id_usuario";
		result = await BD.Open(sql, binds, false);

		// Si los datos estan correctos
		if (result.rows.length > 0) {
			// Asignamos los valores de la consulta a las variables
			var usuarioData = [
				{
					num_documento: result.rows[0][0],
					tipo_usuario: result.rows[0][1],
					nombre: result.rows[0][2],
					apellido: result.rows[0][3],
					fecha_nacimiento: moment(result.rows[0][4]).format('YYYY-MM-DD'),
					genero: result.rows[0][5],
					correo: result.rows[0][6],
					estado_cuenta: result.rows[0][7],
					telefono: result.rows[0][8],
					password: result.rows[0][9],
					id_usuario: id_usuario
				  }
			];

			// Mostramos la vista
			res.render('modificarUsuario', { title: 'Modificar usuario - Maipo Grande', data:usuarioData });
		} else {
			res.send('Error al obtener datos de la base de datos');
		}
	} else {
		res.redirect('/');
	}
	res.end();
})

// Ver
router.get('/miperfil', async function(req, res, next) {
	if (req.session.isLoggedIn) {

		// Hacemos una consulta trayendo todos los datos del usuario
		binds = {"id_usuario": req.session.id_usuario};
		sql = "SELECT num_documento, tipo_usuario, nombre, apellido, fecha_nacimiento, genero, correo, estado_cuenta, telefono, password FROM usuario WHERE id_usuario = :id_usuario";
		result = await BD.Open(sql, binds, false);

		// Si los datos estan correctos
		if (result.rows.length > 0) {
			// Convertimos el id de tipo_usuario a texto
			var tiposUsuarios = {
				1 : "Administrador",
				2 : "Transportista",
				3 : "Cliente Externo",
				4 : "Cliente Interno",
				5 : "Productor",
				6 : "Consultor"
			};

			var tipoUsuarioTexto = tiposUsuarios[result.rows[0][1]];
			
			// Asignamos los valores de la consulta a las variables
			var usuarioData = [
				{
					num_documento: result.rows[0][0],
					tipo_usuario: tipoUsuarioTexto,
					nombre: result.rows[0][2],
					apellido: result.rows[0][3],
					fecha_nacimiento: moment(result.rows[0][4]).format('YYYY-MM-DD'),
					genero: result.rows[0][5],
					correo: result.rows[0][6],
					estado_cuenta: result.rows[0][7],
					telefono: result.rows[0][8],
					password: result.rows[0][9],
					id_usuario: req.session.id_usuario
				  }
			];

			// Mostramos la vista
			res.render('miperfil', { title: 'Mi perfil - Maipo Grande', data:usuarioData });
		} else {
			res.send('Error al obtener datos de la base de datos');
		}
	} else {
		res.redirect('/');
	}
	res.end();
})

router.get('/perfil/:id_usuario', async function(req, res, next) {

})

router.get('/usuarios', function(req, res) {
    if (req.session.isLoggedIn) {
		// Actualizamos listado de usuarios
		requestApiListadoUsuarios();
        res.render('usuarios', { title: 'Usuarios - Maipo Grande' });
    } else {
        res.redirect('/');
    }
    res.end();
});


// CRUD CONTRATOS
router.get('/contratos', function(req, res) {
    if (req.session.isLoggedIn) {
        res.render('contratos', { title: 'Contratos - Maipo Grande' });
    } else {
        res.redirect('/');
    }
    res.end();
});


router.get('/plantilla', function(req, res) {
    if (req.session.isLoggedIn) {
        res.render('plantilla', { title: 'Plantilla - Maipo Grande' });
    } else {
        res.redirect('/');
    }
    res.end();
});

router.get('/plantilla_con_tabla', function(req, res) {
    if (req.session.isLoggedIn) {
        res.render('plantilla_con_tabla', { title: 'Plantilla - Maipo Grande' });
    } else {
        res.redirect('/');
    }
    res.end();
});

module.exports = router;
