// Importaciones
const express = require('express');
const router = express.Router();
const settings = require('../bin/settings');
var moment = require('moment');
var functions = require('./functions');

// CRUD INFORME

// Listar todos los Informes
router.get('/listarInformes', async (req, res) => {
  try {
  
    binds = {};
    sql = "SELECT id_informe, fecha_creacion, fecha_actualizacion, descripcion, fk_id_venta FROM informe";
    result = await settings.OpenConnection(sql, binds, true);
  
    Informes = [];
  
    result.rows.map(oferta => {
        let ofertaSchema = {
            "id_informe": oferta[0],
            "fecha_creacion": moment(oferta[1]).format('DD-MM-YYYY'),
            "fecha_actualizacion": moment(oferta[2]).format('DD-MM-YYYY'),
            "descripcion": oferta[3],
            "fk_id_venta": oferta[4]
        }
  
        Informes.push(ofertaSchema);
    })
    res.json({title: 'Informes', 'mydata': Informes});

  } catch (error) {
    res.status(400);
    res.json({ "error": error });
    console.log(error);
  }

});


// Generar informe
router.post('/crearInforme/:id_venta', async (req, res) => {
  try {

    var fk_id_venta = req.params.id_venta;
    var { descripcion } = req.body;
    var fecha_creacion = functions.obtenerFechaActual();
    var fecha_actualizacion = functions.obtenerFechaActual();
  
    sql = "CALL PA_INFORME_CREAR(:fecha_creacion, :fecha_actualizacion, :descripcion, :fk_id_venta)";
    resultado = await settings.OpenConnection(sql, [fecha_creacion, fecha_actualizacion, descripcion, fk_id_venta], true);
  
    // Si tuvo conexión a la DB
    if(resultado) {
      console.log("[!] Informe de venta creada con éxito");
      var refresh_page = "true";
      res.redirect('/ventas/?refresh_status=' + refresh_page);
    } else {
      console.log("[!] Ocurrió un error al intentar crear el informe de venta");
      res.redirect('/ventas');
    }

  } catch (error) {
    res.status(400);
    res.send("Ocurrió un error al obtener los datos de la base de datos")
    console.log(error);
  }

});


// Modificar informe
router.post("/modificarInforme/:id_informe", async (req, res) => {
  try {
  
    var value_id_informe = req.params.id_informe;
    var { descripcion } = req.body;
    var fecha_actualizacion = functions.obtenerFechaActual();
    
    sql = "CALL PA_INFORME_UPDATE(:value_id_informe, :fecha_actualizacion, :descripcion)";
    resultado = await settings.OpenConnection(sql, [value_id_informe, fecha_actualizacion, descripcion], true);
  
    // Si tuvo conexión a la DB
    if(resultado) {
      console.log("[!] Informe de venta " + value_id_informe + " modificado con éxito");
      var refresh_page = "true";
      res.redirect('/ventas/?refresh_status=' + refresh_page);
    } else {
      console.log("[!] Ocurrió un error al intentar modificar el informe de venta " + value_id_informe);
      res.redirect('/ventas');
    }

  } catch (error) {
    res.status(400);
    res.send("Ocurrió un error al obtener los datos de la base de datos")
    console.log(error);
  }
  
});


  // Eliminar informe
router.get("/eliminarInforme/:id_informe", async (req, res) => {
  try {

    var value_id_informe = req.params.id_informe;
    
    sql = "CALL PA_INFORME_DELETE(:value_id_informe)";
    resultado = await settings.OpenConnection(sql, [value_id_informe], true);
  
    if(resultado) {
      console.log("[!] Informe " + value_id_informe + " eliminado con éxito");
      var refresh_page = "true";
      res.redirect('/ventas/?refresh_status=' + refresh_page);
    } else {
      console.log("[!] Ocurrió un error al intentar eliminar el informe " + value_id_informe);
      res.redirect('/ventas');
    }

  } catch (error) {
    res.status(400);
    res.send("Ocurrió un error al obtener los datos de la base de datos")
    console.log(error);
  }
  
});


module.exports = router;