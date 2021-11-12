// Importaciones
const express = require('express');
const router = express.Router();
const settings = require('../bin/settings');
var moment = require('moment');

// CRUD INFORME

// Listar todos los Informes
router.get('/listarInformes', async (req, res) => {
  
    binds = {};
    sql = "SELECT id_informe, fecha_creacion, descripcion, fk_id_venta FROM informe";
    result = await settings.OpenConnection(sql, binds, true);
  
    Informes = [];
  
    result.rows.map(oferta => {
        let ofertaSchema = {
            "id_informe": oferta[0],
            "fecha_creacion": moment(oferta[2]).format('DD-MM-YYYY'),
            "descripcion": oferta[3],
            "fk_id_venta": oferta[4]
        }
  
        Informes.push(ofertaSchema);
    })
    res.json({title: 'Informes', 'mydata': Informes});
});


// Generar informe
router.post('/generarInforme/:id_venta', async (req, res) => {
    var fk_id_venta = req.params.id_venta;
    var { descripcion } = req.body;
    var fecha_creacion = functions.obtenerFechaActual();
  
    sql = "INSERT INTO venta(fecha_creacion, descripcion, fk_id_venta) VALUES (to_DATE(:fecha_creacion,'YYYY/MM/DD'), :descripcion, :fk_id_venta)";
    await settings.OpenConnection(sql, [fecha_creacion, descripcion, fk_id_venta], true);
  
    // Si tuvo conexión a la DB
    if(res.status(200)) {
      console.log("[!] Informe de venta creada con éxito");
      res.redirect('/ventas');
      } else {
          console.log("[!] Ocurrió un error al intentar crear el informe de venta");
      res.redirect('/ventas');
      }
})


module.exports = router;