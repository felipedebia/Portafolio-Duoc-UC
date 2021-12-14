// Importaciones
const express = require('express');
const router = express.Router();
const settings = require('../bin/settings');
var moment = require('moment');
var functions = require('./functions');

// CRUD VENTAS

// Listar todas las ventas
router.get('/listarVentas', async (req, res) => {
  try {
  
    binds = {};
    sql = "SELECT venta.id_venta, venta.fecha_creacion, venta.fecha_actualizacion, venta.fk_id_pedido, venta.fk_id_seguro, venta.fk_id_tipo, tipo_venta.nombre, venta.fk_id_estado, estado_venta.descripcion, pedido.fk_id_usuario FROM venta JOIN pedido ON venta.fk_id_pedido = pedido.id_pedido JOIN seguro on venta.fk_id_seguro = seguro.id_seguro JOIN tipo_venta ON venta.fk_id_tipo = tipo_venta.id_tipo JOIN estado_venta ON venta.fk_id_estado = estado_venta.id_estado";
    result = await settings.OpenConnection(sql, binds, true);

    Ventas = [];

    result.rows.map(venta => {
        let ventaSchema = {
            "id_venta": venta[0],
            "fecha_creacion": moment(venta[1]).format('DD-MM-YYYY'),
            "fecha_actualizacion": moment(venta[2]).format('DD-MM-YYYY'),
            "fk_id_pedido": venta[3],
            "fk_id_seguro": venta[4],
            "fk_id_tipo": venta[5],
            "fk_texto_tipo": venta[6],
            "fk_id_estado": venta[7],
            "fk_texto_estado": venta[8],
            "pedido_fk_id_usuario": venta[9]
        }

        Ventas.push(ventaSchema);
    })
    res.json({title: 'Ventas', 'mydata': Ventas});

  } catch (error) {
    res.status(400);
    res.json({ "error": error });
    console.log(error);
  }

});


// Listar detalles de todos las ventas
router.get('/listarVentaDetalles', async(req, res) => {
  try {

    binds = {};
    sql = "SELECT id_ventaD, costo_fruta, costo_transporte, costo_impuestos, comision_servicio, comision_empresa, precio_final, fk_id_venta, to_char(costo_fruta,'$999,999,999'), to_char(costo_transporte,'$999,999,999'), to_char(costo_impuestos,'$999,999,999'), to_char(comision_servicio,'$999,999,999'), to_char(comision_empresa,'$999,999,999'), to_char(precio_final,'$999,999,999') from venta_detalle";
    result = await settings.OpenConnection(sql, binds, true);

    VentaDetalles = [];

    result.rows.map(detalle => {
        let detalleSchema = {
            "id_ventaD": detalle[0],
            "costo_fruta": detalle[1],
            "costo_transporte": detalle[2],
            "costo_impuestos": detalle[3],
            "comision_servicio": detalle[4],
            "comision_empresa": detalle[5],
            "precio_final": detalle[6],
            "fk_id_venta": detalle[7],
            "costo_fruta_formato": detalle[8],
            "costo_transporte_formato": detalle[9],
            "costo_impuestos_formato": detalle[10],
            "comision_servicio_formato": detalle[11],
            "comision_empresa_formato": detalle[12],
            "precio_final_formato": detalle[13]
        }

        VentaDetalles.push(detalleSchema);
    })
    res.json({ title: 'VentaDetalles', 'mydata': VentaDetalles });

  } catch (error) {
    res.status(400);
    res.json({ "error": error });
    console.log(error);
  }

});


// Agregar venta
router.post('/crearVenta/:id_venta', async (req, res) => {
  try {

    var id_venta_bind = req.params.id_venta;
    var fk_id_pedido = req.params.id_venta;
    var { fk_id_seguro } = req.body;
    var fecha_creacion = functions.obtenerFechaActual();
    var fecha_actualizacion = functions.obtenerFechaActual();
    var fk_id_estado = 1;

    // Venta externa
    var fk_id_tipo = 2;

    sql = "CALL PA_VENTA_CREAR(:id_venta,:fecha_creacion,:fecha_actualizacion,:fk_id_pedido,:fk_id_seguro,:fk_id_tipo,:fk_id_estado)";
    resultado = await settings.OpenConnection(sql, [id_venta_bind, fecha_creacion, fecha_actualizacion, fk_id_pedido, fk_id_seguro, fk_id_tipo, fk_id_estado], true);

    // Si tuvo conexión a la DB
    if(resultado) {
      console.log("[!] Venta " + id_venta_bind + " creada con éxito");

      // Actualizamos pedido a 7 = finalizado
      sql2 = "UPDATE pedido SET fk_id_estado=7 WHERE id_pedido = :fk_id_pedido";
      resultado2 = await settings.OpenConnection(sql2, [fk_id_pedido], true);
      
      if(resultado2) { 
        res.redirect('/ventas');
      }

    } else {
      console.log("[!] Ocurrió un error al intentar crear la venta " + id_venta_bind);
      res.redirect('/ventas');
    }

  } catch (error) {
    res.status(400);
    res.send("[!] Ocurrió un error al obtener los datos de la base de datos")
    console.log(error);
  }

});


// Agregar Venta Detalle
router.post('/crearVentaDetalle/:id_venta', async (req, res) => {
  try {

    var fk_id_venta_bind = req.params.id_venta;
    var { costo_impuestos, comision_servicio, comision_empresa, costo_fruta, costo_transporte } = req.body;
    var precio_final = parseInt(costo_impuestos) + parseInt(comision_servicio) + parseInt(comision_empresa) + parseInt(costo_fruta) + parseInt(costo_transporte);

    sql1 = "CALL PA_VENTA_DETALLE_CREAR(:id_ventad,:costo_fruta,:costo_transporte,:costo_impuestos,:comision_servicio,:comision_empresa,:precio_final,:fk_id_venta)";
    resultado1 = await settings.OpenConnection(sql1, [fk_id_venta_bind, costo_fruta, costo_transporte, costo_impuestos, comision_servicio, comision_empresa, precio_final, fk_id_venta_bind], true);

    // Si tuvo conexión a la DB
    if(resultado1) {
      console.log("[!] Venta Detalle " + fk_id_venta_bind + " creada con éxito");

      // Actualizamos venta a estado 2 = Pendiente de pago
      sql2 = "UPDATE venta SET fk_id_estado=2 WHERE id_venta = :fk_id_venta_bind";
      resultado2 = await settings.OpenConnection(sql2, [fk_id_venta_bind], true);
      
      if(resultado2) { 
        res.redirect('/ventas');
      }
      
    } else {
      console.log("[!] Ocurrió un error al intentar crear la venta detalle " + fk_id_venta_bind);
      res.redirect('/ventas');
    }

  } catch (error) {
    res.status(400);
    res.send("[!] Ocurrió un error al obtener los datos de la base de datos")
    console.log(error);
  }

});


// Anular
router.get("/anularVenta/:id_venta", async (req, res) => {
  try {

    var id_venta_bind = req.params.id_venta;

    sql = "CALL PA_VENTA_ANULAR(:id_venta_bind)";
    resultado = await settings.OpenConnection(sql, [id_venta_bind], true);

    if(resultado) {
      console.log("[!] Venta " + id_venta_bind + " anulada con éxito");
      res.redirect('/ventas');
    } else {
      console.log("[!] Ocurrió un error al intentar anular la venta " + id_venta_bind);
      res.redirect('/ventas');
    }

  } catch (error) {
    res.status(400);
    res.send("[!] Ocurrió un error al obtener los datos de la base de datos")
    console.log(error);
  }

});


module.exports = router;
