// Importaciones
const express = require('express');
const router = express.Router();
const BD = require('../bin/configbd');

// CRUD CONTRATOS

// Leer - Todos los contratos
router.get('/listarContratos', async (req, res, next) => {

  async function runAsync () {
    array1 = await sql_datos1()
    array2 = await sql_datos2()

    // Unimos los 2 array en uno solo
    var Contratosfinal = array1.concat(array2);
    console.log(Contratosfinal);

    res.json({title: 'Contratos', 'mydata': Contratosfinal});

  }

  runAsync()
    .catch(next)

  async function sql_datos1() {
    // Obtenemos los datos del contrato
    binds = {};
    sql1 = "SELECT id_contrato, url_documento, fecha_inicio, fecha_vencimiento, fk_id_tipo, fk_id_estado FROM contrato";
    result1 = await BD.Open(sql1, binds, true);

    Contratos = [];

    result1.rows.map(contrato => {
      let contratoSchema = {
          "id_contrato": result1.rows[0][0],
          "url_documento": result1.rows[0][1],
          "fecha_inicio": result1.rows[0][2],
          "fecha_vencimiento": result1.rows[0][3],
          "fk_id_tipo": result1.rows[0][4],
          "fk_id_estado": result1.rows[0][5]
      }
  
      Contratos.push(contratoSchema);
    })

    return Contratos;
  }


  async function sql_datos2() {
    // Obtenemos el id_usuario usando la tabla REL_CONTRATO_USUARIO
    binds = {};
    sql2 = "SELECT fk_id_usuario FROM REL_CONTRATO_USUARIO";
    result2 = await BD.Open(sql2, binds, true);

    result2.rows.map(contrato => {
      let contratoSchema = {
          "usuario_id": result2.rows[0][0]
      }
  
      Contratos.push(contratoSchema);
    })

    return Contratos;
  }

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
