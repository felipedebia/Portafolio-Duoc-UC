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
  try {
  
    binds = {};
    sql = "SELECT id_seguro, nombre_empresa, url_documento, fecha_inicio, fecha_termino, fk_id_estado, estado_seguro.descripcion FROM seguro JOIN estado_seguro ON seguro.fk_id_estado = estado_seguro.id_estado";
    result = await settings.OpenConnection(sql, binds, true);

    Seguros = [];

    result.rows.map(seguro => {
        let seguroSchema = {
            "id_seguro": seguro[0],
            "nombre_empresa": seguro[1],
            "url_documento": seguro[2],
            "fecha_inicio": moment(seguro[3]).format('DD-MM-YYYY'),
            "fecha_termino": moment(seguro[4]).format('DD-MM-YYYY'),
            "fk_id_estado": seguro[5],
            "fk_texto_estado": seguro[6],
        }

        Seguros.push(seguroSchema);
    })
    res.json({ title: 'Seguros', 'mydata': Seguros });

  } catch (error) {
    res.status(400);
    res.json({ "error": error });
    console.log(error);
  }

});


// Agregar seguro
router.post('/crearSeguro', async (req, res) => {
  try {

    var { nombre_empresa, fecha_inicio, fecha_termino } = req.body;
    var fk_id_estado = '1';

    sql1 = "CALL PA_SEGURO_CREAR(:nombre_empresa, :fecha_inicio, :fecha_termino, :fk_id_estado)";
    resultado1 = await settings.OpenConnection(sql1, [nombre_empresa, fecha_inicio, fecha_termino, fk_id_estado], true);

    // Si tuvo conexión a la DB
    if (resultado1) {
      console.log("[!] Seguro creado con éxito");

      //Con esto tomamos el ultimo registro en la tabla seguro para crear tabla rel y redirigir al documentoSeguro y pueda agregar el documento
      sql2 = "SELECT id_seguro FROM (SELECT * FROM seguro ORDER BY id_seguro DESC ) WHERE rownum = 1";
      resultado2 = await settings.OpenConnection(sql2, [], true);

      var idSeguroSql = resultado2.rows[0];

      res.redirect('/documentoSeguro/' + idSeguroSql);

    } else {
      console.log("[!] Ocurrió un error al intentar crear el seguro ");
      res.redirect('/seguros');
    }

  } catch (error) {
    res.status(400);
    res.send("[!] Ocurrió un error al obtener los datos de la base de datos")
    console.log(error);
  }

});


// Subir documento
router.post('/subirDocumento/:id_seguro', uploadFile.single('url_documento'), async (req, res, next) => {
  try {

    const file = req.file
    if (!file) {
      const error = new Error('Debes seleccionar un archivo')
      error.httpStatusCode = 400
      return next(error)
    }

    // Hacemos un update agregando el nombre del archivo al campo url_documento
    var id_seguro_bind = req.params.id_seguro;
    var url_documento = req.file.filename;

    sql = "CALL PA_SEGURO_UPDATE_URLDOCUMENTO(:id_seguro_bind, :url_documento)";
    resultado = await settings.OpenConnection(sql, [id_seguro_bind, url_documento], true);

    if(resultado) {
      console.log("[!] Documento de Seguro " + id_seguro_bind + " agregado con éxito");
      res.redirect('/seguros');
    } else {
      console.log("[!] Ocurrió un error al intentar agregar un documento al seguro " + id_seguro_bind);
      res.redirect('/seguros');
    }

  } catch (error) {
    res.status(400);
    res.send("[!] Ocurrió un error al obtener los datos de la base de datos")
    console.log(error);
  }

});


// Anular seguro
router.get("/anularSeguro/:id_seguro", async(req, res) => {
  try {

    var id_seguro_bind = req.params.id_seguro;

    sql = "CALL PA_SEGURO_ANULAR(:id_seguro_bind)";
    resultado = await settings.OpenConnection(sql, [id_seguro_bind], true);

    if(resultado) {
        console.log("[!] Seguro " + id_seguro_bind + " anulado con éxito");
        res.redirect('/seguros');
    } else {
        console.log("[!] Ocurrió un error al intentar anular el seguro " + id_seguro_bind);
        res.redirect('/seguros');
    }

  } catch (error) {
    res.status(400);
    res.send("[!] Ocurrió un error al obtener los datos de la base de datos")
    console.log(error);
  }

});


module.exports = router;
