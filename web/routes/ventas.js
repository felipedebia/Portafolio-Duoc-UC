// Importaciones
const express = require('express');
const router = express.Router();
const BD = require('../bin/configbd');
var moment = require('moment');
var functions = require('./functions');

// CRUD VENTAS

// Leer - Todos las ventas
router.get('/listarVentas', async (req, res) => {
  
  binds = {};
  sql = "SELECT venta.id_venta, venta.fecha_creacion, venta.fecha_actualizacion, venta.fk_id_pedido, venta.fk_id_seguro, venta.fk_id_tipo, tipo_venta.nombre,venta.fk_id_estado, estado_venta.descripcion FROM venta JOIN pedido ON venta.fk_id_pedido = pedido.id_pedido JOIN seguro on venta.fk_id_seguro = seguro.id_seguro JOIN tipo_venta ON venta.fk_id_tipo = tipo_venta.id_tipo JOIN estado_venta ON venta.fk_id_estado = estado_venta.id_estado";
  result = await BD.Open(sql, binds, true);

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


// Leer - Venta en especifico
router.get('/listarVentas/:id_venta', async (req, res) => {
  
  binds = { "id_venta_bind": req.params.id_venta };
  sql = "SELECT venta.fecha_creacion, venta.fecha_actualizacion, venta.fk_id_pedido, venta.fk_id_seguro, venta.fk_id_tipo, tipo_venta.nombre, venta.fk_id_estado, estado_venta.descripcion FROM venta WHERE id_venta = :id_venta_bind";
  result = await BD.Open(sql, binds, true);

  Ventas = [];

  result.rows.map(venta => {
      let ventaSchema = {
          "id_venta": id_venta_bind,
          "fecha_creacion": moment(venta[1]).format('DD-MM-YYYY'),
          "fecha_actualizacion": moment(venta[2]).format('DD-MM-YYYY'),
          "fk_id_pedido": venta[2],
          "fk_id_seguro": venta[3],
          "fk_id_tipo": venta[4],
          "fk_texto_tipo": venta[5],
          "fk_id_estado": venta[6],
          "fk_texto_estado": venta[7]
      }

      Ventas.push(ventaSchema);
  })
  res.json({title: 'Ventas', 'mydata': Ventas});
});


// Agregar
router.post('/crearVenta/:id_venta', async (req, res) => {
  var id_venta_bind = req.params.id_venta;
  var fk_id_pedido = req.params.id_venta;
  var { fk_id_seguro, fk_id_tipo } = req.body;
  var fecha_creacion = functions.obtenerFechaActual();
  var fecha_actualizacion = functions.obtenerFechaActual();
  var fk_id_estado = 1;

  sql = "INSERT INTO venta(id_venta, fecha_creacion, fecha_actualizacion, fk_id_pedido, fk_id_seguro, fk_id_tipo, fk_id_estado) VALUES (:id_venta_bind, to_DATE(:fecha_creacion,'YYYY/MM/DD'), to_DATE(:fecha_actualizacion,'YYYY/MM/DD'), :fk_id_pedido, :fk_id_seguro, :fk_id_tipo, :fk_id_estado)";
  await BD.Open(sql, [id_venta_bind, fecha_creacion, fecha_actualizacion, fk_id_pedido, fk_id_seguro, fk_id_tipo, fk_id_estado], true);

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
  await BD.Open(sql, [id_venta_bind], true);

  if(res.status(200)) {
    console.log("[!] Venta " + id_venta_bind + " anulada con éxito");
    res.redirect('/ventas');
	} else {
		console.log("[!] Ocurrió un error al intentar anular la venta " + id_venta_bind);
    res.redirect('/ventas');
	}
})

module.exports = router;
