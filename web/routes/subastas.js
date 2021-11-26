// Importaciones
const express = require('express');
const router = express.Router();
const settings = require('../bin/settings');
var moment = require('moment');
var functions = require('./functions');

// CRUD SUBASTA TRANSPORTES

// Listar todas las subastas Frutas
router.get('/listarSubastasFrutas', async (req, res) => {
  try {
  
    binds = {};
    sql = "SELECT id_subastaF, fecha_creacion, fecha_actualizacion, fecha_termino, fk_id_pedido, fk_id_estado, estado_subastaF.descripcion FROM subasta_fruta JOIN estado_subastaF ON subasta_fruta.fk_id_estado = estado_subastaF.id_estado";
    result = await settings.OpenConnection(sql, binds, true);

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
    res.json({ title: 'SubastasFrutas', 'mydata': SubastasFrutas });

  } catch (error) {
    res.status(400);
    res.json({ "error": error });
    console.log(error);
  }

});


// Crear Subasta Fruta
router.get('/crearSubastaFruta/:id_subastaF', async (req, res) => {
  try {

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
    var fecha_termino = functions.agregarMesAFecha(new Date(fecha_termino_actual), 1)

    console.log(fecha_termino_actual)
    console.log(fecha_termino)
    console.log("fin")
    sql = "INSERT INTO subasta_fruta(id_subastaF, fecha_creacion, fecha_actualizacion, fecha_termino, fk_id_pedido, fk_id_estado) VALUES (:id_subastaF, to_DATE(:fecha_creacion,'YYYY/MM/DD'), to_DATE(:fecha_actualizacion,'YYYY/MM/DD'), to_DATE(:fecha_termino,'YYYY/MM/DD'), :fk_id_pedido, :fk_id_estado)";
    await settings.OpenConnection(sql, [id_subastaF, fecha_creacion, fecha_actualizacion, fecha_termino_actual, fk_id_pedido, fk_id_estado], true);

    // Si tuvo conexión a la DB
    if (res.status(200)) {
      console.log("[!] Subasta creada con éxito");

      // Actualizamos pedido a estado 3 = en subasta de fruta
      sql2 = "UPDATE pedido SET fk_id_estado=3 WHERE id_pedido = :fk_id_pedido";
      var consulta = await settings.OpenConnection(sql2, [fk_id_pedido], true);

      res.redirect('/subasta_fruta/' + id_subastaF);
    } else {
      console.log("[!] Ocurrió un error al intentar crear la subasta ");
      res.redirect('/subasta_fruta/' + id_subastaF);
    }

  } catch (error) {
    res.status(400);
    res.send("Ocurrió un error al obtener los datos de la base de datos")
    console.log(error);
  }

});


// Finalizar Subasta Fruta
router.get("/finalizarSubastaFruta/:id_subastaF", async (req, res) => {
  try {

    var id_subastaF_bind = req.params.id_subastaF;

    sql1 = "UPDATE subasta_fruta SET fk_id_estado=2 WHERE id_subastaF = :id_subastaF_bind";
    resultado1 = await settings.OpenConnection(sql1, [id_subastaF_bind], true);

    if (resultado1) {
      console.log("[!] Subasta de Frutas " + id_subastaF_bind + " finalizada con éxito");

      res.redirect('/api_subastas/finalizarSubastaFruta2/' + id_subastaF_bind);

    } else {
      console.log("[!] Ocurrió un error al intentar finalizar la subasta de Frutas " + id_subastaF_bind);
      res.redirect('/subastas_frutas');
    }

  } catch (error) {
    res.status(400);
    res.send("Ocurrió un error al obtener los datos de la base de datos")
    console.log(error);
  }

});


// Finalizar Subasta Fruta Paso 2
router.get('/finalizarSubastaFruta2/:id_subastaF', async (req, res) => {
  try {

    // Seleccionamos todas las ofertas de productor que tengan fk_id_subastaF igual a la subasta Fruta a finalizar y que sea fk_id_estado = 1
    binds = { "id_subastaF_bind": req.params.id_subastaF };
    sql2 = 'SELECT op.id_ofertaP, op.cantidad, op.fecha_creacion, op.precio_por_kilo, op.fk_id_estado, op.fk_id_producto, op.fk_id_usuario, op.fk_id_pedidoD, op.fk_id_subastaf, pd.cantidad, pd.fk_id_fruta as pd_id_fruta, pd.fk_id_calidad as pd_id_calidad, p.fk_id_fruta, p.fk_id_calidad FROM oferta_productor op JOIN pedido_detalle pd ON op.fk_id_pedidoD = pd.id_pedidoD JOIN producto p ON op.fk_id_producto = p.id_producto WHERE op.fk_id_subastaf = :id_subastaF_bind';
    resultado2 = await settings.OpenConnection(sql2, binds, false);
    
    // Definimos variables necesarias
    var id_elegido = 0; // Sin elegir
    var resultado2_largo = resultado2.rows.length;

    // Recorremos todas las ofertas 
    for (var i = 0; i < resultado2_largo; i++) {
      var value_idOferta = resultado2.rows[i][0];
      var value_cantidadOferta = resultado2.rows[i][1];
      var value_fk_id_producto = resultado2.rows[i][5];
      var value_cantidadPedido = resultado2.rows[i][9];
      var value_pd_id_fruta =  resultado2.rows[i][10];
      var value_pd_id_calidad = resultado2.rows[i][11];
      var value_op_id_fruta =  resultado2.rows[i][12];
      var value_op_id_calidad = resultado2.rows[i][13];

      if (value_pd_id_fruta == value_op_id_fruta && value_pd_id_calidad == value_op_id_calidad ) {
        if (value_cantidadOferta >= value_cantidadPedido) {
          var cantidad_restante = value_cantidadOferta - value_cantidadPedido;
          id_elegido = value_idOferta;
        }
      }
      
    }

    // Actualizamos la oferta escogida finalmente usando la variable elegido
    sql3 = "UPDATE oferta_productor SET fk_id_estado=2 WHERE id_ofertaP = :id_elegido";
    resultado3 = await settings.OpenConnection(sql3, [id_elegido], true);
    console.log("Oferta de Productor actualizado con éxito");

    if (resultado3) {

      // Si cantidad_restante es mayor a 0 descontamos la cantidad de producto
      if (cantidad_restante > 0) {
        sql4 = "UPDATE producto SET cantidad=:cantidad_restante WHERE id_producto = :value_fk_id_producto";
        resultado4 = await settings.OpenConnection(sql4, [cantidad_restante, value_fk_id_producto], true);
        
        if (resultado4) { 
          console.log("Producto actualizado con éxito debido a fruta restante");
        }

      }

      // Rechazamos todas las ofertas de esta subasta ya que se acepto una

      // Enviamos a la vista para crear una nueva subasta de transporte
      res.redirect('/crearSubastaTransporte/' + req.params.id_subastaF);

    }

  } catch (error) {
    res.status(400);
    res.send("Ocurrió un error al obtener los datos de la base de datos")
    console.log(error);
  }

});


// Crear Subasta Transporte
router.post('/crearSubastaTransporte/:id_subastaF', async (req, res) => {
  try {

    var value_subastaF = req.params.id_subastaF;
    var fecha_creacion = functions.obtenerFechaActual();
    var fecha_actualizacion = functions.obtenerFechaActual();
    var fecha_termino = functions.obtenerFechaActual();
    var fk_id_estado = 1;
    var { cantidad, direccion_despacho } = req.body;
  
    sql = "INSERT INTO subasta_transporte(id_subastaT, fecha_creacion, fecha_actualizacion, fecha_termino, cantidad, direccion_despacho, fk_id_pedido, fk_id_estado) VALUES (:id_subastaT, to_DATE(:fecha_creacion,'YYYY/MM/DD'), to_DATE(:fecha_actualizacion,'YYYY/MM/DD'), to_DATE(:fecha_termino,'YYYY/MM/DD'), :cantidad, :direccion_despacho, :value_subastaF, :fk_id_estado)";
    resultado = await settings.OpenConnection(sql, [req.params.id_subastaF, fecha_creacion, fecha_actualizacion, fecha_termino, cantidad, direccion_despacho, value_subastaF, fk_id_estado], true);
  
    // Si tuvo conexión a la DB
    if (resultado) {
      res.redirect('/subasta_transporte/' + req.params.id_subastaF);
      console.log("Redireccionado con éxito a subasta_transporte " + req.params.id_subastaF);
    } else {
      console.log("[!] Ocurrió un error al intentar crear la subasta de transporte");
      res.redirect('/subastas_frutas');
    }

  } catch (error) {
    res.status(400);
    res.send("Ocurrió un error al obtener los datos de la base de datos")
    console.log(error);
  }

});


// Anular Subasta Fruta
router.get("/anularSubastaFruta/:id_subastaF", async (req, res) => {
  try {

    var id_subastaF_bind = req.params.id_subastaF;

    sql = "UPDATE subasta_fruta SET fk_id_estado=3 WHERE id_subastaF = :id_subastaF_bind";
    await settings.OpenConnection(sql, [id_subastaF_bind], true);

    if (res.status(200)) {
      console.log("[!] Subasta de Frutas " + id_subastaF_bind + " anulada con éxito");

      // Se tienen que rechazar todas las ofertas de la subasta

      res.redirect('/subastas_frutas');
    } else {
      console.log("[!] Ocurrió un error al intentar anular la subasta de Frutas " + id_subastaF_bind);
      res.redirect('/subastas_frutas');
    }

  } catch (error) {
    res.status(400);
    res.send("Ocurrió un error al obtener los datos de la base de datos")
    console.log(error);
  }

});


// CRUD SUBASTA TRANSPORTES

// Listar todas las subastas Transportes
router.get('/listarSubastasTransportes', async (req, res) => {
  try {
  
    binds = {};
    sql = "SELECT id_subastaT, fecha_creacion, fecha_actualizacion, fecha_termino, cantidad, direccion_despacho, fk_id_pedido, fk_id_estado, estado_subastaT.descripcion FROM subasta_transporte JOIN estado_subastaT ON subasta_transporte.fk_id_estado = estado_subastaT.id_estado";
    result = await settings.OpenConnection(sql, binds, true);

    SubastasTransportes = [];

    result.rows.map(subasta => {
        let subastaSchema = {
            "id_subastaT": subasta[0],
            "fecha_creacion": moment(subasta[1]).format('DD-MM-YYYY'),
            "fecha_actualizacion": moment(subasta[2]).format('DD-MM-YYYY'),
            "fecha_termino": moment(subasta[3]).format('DD-MM-YYYY'),
            "cantidad": subasta[4],
            "direccion_despacho": subasta[5],
            "fk_id_pedido": subasta[6],
            "fk_id_estado": subasta[7],
            "fk_texto_estado": subasta[8]
        }

        SubastasTransportes.push(subastaSchema);
    })
    res.json({ title: 'SubastasTransportes', 'mydata': SubastasTransportes });

  } catch (error) {
    res.status(400);
    res.json({ "error": error });
    console.log(error);
  }

});


// Anular Transportes
router.get("/anularSubastaTransporte/:id_subastaT", async (req, res) => {
  try {

    var id_subastaT_bind = req.params.id_subastaT;

    sql = "UPDATE subasta_transporte SET fk_id_estado=2 WHERE id_subastaT = :id_subastaT_bind";
    await settings.OpenConnection(sql, [id_subastaT_bind], true);

    if (res.status(200)) {
      console.log("[!] Subasta de Transportes " + id_subastaT_bind + " anulada con éxito");

      // Se tienen que rechazar todas las ofertas de la subasta

      res.redirect('/subastas_transportes');
    } else {
      console.log("[!] Ocurrió un error al intentar anular la subasta de Transporte " + id_subastaT_bind);
      res.redirect('/subastas_transportes');
    }

  } catch (error) {
    res.status(400);
    res.send("Ocurrió un error al obtener los datos de la base de datos")
    console.log(error);
  }

});


module.exports = router;
