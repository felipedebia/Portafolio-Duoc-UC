var express = require('express');
var router = express.Router();
const BD = require('../bin/configbd');

var request = require('request');

// Función que devuelve una promesa
function requestApiListadoUsuarios() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api/listadousuarios', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				return resolve(importedJSON);
		});
	});
};

var listadoUsuariosPromesa = requestApiListadoUsuarios();

// Rutas de usuarios

router.get('/', function(req, res, next) {
	if (req.session.isLoggedIn) {
		res.redirect('panel');
	} else {
		res.render('login', { title: 'Ingresar - Maipo Grande' });
	}
});


// POST: Login de usuario
router.post('/auth', async (req, res) => {
	var correo_var = req.body.correo;
	var password_var = req.body.password;
	if (correo_var && password_var) {
		//const result = await conn.execute('SELECT * FROM usuario WHERE correo = :correo and password = :password',[request.body.correo, request.body.password])
		//sql = 'SELECT * FROM usuario WHERE correo = :d1 AND password = :d2';
		sql = 'SELECT correo, nombre, apellido, tipo_usuario, num_documento FROM usuario WHERE correo = :d1';
		//binds = {"d1": req.body.correo, "d2": req.body.password};
		binds = { "d1": req.body.correo };

        result = await BD.Open(sql, binds, false);

		  	// Si los datos estan correctos
			if (result.rows.length > 0) {
				req.session.isLoggedIn = true;
				// Guardamos datos del usuario en session
				req.session.correo = result.rows[0][0];
				req.session.nombre = result.rows[0][1];
				req.session.apellido = result.rows[0][2];
				req.session.tipo_usuario = result.rows[0][3];
				req.session.num_documento = result.rows[0][4];
				res.redirect('/panel');
				console.log("[!] Usuario " + correo_var + " conectado con éxito");
			} else {
				console.log("[!] Intento de conexión fallido usando " + correo_var);
				res.redirect('/');
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

// Leer - Todos los usuarios
router.get('/listadoUsuarios', function(req, res, next) {
	if (req.session.isLoggedIn) {
		res.render('listadoUsuarios', { title: 'Todos los usuarios - Maipo Grande'});

		// Ocurrio algun error...
		listadoUsuariosPromesa.catch(function(error) {
			console.log(error);
			res.send('Error al obtener datos de la API');
		});
	} else {
		res.redirect('/');
	}
	res.end();
})

// Agregar
router.get('/crearUsuario', function(req, res, next) {
	if (req.session.isLoggedIn) {
		res.render('crearUsuario', { title: 'Crear nuevo usuario - Maipo Grande' });
	} else {
		res.redirect('/');
	}
	res.end();
});

// Modificar
router.get('/modificarUsuario', async function(req, res, next) {
	res.render('listadoUsuarios', { msgAlert: 'Debes ingresar un ID para modificar un usuario' });
})

router.get('/modificarUsuario/:id_usuario', async function(req, res, next) {
	if (req.session.isLoggedIn) {

		const { id_usuario } = req.body;

		// Hacemos una consulta trayendo todos los datos del usuario
		sql = "SELECT num_documento, tipo_usuario, nombre, apellido, fecha_nacimiento, genero, correo, estado_cuenta, telefono, password FROM usuario WHERE id_usuario = :id_usuario";

		binds = {"id_usuario": id_usuario};

		result = await BD.Open(sql, binds, false);

		// Si los datos estan correctos
		if (result.rows.length > 0) {
			// Asignamos los valores de la consulta a las variables
			num_documento = result.rows[0][0];
			tipo_usuario = result.rows[0][1];
			nombre = result.rows[0][2];
			apellido = result.rows[0][3];
			fecha_nacimiento = result.rows[0][4];
			genero = result.rows[0][5];
			correo = result.rows[0][6];
			estado_cuenta = result.rows[0][7];
			telefono = result.rows[0][8];
			password = result.rows[0][9];

			// Mostramos la vista
			res.render('modificarUsuario', { title: 'Modificar usuario - Maipo Grande' });
		} else {
			res.send('Error al obtener datos de la base de datos');
		}
	} else {
		res.redirect('/');
	}
	res.end();
})

// Ver
router.get('/verUsuario', async function(req, res, next) {
	res.render('listadoUsuarios', { msgAlert: 'Debes ingresar un ID para ver el perfil de un usuario' });
})

router.get('/verUsuario/:id_usuario', async function(req, res, next) {

})

router.get('/usuarios', function(req, res) {
    if (req.session.isLoggedIn) {
        res.render('usuarios', { title: 'Usuarios - Maipo Grande' });
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

// CRUD VENTAS

module.exports = router;
