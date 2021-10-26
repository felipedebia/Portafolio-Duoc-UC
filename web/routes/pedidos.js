// Importaciones
const express = require('express');
const router = express.Router();
const BD = require('../bin/configbd');

// CRUD PEDIDOS

// Leer - Todos los pedidos
router.get('/listarPedidos', async (req, res) => {
  
  binds = {};
  sql = "SELECT id_pedido, estado_pedido, direccion_despacho, fecha_solicitud, fk_id_tipo, fk_id_ciudad, fk_id_usuario, fk_id_estado FROM solicitud";
  result = await BD.Open(sql, binds, true);

  Pedidos = [];

  result.rows.map(pedido => {
      let pedidoSchema = {
          "id_pedido": pedido[0],
          "estado_pedido": pedido[1],
          "direccion_despacho": pedido[2],
          "fecha_solicitud": pedido[3],
          "fk_id_tipo": pedido[4],
          "fk_id_ciudad": pedido[5],
          "fk_id_usuario": pedido[6],
          "fk_id_estado": pedido[7]
      }

      Pedidos.push(pedidoSchema);
  })
  res.json({title: 'Pedidos', 'mydata': Pedidos});
});


// Leer - Pedido en especifico
router.get('/listarPedidos/:id_pedido', async (req, res) => {
  
  binds = { "id_pedido_bind": req.params.id_pedido };
  sql = "SELECT estado_pedido, direccion_despacho, fecha_solicitud, fk_id_tipo, fk_id_ciudad, fk_id_usuario, fk_id_estado WHERE id_solicitud = :id_solicitud_bind";
  result = await BD.Open(sql, binds, true);

  Pedidos = [];

  result.rows.map(pedido => {
      let pedidoSchema = {
          "id_pedido": id_pedido_bind,
          "estado_pedido": pedido[0],
          "direccion_despacho": pedido[1],
          "fecha_solicitud": pedido[2],
          "fk_id_tipo": pedido[3],
          "fk_id_ciudad": pedido[4],
          "fk_id_usuario": pedido[5],
          "fk_id_estado": pedido[6]
      }

      Pedidos.push(pedidoSchema);
  })
  res.json({title: 'Pedidos', 'mydata': Pedidos});
});



// Anular
router.get("/anularPedido/:id_pedido", async (req, res) => {
  var { id_pedido } = req.params;
  sql = "UPDATE solicitud SET estado_solicitud=2 WHERE id_solicitud = :id_solicitud";
  await BD.Open(sql, [id_pedido], true);

  if(res.status(200)) {
    console.log("[!] Pedido " + req.params.id_pedido + " anulada con éxito");
    res.redirect('/pedidos');
	} else {
		console.log("[!] Ocurrió un error al intentar anular el pedido " + req.params.id_pedido);
    res.redirect('/pedidos');
	}
})

module.exports = router;
