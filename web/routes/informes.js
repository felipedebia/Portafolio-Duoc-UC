// Importaciones
const express = require('express');
const router = express.Router();
const settings = require('../bin/settings');
var moment = require('moment');
var functions = require('./functions');

// CRUD INFORME

// Listar todos los Informes
router.get('/listarInformes', async (req, res) => {
  
    binds = {};
    sql = "SELECT id_informe, fecha_creacion, fecha_actualizacion, descripcion, fk_id_venta FROM informe";
    result = await settings.OpenConnection(sql, binds, true);
  
    Informes = [];
  
    result.rows.map(oferta => {
        let ofertaSchema = {
            "id_informe": oferta[0],
            "fecha_creacion": moment(oferta[2]).format('DD-MM-YYYY'),
            "fecha_actualizacion": moment(oferta[3]).format('DD-MM-YYYY'),
            "descripcion": oferta[4],
            "fk_id_venta": oferta[5]
        }
  
        Informes.push(ofertaSchema);
    })
    res.json({title: 'Informes', 'mydata': Informes});
});


// Generar informe
router.post('/crearInforme/:id_venta', async (req, res) => {
    var fk_id_venta = req.params.id_venta;
    var { descripcion } = req.body;
    var fecha_creacion = functions.obtenerFechaActual();
    var fecha_actualizacion = functions.obtenerFechaActual();
    console.log(fk_id_venta)
    console.log(descripcion)
    console.log(fecha_creacion)
  
    sql = "INSERT INTO venta(fecha_creacion, fecha_actualizacion, descripcion, fk_id_venta) VALUES (to_DATE(:fecha_creacion,'YYYY/MM/DD'),to_DATE(:fecha_actualizacion,'YYYY/MM/DD'), :descripcion, :fk_id_venta)";
    await settings.OpenConnection(sql, [fecha_creacion, fecha_actualizacion, descripcion, fk_id_venta], true);
  
    // Si tuvo conexión a la DB
    if(res.status(200)) {
      console.log("[!] Informe de venta creada con éxito");
      res.redirect('/ventas');
      } else {
          console.log("[!] Ocurrió un error al intentar crear el informe de venta");
      res.redirect('/ventas');
      }
})


// Modificar informe
router.post("/modificarInforme/:id_informe", async (req, res) => {
  
    var id_informe = req.params.id_informe;
    var { descripcion } = req.body;
    var fecha_actualizacion = functions.obtenerFechaActual();
    
    sql = "UPDATE informe SET descripcion=:descripcion, fecha_actualizacion=to_date(:fecha_actualizacion,'YYYY-MM-DD') WHERE id_informe=:id_informe";
    await settings.OpenConnection(sql, [descripcion, fecha_actualizacion, id_informe], true);
  
    // Si tuvo conexión a la DB
    if(res.status(200)) {
      console.log("[!] Informe de venta " + id_producto + " modificado con éxito");
      res.redirect('/ventas');
    } else {
      console.log("[!] Ocurrió un error al intentar modificar el informe de venta " + id_producto);
      res.redirect('/ventas');
    }
  
  })


module.exports = router;