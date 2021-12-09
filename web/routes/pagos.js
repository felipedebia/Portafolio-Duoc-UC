// Importaciones
const express = require('express');
const router = express.Router();
const settings = require('../bin/settings');
const moment = require('moment');
const functions = require('./functions');
const multer = require('multer');
const path = require('path');

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


// Listar todos los pagos
router.get('/listarPagos', async(req, res) => {
    try {

        binds = {};
        sql = "SELECT id_pago, monto, fecha_pago, url_comprobante, fk_id_tipo, fk_id_usuario FROM pago";
        result = await settings.OpenConnection(sql, binds, true);

        Pagos = [];

        result.rows.map(pago => {
            let pagosSchema = {
                "id_pago": pago[0],
                "monto": pago[1],
                "fecha_pago": moment(pago[2]).format('DD-MM-YYYY'),
                "url_comprobante": pago[4],
                "fk_id_tipo": pago[5],
                "fk_id_usuario": pago[6]
            }

            Pagos.push(pagosSchema);
        })
        res.json({ title: 'Pagos', 'mydata': Pagos });

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
