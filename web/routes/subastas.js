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

    // Definimos las fechas
    var fecha_creacion = functions.obtenerFechaActual();
    var fecha_actualizacion = functions.obtenerFechaActual();

    var fecha_termino_actual = functions.obtenerFechaActual();

    // Agregamos 1 mes más de plazo para terminar la subasta
    var fecha_termino = functions.agregarMesAFecha(new Date(fecha_termino_actual), 1)
    var fecha_termino_final = moment(fecha_termino).format('YYYYMMDD');

    sql1 = "CALL PA_SUBASTA_FRUTA_CREAR(:id_subastaF, :fecha_creacion, :fecha_actualizacion, :fecha_termino_final, :fk_id_pedido, :fk_id_estado)";
    resultado1 = await settings.OpenConnection(sql1, [id_subastaF, fecha_creacion, fecha_actualizacion, fecha_termino_final, fk_id_pedido, fk_id_estado], true);

    // Si tuvo conexión a la DB
    if (resultado1) {
      console.log("[!] Subasta creada con éxito");

      // Actualizamos pedido a estado 3 = en subasta de fruta
      sql2 = "UPDATE pedido SET fk_id_estado=3 WHERE id_pedido = :fk_id_pedido";
      resultado2 = await settings.OpenConnection(sql2, [fk_id_pedido], true);

      if (resultado2) {
        res.redirect('/subasta_fruta/' + id_subastaF);
      }
      
    } else {
      console.log("[!] Ocurrió un error al intentar crear la subasta ");
      res.redirect('/subasta_fruta/' + id_subastaF);
    }

  } catch (error) {
    res.status(400);
    res.send("[!] Ocurrió un error al obtener los datos de la base de datos")
    console.log(error);
  }

});


// Finalizar Subasta Fruta
router.get("/finalizarSubastaFruta/:id_subastaF", async (req, res) => {
  try {

    var id_subastaF_bind = req.params.id_subastaF;

    sql = "CALL PA_SUBASTA_FRUTA_FINALIZAR(:id_subastaF_bind)";
    resultado = await settings.OpenConnection(sql, [id_subastaF_bind], true);

    if (resultado) {
      console.log("[!] Subasta de Frutas " + id_subastaF_bind + " finalizada con éxito");

      res.redirect('/api_subastas/finalizarSubastaFruta2/' + id_subastaF_bind);

    } else {
      console.log("[!] Ocurrió un error al intentar finalizar la subasta de Frutas " + id_subastaF_bind);
      res.redirect('/subastas_frutas');
    }

  } catch (error) {
    res.status(400);
    res.send("[!] Ocurrió un error al obtener los datos de la base de datos")
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
    console.log("[!] Oferta de Productor actualizado con éxito");

    if (resultado3) {

      // Si cantidad_restante es mayor a 0 descontamos la cantidad de producto
      if (cantidad_restante > 0) {
        sql4 = "UPDATE producto SET cantidad=:cantidad_restante WHERE id_producto = :value_fk_id_producto";
        resultado4 = await settings.OpenConnection(sql4, [cantidad_restante, value_fk_id_producto], true);
        
        if (resultado4) { 
          console.log("[!] Producto actualizado con éxito debido a fruta restante");
        }

      }

      // Rechazamos todas las ofertas de esta subasta ya que se acepto una

      // Enviamos a la vista para crear una nueva subasta de transporte
      res.redirect('/crearSubastaTransporte/' + req.params.id_subastaF);

    }

  } catch (error) {
    res.status(400);
    res.send("[!] Ocurrió un error al obtener los datos de la base de datos")
    console.log(error);
  }

});


// Anular Subasta Fruta
router.get("/anularSubastaFruta/:id_subastaF", async (req, res) => {
  try {

    var id_subastaF_bind = req.params.id_subastaF;

    sql = "CALL PA_SUBASTA_FRUTA_ANULAR(:id_subastaF_bind)";
    resultado = await settings.OpenConnection(sql, [id_subastaF_bind], true);

    if (resultado) {
      console.log("[!] Subasta de Frutas " + id_subastaF_bind + " anulada con éxito");

      // Se tienen que rechazar todas las ofertas de la subasta
      var refresh_page = "true";
      res.redirect('/subastas_frutas/?refresh_status=' + refresh_page);
    } else {
      console.log("[!] Ocurrió un error al intentar anular la subasta de Frutas " + id_subastaF_bind);
      res.redirect('/subastas_frutas');
    }

  } catch (error) {
    res.status(400);
    res.send("[!] Ocurrió un error al obtener los datos de la base de datos")
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



// Crear Subasta Transporte
router.post('/crearSubastaTransporte/:id_subastaF', async (req, res) => {
  try {

    var value_subastaF = req.params.id_subastaF;
    var fecha_creacion = functions.obtenerFechaActual();
    var fecha_actualizacion = functions.obtenerFechaActual();
    var fecha_termino = functions.obtenerFechaActual();
    var fk_id_estado = 1;
    var { cantidad, direccion_despacho } = req.body;
  
    sql1 = "CALL PA_SUBASTA_TRANSPORTE_CREAR(:id_subastaT, :fecha_creacion, :fecha_actualizacion, :fecha_termino, :cantidad, :direccion_despacho, :value_subastaF, :fk_id_estado)";
    resultado1 = await settings.OpenConnection(sql1, [value_subastaF, fecha_creacion, fecha_actualizacion, fecha_termino, cantidad, direccion_despacho, value_subastaF, fk_id_estado], true);
  
    // Si tuvo conexión a la DB
    if (resultado1) {

      // Como creamos la subasta transporte, actualizamos pedido a estado 5 = En subasta de Transporte
      sql2 = "UPDATE pedido SET fk_id_estado=5 WHERE id_pedido = :value_subastaF";
      resultado2 = await settings.OpenConnection(sql2, [value_subastaF], true);

      if (resultado2) {
        res.redirect('/subasta_transporte/' + req.params.id_subastaF);
        console.log("[!] Redireccionado con éxito a subasta_transporte " + req.params.id_subastaF);
      }
      
    } else {
      console.log("[!] Ocurrió un error al intentar crear la subasta de transporte");
      res.redirect('/subastas_frutas');
    }

  } catch (error) {
    res.status(400);
    res.send("[!] Ocurrió un error al obtener los datos de la base de datos")
    console.log(error);
  }

});


// Anular Transportes
router.get("/anularSubastaTransporte/:id_subastaT", async (req, res) => {
  try {

    var id_subastaT_bind = req.params.id_subastaT;

    sql = "CALL PA_SUBASTA_TRANSPORTE_ANULAR(:id_subastaT_bind)";
    resultado = await settings.OpenConnection(sql, [id_subastaT_bind], true);

    if (resultado) {
      console.log("[!] Subasta de Transportes " + id_subastaT_bind + " anulada con éxito");

      // PENDIENTE: Se tienen que rechazar todas las ofertas de la subasta
      var refresh_page = "true";
      res.redirect('/subastas_transportes/?refresh_status=' + refresh_page);
    } else {
      console.log("[!] Ocurrió un error al intentar anular la subasta de Transporte " + id_subastaT_bind);
      res.redirect('/subastas_transportes');
    }

  } catch (error) {
    res.status(400);
    res.send("[!] Ocurrió un error al obtener los datos de la base de datos")
    console.log(error);
  }

});


module.exports = router;
