// Importaciones
const express = require('express');
const router = express.Router();
const settings = require('../bin/settings');
var moment = require('moment');
var functions = require('./functions');

// CRUD VENTAS

// Listar todas las ventas
router.get('/listarVentas', async (req, res) => {
  
  binds = {};
  sql = "SELECT venta.id_venta, venta.fecha_creacion, venta.fecha_actualizacion, venta.fk_id_pedido, venta.fk_id_seguro, venta.fk_id_tipo, tipo_venta.nombre,venta.fk_id_estado, estado_venta.descripcion FROM venta JOIN pedido ON venta.fk_id_pedido = pedido.id_pedido JOIN seguro on venta.fk_id_seguro = seguro.id_seguro JOIN tipo_venta ON venta.fk_id_tipo = tipo_venta.id_tipo JOIN estado_venta ON venta.fk_id_estado = estado_venta.id_estado";
  result = await settings.OpenConnection(sql, binds, true);

  Ventas = [];

  result.rows.map(venta => {
      let ventaSchema = {
          "id_venta": venta[0],
          "fecha_creacion": moment(venta[1]).format('DD-MM-YYYY'),
          "fecha_actualizacion": moment(venta[2]).format('DD-MM-YYYY'),
          "fk_id_pedido": venta[3],
          "fk_id_seguro": venta[4],
          "fk_id_tipo": venta[5],
          "fk_texto_tipo": venta[6],
          "fk_id_estado": venta[7],
          "fk_texto_estado": venta[8]
      }

      Ventas.push(ventaSchema);
  })
  res.json({title: 'Ventas', 'mydata': Ventas});
});


//Listar detalles de todos las ventas
router.get('/listarVentaDetalles', async(req, res) => {

  binds = {};
  sql = "select id_ventaD, costo_fruta, costo_transporte, costo_impuestos, comision_servicio, comision_empresa, precio_final, fk_id_venta from venta_detalle";
  result = await settings.OpenConnection(sql, binds, true);

  VentaDetalles = [];

  result.rows.map(detalle => {
      let detalleSchema = {
          "id_ventaD": detalle[0],
          "costo_fruta": detalle[1],
          "costo_transporte": detalle[2],
          "costo_impuestos": detalle[3],
          "comision_servicio": detalle[4],
          "comision_empresa": detalle[5],
          "precio_final": detalle[6],
          "fk_id_venta": detalle[7]
      }

      VentaDetalles.push(detalleSchema);
  })
  res.json({ title: 'VentaDetalles', 'mydata': VentaDetalles });
});


// Agregar
router.post('/crearVenta/:id_venta', async (req, res) => {
  var id_venta_bind = req.params.id_venta;
  var fk_id_pedido = req.params.id_venta;
  var { fk_id_seguro } = req.body;
  var fecha_creacion = functions.obtenerFechaActual();
  var fecha_actualizacion = functions.obtenerFechaActual();
  var fk_id_estado = 1;
  // Venta externa
  var fk_id_tipo = 2;

  sql = "INSERT INTO venta(id_venta, fecha_creacion, fecha_actualizacion, fk_id_pedido, fk_id_seguro, fk_id_tipo, fk_id_estado) VALUES (:id_venta_bind, to_DATE(:fecha_creacion,'YYYY/MM/DD'), to_DATE(:fecha_actualizacion,'YYYY/MM/DD'), :fk_id_pedido, :fk_id_seguro, :fk_id_tipo, :fk_id_estado)";
  await settings.OpenConnection(sql, [id_venta_bind, fecha_creacion, fecha_actualizacion, fk_id_pedido, fk_id_seguro, fk_id_tipo, fk_id_estado], true);

  // Si tuvo conexión a la DB
  if(res.status(200)) {
    console.log("[!] Venta " + id_venta_bind + " creada con éxito");
    res.redirect('/ventas');
	} else {
		console.log("[!] Ocurrió un error al intentar crear la venta " + id_venta_bind);
    res.redirect('/ventas');
	}
})


// Anular
router.get("/anularVenta/:id_venta", async (req, res) => {
  var id_venta_bind = req.params.id_venta;
  sql = "UPDATE venta SET fk_id_estado=2 WHERE id_venta = :id_venta_bind";
  await settings.OpenConnection(sql, [id_venta_bind], true);

  if(res.status(200)) {
    console.log("[!] Venta " + id_venta_bind + " anulada con éxito");
    res.redirect('/ventas');
	} else {
		console.log("[!] Ocurrió un error al intentar anular la venta " + id_venta_bind);
    res.redirect('/ventas');
	}
})

module.exports = router;
