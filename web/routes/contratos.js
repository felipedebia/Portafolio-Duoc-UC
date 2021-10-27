// Importaciones
const express = require('express');
const router = express.Router();
const BD = require('../bin/configbd');

// CRUD CONTRATOS

// Leer - Todos los contratos
router.get('/listarContratos', async (req, res) => {
  
  Contratos = [];

  // Obtenemos los datos del contrato
  binds = {};
  sql1 = "SELECT id_contrato, url_documento, fecha_inicio, fecha_vencimiento, fk_id_tipo, fk_id_estado FROM contrato";
  result1 = await BD.Open(sql1, binds, true);


  var id_contrato = result1.rows[0][0];
  var url_contrato = result1.rows[0][1];
  var fecha_inicio = result1.rows[0][2];
  var fecha_vencimiento = result1.rows[0][3];
  var fk_id_tipo = result1.rows[0][4];
  var fk_id_estado = result1.rows[0][5];

  
  console.log(result1.rows[0][0])

  // Obtenemos el id_usuario usando la tabla REL_CONTRATO_USUARIO
  binds = {};
  sql2 = "SELECT fk_id_usuario FROM REL_CONTRATO_USUARIO WHERE fk_id_contrato = :result1.rows[0][0]";
  result2 = await BD.Open(sql2, binds, true);
  console.log("aaa")
  console.log(result2.rows[0][0]);

  result2.rows.map(contrato => {
    let contratoSchema = {
        "id_contrato": id_contrato,
        "url_contrato": url_contrato,
        "fecha_inicio": fecha_inicio,
        "fecha_vencimiento": fecha_vencimiento,
        "fk_id_tipo": fk_id_tipo,
        "fk_id_estado": fk_id_estado,
        "usuario_id": result2.rows[0][0]
    }

    Contratos.push(contratoSchema);
  })
  res.json({title: 'Contratos', 'mydata': Contratos});

});


// Leer - Contrato en especifico
router.get('/listarContratos/:id_contrato', async (req, res) => {
  
  Contratos = [];  

  try {

    // Obtenemos los datos del contrato
    binds = { "id_contrato_bind": req.params.id_contrato };
    sql1 = "SELECT url_documento, fecha_inicio, fecha_vencimiento, fk_id_tipo, fk_id_estado FROM contrato WHERE id_contrato = :id_contrato_bind";
    result1 = await BD.Open(sql1, binds, true);

    var usuarioData = [
      {
        url_contrato: result1.rows[0][0],
        fecha_inicio: result1.rows[0][1],
        fecha_vencimiento: result1.rows[0][2],
        fk_id_tipo: result1.rows[0][3],
        fk_id_estado: result1.rows[0][4]
        }
    ];

    try {

      // Obtenemos el id_usuario usando la tabla REL_CONTRATO_USUARIO
      binds = {};
      sql2 = "SELECT fk_usuario_id FROM REL_CONTRATO_USUARIO WHERE fk_id_contrato = :id_contrato_bind";
      result2 = await BD.Open(sql2, binds, true);
      console.log(contrato[0]);
  
      result2.rows.map(contrato => {
        let contratoSchema = {
            "id_contrato": id_contrato_bind,
            "url_contrato": url_contrato,
            "fecha_inicio": fecha_inicio,
            "fecha_vencimiento": fecha_vencimiento,
            "fk_id_tipo": fk_id_tipo,
            "fk_id_estado": fk_id_estado,
            "usuario_id": result2.rows[0][0]
        }
  
        Contratos.push(contratoSchema);
      })
      res.json({title: 'Contratos', 'mydata': Contratos});
  
    }
    catch (e) {
        // sentencias para manejar cualquier excepción
        console.log(e); // pasa el objeto de la excepción al manejador de errores
    }

  }
  catch (e) {
    res.send('No hay datos para mostrar');
  }
});



// Anular
router.get("/anularContrato/:id_contrato", async (req, res) => {
  var { id_contrato_bind } = req.params;
  sql = "UPDATE contrato SET fk_id_estado=2 WHERE id_contrato = :id_contrato_bind";
  await BD.Open(sql, [id_contrato_bind], true);

  if(res.status(200)) {
    console.log("[!] Contrato " + req.params.id_contrato + " anulado con éxito");
    res.redirect('/contratos');
	} else {
		console.log("[!] Ocurrió un error al intentar anular el contrato " + req.params.id_contrato);
    res.redirect('/contratos');
	}
})

module.exports = router;
