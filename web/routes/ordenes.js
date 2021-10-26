// Importaciones
const express = require('express');
const router = express.Router();
const BD = require('../bin/configbd');

// CRUD ORDEN BODEGA

// Leer - Todos las ordenes Bodega
router.get('/listarOrdenesBodegas', async (req, res) => {
  
  binds = {};
  sql = "SELECT id_subastaF, fecha_creacion, fecha_actualizacion, fecha_termino, estado_subasta FROM subasta_fruta";
  result = await BD.Open(sql, binds, true);

  Subastas = [];

  result.rows.map(subasta => {
      let subastaSchema = {
          "id_subastaF": subasta[0],
          "fecha_creacion": subasta[1],
          "fecha_actualizacion": subasta[2],
          "fecha_termino": subasta[3],
          "estado_subasta": subasta[4]
      }

      Subastas.push(subastaSchema);
  })
  res.json({title: 'Subastas', 'mydata': Subastas});
});


// Leer - Orden en especifico Bodega
router.get('/listarOrdenesBodegas/:id_ordenB', async (req, res) => {
  
  binds = { "id_subastaF_bind": req.params.id_ordenB };
  sql = "SELECT fecha_creacion, fecha_actualizacion, fecha_termino, estado_subasta FROM subasta_fruta WHERE id_subastaF = :id_subastaF_bind";
  result = await BD.Open(sql, binds, true);

  Subastas = [];

  result.rows.map(subasta => {
      let subastaSchema = {
        "id_subastaF": id_subastaF_bind,
        "fecha_creacion": subasta[0],
        "fecha_actualizacion": subasta[1],
        "fecha_termino": subasta[2],
        "estado_subasta": subasta[3]
      }

      Subastas.push(subastaSchema);
  })
  res.json({title: 'Subastas', 'mydata': Subastas});
});


// Anular Bodega
router.get("/anularOrdenBodega/:id_ordenb", async (req, res) => {
  var { id_ordenb } = req.params;
  sql = "UPDATE orden_bodega SET fk_id_estado=2 WHERE id_ordenb = :id_ordenb";
  await BD.Open(sql, [id_ordenb], true);

  if(res.status(200)) {
    console.log("[!] Orden de Bodega " + req.params.id_ordenb + " anulada con éxito");
    res.redirect('/ordenes');
	} else {
		console.log("[!] Ocurrió un error al intentar anular la orden de Bodega " + req.params.id_ordenb);
    res.redirect('/ordenes');
	}
})


// CRUD ORDEN TRANSPORTE

// Leer - Todos las ordenes Transportes
router.get('/listarOrdenesTransportes', async (req, res) => {
  
  binds = {};
  sql = "SELECT id_subastaT, fecha_creacion, fecha_actualizacion, fecha_termino, cantidad, direccion_despacho, estado_subasta FROM subasta_transporte";
  result = await BD.Open(sql, binds, true);

  Subastas = [];

  result.rows.map(subasta => {
      let subastaSchema = {
          "id_subastaT": subasta[0],
          "fecha_creacion": subasta[1],
          "fecha_actualizacion": subasta[2],
          "fecha_termino": subasta[3],
          "cantidad": subasta[4],
          "direccion_despacho": subasta[5],
          "estado_subasta": subasta[6]
      }

      Subastas.push(subastaSchema);
  })
  res.json({title: 'Subastas', 'mydata': Subastas});
});


// Leer - Orden en especifico Transportes
router.get('/listarOrdenesTransportes/:id_ordenT', async (req, res) => {
  
  binds = { "id_subastaT_bind": req.params.id_ordenT };
  sql = "SELECT fecha_creacion, fecha_actualizacion, fecha_termino, cantidad, direccion_despacho, estado_subasta FROM subasta_transporte WHERE id_subasta = :id_subastaT_bind";
  result = await BD.Open(sql, binds, true);

  Subastas = [];

  result.rows.map(subasta => {
      let subastaSchema = {
        "id_subastaT": id_subastaT_bind,
        "fecha_creacion": subasta[0],
        "fecha_actualizacion": subasta[1],
        "fecha_termino": subasta[2],
        "cantidad": subasta[4],
        "direccion_despacho": subasta[5],
        "estado_subasta": subasta[6]
      }

      Subastas.push(subastaSchema);
  })
  res.json({title: 'Subastas', 'mydata': Subastas});
});


// Anular Transportes
router.get("/anularOrdenTransporte/:id_ordenT", async (req, res) => {
  var { id_ordenT } = req.params;
  sql = "UPDATE orden_transporte SET fk_id_estado=2 WHERE id_ordenT = :id_ordenT";
  await BD.Open(sql, [id_ordenT], true);

  if(res.status(200)) {
    console.log("[!] Orden de Bodega " + req.params.id_ordenT + " anulada con éxito");
    res.redirect('/ordenes');
	} else {
		console.log("[!] Ocurrió un error al intentar anular la orden de Bodega " + req.params.id_ordenT);
    res.redirect('/ordenes');
	}
})

module.exports = router;
