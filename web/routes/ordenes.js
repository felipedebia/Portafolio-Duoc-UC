// Importaciones
const express = require('express');
const router = express.Router();
const BD = require('../bin/configbd');

// CRUD ORDEN BODEGA

// Leer - Todos las ordenes Bodega
router.get('/listarOrdenesBodegas', async (req, res) => {
  
  binds = {};
  sql = "SELECT id_ordenB, fecha_ingreso, fecha_retiro, fk_id_estado, fk_id_venta FROM orden_bodega";
  result = await BD.Open(sql, binds, true);

  Ordenes = [];

  result.rows.map(orden => {
      let ordenSchema = {
          "id_ordenB": orden[0],
          "fecha_ingreso": orden[1],
          "fecha_retiro": orden[2],
          "fk_id_estado": orden[3],
          "fk_id_venta": orden[4]
      }

      Ordenes.push(ordenSchema);
  })
  res.json({title: 'Ordenes', 'mydata': Ordenes});
});


// Leer - Orden en especifico Bodega
router.get('/listarOrdenesBodegas/:id_ordenB', async (req, res) => {
  
  binds = { "id_ordenB_bind": req.params.id_ordenB };
  sql = "SELECT fecha_ingreso, fecha_retiro, fk_id_estado, fk_id_venta FROM orden_bodega WHERE id_ordenB = :id_ordenB_bind";
  result = await BD.Open(sql, binds, true);

  Ordenes = [];

  result.rows.map(orden => {
      let ordenSchema = {
          "id_ordenB": id_ordenB_bind,
          "fecha_ingreso": orden[0],
          "fecha_retiro": orden[1],
          "fk_id_estado": orden[2],
          "fk_id_venta": orden[3]
      }

      Ordenes.push(ordenSchema);
  })
  res.json({title: 'Ordenes', 'mydata': Ordenes});
});


// Anular orden Bodega
router.get("/anularOrdenBodega/:id_ordenb", async (req, res) => {
  var { id_ordenB_bind } = req.params;
  sql = "UPDATE orden_bodega SET fk_id_estado=2 WHERE id_ordenb = :id_ordenB_bind";
  await BD.Open(sql, [id_ordenB_bind], true);

  if(res.status(200)) {
    console.log("[!] Orden de Bodega " + req.params.id_ordenB + " anulada con éxito");
    res.redirect('/ordenes');
	} else {
		console.log("[!] Ocurrió un error al intentar anular la orden de Bodega " + req.params.id_ordenB);
    res.redirect('/ordenes');
	}
})


// CRUD ORDEN TRANSPORTE

// Leer - Todos las ordenes Transportes
router.get('/listarOrdenesTransportes', async (req, res) => {
  
  binds = {};
  sql = "SELECT id_ordenT, fecha_ingreso, fecha_retiro, fk_id_estado, fk_id_venta FROM orden_bodega";
  result = await BD.Open(sql, binds, true);

  Ordenes = [];

  result.rows.map(orden => {
      let ordenSchema = {
          "id_ordenT": orden[0],
          "fecha_ingreso": orden[1],
          "fecha_retiro": orden[2],
          "fk_id_estado": orden[3],
          "fk_id_venta": orden[4]
      }

      Ordenes.push(ordenSchema);
  })
  res.json({title: 'Ordenes', 'mydata': Ordenes});
});


// Leer - Orden en especifico Transportes
router.get('/listarOrdenesTransportes/:id_ordenT', async (req, res) => {
  
  binds = { "id_ordenT_bind": req.params.id_ordenT };
  sql = "SELECT fecha_ingreso, fecha_retiro, fk_id_estado, fk_id_venta FROM orden_bodega WHERE id_ordenT = :id_ordenT_bind";
  result = await BD.Open(sql, binds, true);

  Ordenes = [];

  result.rows.map(orden => {
      let ordenSchema = {
          "id_ordenT": id_ordenT_bind,
          "fecha_ingreso": orden[0],
          "fecha_retiro": orden[1],
          "fk_id_estado": orden[2],
          "fk_id_venta": orden[3]
      }

      Ordenes.push(ordenSchema);
  })
  res.json({title: 'Ordenes', 'mydata': Ordenes});
});


// Anular orden Transportes
router.get("/anularOrdenTransporte/:id_ordenT", async (req, res) => {
  var id_ordenT_bind = req.params;
  sql = "UPDATE orden_transporte SET fk_id_estado=2 WHERE id_ordenT = :id_ordenT_bind";
  await BD.Open(sql, [id_ordenT_bind], true);

  if(res.status(200)) {
    console.log("[!] Orden de Transporte " + req.params.id_ordenT + " anulada con éxito");
    res.redirect('/ordenes');
	} else {
		console.log("[!] Ocurrió un error al intentar anular la orden de Transporte " + req.params.id_ordenT);
    res.redirect('/ordenes');
	}
})

module.exports = router;
