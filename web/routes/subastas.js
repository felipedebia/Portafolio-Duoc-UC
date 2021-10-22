// Importaciones
const express = require('express');
const router = express.Router();
const BD = require('../bin/configbd');

// CRUD SUBASTA

// Leer - Todos las subastas
router.get('/listarSubastasFrutas', async (req, res) => {
  
  binds = {};
  sql = "SELECT id_subasta, fecha_creacion, fecha_actualizacion, fecha_termino, estado_subasta FROM subasta";
  result = await BD.Open(sql, binds, true);

  Subastas = [];

  result.rows.map(subasta => {
      let subastaSchema = {
          "id_subasta": subasta[0],
          "fecha_creacion": subasta[1],
          "fecha_actualizacion": subasta[2],
          "fecha_termino": subasta[3],
          "estado_subasta": subasta[4]
      }

      Subastas.push(subastaSchema);
  })
  res.json({title: 'Subastas', 'mydata': Subastas});
});


// Leer - Subasta en especifico
router.get('/listarSubastasFrutas/:id_subasta', async (req, res) => {
  
  binds = { "id_subasta_bind": req.params.id_subasta };
  sql = "SELECT id_subasta, fecha_creacion, fecha_actualizacion, fecha_termino, estado_subasta FROM subasta WHERE id_subasta = :id_subasta_bind";
  result = await BD.Open(sql, binds, true);

  Subastas = [];

  result.rows.map(subasta => {
      let subastaSchema = {
        "id_subasta": subasta[0],
        "fecha_creacion": subasta[1],
        "fecha_actualizacion": subasta[2],
        "fecha_termino": subasta[3],
        "estado_subasta": subasta[4]
      }

      Subastas.push(subastaSchema);
  })
  res.json({title: 'Subastas', 'mydata': Subastas});
});


// CRUD SUBASTA DE TRANSPORTES

// Leer - Todos las subastas
router.get('/listarSubastasTransportes', async (req, res) => {
  
  binds = {};
  sql = "SELECT id_subastaT, fecha_creacion, fecha_actualizacion, fecha_termino, estado_subasta FROM subasta_transporte";
  result = await BD.Open(sql, binds, true);

  Subastas = [];

  result.rows.map(subasta => {
      let subastaSchema = {
          "id_subastaT": subasta[0],
          "fecha_creacion": subasta[1],
          "fecha_actualizacion": subasta[2],
          "fecha_termino": subasta[3],
          "estado_subasta": subasta[4]
      }

      Subastas.push(subastaSchema);
  })
  res.json({title: 'Subastas', 'mydata': Subastas});
});


// Leer - Subasta en especifico
router.get('/listarSubastasTransportes/:id_subastaT', async (req, res) => {
  
  binds = { "id_subastaT_bind": req.params.id_subasta };
  sql = "SELECT id_subastaT, fecha_creacion, fecha_actualizacion, fecha_termino, estado_subasta FROM subasta_transporte WHERE id_subasta = :id_subastaT_bind";
  result = await BD.Open(sql, binds, true);

  Subastas = [];

  result.rows.map(subasta => {
      let subastaSchema = {
        "id_subastaT": subasta[0],
        "fecha_creacion": subasta[1],
        "fecha_actualizacion": subasta[2],
        "fecha_termino": subasta[3],
        "estado_subasta": subasta[4]
      }

      Subastas.push(subastaSchema);
  })
  res.json({title: 'Subastas', 'mydata': Subastas});
});


module.exports = router;
