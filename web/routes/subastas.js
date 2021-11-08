// Importaciones
const express = require('express');
const router = express.Router();
const BD = require('../bin/configbd');
var moment = require('moment');
var functions = require('./functions');

// CRUD SUBASTA TRANSPORTES

// Leer - Todos las subastas Frutas
router.get('/listarSubastasFrutas', async (req, res) => {
  
  binds = {};
  sql = "SELECT id_subastaF, fecha_creacion, fecha_actualizacion, fecha_termino, fk_id_pedido, fk_id_estado, estado_subastaF.descripcion FROM subasta_fruta JOIN estado_subastaF ON subasta_fruta.fk_id_estado = estado_subastaF.id_estado";
  result = await BD.Open(sql, binds, true);

  SubastasFrutas = [];

  result.rows.map(subasta => {
      let subastaSchema = {
          "id_subastaF": subasta[0],
          "fecha_creacion": moment(subasta[1]).format('DD-MM-YYYY'),
          "fecha_actualizacion": moment(subasta[2]).format('DD-MM-YYYY'),
          "fecha_termino": moment(subasta[3]).format('DD-MM-YYYY'),
          "fk_id_pedido": subasta[4],
          "fk_id_estado": subasta[5],
          "fk_texto_estado": subasta[6]
      }

      SubastasFrutas.push(subastaSchema);
  })
  res.json({title: 'SubastasFrutas', 'mydata': SubastasFrutas});
});


// Leer - Subasta en especifico Frutas
router.get('/listarSubastasFrutas/:id_subastaF', async (req, res) => {
  
  binds = { "id_subastaF_bind": req.params.id_subastaF };
  sql = "SELECT fecha_creacion, fecha_actualizacion, fecha_termino, fk_id_pedido, fk_id_estado, estado_subastaF.descripcion FROM subasta_fruta JOIN estado_subastaF ON subasta_fruta.fk_id_estado = estado_subastaF.id_estado WHERE id_subastaF = :id_subastaF_bind";
  result = await BD.Open(sql, binds, true);

  SubastasFrutas = [];

  result.rows.map(subasta => {
      let subastaSchema = {
        "id_subastaF": req.params.id_subastaF,
        "fecha_creacion": moment(subasta[0]).format('DD-MM-YYYY'),
        "fecha_actualizacion": moment(subasta[1]).format('DD-MM-YYYY'),
        "fecha_termino": moment(subasta[2]).format('DD-MM-YYYY'),
        "fk_id_pedido": subasta[3],
        "fk_id_estado": subasta[4],
        "fk_texto_estado": subasta[5]
      }

      SubastasFrutas.push(subastaSchema);
  })
  res.json({title: 'SubastasFrutas', 'mydata': SubastasFrutas});
});


// Crear Subasta Fruta
router.get('/crearSubastaFruta/:id_subastaF', async (req, res) => {

  var id_subastaF = req.params.id_subastaF;
  var fk_id_pedido = req.params.id_subastaF;
  var fk_id_estado = 1;
  console.log(id_subastaF)
  console.log("uwu")
  console.log(fk_id_pedido)
  console.log(fk_id_estado)
  // Definimos las fechas
  var fecha_creacion = functions.obtenerFechaActual();
  var fecha_actualizacion = functions.obtenerFechaActual();

  // Agregamos 1 mes más de plazo para terminar la subasta, falta terminar
  var fecha_termino_actual = functions.obtenerFechaActual();
  var fecha_termino = functions.agregarMesAFecha(new Date(fecha_termino_actual),1)

  console.log(fecha_termino_actual)
  console.log(fecha_termino)
  console.log("fin")
  sql = "INSERT INTO subasta_fruta(id_subastaF, fecha_creacion, fecha_actualizacion, fecha_termino, fk_id_pedido, fk_id_estado) VALUES (:id_subastaF, to_DATE(:fecha_creacion,'YYYY/MM/DD'), to_DATE(:fecha_actualizacion,'YYYY/MM/DD'), to_DATE(:fecha_termino,'YYYY/MM/DD'), :fk_id_pedido, :fk_id_estado)";
  await BD.Open(sql, [id_subastaF, fecha_creacion, fecha_actualizacion, fecha_termino_actual, fk_id_pedido, fk_id_estado], true);

  // Si tuvo conexión a la DB
  if(res.status(200)) {
    console.log("[!] Subasta creada con éxito");
    res.redirect('/pedidos');
    //res.refresh();
	} else {
		console.log("[!] Ocurrió un error al intentar crear la subasta ");
    res.redirect('/pedidos');
	}
})


// Anular Frutas
router.get("/anularSubastaFruta/:id_subastaF", async (req, res) => {
  var { id_subastaF_bind } = req.params.id_subastaF;
  sql = "UPDATE subasta_fruta SET fk_id_estado=2 WHERE id_subastaF = :id_subastaF_bind";
  await BD.Open(sql, [id_subastaF_bind], true);

  if(res.status(200)) {
    console.log("[!] Subasta de Frutas " + id_subastaF_bind + " anulada con éxito");
    res.redirect('/subastas_frutas');
	} else {
		console.log("[!] Ocurrió un error al intentar anular la subasta de Frutas " + id_subastaF_bind);
    res.redirect('/subastas_frutas');
	}
})


// CRUD SUBASTA TRANSPORTES

// Leer - Todos las subastas Transportes
router.get('/listarSubastasTransportes', async (req, res) => {
  
  binds = {};
  sql = "SELECT id_subastaT, fecha_creacion, fecha_actualizacion, fecha_termino, cantidad, direccion_despacho, fk_id_pedido, fk_id_estado, estado_subastaT.descripcion FROM subasta_transporte JOIN estado_subastaT ON subasta_transporte.fk_id_estado = estado_subastaT.id_estado";
  result = await BD.Open(sql, binds, true);

  SubastasTransportes = [];

  result.rows.map(subasta => {
      let subastaSchema = {
          "id_subastaT": subasta[0],
          "fecha_creacion": subasta[1],
          "fecha_actualizacion": subasta[2],
          "fecha_termino": subasta[3],
          "cantidad": subasta[4],
          "direccion_despacho": subasta[5],
          "fk_id_pedido": subasta[6],
          "fk_id_estado": subasta[7],
          "fk_texto_estado": subasta[8]
      }

      SubastasTransportes.push(subastaSchema);
  })
  res.json({title: 'SubastasTransportes', 'mydata': SubastasTransportes});
});


// Leer - Subasta en especifico Transportes
router.get('/listarSubastasTransportes/:id_subastaT', async (req, res) => {
  
  binds = { "id_subastaT_bind": req.params.id_subastaT };
  sql = "SELECT fecha_creacion, fecha_actualizacion, fecha_termino, cantidad, direccion_despacho, fk_id_pedido, fk_id_estado, estado_subastaT.descripcion FROM subasta_transporte JOIN estado_subastaT ON subasta_transporte.fk_id_estado = estado_subastaT.id_estado WHERE id_subastaT = :id_subastaT_bind";
  result = await BD.Open(sql, binds, true);

  SubastasTransportes = [];

  result.rows.map(subasta => {
      let subastaSchema = {
        "id_subastaT": id_subastaT_bind,
        "fecha_creacion": subasta[0],
        "fecha_actualizacion": subasta[1],
        "fecha_termino": subasta[2],
        "cantidad": subasta[3],
        "direccion_despacho": subasta[4],
        "fk_id_pedido": subasta[5],
        "fk_id_estado": subasta[6],
        "fk_texto_estado": subasta[7]
      }

      SubastasTransportes.push(subastaSchema);
  })
  res.json({title: 'SubastasTransportes', 'mydata': SubastasTransportes});
});


// Anular Transportes
router.get("/anularSubastaTransport/:id_subastaT", async (req, res) => {
  var id_subastaT_bind = req.params.id_subastaT;
  sql = "UPDATE subasta_transporte SET fk_id_estado=2 WHERE id_subastaT = :id_subastaT_bind";
  await BD.Open(sql, [id_subastaT_bind], true);

  if(res.status(200)) {
    console.log("[!] Subasta de Transportes " + id_subastaT_bind + " anulada con éxito");
    res.redirect('/subastas_transportes');
	} else {
		console.log("[!] Ocurrió un error al intentar anular la subasta de Transporte " + id_subastaT_bind);
    res.redirect('/subastas_transportes');
	}
})

module.exports = router;
