// Importaciones
const express = require('express');
const router = express.Router();
const settings = require('../bin/settings');
const moment = require('moment');


// Listar todas las ventas
router.get('/listarMisCompras', async(req, res) => {
    try {

        binds = {};
        sql = "select venta.id_venta, venta.fecha_creacion, venta.fecha_actualizacion, pedido.fk_id_usuario, pedido.direccion_despacho, seguro.nombre_empresa, venta_detalle.precio_final, venta.fk_id_estado, estado_venta.descripcion, to_char(venta_detalle.precio_final,'$999,999,999') from venta join pedido on venta.fk_id_pedido = pedido.id_pedido join seguro on venta.fk_id_seguro = seguro.id_seguro join estado_venta on venta.fk_id_estado = estado_venta.id_estado join venta_detalle on venta.id_venta = venta_detalle.fk_id_venta";
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
                "fk_texto_estado": venta[8],
                "ventad_fk_precio_final_formato": venta[9]
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


module.exports = router; 