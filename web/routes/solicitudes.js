// Importaciones
const express = require('express');
const router = express.Router();
const BD = require('../bin/configbd');

// CRUD SOLICITUDES

// Leer - Todos las solicitudes
router.get('/listarSolicitud', async (req, res) => {
  
  binds = {};
  sql = "SELECT id_contrato, fecha_vigencia, fecha_vencimiento, estado_contrato, usuario_id FROM solicitud";
  result = await BD.Open(sql, binds, true);

  Solicitudes = [];

  result.rows.map(solicitud => {
      let solicitudSchema = {
          "id_contrato": solicitud[0],
          "fecha_vigencia": solicitud[1],
          "fecha_vencimiento": solicitud[2],
          "estado_contrato": solicitud[3],
          "usuario_id": solicitud[4]
      }

      Solicitudes.push(solicitudSchema);
  })
  res.json({title: 'Solicitudes', 'mydata': Solicitudes});
});


// Leer - Solicitud en especifico
router.get('/listarSolicitud/:id_solicitud', async (req, res) => {
  
  binds = { "id_solicitud_bind": req.params.id_solicitud };
  sql = "SELECT id_contrato, fecha_vigencia, fecha_vencimiento, estado_contrato, usuario_id FROM solicitud WHERE id_solicitud = :id_solicitud_bind";
  result = await BD.Open(sql, binds, true);

  Solicitudes = [];

  result.rows.map(solicitud => {
      let solicitudSchema = {
        "id_contrato": contrato[0],
        "fecha_vigencia": contrato[1],
        "fecha_vencimiento": contrato[2],
        "estado_contrato": contrato[3],
        "usuario_id": contrato[4]
      }

      Solicitudes.push(solicitudSchema);
  })
  res.json({title: 'Solicitudes', 'mydata': Solicitudes});
});



// Anular
router.get("/anularSolicitud/:id_solicitud", async (req, res) => {
  var { id_solicitud } = req.params;
  sql = "UPDATE solicitud SET estado_solicitud=2 WHERE id_solicitud = :id_solicitud";
  await BD.Open(sql, [id_solicitud], true);

  if(res.status(200)) {
    console.log("[!] Solicitud " + req.params.id_solicitud + " anulada con éxito");
    res.redirect('/contratos');
	} else {
		console.log("[!] Ocurrió un error al intentar anular la solicitud " + req.params.id_solicitud);
    res.redirect('/contratos');
	}
})

module.exports = router;
