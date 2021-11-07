// Importaciones
const express = require('express');
const router = express.Router();
const BD = require('../bin/configbd');
var moment = require('moment');
var functions = require('./functions');

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


// CRUD SEGUROS

// Leer - Todos los seguros
router.get('/listarSeguros', async (req, res) => {
  
  binds = {};
  sql = "SELECT id_seguro, nombre_empresa, url_documento, fecha_inicio, fecha_termino FROM seguro";
  result = await BD.Open(sql, binds, true);

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
  res.json({title: 'Seguros', 'mydata': Seguros});
});


// Agregar
router.post('/crearFruta', async (req, res) => {
  var { nombre, necesita_refrigeracion } = req.body;
  var fecha_creacion = functions.obtenerFechaActual();

  sql = "INSERT INTO fruta(nombre, fecha_creacion, necesita_refrigeracion) VALUES (:nombre, to_DATE(:fecha_creacion,'YYYY/MM/DD'), :necesita_refrigeracion)";
  await BD.Open(sql, [nombre, fecha_creacion, necesita_refrigeracion], true);

  // Si tuvo conexión a la DB
  if(res.status(200)) {
    console.log("[!] Fruta creada con éxito");
    res.redirect('/frutas');
    //res.refresh();
	} else {
		console.log("[!] Ocurrió un error al intentar crear la fruta");
    res.redirect('/frutas');
	}
})


// Modificar
router.post("/modificarFruta/:id_fruta", async (req, res) => {
  
  var id_fruta = req.params.id_fruta;
  var { nombre, necesita_refrigeracion} = req.body;

  sql = "UPDATE fruta SET nombre= :nombre, necesita_refrigeracion= :necesita_refrigeracion WHERE id_fruta= :id_fruta";
  await BD.Open(sql, [nombre, necesita_refrigeracion, id_fruta], true);

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
  await BD.Open(sql, [id_fruta_bind], true);

  if(res.status(200)) {
    console.log("[!] Fruta " + id_fruta_bind + " eliminada con éxito");
    res.redirect('/frutas');
	} else {
		console.log("[!] Ocurrió un error al intentar eliminar la fruta " + id_fruta_bind);
    res.redirect('/frutas');
	}
})

module.exports = router;
