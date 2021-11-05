// Importaciones
const express = require('express');
const router = express.Router();
const BD = require('../bin/configbd');

// CRUD OFERTA PRODUCTOR

// Leer - Todos las ofertas Productor
router.get('/listarOfertasProductores', async (req, res) => {
  
  binds = {};
  sql = "SELECT id_ofertaP, cantidad, fecha_creacion, precio_por_kilo, fk_id_estado, fk_id_producto, fk_id_usuario, fk_id_pdetalle, fk_id_subastaF FROM oferta_productor";
  result = await BD.Open(sql, binds, true);

  Ofertas = [];

  result.rows.map(oferta => {
      let ofertaSchema = {
          "id_ofertaP": oferta[0],
          "cantidad": oferta[1],
          "fecha_creacion": oferta[2],
          "precio_por_kilo": oferta[3],
          "fk_id_estado": oferta[4],
          "fk_id_producto": oferta[5],
          "fk_id_usuario": oferta[6],
          "fk_id_pdetalle": oferta[7],
          "fk_id_subastaF": oferta[8]
      }

      Ofertas.push(ofertaSchema);
  })
  res.json({title: 'Ofertas', 'mydata': Ofertas});
});


// Leer - Oferta en especifico Productor
router.get('/listarOfertasProductores/:id_ofertaP', async (req, res) => {
  
  binds = { "id_ofertaP_bind": req.params.id_ofertaP };
  sql = "SELECT cantidad, fecha_creacion, precio_por_kilo, fk_id_estado, fk_id_producto, fk_id_usuario, fk_id_pdetalle, fk_id_subastaF FROM oferta_productor WHERE id_ofertaP = :id_ofertaP_bind";
  result = await BD.Open(sql, binds, true);

  Ofertas = [];

  result.rows.map(oferta => {
      let ofertaSchema = {
          "id_ofertaP": req.params.id_ofertaP,
          "cantidad": oferta[0],
          "fecha_creacion": oferta[1],
          "precio_por_kilo": oferta[2],
          "fk_id_estado": oferta[3],
          "fk_id_producto": oferta[4],
          "fk_id_usuario": oferta[5],
          "fk_id_pdetalle": oferta[6],
          "fk_id_subastaF": oferta[7]
      }

      Ofertas.push(ofertaSchema);
  })
  res.json({title: 'Ofertas', 'mydata': Ofertas});
});


// Anular OFerta Productor
router.get("/anularOfertaProductor/:id_ofertaP", async (req, res) => {
  var { id_ofertaP_bind } = req.params;
  sql = "UPDATE oferta_productor SET fk_id_estado=2 WHERE id_ofertaP = :id_ofertaP_bind";
  await BD.Open(sql, [id_ofertaP_bind], true);

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
  result = await BD.Open(sql, binds, true);

  Ofertas = [];

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

      Ofertas.push(ofertaSchema);
  })
  res.json({title: 'Ofertas', 'mydata': Ofertas});
});


// Leer - Oferta en especifico Transportes
router.get('/listarOfertasTransportes/:id_ofertaT', async (req, res) => {
  
  binds = { "id_ofertaT_bind": req.params.id_ofertaT };
  sql = "SELECT cantidad, fecha_creacion, tiene_refrigeracion, precio_final, peso_total, fk_id_usuario, fk_id_subastaT, fk_id_estado FROM oferta_transporte WHERE id_ofertaT = :id_ofertaT_bind";
  result = await BD.Open(sql, binds, true);

  Ofertas = [];

  result.rows.map(oferta => {
      let ofertaSchema = {
          "id_ofertaT": req.params.id_ofertaT,
          "cantidad": oferta[0],
          "fecha_creacion": oferta[1],
          "tiene_refrigeracion": oferta[2],
          "precio_final": oferta[3],
          "peso_total": oferta[4],
          "fk_id_usuario": oferta[5],
          "fk_id_subastaT": oferta[6],
          "fk_id_estado": oferta[7]
      }

      Ofertas.push(ofertaSchema);
  })
  res.json({title: 'Ofertas', 'mydata': Ofertas});
});


// Anular oferta Transportes
router.get("/anularOfertaTransporte/:id_ofertaT", async (req, res) => {
  var id_ofertaT_bind = req.params;
  sql = "UPDATE oferta_transporte SET fk_id_estado=2 WHERE id_ofertaT = :id_ofertaT_bind";
  await BD.Open(sql, [id_ofertaT_bind], true);

  if(res.status(200)) {
    console.log("[!] Oferta de Transporte " + req.params.id_ofertaT + " anulada con éxito");
    res.redirect('/ordenes');
	} else {
		console.log("[!] Ocurrió un error al intentar anular la oferta de Transporte " + req.params.id_ofertaT);
    res.redirect('/ordenes');
	}
})

module.exports = router;
