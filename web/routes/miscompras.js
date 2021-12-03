// Importaciones
const express = require('express');
const router = express.Router();
const settings = require('../bin/settings');
var moment = require('moment');
var functions = require('./functions');
const multer = require('multer');
var path = require('path');

// Configurar carpeta de destino de las subidas
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/subidas/pagos')
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
})

var uploadFile = multer({ storage: storage });


// Listar todas las ventas
router.get('/listarMisCompras', async(req, res) => {
    try {

        binds = {};
        sql = "select venta.id_venta, venta.fecha_creacion, venta.fecha_actualizacion, pedido.fk_id_usuario, pedido.direccion_despacho, seguro.nombre_empresa, venta_detalle.precio_final, venta.fk_id_estado, estado_venta.descripcion from venta join pedido on venta.fk_id_pedido = pedido.id_pedido join seguro on venta.fk_id_seguro = seguro.id_seguro join estado_venta on venta.fk_id_estado = estado_venta.id_estado join venta_detalle on venta.id_venta = venta_detalle.fk_id_venta";
        result = await settings.OpenConnection(sql, binds, true);

        MisCompras = [];

        result.rows.map(venta => {
            let misComprasSchema = {
                "id_venta": venta[0],
                "fecha_creacion": moment(venta[1]).format('DD-MM-YYYY'),
                "fecha_actualizacion": moment(venta[2]).format('DD-MM-YYYY'),
                "pedido_fk_id_usuario": venta[3],
                "pedido_fk_direccion_despacho": venta[4],
                "seguro_fk_nombre_empresa": venta[5],
                "ventad_fk_precio_final": venta[6],
                "fk_id_estado": venta[7],
                "fk_texto_estado": venta[8]
            }

            MisCompras.push(misComprasSchema);
        })
        res.json({ title: 'MisCompras', 'mydata': MisCompras });

    } catch (error) {
        res.status(400);
        res.json({ "error": error });
        console.log(error);
    }

});


// Agregar
router.post('/crearpago', uploadFile.single('url_documento'), async(req, res, next) => {
    try {
        
        const file = req.file
        if (!file) {
            const error = new Error('Debes seleccionar un archivo')
            error.httpStatusCode = 400
            return next(error)
        }

        // Hacemos un insert agregando el nombre del archivo al campo url_documento
        var url_comprobante = req.file.filename;
        var { monto, fk_id_venta, descripcion } = req.body;
        var fecha_pago = functions.obtenerFechaActual();
        var fk_id_tipo = 3;
        
        sql = "CALL PA_PAGO_CREAR(:monto, :fecha_pago, :url_comprobante, :descripcion, :fk_id_tipo)";
        result = await settings.OpenConnection(sql, [monto, fecha_pago, url_comprobante, descripcion, fk_id_tipo], true);

        // Con esto tomamos el ultimo registro en la tabla pagos para crear tabla rel y redirigir al documentopago y pueda agregar el pago
        sql3 = "SELECT id_pago FROM (SELECT * FROM pago ORDER BY id_pago DESC ) WHERE rownum = 1";
        result2 = await settings.OpenConnection(sql3, [], true);
        var idPago = result2.rows[0];

        if (idPago) {
            var id_pago = idPago.toString();
            sql2 = "INSERT INTO rel_venta_pago(fk_id_venta, fk_id_pago) VALUES (:fk_id_venta, :id_pago)";
            await settings.OpenConnection(sql2, [fk_id_venta, id_pago], true);
            res.redirect('/miscompras');
        }

    } catch (error) {
        res.status(400);
        res.send("Ocurrió un error al obtener los datos de la base de datos")
        console.log(error);
    }

});


module.exports = router; 