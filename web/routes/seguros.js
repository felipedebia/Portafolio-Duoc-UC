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

// Leer - Todos los seguros
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


// Agregar
router.post('/crearSeguro', async (req, res) => {
  var { nombre_empresa, fecha_inicio, fecha_termino,id_seguro } = req.body;

  sql = "INSERT INTO seguro(nombre_empresa, fecha_inicio, fecha_termino) VALUES (:nombre_empresa, to_DATE(:fecha_inicio,'YYYY/MM/DD'),to_DATE(:fecha_termino,'YYYY/MM/DD'))";
  await settings.OpenConnection(sql, [nombre_empresa, fecha_inicio, fecha_termino], true);

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


// Modificar
router.post("/modificarFruta/:id_fruta", async (req, res) => {
  
  var id_fruta = req.params.id_fruta;
  var { nombre, necesita_refrigeracion} = req.body;

  sql = "UPDATE fruta SET nombre= :nombre, necesita_refrigeracion= :necesita_refrigeracion WHERE id_fruta= :id_fruta";
  await settings.OpenConnection(sql, [nombre, necesita_refrigeracion, id_fruta], true);

  // Si tuvo conexión a la DB
  if(res.status(200)) {
    console.log("[!] Fruta " + id_fruta + " modificado con éxito");
    res.redirect('/frutas');
  } else {
    console.log("[!] Ocurrió un error al intentar modificar la fruta " + id_fruta);
    res.redirect('/frutas');
  }

})

// Eliminar
router.get("/eliminarFruta/:id_fruta", async (req, res) => {
  var id_fruta_bind = req.params.id_fruta;
  
  sql = "DELETE FROM fruta WHERE id_fruta = :id_fruta_bind";
  await settings.OpenConnection(sql, [id_fruta_bind], true);

  if(res.status(200)) {
    console.log("[!] Fruta " + id_fruta_bind + " eliminada con éxito");
    res.redirect('/frutas');
	} else {
		console.log("[!] Ocurrió un error al intentar eliminar la fruta " + id_fruta_bind);
    res.redirect('/frutas');
	}
})

module.exports = router;
