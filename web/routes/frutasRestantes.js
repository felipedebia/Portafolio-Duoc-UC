// Importaciones
const express = require('express');
const router = express.Router();
const settings = require('../bin/settings');
var moment = require('moment');

// CRUD FRUTA_RESTANTE

// Listar todas las frutas restantes
router.get('/listarFrutasRestantes', async (req, res) => {
    try {
  
        binds = {};
        sql = "SELECT id_frutaR, fecha_creacion, fecha_actualizacion, saldo_cantidad, fk_id_producto FROM fruta_restante";
        result = await settings.OpenConnection(sql, binds, true);
    
        FrutasRestantes = [];
    
        result.rows.map(orden => {
            let ordenSchema = {
                "id_frutaR": orden[0],
                "fecha_creacion": moment(orden[1]).format('DD-MM-YYYY'),
                "fecha_actualizacion": moment(orden[2]).format('DD-MM-YYYY'),
                "saldo_cantidad": orden[3],
                "fk_id_producto": orden[4]
            }
    
            FrutasRestantes.push(FrutasRestantes);
        })
        res.json({title: 'FrutasRestantes', 'mydata': FrutasRestantes});
        
    } catch (error) {
        res.status(400);
        res.json({ "error": error });
        console.log(error);
    }

});


module.exports = router;