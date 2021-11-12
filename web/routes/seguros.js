// Importaciones
const express = require('express');
const router = express.Router();
const settings = require('../bin/settings');
var moment = require('moment');
var functions = require('./functions');

const multer = require('multer');
var path = require('path');

// Configurar carpeta de destino de las subidas
var storage = multer.diskStorage({
	destination: function (req, file, cb) {
	  cb(null, 'public/subidas/seguros')
	},
	filename: function (req, file, cb) {
		cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
	}
  })
  
var uploadFile = multer({ storage: storage })


// CRUD SEGUROS

// Listar todos los seguros
router.get('/listarSeguros', async (req, res) => {
  
  binds = {};
  sql = "SELECT id_seguro, nombre_empresa, url_documento, fecha_inicio, fecha_termino FROM seguro";
  result = await settings.OpenConnection(sql, binds, true);

  Seguros = [];

  result.rows.map(seguro => {
      let seguroSchema = {
          "id_seguro": seguro[0],
          "nombre_empresa": seguro[1],
          "url_documento": seguro[2],
          "fecha_inicio": moment(seguro[3]).format('DD-MM-YYYY'),
          "fecha_termino": moment(seguro[4]).format('DD-MM-YYYY')
      }

      Seguros.push(seguroSchema);
  })
  res.json({ title: 'Seguros', 'mydata': Seguros });
});


// Agregar seguro
router.post('/crearSeguro', async (req, res) => {
  var { nombre_empresa, fecha_inicio, fecha_termino } = req.body;
  var fk_id_estado = '1';

  sql = "INSERT INTO seguro(nombre_empresa, fecha_inicio, fecha_termino, fk_id_estado) VALUES (:nombre_empresa, to_DATE(:fecha_inicio,'YYYY/MM/DD'),to_DATE(:fecha_termino,'YYYY/MM/DD', :fk_id_estado))";
  await settings.OpenConnection(sql, [nombre_empresa, fecha_inicio, fecha_termino, fk_id_estado], true);

  // Si tuvo conexión a la DB
  if (res.status(200)) {
    console.log("[!] Seguro creado con éxito");

    //Con esto tomamos el ultimo registro en la tabla seguro para crear tabla rel y redirigir al documentoSeguro y pueda agregar el documento
    sql2 = "SELECT id_seguro FROM (SELECT * FROM seguro ORDER BY id_seguro DESC ) WHERE rownum = 1";
    result2 = await settings.OpenConnection(sql2, [], true);

    var idSeguroSql = result2.rows[0];

    res.redirect('/documentoSeguro/' + idSeguroSql);

  } else {
    console.log("[!] Ocurrió un error al intentar crear el seguro ");
    res.redirect('/seguros');
  }
})


router.post('/subirDocumento/:id_seguro', uploadFile.single('url_documento'), async (req, res, next) => {
	const file = req.file
	if (!file) {
	  const error = new Error('Debes seleccionar un archivo')
	  error.httpStatusCode = 400
	  return next(error)
	}

	// Hacemos un update agregando el nombre del archivo al campo url_documento
	var id_seguro_bind = req.params.id_seguro;
  var url_documento = req.file.filename;

	sql = "UPDATE seguro SET url_documento= :url_documento WHERE id_seguro = :id_seguro_bind";
  await settings.OpenConnection(sql, [url_documento, id_seguro_bind], true);

  if(res.status(200)) {
    console.log("[!] Documento de Seguro " + id_seguro_bind + " agregado con éxito");
    res.redirect('/seguros');
	} else {
		console.log("[!] Ocurrió un error al intentar agregar un documento al seguro " + id_seguro_bind);
    res.redirect('/seguros');
	}
})

// Anular
router.get("/anularSeguro/:id_seguro", async(req, res) => {
  var id_seguro_bind = req.params.id_seguro;

  sql = "UPDATE seguro SET fk_id_estado=2 WHERE id_seguro = :id_seguro_bind";
  await settings.OpenConnection(sql, [id_seguro_bind], true);

  if(res.status(200)) {
      console.log("[!] Seguro " + id_seguro_bind + " anulado con éxito");
      res.redirect('/seguros');
  } else {
      console.log("[!] Ocurrió un error al intentar anular el seguro " + id_seguro_bind);
      res.redirect('/seguros');
  }
})

module.exports = router;
