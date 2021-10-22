// Importaciones
const express = require('express');
const router = express.Router();
const BD = require('../bin/configbd');

// CRUD FRUTAS

// Leer - Todos las frutas
router.get('/listarFrutas', async (req, res) => {
  
  binds = {};
  sql = "SELECT id_fruta, fecha_vigencia, fecha_vencimiento, estado_contrato FROM fruta";
  result = await BD.Open(sql, binds, true);

  Frutas = [];

  result.rows.map(fruta => {
      let frutaSchema = {
          "id_fruta": fruta[0],
          "fecha_vigencia": fruta[1],
          "fecha_vencimiento": fruta[2],
          "estado_contrato": fruta[3]
      }

      Frutas.push(frutaSchema);
  })
  res.json({title: 'Frutas', 'mydata': Frutas});
});


// Leer - Frutas en especifico
router.get('/listarFrutas/:id_fruta', async (req, res) => {
  
  binds = { "id_fruta_bind": req.params.id_fruta };
  sql = "SELECT id_contrato, fecha_vigencia, fecha_vencimiento, estado_contrato FROM fruta WHERE id_fruta = :id_fruta_bind";
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


module.exports = router;
