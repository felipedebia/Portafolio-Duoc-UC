// Importaciones
const express = require('express');
const router = express.Router();
const settings = require('../bin/settings');
var moment = require('moment');
var functions = require('./functions');

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
            "fecha_ingreso_eng": moment(orden[1]).format('YYYY-MM-DD'),
            "fecha_retiro": moment(orden[2]).format('DD-MM-YYYY'),
            "fecha_retiro_eng": moment(orden[2]).format('YYYY-MM-DD'),
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
              "estado_reporte": orden[2],
              "descripcion": orden[3],
              "fk_id_ordenB": orden[4]
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


// Modificar Orden Bodega
router.post("/modificarOrdenBodega/:id_ordenb", async (req, res) => {
  try {
  
    var value_id_ordenb = req.params.id_ordenb;
    var { fecha_ingreso, fecha_retiro, fk_id_estado } = req.body;
    
    sql = "UPDATE orden_bodega SET fecha_ingreso=to_date(:fecha_ingreso,'YYYY-MM-DD'), fecha_retiro=to_date(:fecha_retiro,'YYYY-MM-DD'), fk_id_estado=:fk_id_estado WHERE id_ordenb=:value_id_ordenb";
    await settings.OpenConnection(sql, [fecha_ingreso, fecha_retiro, fk_id_estado, value_id_ordenb], true);
  
    // Si tuvo conexión a la DB
    if(res.status(200)) {
      console.log("[!] Orden de Bodega " + value_id_ordenb + " modificado con éxito");
      res.redirect('/ordenes_bodegas');
    } else {
      console.log("[!] Ocurrió un error al intentar modificar la orden de bodega " + value_id_ordenb);
      res.redirect('/ordenes_bodegas');
    }

  } catch (error) {
    res.status(400);
    res.send("Ocurrió un error al obtener los datos de la base de datos")
    console.log(error);
  }
  
});


// Agregar Reporte Bodega
router.post('/crearReporteBodega/:id_ordenb', async (req, res) => {
  try {

    var { descripcion } = req.body;
    var fecha_creacion = functions.obtenerFechaActual();
    var estado_reporte = 1;
    var fk_id_ordenb = req.params.id_ordenb;

    sql = "INSERT INTO reporte_bodega(fecha_creacion, estado_reporte, descripcion, fk_id_ordenb) values (to_date(:fecha_creacion,'YYYY-MM-DD'), :estado_reporte, :descripcion, :fk_id_ordenb)";
    await settings.OpenConnection(sql, [fecha_creacion, estado_reporte, descripcion, fk_id_ordenb], true);

    // Si tuvo conexión a la DB
    if(res.status(200)) {
      console.log("[!] Reporte de bodega creada con éxito");
      res.redirect('/reportes_bodega/' + fk_id_ordenb);
      //res.refresh();
    } else {
      console.log("[!] Ocurrió un error al intentar crear el reporte de bodega");
      res.redirect('/reportes_bodega');
    }

  } catch (error) {
    res.status(400);
    res.send("Ocurrió un error al obtener los datos de la base de datos")
    console.log(error);
  }

});


// Modificar Reporte Bodega
router.post("/modificarReporteBodega/:id_reporteb", async (req, res) => {
  try {
  
    var id_reporteb = req.params.id_reporteb;
    var { descripcion } = req.body;
    
    sql = "UPDATE reporte_bodega SET descripcion=:descripcion WHERE id_reporteb=:id_reporteb";
    await settings.OpenConnection(sql, [descripcion, id_reporteb], true);
  
    // Si tuvo conexión a la DB
    if(res.status(200)) {
      console.log("[!] Reporte de bodega " + id_reporteb + " modificado con éxito");
      res.redirect('/ordenes_bodegas');
    } else {
      console.log("[!] Ocurrió un error al intentar modificar el reporte de bodega " + id_reporteb);
      res.redirect('/ordenes_bodegas');
    }

  } catch (error) {
    res.status(400);
    res.send("Ocurrió un error al obtener los datos de la base de datos")
    console.log(error);
  }
  
});


  // Eliminar Reporte Bodega
router.get("/eliminarReporteBodega/:id_reporteb", async (req, res) => {
  try {

    var id_reporteb = req.params.id_reporteb;
    
    sql = "DELETE FROM reporte_bodega WHERE id_reporteb = :id_reporteb";
    await settings.OpenConnection(sql, [id_reporteb], true);
  
    if(res.status(200)) {
      console.log("[!] Reporte de Bodega " + id_reporteb + " eliminado con éxito");
      res.redirect('/ordenes_bodegas');
    } else {
      console.log("[!] Ocurrió un error al intentar eliminar el informe " + id_reporteb);
      res.redirect('/ordenes_bodegas');
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
            "fecha_llegada_eng": moment(orden[1]).format('YYYY-MM-DD'),
            "fecha_retiro": moment(orden[2]).format('DD-MM-YYYY'),
            "fecha_retiro_eng": moment(orden[2]).format('YYYY-MM-DD'),
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


// Modificar Orden Transporte
router.post("/modificarOrdenTransporte/:id_ordenT", async (req, res) => {
  try {
  
    var value_id_ordenT = req.params.id_ordenT;
    var { fecha_llegada, fecha_retiro, fk_id_estado } = req.body;
    
    sql = "UPDATE orden_transporte SET fecha_llegada=to_date(:fecha_llegada,'YYYY-MM-DD'), fecha_retiro=to_date(:fecha_retiro,'YYYY-MM-DD'), fk_id_estado=:fk_id_estado WHERE id_ordent=:value_id_ordenT";
    await settings.OpenConnection(sql, [fecha_llegada, fecha_retiro, fk_id_estado, value_id_ordenT], true);
  
    // Si tuvo conexión a la DB
    if(res.status(200)) {
      console.log("[!] Orden de Transporte " + value_id_ordenT + " modificado con éxito");
      res.redirect('/ordenes_transportes');
    } else {
      console.log("[!] Ocurrió un error al intentar modificar la orden de transporte " + value_id_ordenT);
      res.redirect('/ordenes_transportes');
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
    sql1 = "UPDATE orden_transporte SET fk_id_estado=2 WHERE id_ordenT = :id_ordenT_bind";
    resultado1 = await settings.OpenConnection(sql1, [id_ordenT_bind], true);

    if(resultado1) {
      console.log("[!] Orden de Transporte " + id_ordenT_bind + " anulada con éxito");

      // Si se anula una orden de transporte, hay que volver atras un estado en venta

      res.redirect('/ordenes_transportes');
    } else {
      console.log("[!] Ocurrió un error al intentar anular la orden de Transporte " + id_ordenT_bind);
      res.redirect('/ordenes_transportes');
    }

  } catch (error) {
    res.status(400);
    res.send("Ocurrió un error al obtener los datos de la base de datos")
    console.log(error);
  }

});


module.exports = router;
