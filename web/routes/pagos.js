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
router.post('/crearPago/:id_venta', uploadFile.single('url_comprobante'), async(req, res, next) => {
    try {
        
        const file = req.file
        if (!file) {
            const error = new Error('Debes seleccionar un archivo')
            error.httpStatusCode = 400
            return next(error)
        }

        // Hacemos un insert agregando el nombre del archivo al campo url_documento
        var url_comprobante = req.file.filename;
        var fk_id_venta = req.params.id_venta;
        var { monto } = req.body;
        var fecha_pago = functions.obtenerFechaActual();
        var fk_id_tipo = 3;
        var fk_id_usuario = req.session.id_usuario;
        
        sql1 = "CALL PA_PAGO_CREAR(:monto, :fecha_pago, :url_comprobante, :fk_id_tipo, :fk_id_usuario)";
        resultado1 = await settings.OpenConnection(sql1, [monto, fecha_pago, url_comprobante, fk_id_tipo, fk_id_usuario], true);

        if (resultado1) {
            console.log("[!] Pago creada con éxito");

            // Con esto tomamos el ultimo registro en la tabla pagos para crear tabla rel y redirigir al documentopago y pueda agregar el pago
            sql2 = "SELECT id_pago FROM (SELECT * FROM pago ORDER BY id_pago DESC ) WHERE rownum = 1";
            resultado2 = await settings.OpenConnection(sql2, [], true);
            var value_idPago = resultado2.rows[0];

            if (value_idPago) {
                // Creamos la tabla relacional entre venta y pago
                var id_pago = value_idPago.toString();
                sql3 = "INSERT INTO rel_venta_pago(fk_id_venta, fk_id_pago) VALUES (:fk_id_venta, :id_pago)";
                resultado3 = await settings.OpenConnection(sql3, [fk_id_venta, id_pago], true);

                if (resultado3) {
                    console.log("[!] REL_VENTA_PAGO creada con éxito");

                    // Actualizamos venta a estado 3 = Pagado
                    sql4 = "UPDATE venta SET fk_id_estado=3 WHERE id_venta = :fk_id_venta";
                    resultado4 = await settings.OpenConnection(sql4, [fk_id_venta], true);
                    
                    if(resultado4) { 
                        console.log("[!] Venta actualizada con éxito");
                        res.redirect('/miscompras');
                    }
                    
                }
                
            }
        }

    } catch (error) {
        res.status(400);
        res.send("Ocurrió un error al obtener los datos de la base de datos")
        console.log(error);
    }

});


module.exports = router; 
