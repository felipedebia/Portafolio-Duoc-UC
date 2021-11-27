// Importaciones
const express = require('express');
const router = express.Router();
const settings = require('../bin/settings');
var moment = require('moment');

// CRUD ORDEN BODEGA

// Leer - Todos las ordenes Bodega
router.get('/listarOrdenesBodegas', async (req, res) => {
  try {
  
    binds = {};
    sql = "SELECT id_ordenB, fecha_ingreso, fecha_retiro, fk_id_estado, eb.descripcion, fk_id_venta FROM orden_bodega JOIN estado_bodega eb ON orden_bodega.fk_id_estado = eb.id_estado";
    result = await settings.OpenConnection(sql, binds, true);

    OrdenesBodegas = [];

    result.rows.map(orden => {
        let ordenSchema = {
            "id_ordenB": orden[0],
            "fecha_ingreso": moment(orden[1]).format('DD-MM-YYYY'),
            "fecha_retiro": moment(orden[2]).format('DD-MM-YYYY'),
            "fk_id_estado": orden[3],
            "fk_texto_estado": orden[4],
            "fk_id_venta": orden[5],
        }

        OrdenesBodegas.push(ordenSchema);
    })
    res.json({title: 'OrdenesBodega', 'mydata': OrdenesBodegas});

  } catch (error) {
    res.status(400);
    res.json({ "error": error });
    console.log(error);
  }

});


// Listar todos los reportes de bodega
router.get('/listarReportesBodegas', async (req, res) => {
  try {

      binds = {};
      sql = "SELECT id_reporteB, fecha_creacion, estado_reporte, descripcion, fk_id_ordenB FROM reporte_bodega";
      result = await settings.OpenConnection(sql, binds, true);
  
      ReportesBodegas = [];
  
      result.rows.map(orden => {
          let ordenSchema = {
              "id_reporteB": orden[0],
              "fecha_creacion": moment(orden[1]).format('DD-MM-YYYY'),
              "estado_reporte": orden[3],
              "descripcion": orden[4],
              "fk_id_ordenB": orden[5]
          }
  
          ReportesBodegas.push(ordenSchema);
      })
      res.json({title: 'ReportesBodegas', 'mydata': ReportesBodegas});

  } catch (error) {
      res.status(400);
      res.json({ "error": error });
      console.log(error);
  }

});


// Crear Orden Bodega
router.post('/crearOrdenBodega/:id_venta', async (req, res) => {
  try {

    var { fecha_ingreso, fecha_retiro } = req.body;
    var value_fk_id_venta = req.params.id_venta;
    var fk_id_estado = 1;

    sql1 = "INSERT INTO orden_bodega(fecha_ingreso, fecha_retiro, fk_id_estado, fk_id_venta) values (to_date(:fecha_creacion,'YYYY-MM-DD'), to_date(:fecha_retiro,'YYYY-MM-DD'), :fk_id_estado, :value_fk_id_venta)";
    resultado1 = await settings.OpenConnection(sql1, [fecha_ingreso, fecha_retiro, fk_id_estado, value_fk_id_venta], true);

    // Si tuvo conexión a la DB
    if(resultado1) {
      console.log("[!] Orden de bodega creada con éxito");

      // Actualizamos venta a estado 4 = En bodega
      sql2 = "UPDATE venta SET fk_id_estado=4 WHERE id_venta = :value_fk_id_venta";
      resultado2 = await settings.OpenConnection(sql2, [value_fk_id_venta], true);

      if(resultado1) { 
        res.redirect('/ordenes_bodegas');
      }
    } else {
      console.log("[!] Ocurrió un error al intentar crear la Orden de Bodega");
      res.redirect('/ventas');
    }

  } catch (error) {
    res.status(400);
    res.send("Ocurrió un error al obtener los datos de la base de datos")
    console.log(error);
  }

});


// Anular orden Bodega
router.get("/anularOrdenBodega/:id_ordenb", async (req, res) => {
  try {

    var id_ordenB_bind = req.params.id_ordenB;
    sql = "UPDATE orden_bodega SET fk_id_estado=2 WHERE id_ordenb = :id_ordenB_bind";
    await settings.OpenConnection(sql, [id_ordenB_bind], true);

    if(res.status(200)) {
      console.log("[!] Orden de Bodega " + id_ordenB_bind + " anulada con éxito");
      res.redirect('/ordenes');
    } else {
      console.log("[!] Ocurrió un error al intentar anular la orden de Bodega " + id_ordenB_bind);
      res.redirect('/ordenes');
    }

  } catch (error) {
    res.status(400);
    res.send("Ocurrió un error al obtener los datos de la base de datos")
    console.log(error);
  }

});


// CRUD ORDEN TRANSPORTE

// Leer - Todos las ordenes Transportes
router.get('/listarOrdenesTransportes', async (req, res) => {
  try {
  
    binds = {};
    sql = "SELECT id_ordenT, fecha_llegada, fecha_retiro, fk_id_estado, et.descripcion, fk_id_venta FROM orden_transporte JOIN estado_transporte et ON orden_transporte.fk_id_estado = et.id_estado";
    result = await settings.OpenConnection(sql, binds, true);

    OrdenesTransportes = [];

    result.rows.map(orden => {
        let ordenSchema = {
            "id_ordenT": orden[0],
            "fecha_llegada": moment(orden[1]).format('DD-MM-YYYY'),
            "fecha_retiro": moment(orden[2]).format('DD-MM-YYYY'),
            "fk_id_estado": orden[3],
            "fk_texto_estado": orden[4],
            "fk_id_venta": orden[5]
        }

        OrdenesTransportes.push(ordenSchema);
    })
    res.json({title: 'OrdenesTransportes', 'mydata': OrdenesTransportes});

  } catch (error) {
    res.status(400);
    res.send("Ocurrió un error al obtener los datos de la base de datos")
    console.log(error);
  }

});


// Crear Orden Transporte
router.post('/crearOrdenTransporte/:id_venta', async (req, res) => {
  try {

    var { fecha_llegada, fecha_retiro } = req.body;
    var value_fk_id_venta = req.params.id_venta;
    var fk_id_estado = 1;

    sql1 = "INSERT INTO orden_transporte(fecha_llegada, fecha_retiro, fk_id_estado, fk_id_venta) values (to_date(:fecha_llegada,'YYYY-MM-DD'), to_date(:fecha_retiro,'YYYY-MM-DD'), :fk_id_estado, :value_fk_id_venta)";
    resultado1 = await settings.OpenConnection(sql1, [fecha_llegada, fecha_retiro, fk_id_estado, value_fk_id_venta], true);

    // Si tuvo conexión a la DB
    if(resultado1) {
      console.log("[!] Orden de transporte creada con éxito");

      // Actualizamos venta a estado 5 = En transporte
      sql2 = "UPDATE venta SET fk_id_estado=5 WHERE id_venta = :value_fk_id_venta";
      resultado2 = await settings.OpenConnection(sql2, [value_fk_id_venta], true);

      if(resultado1) { 
        res.redirect('/ordenes_transportes');
      }
    } else {
      console.log("[!] Ocurrió un error al intentar crear la Orden de Transporte");
      res.redirect('/ventas');
    }

  } catch (error) {
    res.status(400);
    res.send("Ocurrió un error al obtener los datos de la base de datos")
    console.log(error);
  }

});


// Anular orden Transportes
router.get("/anularOrdenTransporte/:id_ordenT", async (req, res) => {
  try {

    var id_ordenT_bind = req.params.id_ordenT;
    sql = "UPDATE orden_transporte SET fk_id_estado=2 WHERE id_ordenT = :id_ordenT_bind";
    await settings.OpenConnection(sql, [id_ordenT_bind], true);

    if(res.status(200)) {
      console.log("[!] Orden de Transporte " + id_ordenT_bind + " anulada con éxito");
      res.redirect('/ordenes');
    } else {
      console.log("[!] Ocurrió un error al intentar anular la orden de Transporte " + id_ordenT_bind);
      res.redirect('/ordenes');
    }

  } catch (error) {
    res.status(400);
    res.send("Ocurrió un error al obtener los datos de la base de datos")
    console.log(error);
  }

});


module.exports = router;
