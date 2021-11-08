// Importaciones
const express = require('express');
const router = express.Router();
const BD = require('../bin/configbd');
var moment = require('moment');

const multer = require('multer');
var path = require('path');

// Configurar carpeta de destino de las subidas
var storage = multer.diskStorage({
	destination: function (req, file, cb) {
	  cb(null, 'public/subidas/contratos')
	},
	filename: function (req, file, cb) {
		cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
	}
  })
  
var uploadFile = multer({ storage: storage })


// CRUD CONTRATOS

// Leer - Todos los contratos
router.get('/listarContratos', async (req, res) => {
  
  binds = {};
  sql = "SELECT id_contrato, url_documento, fecha_inicio, fecha_vencimiento, fk_id_tipo, tipo_contrato.nombre, fk_id_estado, estado_contrato.descripcion, rel_contrato_usuario.fk_id_usuario FROM contrato JOIN rel_contrato_usuario ON contrato.id_contrato = rel_contrato_usuario.fk_id_contrato JOIN tipo_contrato ON contrato.fk_id_tipo = tipo_contrato.id_tipo JOIN estado_contrato ON contrato.fk_id_estado = estado_contrato.id_estado";
  result = await BD.Open(sql, binds, true);

  Contratos = [];

  result.rows.map(contrato => {
    let contratoSchema = {
        "id_contrato": contrato[0],
        "url_documento": contrato[1],
        "fecha_inicio": moment(contrato[2]).format('DD-MM-YYYY'),
        "fecha_vencimiento": moment(contrato[3]).format('DD-MM-YYYY'),
        "fk_id_tipo": contrato[4],
        "fk_texto_tipo": contrato[5],
        "fk_id_estado": contrato[6],
        "fk_texto_estado": contrato[7],
        "fk_id_usuario": contrato[8]
    }

    Contratos.push(contratoSchema);
  })
  res.json({title: 'Contratos', 'mydata': Contratos});
});

// Agregar
router.post('/crearContrato', async (req, res) => {
  var { fecha_inicio, fecha_vencimiento, fk_id_tipo, id_usuario } = req.body;
  // Definimos el contrato activado
  var fk_id_estado = 1;

  sql = "INSERT INTO contrato(fecha_inicio, fecha_vencimiento, fk_id_estado, fk_id_tipo) VALUES (to_DATE(:fecha_inicio,'YYYY/MM/DD'),to_DATE(:fecha_vencimiento,'YYYY/MM/DD'),:fk_id_estado,:fk_id_tipo)";
  await BD.Open(sql, [fecha_inicio, fecha_vencimiento, fk_id_estado, fk_id_tipo], true);

  // Si tuvo conexión a la DB
  if(res.status(200)) {
    console.log("[!] Contrato creado con éxito");

    //Con esto tomamos el ultimo registro en la tabla contrato para crear tabla rel y redirigir al documentoContrato y pueda agregar el documento
    sql2 = "SELECT id_contrato FROM (SELECT * FROM contrato ORDER BY id_contrato DESC ) WHERE rownum = 1";
    result2 = await BD.Open(sql2, [], true);

    var idContratoSql = result2.rows[0];

    if (idContratoSql) {
      var value_id_contrato = idContratoSql.toString();
      var value_id_usuario = req.session.id_usuario;

      sql3 = "INSERT INTO rel_contrato_usuario(fk_id_contrato, fk_id_usuario) VALUES (:idContratoSql, :id_usuario)";
      await BD.Open(sql3, [value_id_contrato, value_id_usuario], true);

      res.redirect('/documentoContrato/' + idContratoSql);
    }

    //res.refresh();
	} else {
		console.log("[!] Ocurrió un error al intentar crear el contrato ");
    res.redirect('/contratos');
	}
})


router.post('/subirDocumento/:id_contrato', uploadFile.single('url_documento'), async (req, res, next) => {
	const file = req.file
	if (!file) {
	  const error = new Error('Debes seleccionar un archivo')
	  error.httpStatusCode = 400
	  return next(error)
	}

	// Hacemos un update agregando el nombre del archivo al campo url_documento
	var id_contrato_bind = req.params.id_contrato;
  var url_documento = req.file.filename;

	sql = "UPDATE contrato SET url_documento= :url_documento WHERE id_contrato = :id_contrato_bind";
  await BD.Open(sql, [url_documento, id_contrato_bind], true);

  if(res.status(200)) {
    console.log("[!] Documento de contrato " + id_contrato_bind + " agregado con éxito");
    res.redirect('/contratos');
	} else {
		console.log("[!] Ocurrió un error al intentar agregar un documento al contrato " + id_contrato_bind);
    res.redirect('/contratos');
	}
})


// Modificar
router.post("/modificarContrato/:id_contrato", async (req, res) => {
  var { id_contrato } = req.params.id_contrato;
  var { correo, nombre, apellido, num_documento, fk_id_tipo, fecha_nacimiento, genero, fk_id_estado, telefono, password} = req.body;

  sql = "UPDATE contrato SET correo= :correo, nombre= :nombre, apellido= :apellido, num_documento= :num_documento, fk_id_tipo= :fk_id_tipo, fecha_nacimiento= to_DATE(:fecha_nacimiento,'YYYY/MM/DD'), genero= :genero, fk_id_estado= :fk_id_estado, telefono= :telefono, password= :passwordEncrypted WHERE id_usuario= :id_usuario";
  await BD.Open(sql, [correo, nombre, apellido, num_documento, fk_id_tipo, fecha_nacimiento, genero, fk_id_estado, telefono, passwordEncrypted, id_usuario], true);

  // Si tuvo conexión a la DB
  if(res.status(200)) {
    console.log("[!] Contrato " + id_contrato + " modificado con éxito");
    res.redirect('/contratos');
  } else {
    console.log("[!] Ocurrió un error al intentar modificar el contrato " + id_contrato);
    res.redirect('/contratos');
  }

})

// Anular
router.get("/anularContrato/:id_contrato", async (req, res) => {
  var id_contrato_bind = req.params.id_contrato;
  
  sql = "UPDATE contrato SET fk_id_estado=2 WHERE id_contrato = :id_contrato_bind";
  await BD.Open(sql, [id_contrato_bind], true);

  if(res.status(200)) {
    console.log("[!] Contrato " + id_contrato_bind + " anulado con éxito");
    res.redirect('/contratos');
	} else {
		console.log("[!] Ocurrió un error al intentar anular el contrato " + id_contrato_bind);
    res.redirect('/contratos');
	}
})


// Activar
router.get("/activarContrato/:id_contrato", async (req, res) => {
  var id_contrato_bind = req.params.id_contrato;
  
  sql = "UPDATE contrato SET fk_id_estado=1 WHERE id_contrato = :id_contrato_bind";
  await BD.Open(sql, [id_contrato_bind], true);

  if(res.status(200)) {
    console.log("[!] Contrato " + id_contrato_bind + " activado con éxito");
    res.redirect('/contratos');
	} else {
		console.log("[!] Ocurrió un error al intentar activar el contrato " + id_contrato_bind);
    res.redirect('/contratos');
	}
})


module.exports = router;
