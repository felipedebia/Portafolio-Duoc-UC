// Importaciones
const express = require('express');
const router = express.Router();
const BD = require('../bin/configbd');

// CRUD CONTRATOS

// Leer - Todos los contratos
router.get('/listarContratos', async (req, res) => {
  
  binds = {};
  sql = "SELECT id_contrato, url_documento, fecha_inicio, fecha_vencimiento, fk_id_tipo, fk_id_estado, fk_id_usuario FROM contrato JOIN rel_contrato_usuario ON contrato.id_contrato = rel_contrato_usuario.fk_id_contrato";
  result = await BD.Open(sql, binds, true);

  Contratos = [];

  result.rows.map(contrato => {
    let contratoSchema = {
        "id_contrato": result.rows[0][0],
        "url_documento": result.rows[0][1],
        "fecha_inicio": result.rows[0][2],
        "fecha_vencimiento": result.rows[0][3],
        "fk_id_tipo": result.rows[0][4],
        "fk_id_estado": result.rows[0][5],
        "fk_id_usuario": result.rows[0][6]
    }

    Contratos.push(contratoSchema);
  })
  res.json({title: 'Contratos', 'mydata': Contratos});
});

// Agregar
router.post('/crearContrato', async (req, res) => {
  var { fecha_inicio, fecha_vencimiento, url_documento, fk_id_tipo, id_usuario } = req.body;
  // Definimos el contrato activado
  var fk_id_estado = 1;

  sql = "INSERT INTO contrato(fecha_inicio, fecha_vencimiento, url_documento, fk_id_estado, fk_id_tipo) VALUES (to_DATE(:fecha_inicio,'YYYY/MM/DD'),to_DATE(:fecha_vencimiento,'YYYY/MM/DD'),:url_documento,:fk_id_estado,:fk_id_tipo)";
  await BD.Open(sql, [fecha_inicio, fecha_vencimiento, url_documento, fk_id_estado, fk_id_tipo], true);

  // Si tuvo conexión a la DB
  if(res.status(200)) {
    console.log("[!] Contrato creado con éxito");
    res.redirect('/contratos');
    //res.refresh();
	} else {
		console.log("[!] Ocurrió un error al intentar crear el contrato ");
    res.redirect('/contratos');
	}
})


// Modificar
router.post("/modificarContrato/:id_contrato", async (req, res) => {
  var { id_contrato } = req.params.id_contrato;
  var { correo, nombre, apellido, num_documento, fk_id_tipo, fecha_nacimiento, genero, fk_id_estado, telefono, password} = req.body;

  sql = "UPDATE contrato SET correo= :correo, nombre= :nombre, apellido= :apellido, num_documento= :num_documento, fk_id_tipo= :fk_id_tipo, fecha_nacimiento= to_DATE(:fecha_nacimiento,'YYYY/MM/DD'), genero= :genero, fk_id_estado= :fk_id_estado, telefono= :telefono, password= :passwordEncrypted WHERE id_usuario= :id_usuario";
  await BD.Open(sql, [correo, nombre, apellido, num_documento, fk_id_tipo, fecha_nacimiento, genero, fk_id_estado, telefono, passwordEncrypted, id_usuario], true);

  // Si tuvo conexión a la DB
  if(res.status(200)) {
    console.log("[!] Contrato " + id_contrato + " modificado con éxito");
    res.redirect('/contratos');
  } else {
    console.log("[!] 2- Ocurrió un error al intentar modificar el contrato " + id_contrato);
    res.redirect('/contratos');
  }

})

// Anular
router.get("/anularContrato/:id_contrato", async (req, res) => {
  var id_contrato_bind = req.params;
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
