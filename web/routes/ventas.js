// Importaciones
const express = require('express');
const router = express.Router();
const BD = require('../bin/configbd');

// CRUD VENTAS

// Leer - Todos las ventas
router.get('/listarVentas', async (req, res) => {
  
  binds = {};
  sql = "SELECT id_venta, fecha_creacion, fecha_actualizacion, fk_id_pedido, fk_id_seguro, fk_id_tipo, fk_id_estado FROM venta";
  result = await BD.Open(sql, binds, true);

  Ventas = [];

  result.rows.map(venta => {
      let ventaSchema = {
          "id_venta": venta[0],
          "fecha_creacion": venta[1],
          "fecha_actualizacion": venta[2],
          "fk_id_pedido": venta[3],
          "fk_id_seguro": venta[4],
          "fk_id_tipo": venta[5],
          "fk_id_estado": venta[6]
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
          "fecha_creacion": venta[0],
          "fecha_actualizacion": venta[1],
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
