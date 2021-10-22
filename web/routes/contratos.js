// Importaciones
const express = require('express');
const router = express.Router();
const BD = require('../bin/configbd');

// CRUD CONTRATOS

// Leer - Todos los contratos
router.get('/listarContratos', async (req, res) => {
  
  binds = {};
  sql = "SELECT id_contrato, fecha_vigencia, fecha_vencimiento, estado_contrato, usuario_id FROM contrato";
  result = await BD.Open(sql, binds, true);

  Contratos = [];

  result.rows.map(contrato => {
      let contratoSchema = {
          "id_contrato": contrato[0],
          "fecha_vigencia": contrato[1],
          "fecha_vencimiento": contrato[2],
          "estado_contrato": contrato[3],
          "usuario_id": contrato[4]
      }

      Contratos.push(contratoSchema);
  })
  res.json({title: 'Contratos', 'mydata': Contratos});
});


// Leer - Contrato en especifico
router.get('/listarContratos/:id_contrato', async (req, res) => {
  
  binds = { "id_contrato_bind": req.params.id_contrato };
  sql = "SELECT id_contrato, fecha_vigencia, fecha_vencimiento, estado_contrato, usuario_id FROM contrato WHERE id_contrato = :id_contrato_bind";
  result = await BD.Open(sql, binds, true);

  Contratos = [];

  result.rows.map(contrato => {
      let contratoSchema = {
        "id_contrato": contrato[0],
        "fecha_vigencia": contrato[1],
        "fecha_vencimiento": contrato[2],
        "estado_contrato": contrato[3],
        "usuario_id": contrato[4]
      }

      Contratos.push(contratoSchema);
  })
  res.json({title: 'Contratos', 'mydata': Contratos});
});



// Anular
router.get("/anularContrato/:id_contrato", async (req, res) => {
  var { id_contrato } = req.params;
  sql = "UPDATE contrato SET estado_contrato=2 WHERE id_contrato = :id_contrato";
  await BD.Open(sql, [id_contrato], true);

  if(res.status(200)) {
    console.log("[!] Contrato " + req.params.id_contrato + " anulado con éxito");
    res.redirect('/contratos');
	} else {
		console.log("[!] Ocurrió un error al intentar anular el contrato " + req.params.id_contrato);
    res.redirect('/contratos');
	}
})

module.exports = router;
