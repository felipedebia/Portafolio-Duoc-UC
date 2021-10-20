// Importaciones
const express = require('express');
const router = express.Router();
const BD = require('../bin/configbd');

// CRUD CONTRATOS

// Leer - Todos los contratos
router.get('/listarContratos', async (req, res) => {
  
  binds = {};
  sql = "SELECT id_contrato, fecha_vigencia, fecha_vencimiento, estado_contrato FROM contrato";
  result = await BD.Open(sql, binds, true);

  Contratos = [];

  result.rows.map(contrato => {
      let contratoSchema = {
          "id_contrato": contrato[0],
          "fecha_vigencia": contrato[1],
          "fecha_vencimiento": contrato[2],
          "estado_contrato": contrato[3]
      }

      Contratos.push(contratoSchema);
  })
  res.json({title: 'Contratos', 'mydata': Contratos});
});


// Leer - Contrato en especifico
router.get('/listarContratos/:id_contrato', async (req, res) => {
  
  binds = { "id_contrato_bind": req.params.id_contrato };
  sql = "SELECT id_contrato, fecha_vigencia, fecha_vencimiento, estado_contrato FROM contrato WHERE id_contrato = :id_contrato_bind";
  result = await BD.Open(sql, binds, true);

  Contratos = [];

  result.rows.map(contrato => {
      let contratoSchema = {
        "id_contrato": contrato[0],
        "fecha_vigencia": contrato[1],
        "fecha_vencimiento": contrato[2],
        "estado_contrato": contrato[3]
      }

      Contratos.push(contratoSchema);
  })
  res.json({title: 'Contratos', 'mydata': Contratos});
});


// CRUD SUBASTA

// Leer - Todos las subastas
router.get('/listarSubastas', async (req, res) => {
  
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
router.get('/listarSubastas/:id_subasta', async (req, res) => {
  
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
