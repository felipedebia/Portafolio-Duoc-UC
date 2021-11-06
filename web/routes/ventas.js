// Importaciones
const express = require('express');
const router = express.Router();
const BD = require('../bin/configbd');
var moment = require('moment');

// CRUD VENTAS

// Leer - Todos las ventas
router.get('/listarVentas', async (req, res) => {
  
  binds = {};
  sql = "SELECT venta.ID_VENTA,venta.FECHA_CREACION, venta.FECHA_ACTUALIZACION,venta.FK_ID_PEDIDO,venta.FK_ID_SEGURO,venta.FK_ID_TIPO,venta.FK_ID_ESTADO FROM VENTA JOIN pedido on venta.fk_id_pedido = pedido.id_pedido JOIN seguro on venta.fk_id_seguro = seguro.id_seguro JOIN tipo_venta on venta.fk_id_tipo = tipo_venta.id_tipo JOIN estado_venta on venta.fk_id_estado = estado_venta.id_estado";
  result = await BD.Open(sql, binds, true);

  Ventas = [];

  result.rows.map(venta => {
      let ventaSchema = {
          "id_venta": venta[0],
          "fecha_creacion": moment(venta[1]).format('DD-MM-YYYY'),
          "fecha_actualizacion": moment(venta[2]).format('DD-MM-YYYY'),
          "fk_id_pedido": venta[3],
          "fk_id_seguro": venta[4],
          "fk_texto_tipo": venta[5],
          "fk_texto_estado": venta[6]
      }

      Ventas.push(ventaSchema);
  })
  res.json({title: 'Ventas', 'mydata': Ventas});
});


// Leer - Venta en especifico
router.get('/listarVentas/:id_venta', async (req, res) => {
  
  binds = { "id_venta_bind": req.params.id_venta };
  sql = "SELECT fecha_creacion, fecha_actualizacion, fk_id_pedido, fk_id_seguro, fk_id_tipo, fk_id_estado FROM venta WHERE id_venta = :id_venta_bind";
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
          "fk_id_estado": venta[5]
      }

      Ventas.push(ventaSchema);
  })
  res.json({title: 'Ventas', 'mydata': Ventas});
});



// Anular
router.get("/anularVenta/:id_venta", async (req, res) => {
  var id_venta_bind = req.params;
  sql = "UPDATE venta SET fk_id_estado=2 WHERE id_venta = :id_venta_bind";
  await BD.Open(sql, [id_venta_bind], true);

  if(res.status(200)) {
    console.log("[!] Venta " + req.params.id_venta + " anulada con éxito");
    res.redirect('/ventas');
	} else {
		console.log("[!] Ocurrió un error al intentar anular la venta " + req.params.id_venta);
    res.redirect('/ventas');
	}
})

module.exports = router;
