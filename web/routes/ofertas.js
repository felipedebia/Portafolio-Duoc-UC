// Importaciones
const express = require('express');
const router = express.Router();
const settings = require('../bin/settings');
var moment = require('moment');

// CRUD OFERTA PRODUCTOR

// Listar todas las ofertas Productor
router.get('/listarOfertasProductores', async (req, res) => {
  
  binds = {};
  sql = "SELECT id_ofertaP, cantidad, fecha_creacion, precio_por_kilo, fk_id_estado, fk_id_producto, fk_id_usuario, fk_id_pedidoD, fk_id_subastaF FROM oferta_productor";
  result = await settings.OpenConnection(sql, binds, true);

  OfertasProductores = [];

  result.rows.map(oferta => {
      let ofertaSchema = {
          "id_ofertaP": oferta[0],
          "cantidad": oferta[1],
          "fecha_creacion": moment(oferta[2]).format('DD-MM-YYYY'),
          "precio_por_kilo": oferta[3],
          "fk_id_estado": oferta[4],
          "fk_id_producto": oferta[5],
          "fk_id_usuario": oferta[6],
          "fk_id_pedidoD": oferta[7],
          "fk_id_subastaF": oferta[8]
      }

      OfertasProductores.push(ofertaSchema);
  })
  res.json({title: 'OfertasProductores', 'mydata': OfertasProductores});
});


// Anular Oferta Productor
router.get("/anularOfertaProductor/:id_ofertaP", async (req, res) => {
  var { id_ofertaP_bind } = req.params;
  sql = "UPDATE oferta_productor SET fk_id_estado=2 WHERE id_ofertaP = :id_ofertaP_bind";
  await settings.OpenConnection(sql, [id_ofertaP_bind], true);

  if(res.status(200)) {
    console.log("[!] Oferta de Productor " + req.params.id_ofertaP + " anulada con éxito");
    res.redirect('/ordenes');
	} else {
		console.log("[!] Ocurrió un error al intentar anular la oferta de Productor " + req.params.id_ofertaP);
    res.redirect('/ordenes');
	}
})


// CRUD OFERTA TRANSPORTE

// Leer - Todos las ofertas Transportes
router.get('/listarOfertasTransportes', async (req, res) => {
  
  binds = {};
  sql = "SELECT id_ofertaT, cantidad, fecha_creacion, tiene_refrigeracion, precio_final, peso_total, fk_id_usuario, fk_id_subastaT, fk_id_estado FROM oferta_transporte";
  result = await settings.OpenConnection(sql, binds, true);

  OfertasTransportes = [];

  result.rows.map(oferta => {
      let ofertaSchema = {
          "id_ofertaT": oferta[0],
          "cantidad": oferta[1],
          "fecha_creacion": oferta[2],
          "tiene_refrigeracion": oferta[3],
          "precio_final": oferta[4],
          "peso_total": oferta[5],
          "fk_id_usuario": oferta[6],
          "fk_id_subastaT": oferta[7],
          "fk_id_estado": oferta[8]
      }

      OfertasTransportes.push(ofertaSchema);
  })
  res.json({title: 'OfertasTransportes', 'mydata': OfertasTransportes});
});


// Anular oferta Transportes
router.get("/anularOfertaTransporte/:id_ofertaT", async (req, res) => {
  var id_ofertaT_bind = req.params.id_ofertaT;
  sql = "UPDATE oferta_transporte SET fk_id_estado=2 WHERE id_ofertaT = :id_ofertaT_bind";
  await settings.OpenConnection(sql, [id_ofertaT_bind], true);

  if(res.status(200)) {
    console.log("[!] Oferta de Transporte " + req.params.id_ofertaT + " anulada con éxito");
    res.redirect('/ordenes');
	} else {
		console.log("[!] Ocurrió un error al intentar anular la oferta de Transporte " + req.params.id_ofertaT);
    res.redirect('/ordenes');
	}
})

module.exports = router;
