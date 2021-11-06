// Importaciones
const express = require('express');
const router = express.Router();
const BD = require('../bin/configbd');
var moment = require('moment');
var functions = require('./functions');

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


// Leer - Mis Pedidos filtrados por session
router.get('/listarMisPedidos/', async (req, res) => {
  
  binds = { "id_pedido_bind": req.params.id_pedido };
  sql = "SELECT direccion_despacho, fecha_creacion, fk_id_tipo, fk_id_ciudad, fk_id_usuario, fk_id_estado FROM pedido WHERE fk_id_usuario = :req.session.id_usuario";
  result = await BD.Open(sql, binds, true);

  MisPedidos = [];

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

      MisPedidos.push(pedidoSchema);
  })
  res.json({title: 'Pedidos', 'mydata': MisPedidos});
});


//Listar detalles de un pedido especifico
router.get('/listarPedidoDetalles', async(req, res) => {

  binds = {};
  sql = "select pedido_detalle.id_pdetalle, pedido_detalle.cantidad, fruta.nombre, fruta_calidad.nombre, pedido_detalle.fk_id_pedido from pedido_detalle join fruta on pedido_detalle.fk_id_fruta = fruta.id_fruta join fruta_calidad on pedido_detalle.fk_id_calidad = fruta_calidad.id_calidad";
  result = await BD.Open(sql, binds, true);

  Detalles = [];

  result.rows.map(detalle => {
      let detalleSchema = {
          "id_pdetalle": detalle[0],
          "cantidad": detalle[1],
          "nombre": detalle[2],
          "calidad": detalle[3],
          "id_pedido": detalle[4]
      }

      Detalles.push(detalleSchema);
  })
  res.json({ title: 'Detalles', 'mydata': Detalles });
});


// Agregar
router.post('/crearPedido', async(req, res) => {
  var { direccion_despacho, fk_id_ciudad} = req.body;
  var fk_id_usuario = req.session.id_usuario;

  var fk_id_tipo = 1;
  var fk_id_estado = 1;

  var fecha_creacion = functions.obtenerFechaActual();

  sql = "INSERT INTO pedido(direccion_despacho, fecha_creacion, fk_id_tipo, fk_id_ciudad, fk_id_usuario, fk_id_estado) VALUES (:direccion_despacho,to_DATE(:fecha_creacion,'YYYY/MM/DD'),:fk_id_tipo,:fk_id_ciudad,:fk_id_usuario,:fk_id_estado)";
  await BD.Open(sql, [direccion_despacho, fecha_creacion, fk_id_tipo, fk_id_ciudad, fk_id_usuario, fk_id_estado], true);

  // Si tuvo conexión a la DB
  if (res.status(200)) {
      console.log("[!] Pedido creado con éxito");

      //Con esto tomamos el ultimo registro en la tabla pedido para redirigir al detalle pedido y pueda agregar frutas
      sql2 = "Select id_pedido from (select * from pedido order by id_pedido desc ) where rownum = 1";
      result = await BD.Open(sql2, [], true);

      var idPedidoSql = result.rows[0];

      if (idPedidoSql) {
          res.redirect('/pedido_detalles/' + idPedidoSql);
      }
  } else {
      console.log("[!] Ocurrió un error al intentar registrar el pedido ");
      res.redirect('/mispedidos');
  }
})


// Anular Pedido
router.get("/anularPedido/:id_pedido", async (req, res) => {
  var id_pedido_bind = req.params.id_pedido;
  sql = "UPDATE pedido SET fk_id_estado=2 WHERE id_pedido = :id_pedido_bind";
  await BD.Open(sql, [id_pedido_bind], true);

  if(res.status(200)) {
    console.log("[!] Pedido " + id_pedido_bind + " anulado con éxito");
    res.redirect('/mispedidos');
	} else {
		console.log("[!] Ocurrió un error al intentar anular el pedido " + id_pedido_bind);
    res.redirect('/mispedidos');
	}
})


// Agregar Pedido Detalle
router.post('/crearPedidoDetalle', async(req, res) => {
  var { fk_id_fruta, fk_id_calidad, fk_id_pedido, cantidad } = req.body;

  var fecha_creacion = functions.obtenerFechaActual();

  sql = "INSERT INTO pedido_detalle(CANTIDAD, FECHA_CREACION, FECHA_ACTUALIZACION, FK_ID_CALIDAD, FK_ID_FRUTA, FK_ID_PEDIDO) VALUES (:cantidad,to_DATE(:fecha_creacion,'YYYY/MM/DD'),to_DATE(:fecha_creacion,'YYYY/MM/DD'),:fk_id_calidad,:fk_id_fruta,:fk_id_pedido)";
  await BD.Open(sql, [cantidad, fecha_creacion, fecha_creacion, fk_id_calidad, fk_id_fruta, fk_id_pedido], true);

  // Si tuvo conexión a la DB
  if (res.status(200)) {
      console.log("[!] Pedido creado con éxito");
      functions.ListarPedidoDetalles();
      res.redirect('/pedido_detalles/' + fk_id_pedido);
  } else {
      console.log("[!] Ocurrió un error al intentar registrar el pedido ");
      res.redirect('/mispedidos');
  }
})


//Confirmar pedido
router.get("/confirmarPedido/:id_pedido", async(req, res) => {
  var id_pedido_bind = req.params.id_pedido;
  sql = "UPDATE pedido SET fk_id_estado=2 WHERE id_pedido = :id_pedido_bind";
  var consulta = await BD.Open(sql, [id_pedido_bind], true);

  if (consulta) {
      console.log("[!] Pedido " + req.params.id_pedido + " enviado con éxito");
      res.redirect('/mispedidos');
  } else {
      console.log("[!] Ocurrió un error al intentar enviar el pedido " + req.params.id_pedido);
      res.redirect('/mispedidos');
  }
})


//Eliminar Pedido Detalle
router.get("/eliminarPedidoDetalles/:id_detalle_pedido", async(req, res) => {
  var id_pedido_bind = req.params.id_detalle_pedido;
  sql = "DELETE FROM pedido_detalle WHERE id_pdetalle = :id_detalle_pedido";
  var consulta = await BD.Open(sql, [id_pedido_bind], true);

  if (consulta) {
      console.log("[!] Detalle pedido " + req.params.id_detalle_pedido + " eliminado con éxito");
      functions.ListarDetallePedido();
      res.redirect(req.get('referer'));
  } else {
      console.log("[!] Ocurrió un error al intentar eliminar el detalle pedido " + req.params.id_pedido);
  }
})


//Eliminar pedido
router.get("/eliminarPedido/:id_pedido", async(req, res) => {
  var id_pedido_bind = req.params.id_pedido;
  sql = "UPDATE pedido SET fk_id_estado=6 WHERE id_pedido = :id_pedido_bind";
  var consulta = await BD.Open(sql, [id_pedido_bind], true);

  if (consulta) {
      console.log("[!] Pedido " + req.params.id_pedido + " eliminado con éxito");
      res.redirect('/mispedidos');
  } else {
      console.log("[!] Ocurrió un error al intentar eliminar el pedido " + req.params.id_pedido);
      res.redirect('/mispedidos');
  }
})

module.exports = router;
