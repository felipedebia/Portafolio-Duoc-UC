// Importaciones
const express = require('express');
const router = express.Router();
const BD = require('../bin/configbd');
var moment = require('moment');

// CRUD PEDIDOS

// Leer - Todos los pedidos
router.get('/listarPedidos', async (req, res) => {
  
  binds = {};
  sql = "SELECT id_pedido, direccion_despacho, fecha_creacion, fk_id_tipo, fk_id_ciudad, fk_id_usuario, fk_id_estado, estado_pedido.descripcion FROM pedido JOIN estado_pedido ON pedido.fk_id_estado = estado_pedido.id_estado";
  result = await BD.Open(sql, binds, true);

  Pedidos = [];

  result.rows.map(pedido => {
      let pedidoSchema = {
          "id_pedido": pedido[0],
          "direccion_despacho": pedido[1],
          "fecha_creacion": moment(pedido[2]).format('DD-MM-YYYY'),
          "fk_id_tipo": pedido[3],
          "fk_id_ciudad": pedido[4],
          "fk_id_usuario": pedido[5],
          "fk_id_estado": pedido[6],
          "fk_texto_estado": pedido[7]
      }

      Pedidos.push(pedidoSchema);
  })
  res.json({title: 'Pedidos', 'mydata': Pedidos});
});


// Leer - Pedido en especifico
router.get('/listarPedidos/:id_pedido', async (req, res) => {
  
  binds = { "id_pedido_bind": req.params.id_pedido };
  sql = "SELECT direccion_despacho, fecha_creacion, fk_id_tipo, fk_id_ciudad, fk_id_usuario, fk_id_estado FROM pedido WHERE id_pedido = :id_pedido_bind";
  result = await BD.Open(sql, binds, true);

  Pedidos = [];

  result.rows.map(pedido => {
      let pedidoSchema = {
          "id_pedido": id_pedido_bind,
          "direccion_despacho": pedido[0],
          "fecha_creacion": moment(pedido[1]).format('DD-MM-YYYY'),
          "fk_id_tipo": pedido[2],
          "fk_id_ciudad": pedido[3],
          "fk_id_usuario": pedido[4],
          "fk_id_estado": pedido[5]
      }

      Pedidos.push(pedidoSchema);
  })
  res.json({title: 'Pedidos', 'mydata': Pedidos});
});


// Agregar
router.post('/crearPedido', async(req, res) => {
  var { direccion_despacho, fk_id_ciudad} = req.body;
  var fk_id_usuario = req.session.id_usuario;

  var fk_id_tipo = 1;
  var fk_id_estado = 1;

  var fecha = new Date(); //Fecha actual
  var mes = fecha.getMonth() + 1; //obteniendo mes
  var dia = fecha.getDate(); //obteniendo dia
  var ano = fecha.getFullYear(); //obteniendo año
  if (dia < 10)
      dia = '0' + dia; //agrega cero si el menor de 10
  if (mes < 10)
      mes = '0' + mes //agrega cero si el menor de 10

  var fecha_creacion = ano + "-" + mes + "-" + dia;

  sql = "INSERT INTO pedido(direccion_despacho, fecha_creacion, fk_id_tipo, fk_id_ciudad, fk_id_usuario, fk_id_estado) VALUES (:direccion_despacho,to_DATE(:fecha_creacion,'YYYY/MM/DD'),:fk_id_tipo,:fk_id_ciudad,:fk_id_usuario,:fk_id_estado)";
  await BD.Open(sql, [direccion_despacho, fecha_creacion, fk_id_tipo, fk_id_ciudad, fk_id_usuario, fk_id_estado], true);

  // Si tuvo conexión a la DB
  if (res.status(200)) {
      console.log("[!] Pedido creado con éxito");
      res.redirect('/pedidos');
  } else {
      console.log("[!] Ocurrió un error al intentar registrar el pedido ");
      res.redirect('/pedidos');
  }
})


// Anular
router.get("/anularPedido/:id_pedido", async (req, res) => {
  var id_pedido_bind = req.params.id_pedido;
  sql = "UPDATE pedido SET fk_id_estado=2 WHERE id_pedido = :id_pedido_bind";
  await BD.Open(sql, [id_pedido_bind], true);

  if(res.status(200)) {
    console.log("[!] Pedido " + id_pedido_bind + " anulado con éxito");
    res.redirect('/pedidos');
	} else {
		console.log("[!] Ocurrió un error al intentar anular el pedido " + id_pedido_bind);
    res.redirect('/pedidos');
	}
})

module.exports = router;
