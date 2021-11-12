// Importaciones
const express = require('express');
const router = express.Router();
const settings = require('../bin/settings');
var moment = require('moment');
var functions = require('./functions');


// CRUD FRUTAS

// Listar todas las frutas
router.get('/listarFrutas', async (req, res) => {
  
  binds = {};
  sql = "SELECT id_fruta, nombre, fecha_creacion, necesita_refrigeracion FROM fruta";
  result = await settings.OpenConnection(sql, binds, true);

  Frutas = [];

  result.rows.map(fruta => {
      let frutaSchema = {
          "id_fruta": fruta[0],
          "nombre": fruta[1],
          "fecha_creacion": moment(fruta[2]).format('DD-MM-YYYY'),
          "necesita_refrigeracion": fruta[3]
      }

      Frutas.push(frutaSchema);
  })
  res.json({title: 'Frutas', 'mydata': Frutas});
});


// Agregar
router.post('/crearFruta', async (req, res) => {
  var { nombre, necesita_refrigeracion } = req.body;
  var fecha_creacion = functions.obtenerFechaActual();

  sql = "INSERT INTO fruta(nombre, fecha_creacion, necesita_refrigeracion) VALUES (:nombre, to_DATE(:fecha_creacion,'YYYY/MM/DD'), :necesita_refrigeracion)";
  await settings.OpenConnection(sql, [nombre, fecha_creacion, necesita_refrigeracion], true);

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
