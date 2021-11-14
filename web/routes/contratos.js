// Importaciones
const express = require('express');
const router = express.Router();
const settings = require('../bin/settings');
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
  try {

    binds = {};
    sql = "SELECT id_contrato, url_documento, fecha_inicio, fecha_vencimiento, fk_id_tipo, tipo_contrato.nombre, fk_id_estado, estado_contrato.descripcion, rel_contrato_usuario.fk_id_usuario FROM contrato JOIN rel_contrato_usuario ON contrato.id_contrato = rel_contrato_usuario.fk_id_contrato JOIN tipo_contrato ON contrato.fk_id_tipo = tipo_contrato.id_tipo JOIN estado_contrato ON contrato.fk_id_estado = estado_contrato.id_estado";
    result = await settings.OpenConnection(sql, binds, true);

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

  } catch (error) {
    res.status(400);
    res.json({ "error": error });
    console.log(error);
  }

});

// Agregar
router.post('/crearContrato', async (req, res) => {
  try {

    var { fecha_inicio, fecha_vencimiento, fk_id_tipo, id_usuario } = req.body;
    // Definimos el contrato activado
    var fk_id_estado = 1;

    sql = "INSERT INTO contrato(fecha_inicio, fecha_vencimiento, fk_id_estado, fk_id_tipo) VALUES (to_DATE(:fecha_inicio,'YYYY/MM/DD'),to_DATE(:fecha_vencimiento,'YYYY/MM/DD'),:fk_id_estado,:fk_id_tipo)";
    await settings.OpenConnection(sql, [fecha_inicio, fecha_vencimiento, fk_id_estado, fk_id_tipo], true);

    // Si tuvo conexión a la DB
    if(res.status(200)) {
      console.log("[!] Contrato creado con éxito");

      //Con esto tomamos el ultimo registro en la tabla contrato para crear tabla rel y redirigir al documentoContrato y pueda agregar el documento
      sql2 = "SELECT id_contrato FROM (SELECT * FROM contrato ORDER BY id_contrato DESC ) WHERE rownum = 1";
      result2 = await settings.OpenConnection(sql2, [], true);

      var idContratoSql = result2.rows[0];

      if (idContratoSql) {
        var value_id_contrato = idContratoSql.toString();
        var value_id_usuario = req.session.id_usuario;

        sql3 = "INSERT INTO rel_contrato_usuario(fk_id_contrato, fk_id_usuario) VALUES (:idContratoSql, :id_usuario)";
        await settings.OpenConnection(sql3, [value_id_contrato, value_id_usuario], true);

        res.redirect('/documentoContrato/' + idContratoSql);
      }

      //res.refresh();
    } else {
      console.log("[!] Ocurrió un error al intentar crear el contrato ");
      res.redirect('/contratos');
    }

  } catch (error) {
    res.status(400);
    res.send("Ocurrió un error al obtener los datos de la base de datos")
    console.log(error);
  }

});


router.post('/subirDocumento/:id_contrato', uploadFile.single('url_documento'), async (req, res, next) => {
  try {

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
    await settings.OpenConnection(sql, [url_documento, id_contrato_bind], true);

    if(res.status(200)) {
      console.log("[!] Documento de contrato " + id_contrato_bind + " agregado con éxito");
      res.redirect('/contratos');
    } else {
      console.log("[!] Ocurrió un error al intentar agregar un documento al contrato " + id_contrato_bind);
      res.redirect('/contratos');
    }

  } catch (error) {
    res.status(400);
    res.send("Ocurrió un error al obtener los datos de la base de datos")
    console.log(error);
  }

});


// Modificar
router.post("/modificarContrato/:id_contrato", async (req, res) => {
  try {

    var { id_contrato } = req.params.id_contrato;
    var { fecha_inicio, fecha_vencimiento, fk_id_tipo, fk_id_estado } = req.body;

    sql = "UPDATE contrato SET fecha_inicio= to_DATE(:fecha_inicio,'YYYY/MM/DD'), fecha_vencimiento= to_DATE(:fecha_vencimiento,'YYYY/MM/DD'), fk_id_tipo= :fk_id_tipo, fk_id_estado= :fk_id_estado WHERE id_usuario= :id_usuario";
    await settings.OpenConnection(sql, [fecha_inicio, fecha_vencimiento, fk_id_tipo, fk_id_estado], true);

    // Si tuvo conexión a la DB
    if(res.status(200)) {
      console.log("[!] Contrato " + id_contrato + " modificado con éxito");
      res.redirect('/contratos');
    } else {
      console.log("[!] Ocurrió un error al intentar modificar el contrato " + id_contrato);
      res.redirect('/contratos');
    }

  } catch (error) {
    res.status(400);
    res.send("Ocurrió un error al obtener los datos de la base de datos")
    console.log(error);
  }

});


module.exports = router;
