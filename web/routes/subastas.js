// Importaciones
const express = require('express');
const router = express.Router();
const BD = require('../bin/configbd');

// CRUD SUBASTA TRANSPORTES

// Leer - Todos las subastas Frutas
router.get('/listarSubastasFrutas', async (req, res) => {
  
  binds = {};
  sql = "SELECT id_subastaF, fecha_creacion, fecha_actualizacion, fecha_termino, fk_id_pedido, fk_id_estado FROM subasta_fruta";
  result = await BD.Open(sql, binds, true);

  Subastas = [];

  result.rows.map(subasta => {
      let subastaSchema = {
          "id_subastaF": subasta[0],
          "fecha_creacion": subasta[1],
          "fecha_actualizacion": subasta[2],
          "fecha_termino": subasta[3],
          "fk_id_pedido": subasta[4],
          "fk_id_estado": subasta[5]
      }

      Subastas.push(subastaSchema);
  })
  res.json({title: 'Subastas', 'mydata': Subastas});
});


// Leer - Subasta en especifico Frutas
router.get('/listarSubastasFrutas/:id_subastaF', async (req, res) => {
  
  binds = { "id_subastaF_bind": req.params.id_subastaF };
  sql = "SELECT fecha_creacion, fecha_actualizacion, fecha_termino, fk_id_pedido, fk_id_estado FROM subasta_fruta WHERE id_subastaF = :id_subastaF_bind";
  result = await BD.Open(sql, binds, true);

  Subastas = [];

  result.rows.map(subasta => {
      let subastaSchema = {
        "id_subastaF": id_subastaF_bind,
        "fecha_creacion": subasta[0],
        "fecha_actualizacion": subasta[1],
        "fecha_termino": subasta[2],
        "fk_id_pedido": subasta[3],
        "fk_id_estado": subasta[4]
      }

      Subastas.push(subastaSchema);
  })
  res.json({title: 'Subastas', 'mydata': Subastas});
});


// Anular Frutas
router.get("/anularSubastaFruta/:id_subastaF", async (req, res) => {
  var { id_subastaF_bind } = req.params;
  sql = "UPDATE subasta_fruta SET fk_id_estado=2 WHERE id_subastaF = :id_subastaF_bind";
  await BD.Open(sql, [id_subastaF_bind], true);

  if(res.status(200)) {
    console.log("[!] Subasta de Frutas " + req.params.id_subastaF_bind + " anulada con éxito");
    res.redirect('/subastas_frutas');
	} else {
		console.log("[!] Ocurrió un error al intentar anular la subasta de Frutas " + req.params.id_subastaF_bind);
    res.redirect('/subastas_frutas');
	}
})


// CRUD SUBASTA TRANSPORTES

// Leer - Todos las subastas Transportes
router.get('/listarSubastasTransportes', async (req, res) => {
  
  binds = {};
  sql = "SELECT id_subastaT, fecha_creacion, fecha_actualizacion, fecha_termino, cantidad, direccion_despacho, fk_id_pedido, fk_id_estado FROM subasta_transporte";
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
          "fk_id_pedido": subasta[6],
          "fk_id_estado": subasta[7]
      }

      Subastas.push(subastaSchema);
  })
  res.json({title: 'Subastas', 'mydata': Subastas});
});


// Leer - Subasta en especifico Transportes
router.get('/listarSubastasTransportes/:id_subastaT', async (req, res) => {
  
  binds = { "id_subastaT_bind": req.params.id_subastaT };
  sql = "SELECT fecha_creacion, fecha_actualizacion, fecha_termino, cantidad, direccion_despacho, fk_id_pedido, fk_id_estado FROM subasta_transporte WHERE id_subastaT = :id_subastaT_bind";
  result = await BD.Open(sql, binds, true);

  Subastas = [];

  result.rows.map(subasta => {
      let subastaSchema = {
        "id_subastaT": id_subastaT_bind,
        "fecha_creacion": subasta[0],
        "fecha_actualizacion": subasta[1],
        "fecha_termino": subasta[2],
        "cantidad": subasta[3],
        "direccion_despacho": subasta[4],
        "fk_id_pedido": subasta[5],
        "fk_id_estado": subasta[6]
      }

      Subastas.push(subastaSchema);
  })
  res.json({title: 'Subastas', 'mydata': Subastas});
});


// Anular Transportes
router.get("/anularSubastaTransport/:id_subastaT", async (req, res) => {
  var { id_subastaT_bind } = req.params;
  sql = "UPDATE subasta_transporte SET fk_id_estado=2 WHERE id_subastaT = :id_subastaT_bind";
  await BD.Open(sql, [id_subastaT_bind], true);

  if(res.status(200)) {
    console.log("[!] Subasta de Transportes " + req.params.id_subastaT + " anulada con éxito");
    res.redirect('/subastas_transportes');
	} else {
		console.log("[!] Ocurrió un error al intentar anular la subasta de Transporte " + req.params.id_subastaT);
    res.redirect('/subastas_transportes');
	}
})

module.exports = router;
