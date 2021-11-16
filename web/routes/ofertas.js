// Importaciones
const express = require('express');
const router = express.Router();
const settings = require('../bin/settings');
var moment = require('moment');
var functions = require('./functions');

// CRUD OFERTA PRODUCTOR

// Listar todas las ofertas Productor
router.get('/listarOfertasProductores', async (req, res) => {
  try {
  
    binds = {};
    sql = "SELECT oferta_productor.id_ofertaP, oferta_productor.cantidad, oferta_productor.fecha_creacion, oferta_productor.precio_por_kilo, oferta_productor.fk_id_estado, estado_ofertaP.descripcion, oferta_productor.fk_id_producto, producto.cantidad, fruta.nombre, fruta_calidad.nombre, oferta_productor.fk_id_usuario, oferta_productor.fk_id_pedidoD, oferta_productor.fk_id_subastaF FROM oferta_productor JOIN estado_ofertaP ON oferta_productor.fk_id_estado = estado_ofertaP.id_estado JOIN producto ON oferta_productor.fk_id_producto = producto.id_producto JOIN fruta ON producto.fk_id_fruta = fruta.id_fruta JOIN fruta_calidad ON producto.fk_id_calidad = fruta_calidad.id_calidad";
    result = await settings.OpenConnection(sql, binds, true);

    OfertasProductores = [];

    result.rows.map(oferta => {
        let ofertaSchema = {
            "id_ofertaP": oferta[0],
            "cantidad": oferta[1],
            "fecha_creacion": moment(oferta[2]).format('DD-MM-YYYY'),
            "precio_por_kilo": oferta[3],
            "fk_id_estado": oferta[4],
            "fk_texto_estado": oferta[5],
            "fk_id_producto": oferta[6],
            "producto_fk_cantidad": oferta[7],
            "fruta_fk_nombre": oferta[8],
            "frutacalidad_fk_nombre": oferta[9],
            "fk_id_usuario": oferta[10],
            "fk_id_pedidoD": oferta[11],
            "fk_id_subastaF": oferta[12]
        }

        OfertasProductores.push(ofertaSchema);
    })
    res.json({title: 'OfertasProductores', 'mydata': OfertasProductores});

  } catch (error) {
    res.status(400);
    res.json({ "error": error });
    console.log(error);
  }

});



// Crear Oferta Productor
router.post('/crearOfertaProductor/:id_subastaF', async (req, res) => {
  try {

    var fk_id_subastaF = req.params.id_subastaF;
    var fk_id_pedidoD = req.params.id_subastaF;
    var { cantidad, precio_por_kilo, fk_id_producto } = req.body;
    var fk_id_usuario = req.session.id_usuario;
    var fk_id_estado = 1;

    // Definimos las fechas
    var fecha_creacion = functions.obtenerFechaActual();

    sql = "INSERT INTO oferta_productor(cantidad, fecha_creacion, precio_por_kilo, fk_id_estado, fk_id_producto, fk_id_usuario, fk_id_pedidoD, fk_id_subastaF) VALUES (:cantidad, to_DATE(:fecha_creacion,'YYYY/MM/DD'), :precio_por_kilo, :fk_id_estado, :fk_id_producto, :fk_id_usuario, :fk_id_pedidoD, :fk_id_subastaF)";
    await settings.OpenConnection(sql, [cantidad, fecha_creacion, precio_por_kilo, fk_id_estado, fk_id_producto, fk_id_usuario, fk_id_pedidoD, fk_id_subastaF], true);

    // Si tuvo conexión a la DB
    if(res.status(200)) {
      console.log("[!] Oferta de Productor creada con éxito");
      res.redirect('/subasta_fruta/' + fk_id_subastaF);
    } else {
      console.log("[!] Ocurrió un error al intentar crear la oferta de productor ");
      res.redirect('/subasta_fruta/' + fk_id_subastaF);
    }

  } catch (error) {
    res.status(400);
    res.send("Ocurrió un error al obtener los datos de la base de datos")
    console.log(error);
  }

});


// Anular Oferta Productor
router.get("/anularOfertaProductor/:id_ofertaP", async (req, res) => {
  try {

    var id_ofertaP_bind = req.params.id_ofertaP;

    sql = "UPDATE oferta_productor SET fk_id_estado=4 WHERE id_ofertaP = :id_ofertaP_bind";
    await settings.OpenConnection(sql, [id_ofertaP_bind], true);

    if(res.status(200)) {
      console.log("[!] Oferta de Productor " + id_ofertaP_bind + " anulada con éxito");
      res.redirect('/misOfertas');
    } else {
      console.log("[!] Ocurrió un error al intentar anular la oferta de Productor " + id_ofertaP_bind);
      res.redirect('/misOfertas');
    }

  } catch (error) {
    res.status(400);
    res.send("Ocurrió un error al obtener los datos de la base de datos")
    console.log(error);
  }

});


// CRUD OFERTA TRANSPORTE

// Leer - Todos las ofertas Transportes
router.get('/listarOfertasTransportes', async (req, res) => {
  try {
  
    binds = {};
    sql = "SELECT id_ofertaT, cantidad, fecha_creacion, tiene_refrigeracion, precio_final, peso_total, fk_id_usuario, fk_id_subastaT, fk_id_estado, estado_subastaT.descripcion FROM oferta_transporte JOIN estado_subastaT ON oferta_transporte.fk_id_estado = estado_subastaT.id_estado";
    result = await settings.OpenConnection(sql, binds, true);

    OfertasTransportes = [];

    result.rows.map(oferta => {
        let ofertaSchema = {
            "id_ofertaT": oferta[0],
            "cantidad": oferta[1],
            "fecha_creacion": moment(oferta[2]).format('DD-MM-YYYY'),
            "tiene_refrigeracion": oferta[3],
            "precio_final": oferta[4],
            "peso_total": oferta[5],
            "fk_id_usuario": oferta[6],
            "fk_id_subastaT": oferta[7],
            "fk_id_estado": oferta[8],
            "fk_texto_estado": oferta[9]
        }

        OfertasTransportes.push(ofertaSchema);
    })
    res.json({title: 'OfertasTransportes', 'mydata': OfertasTransportes});

  } catch (error) {
    res.status(400);
    res.send("Ocurrió un error al obtener los datos de la base de datos")
    console.log(error);
  }

});



// Anular oferta Transportes
router.get("/anularOfertaTransporte/:id_ofertaT", async (req, res) => {
  try {

    var id_ofertaT_bind = req.params.id_ofertaT;

    sql = "UPDATE oferta_transporte SET fk_id_estado=4 WHERE id_ofertaT = :id_ofertaT_bind";
    await settings.OpenConnection(sql, [id_ofertaT_bind], true);

    if(res.status(200)) {
      console.log("[!] Oferta de Transporte " + id_ofertaT_bind + " anulada con éxito");
      res.redirect('/misOfertas');
    } else {
      console.log("[!] Ocurrió un error al intentar anular la oferta de Transporte " + id_ofertaT_bind);
      res.redirect('/misOfertas');
    }

  } catch (error) {
    res.status(400);
    res.send("Ocurrió un error al obtener los datos de la base de datos")
    console.log(error);
  }

});


module.exports = router;
