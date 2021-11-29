// Importaciones
const express = require('express');
const router = express.Router();
const settings = require('../bin/settings');
var moment = require('moment');
var functions = require('./functions');
var functions_reportes = require('./functions_reportes');

// Contraseña
var SimpleCrypto = require("simple-crypto-js").default
const secretKey = "1X42JJKLjkuid"
const simpleCryp = new SimpleCrypto(secretKey)


// CRUD PRINCIPAL

router.get('/', function(req, res, next) {
	if (req.session.isLoggedIn) {
		res.redirect('dashboard');
	} else {
		res.render('login', { title: 'Ingresar - Maipo Grande', alertError: false});
	}
});


// POST: Login de usuario
router.post('/auth', async (req, res) => {
	if (req.body.correo && req.body.password) {
		binds = { "correo_bind": req.body.correo};
		sql = 'SELECT usuario.id_usuario, usuario.num_documento, usuario.nombre, usuario.apellido, usuario.correo, usuario.password, usuario.fk_id_tipo, tipo_usuario.nombre, usuario.fk_id_estado FROM usuario JOIN tipo_usuario ON usuario.fk_id_tipo = tipo_usuario.id_tipo WHERE usuario.correo = :correo_bind';

        result = await settings.OpenConnection(sql, binds, false);

		  	// Si encuentra los datos
			if (result.rows.length > 0) {

				var passwordDecrypted = simpleCryp.decrypt(result.rows[0][5])
				// Si la contraseña desencriptada es igual a la que viene por post
				if(req.body.password == passwordDecrypted) {

					// Comprobamos que el usuario no tenga la cuenta desactivada
					if(result.rows[0][8] == '2') {
						console.log("[!] Intento de conexión fallido usando " + req.body.correo);
						res.render('login', {title: 'Ingresar - Maipo Grande', alertError: 2});
					} else {
						// Asignamos true al isLoggedIn
						req.session.isLoggedIn = true;

						// Guardamos datos del usuario en session
						req.session.id_usuario = result.rows[0][0];
						req.session.num_documento = result.rows[0][1];
						req.session.nombre = result.rows[0][2];
						req.session.apellido = result.rows[0][3];
						req.session.correo = result.rows[0][4];
						req.session.tipo_usuario = result.rows[0][6];
						req.session.tipo_usuario_texto = result.rows[0][7];
						req.session.estado_usuario = result.rows[0][8];

						// Si estado_usuario es 3, se redirecciona a crear contraseña
						if(req.session.estado_usuario==3) {
							res.redirect('/cambioContrasena');
						} else {
							res.redirect('/dashboard');
						}
						console.log("[!] Usuario " + req.body.correo + " conectado con éxito");
					}
					
					

				} else {
					console.log("[!] Intento de conexión fallido usando " + req.body.correo);
					res.render('login', {title: 'Ingresar - Maipo Grande', alertError: 1 });
				}

			} else {
				console.log("[!] Intento de conexión fallido usando " + req.body.correo);
				res.render('login', {title: 'Ingresar - Maipo Grande', alertError: 1 });
			}
	}
});

router.get('/dashboard', function(req, res) {
	if (req.session.isLoggedIn) {

		var contadoresData = [
			{
				
			}
		];

		switch (req.session.tipo_usuario) {
			case 1:
				functions_reportes.TotalFrutas();
				functions_reportes.TotalUsuarios();
				functions_reportes.TotalSubastas();
				functions_reportes.TotalVentas();
				res.render('dashboard', { title: 'Panel de Administración - Maipo Grande', data:contadoresData, navActive: 'Dashboard' });
			  	break;
			case 2:
				res.render('dashboard_transportista', { title: 'Panel de Administración - Maipo Grande', data:contadoresData, navActive: 'Dashboard' });
			  	break;
			case 3:
				res.render('dashboard_cliente', { title: 'Panel de Administración - Maipo Grande', data:contadoresData, navActive: 'Dashboard' });
			  	break;
			case 4:
				res.render('dashboard_cliente', { title: 'Panel de Administración - Maipo Grande', data:contadoresData, navActive: 'Dashboard' });
			  	break;
			case 5:
				res.render('dashboard_productor', { title: 'Panel de Administración - Maipo Grande', data:contadoresData, navActive: 'Dashboard' });
			  break;
			case 6:
				res.render('reportes', { title: 'Reportes - Maipo Grande', data:contadoresData, navActive: 'Dashboard' });
			  	break;
		}

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

router.get('/usuarios', function(req, res) {
    if (req.session.isLoggedIn) {
		var estado_respuesta = req.query.estado;
		functions.ListarUsuarios();
        res.render('usuarios', { title: 'Usuarios - Maipo Grande', navActive: 'Usuarios', respuesta: estado_respuesta });
    } else {
        res.redirect('/');
    }
    res.end();
});

// Cambio de contraseña cuando usuario ingresa por primera vez
router.get('/cambioContrasena', function(req, res) {
    if (req.session.isLoggedIn) {
		// si estado_usuario es 3
		if(req.session.estado_usuario==3) {
			res.render('cambioContrasena', { title: 'Cambio de contraseña - Maipo Grande' });
		} else {
			res.redirect('/');
		}
        
    } else {
        res.redirect('/');
    }
    res.end();
});

// Modificar
router.get('/modificarUsuario', async function(req, res, next) {
	var string = "errorNOID";
    res.redirect('/usuarios/?estado=' + string);
})

router.get('/modificarUsuario/:id_usuario', async function(req, res, next) {
	if (req.session.isLoggedIn) {

		// Hacemos una consulta trayendo todos los datos del usuario
		const { id_usuario } = req.params;

		binds = {"id_usuario": id_usuario};
		sql = "SELECT num_documento, nombre, apellido, fecha_nacimiento, genero, correo, telefono, password, fk_id_estado, fk_id_tipo FROM usuario WHERE id_usuario = :id_usuario";
		result = await settings.OpenConnection(sql, binds, false);

		// Si los datos estan correctos
		if (result.rows.length > 0) {
			// Asignamos los valores de la consulta a las variables
			var usuarioData = [
				{
					num_documento: result.rows[0][0],
					nombre: result.rows[0][1],
					apellido: result.rows[0][2],
					fecha_nacimiento: moment(result.rows[0][3]).format('YYYY-MM-DD'),
					genero: result.rows[0][4],
					correo: result.rows[0][5],
					telefono: result.rows[0][6],
					password: simpleCryp.decrypt(result.rows[0][7]),
					fk_id_estado: result.rows[0][8],
					fk_id_tipo: result.rows[0][9],
					id_usuario: id_usuario
				  }
			];
			// Mostramos la vista
			res.render('modificarUsuario', { title: 'Modificar usuario - Maipo Grande', data:usuarioData, navActive: 'Usuarios' });
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
		sql = "SELECT num_documento, nombre, apellido, fecha_nacimiento, genero, correo, telefono, password, fk_id_tipo FROM usuario WHERE id_usuario = :id_usuario";
		result = await settings.OpenConnection(sql, binds, false);

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

			var tipoUsuarioTexto = tiposUsuarios[result.rows[0][8]];
			
			// Asignamos los valores de la consulta a las variables
			var usuarioData = [
				{
					id_usuario: req.session.id_usuario,
					num_documento: result.rows[0][0],
					nombre: result.rows[0][1],
					apellido: result.rows[0][2],
					fecha_nacimiento: moment(result.rows[0][3]).format('YYYY-MM-DD'),
					genero: result.rows[0][4],
					correo: result.rows[0][5],
					telefono: result.rows[0][6],
					password: simpleCryp.decrypt(result.rows[0][7]),
					tipo_usuario_texto: tipoUsuarioTexto
				  }
			];

			// Mostramos la vista
			res.render('miperfil', { title: 'Mi perfil - Maipo Grande', data:usuarioData, navActive: 'Usuarios' });
		} else {
			res.send('Error al obtener datos de la base de datos');
		}
	} else {
		res.redirect('/');
	}
	res.end();
})

router.get('/perfil/:id_usuario', async function (req, res, next) {
	// Preguntando si estas coenctado
	if (req.session.isLoggedIn) {

		if (req.session.tipo_usuario == 1) {

			const { id_usuario } = req.params;

			// Hacemos una consulta trayendo todos los datos del usuario
			binds = { "id_usuario": id_usuario };
			sql = "SELECT num_documento, nombre, apellido, fecha_nacimiento, genero, correo, telefono, fk_id_estado, fk_id_tipo FROM usuario WHERE id_usuario = :id_usuario";
			result = await settings.OpenConnection(sql, binds, false);

			// Si los datos estan correctos
			if (result.rows.length > 0) {
				// Convertimos el id de tipo_usuario a texto
				var tiposUsuarios = {
					1: "Administrador",
					2: "Transportista",
					3: "Cliente Externo",
					4: "Cliente Interno",
					5: "Productor",
					6: "Consultor"
				};

				var tipoUsuarioTexto = tiposUsuarios[result.rows[0][8]];

				// Asignamos los valores de la consulta a las variables
				var usuarioData = [
					{
						num_documento: result.rows[0][0],
						nombre: result.rows[0][1],
						apellido: result.rows[0][2],
						fecha_nacimiento: moment(result.rows[0][3]).format('YYYY-MM-DD'),
						genero: result.rows[0][4],
						correo: result.rows[0][5],
						telefono: result.rows[0][6],
						fk_id_estado: result.rows[0][7],
						fk_id_tipo: result.rows[0][8],
						tipo_usuario_texto: tipoUsuarioTexto,
						id_usuario: id_usuario
					}
				];

				// Mostramos la vista
				res.render('perfil', { title: 'Viendo perfil - Maipo Grande', data: usuarioData, navActive: 'Usuarios' });
			} else {
				res.send('Error al obtener datos de la base de datos');
			}
		}else{
			res.redirect('/');
		}

	} else {
		res.redirect('/');
	}
	res.end();
})


// CRUD CONTRATOS
router.get('/contratos', function(req, res) {
    if (req.session.isLoggedIn) {

		var fecha_hoy = functions.obtenerFechaActual();

		functions.ListarContratos();
        res.render('contratos', { title: 'Contratos - Maipo Grande', fecha_hoy: fecha_hoy, navActive: 'Contratos'});
    } else {
        res.redirect('/');
    }
    res.end();
});


// Modificar
router.get('/modificarContrato', async function(req, res, next) {
	res.send('Debes ingresar un ID para modificar un contrato');
})

router.get('/modificarContrato/:id_contrato', async function(req, res, next) {
	if (req.session.isLoggedIn) {

		const { id_contrato } = req.params;

		// Hacemos una consulta trayendo todos los datos del contrato
		binds = {"id_contrato": id_contrato};
		sql = "SELECT url_documento, fecha_inicio, fecha_vencimiento, fk_id_tipo, fk_id_estado FROM contrato WHERE id_contrato = :id_contrato";
		result = await settings.OpenConnection(sql, binds, false);

		// Si los datos estan correctos
		if (result.rows.length > 0) {
			// Asignamos los valores de la consulta a las variables
			var contratoData = [
				{
					id_contrato: id_contrato,
					url_documento: result.rows[0][0],
					fecha_inicio: moment(result.rows[0][1]).format('YYYY-MM-DD'),
					fecha_vencimiento: moment(result.rows[0][2]).format('YYYY-MM-DD'),
					fk_id_tipo: result.rows[0][3],
					fk_id_estado: result.rows[0][4]
				  }
			];

			// Mostramos la vista
			console.log(contratoData);
			res.render('modificarContrato', { title: 'Modificar contrato - Maipo Grande', data:contratoData, navActive: 'Contratos' });
		} else {
			res.send('Error al obtener datos de la base de datos');
		}
	} else {
		res.redirect('/');
	}
	res.end();
})

router.get('/contrato/:id_contrato', async function(req, res, next) {
	if (req.session.isLoggedIn) {

		const { id_contrato } = req.params;

		// Hacemos una consulta trayendo todos los datos del contrato
		binds = {"id_contrato": id_contrato};
		sql = "SELECT contrato.url_documento, contrato.fecha_inicio, contrato.fecha_vencimiento, contrato.fk_id_tipo, contrato.fk_id_estado, rel_contrato_usuario.fk_id_usuario, usuario.nombre, usuario.apellido FROM contrato JOIN rel_contrato_usuario ON contrato.id_contrato = rel_contrato_usuario.fk_id_contrato JOIN usuario ON rel_contrato_usuario.fk_id_usuario = usuario.id_usuario WHERE contrato.id_contrato = :id_contrato";
		result = await settings.OpenConnection(sql, binds, false);

		// Si los datos estan correctos
		if (result.rows.length > 0) {
			
			// Asignamos los valores de la consulta a las variables
			var contratoData = [
				{
					id_contrato: id_contrato,
					url_documento: result.rows[0][0],
					fecha_inicio: moment(result.rows[0][1]).format('YYYY-MM-DD'),
					fecha_vencimiento: moment(result.rows[0][2]).format('YYYY-MM-DD'),
					fk_id_tipo: result.rows[0][3],
					fk_id_estado: result.rows[0][4],
					fk_id_usuario: result.rows[0][5],
					usuario_nombre: result.rows[0][6],
					usuario_apellido: result.rows[0][7]
				  }
			];

			// Mostramos la vista
			res.render('contrato', { title: 'Viendo contrato - Maipo Grande', data:contratoData, navActive: 'Contratos' });
		} else {
			res.send('Error al obtener datos de la base de datos');
		}
	} else {
		res.redirect('/');
	}
	res.end();
})


router.get('/documentoContrato/:id_contrato', async function(req, res, next) {
	if (req.session.isLoggedIn) {

		const { id_contrato } = req.params;

		// Hacemos una consulta trayendo todos los datos del contrato
		binds = {"id_contrato": id_contrato};
		sql = "SELECT fecha_vencimiento, url_documento FROM contrato WHERE id_contrato = :id_contrato";
		result = await settings.OpenConnection(sql, binds, false);

		// Si los datos estan correctos
		if (result.rows.length > 0) {
			// Si url_contrato es NULL se podrá subir archivo
			if (result.rows[0][1] === null) {
				// Asignamos los valores de la consulta a las variables
				var contratoData = [
					{
						id_contrato: id_contrato,
						fecha_vencimiento: moment(result.rows[0][0]).format('YYYY-MM-DD'),
					}
				];
			} else {
				res.send('Este contrato ya tiene un documento asignado');
			}
			// Mostramos la vista
			res.render('documentoContrato', { title: 'Subir documento - Maipo Grande', data:contratoData, navActive: 'Contratos' });
		} else {
			res.send('Error al obtener datos de la base de datos');
		}
	} else {
		res.redirect('/');
	}
	res.end();
})

// CRUD FRUTAS
router.get('/frutas', function(req, res) {
    if (req.session.isLoggedIn) {
		functions.ListarFrutas();
        res.render('Frutas', { title: 'Frutas - Maipo Grande', navActive: 'Frutas' });
    } else {
        res.redirect('/');
    }
    res.end();
});


// CRUD SUBASTAS
router.get('/subastas', function(req, res) {
    if (req.session.isLoggedIn) {
        res.render('Subastas', { title: 'Subastas - Maipo Grande', navActive: 'Subastas' });
    } else {
        res.redirect('/');
    }
    res.end();
});


router.get('/subastas_frutas', function(req, res) {
    if (req.session.isLoggedIn) {
		functions.ListarSubastasFrutas();
		functions.ListarOfertasProductores();
        res.render('Subastas_Frutas', { title: 'Subastas Frutas - Maipo Grande', navActive: 'Subastas' });
    } else {
        res.redirect('/');
    }
    res.end();
});


router.get('/subasta_fruta/:id_subastaF', async function(req, res, next) {
	if (req.session.isLoggedIn) {

		const { id_subastaF } = req.params;

		// Hacemos una consulta trayendo todos los datos del usuario
		binds = {"id_subastaF": id_subastaF};
		sql = "SELECT subasta_fruta.fecha_creacion, subasta_fruta.fecha_actualizacion, subasta_fruta.fecha_termino, subasta_fruta.fk_id_pedido, subasta_fruta.fk_id_estado, estado_subastaF.descripcion, pedido.fk_id_tipo, tipo_pedido.nombre, pedido.fk_id_usuario, usuario.nombre, usuario.apellido FROM subasta_fruta JOIN estado_subastaF ON subasta_fruta.fk_id_estado = estado_subastaF.id_estado JOIN pedido ON subasta_fruta.fk_id_pedido = pedido.id_pedido JOIN tipo_pedido ON pedido.fk_id_tipo = tipo_pedido.id_tipo JOIN usuario ON pedido.fk_id_usuario = usuario.id_usuario JOIN pedido_detalle ON pedido.id_pedido = pedido_detalle.fk_id_pedido WHERE subasta_fruta.id_subastaF = :id_subastaF";
		// JOIN pedido_detalle ON pedido.id_pedido = pedido_detalle.id_pedidoD
		result = await settings.OpenConnection(sql, binds, false);

		// Si los datos estan correctos
		if (result.rows.length > 0) {
			
			// Asignamos los valores de la consulta a las variables
			var subastaData = [
				{
					id_subastaF: id_subastaF,
					fecha_creacion: moment(result.rows[0][0]).format('YYYY-MM-DD'),
					fecha_actualizacion: moment(result.rows[0][1]).format('YYYY-MM-DD'),
					fecha_termino: moment(result.rows[0][2]).format('YYYY-MM-DD'),
					fk_id_pedido: result.rows[0][3],
					fk_id_estado: result.rows[0][4],
					fk_texto_estado: result.rows[0][5],
					pedido_fk_id_tipo: result.rows[0][6],
					pedido_fk_texto_tipo: result.rows[0][7],
					pedido_fk_id_usuario: result.rows[0][8],
					pedido_fk_texto_usuario: result.rows[0][9]
				  }
			];
			// Mostramos la vista
			functions.ListarSubastasFrutas();
			functions.ListarOfertasProductores();
			functions.ListarPedidoDetalles();
			res.render('subasta_Fruta', { title: 'Viendo Subasta Fruta - Maipo Grande', data:subastaData, navActive: 'Subastas' });
		} else {
			res.send('Error al obtener datos de la base de datos');
		}
	} else {
		res.redirect('/');
	}
	res.end();
})


router.get('/subastas_transportes', function(req, res) {
    if (req.session.isLoggedIn) {
		functions.ListarSubastasTransportes();
		functions.ListarOfertasTransportes();
        res.render('Subastas_Transportes', { title: 'Subastas Transportes - Maipo Grande', navActive: 'Subastas' });
    } else {
        res.redirect('/');
    }
    res.end();
});


router.get('/subasta_transporte/:id_subastaT', async function(req, res, next) {
	if (req.session.isLoggedIn) {

		const { id_subastaT } = req.params;

		// Hacemos una consulta trayendo todos los datos del usuario
		binds = {"id_subastaT": id_subastaT};
		sql = "SELECT fecha_creacion, fecha_actualizacion, fecha_termino, cantidad, direccion_despacho, fk_id_pedido, fk_id_estado, estado_subastaT.descripcion FROM subasta_transporte JOIN estado_subastaT ON subasta_transporte.fk_id_estado = estado_subastaT.id_estado WHERE subasta_transporte.id_subastaT = :id_subastaT";
		result = await settings.OpenConnection(sql, binds, false);

		// Si los datos estan correctos
		if (result.rows.length > 0) {
			
			// Asignamos los valores de la consulta a las variables
			var subastaData = [
				{
					id_subastaT: id_subastaT,
					fecha_creacion: moment(result.rows[0][0]).format('YYYY-MM-DD'),
					fecha_actualizacion: moment(result.rows[0][1]).format('YYYY-MM-DD'),
					fecha_termino: moment(result.rows[0][2]).format('YYYY-MM-DD'),
					cantidad: result.rows[0][3],
					direccion_despacho: result.rows[0][4],
					fk_id_pedido: result.rows[0][5],
					fk_id_estado: result.rows[0][6],
					fk_texto_estado: result.rows[0][7]
				  }
			];

			// Mostramos la vista
			functions.ListarSubastasTransportes();
			functions.ListarOfertasTransportes();
			functions.ListarPedidoDetalles();
			res.render('subasta_Transporte', { title: 'Viendo Subasta Transporte - Maipo Grande', data:subastaData, navActive: 'Subastas' });
		} else {
			res.send('Error al obtener datos de la base de datos');
		}
	} else {
		res.redirect('/');
	}
	res.end();
})


router.get('/crearSubastaTransporte/:id_subastaT', function(req, res) {
    if (req.session.isLoggedIn) {
		var subastaIdData = [{
			id_subastaT: req.params.id_subastaT
		}];
        res.render('crearSubastaTransporte', { title: 'Crear nueva subasta de transporte - Maipo Grande', data: subastaIdData, navActive: 'Subastas' });
    } else {
        res.redirect('/');
    }
    res.end();
});


// CRUD MISPEDIDOS
router.get('/mispedidos', async function(req, res) {
    if (req.session.isLoggedIn) {
        functions.ListarPedidos();
        res.render('misPedidos', { title: 'Mis pedidos - Maipo Grande', navActive: 'MisPedidos' });
    } else {
        res.redirect('/');
    }
    res.end();
});


router.get('/pedido_detalles/:id_pedido', function(req, res) {
    var pedidoIdData = [{
        id_Pedido: req.params.id_pedido
    }];
    if (req.session.isLoggedIn) {
        functions.ListarPedidoDetalles();
        res.render('pedido_detalles', { title: 'Pedido Detalles - Maipo Grande', data: pedidoIdData, navActive: 'MisPedidos' });
    } else {
        res.redirect('/');
    }
    res.end();
});


// CRUD PEDIDOS
router.get('/pedidos', function(req, res) {
    if (req.session.isLoggedIn) {
        functions.ListarPedidos();
        res.render('pedidos', { title: 'Pedidos - Maipo Grande', navActive: 'Pedidos' });
    } else {
        res.redirect('/');
    }
    res.end();
});


// CRUD ORDENES
router.get('/ordenes', function(req, res) {
    if (req.session.isLoggedIn) {
        res.render('Ordenes', { title: 'Ordenes - Maipo Grande', navActive: 'Ordenes' });
    } else {
        res.redirect('/');
    }
    res.end();
});


router.get('/ordenes_bodegas', function(req, res) {
    if (req.session.isLoggedIn) {
		functions.ListarOrdenesBodegas();
        res.render('Ordenes_Bodegas', { title: 'Ordenes Bodegas - Maipo Grande', navActive: 'Ordenes' });
    } else {
        res.redirect('/');
    }
    res.end();
});


router.get('/reportes_bodega/:id_ordenB', async function(req, res) {
	if (req.session.isLoggedIn) {
		const { id_ordenB } = req.params;

		functions.ListarReportesBodegas();
		res.render('reportes_bodega', { title: 'Reportes de Ordenes - Maipo Grande', fk_id_ordenB: id_ordenB, navActive: 'Ordenes' });
		
		
	} else {
		res.redirect('/');
	}
	res.end();
})


router.get('/ordenes_transportes', function(req, res) {
    if (req.session.isLoggedIn) {
		functions.ListarOrdenesTransportes();
        res.render('Ordenes_Transportes', { title: 'Ordenes Transportes - Maipo Grande', navActive: 'Ordenes' });
    } else {
        res.redirect('/');
    }
    res.end();
});


// CRUD OFERTAS

router.get('/misofertas_productor', async function(req, res) {
    if (req.session.isLoggedIn) {
		functions.ListarOfertasProductores();
        res.render('misOfertas_productor', { title: 'Mis ofertas Productor - Maipo Grande', navActive: 'MisOfertas_Productor' });
    } else {
        res.redirect('/');
    }
    res.end();
});


router.get('/misofertas_transporte', async function(req, res) {
    if (req.session.isLoggedIn) {
		functions.ListarOfertasTransportes();
        res.render('misOfertas_transporte', { title: 'Mis ofertas Transporte - Maipo Grande', navActive: 'MisOfertas_Transporte' });
    } else {
        res.redirect('/');
    }
    res.end();
});


router.get('/crearOfertaProductor/:id_subastaF', async function(req, res, next) {
	if (req.session.isLoggedIn) {

		const { id_subastaF } = req.params;

		// Hacemos una consulta trayendo todos los datos del usuario
		binds = {"id_subastaF": id_subastaF};
		sql = "SELECT fecha_creacion, fecha_actualizacion, fecha_termino, fk_id_pedido, fk_id_estado, estado_subastaF.descripcion FROM subasta_fruta JOIN estado_subastaF ON subasta_fruta.fk_id_estado = estado_subastaF.id_estado WHERE subasta_fruta.id_subastaF = :id_subastaF";
		result = await settings.OpenConnection(sql, binds, false);

		// Si los datos estan correctos
		if (result.rows.length > 0) {
			
			// Asignamos los valores de la consulta a las variables
			var subastaData = [
				{
					id_subastaF: id_subastaF,
					fecha_creacion: moment(result.rows[0][0]).format('YYYY-MM-DD'),
					fecha_actualizacion: moment(result.rows[0][1]).format('YYYY-MM-DD'),
					fecha_termino: moment(result.rows[0][2]).format('YYYY-MM-DD'),
					fk_id_pedido: result.rows[0][3],
					fk_id_estado: result.rows[0][4],
					fk_texto_estado: result.rows[0][5]
				  }
			];

			// Mostramos la vista
			res.render('crearOfertaProductor', { title: 'Crear nueva oferta - Maipo Grande', data:subastaData, navActive: 'MisOfertas' });
		} else {
			res.send('Error al obtener datos de la base de datos');
		}
	} else {
		res.redirect('/');
	}
	res.end();
})



// CRUD VENTAS
router.get('/ventas', function(req, res) {
    if (req.session.isLoggedIn) {
		functions.ListarVentas();
        res.render('Ventas', { title: 'Ventas - Maipo Grande', navActive: 'Ventas' });
    } else {
        res.redirect('/');
    }
    res.end();
});


router.get('/misVentas', function(req, res) {
    if (req.session.isLoggedIn) {
		functions.ListarVentas();
        res.render('misVentas', { title: 'Mis ventas - Maipo Grande', navActive: 'MisVentas' });
    } else {
        res.redirect('/');
    }
    res.end();
});


// CRUD SEGUROS
router.get('/seguros', function(req, res) {
    if (req.session.isLoggedIn) {
		functions.ListarSeguros();
        res.render('seguros', { title: 'Seguros - Maipo Grande', navActive: 'Seguros' });
    } else {
        res.redirect('/');
    }
    res.end();
});


router.get('/documentoSeguro/:id_seguro', async function(req, res, next) {
	if (req.session.isLoggedIn) {

		const { id_seguro } = req.params;

		// Hacemos una consulta trayendo todos los datos del contrato
		binds = {"id_seguro": id_seguro};
		sql = "SELECT fecha_termino, url_documento FROM seguro WHERE id_seguro = :id_seguro";
		result = await settings.OpenConnection(sql, binds, false);

		// Si los datos estan correctos
		if (result.rows.length > 0) {
			// Si url_contrato es NULL se podrá subir archivo
			if (result.rows[0][1] === null) {
				// Asignamos los valores de la consulta a las variables
				var seguroData = [
					{
						id_seguro: id_seguro,
						fecha_termino: moment(result.rows[0][0]).format('YYYY-MM-DD'),
					}
				];
			} else {
				res.send('Este seguro ya tiene un documento asignado');
			}
			// Mostramos la vista
			res.render('documentoSeguro', { title: 'Subir documento - Maipo Grande', data:seguroData, navActive: 'Seguros' });
		} else {
			res.send('Error al obtener datos de la base de datos');
		}
	} else {
		res.redirect('/');
	}
	res.end();
})



// CRUD PRODUCTOS
router.get('/productos', function(req, res) {
    if (req.session.isLoggedIn) {
		functions.ListarProductos();
        res.render('productos', { title: 'Productos - Maipo Grande', navActive: 'Productos' });
    } else {
        res.redirect('/');
    }
    res.end();
});


// CRUD REPORTES
router.get('/reportes', function(req, res) {
    if (req.session.isLoggedIn) {
		functions_reportes.VentasTotal();
		functions_reportes.RepSubastaF();
		functions_reportes.SubastaFTotalActivos();
		functions_reportes.SubastaFTotalInactivos();
		functions_reportes.TotalSubastasFPD();
		functions_reportes.TotalSubastasFPM();
		functions_reportes.TotalSubastasFPA();
		functions_reportes.SubastaTTotal();
		functions_reportes.SubastaTActivo();
		functions_reportes.SubastaTInactivo();
		functions_reportes.TotalSubastasTPD();
		functions_reportes.TotalSubastasTPM();
		functions_reportes.TotalSubastasTPA();
		functions_reportes.TotalProductos();
		functions_reportes.TotalProductosA();
		functions_reportes.TotalProductosI();
		functions_reportes.TotalProductosPC();
		functions_reportes.TotalProductosSC();
		functions_reportes.TotalProductosTC();
		functions_reportes.TotalProductosCC();
		functions_reportes.TotalProductosQC();
		functions_reportes.TotalProductosPD();
		functions_reportes.TotalProductosPM();
		functions_reportes.TotalProductosPA();
        res.render('reportes', { title: 'Reportes - Maipo Grande', navActive: 'Reportes' });
    } else {
        res.redirect('/');
    }
    res.end();
});


// CRUD Mis Compras
router.get('/miscompras', function(req, res) {
    if (req.session.isLoggedIn) {
        functions.ListarMisCompras();
        res.render('miscompras', { title: 'Mis compras - Maipo Grande', navActive: 'MisCompras' });
    } else {
        res.redirect('/');
    }
    res.end();
});


// CRUD INFORMES
router.get('/informes/:id_venta', async function(req, res) {
	if (req.session.isLoggedIn) {
		const { id_venta } = req.params;

		// Si es productor, se envia a la vista de productor
		if (req.session.tipo_usuario == 5) {
			functions.ListarInformes();
			res.render('informes_productor', { title: 'Informes - Maipo Grande', fk_id_venta: id_venta, navActive: 'Ventas' });
		} else {
			functions.ListarInformes();
			res.render('informes', { title: 'Informes - Maipo Grande', fk_id_venta: id_venta, navActive: 'Ventas' });
		}
		
		
	} else {
		res.redirect('/');
	}
	res.end();
})


// OTROS
router.get('/plantilla', function(req, res) {
    if (req.session.isLoggedIn) {
        res.render('plantilla', { title: 'Plantilla - Maipo Grande', navActive: 'Dashboard' });
    } else {
        res.redirect('/');
    }
    res.end();
});


router.get('/plantilla_con_tabla', function(req, res) {
    if (req.session.isLoggedIn) {
        res.render('plantilla_con_tabla', { title: 'Plantilla - Maipo Grande', navActive: 'Dashboard' });
    } else {
        res.redirect('/');
    }
    res.end();
});

module.exports = router;
