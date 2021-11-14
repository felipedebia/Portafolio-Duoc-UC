// Importaciones
const express = require('express');
const router = express.Router();
const settings = require('../bin/settings');
var moment = require('moment');

// CRUD REPORTE BODEGA

// Listar todos los reportes de bodega
router.get('/listarReportesBodegas', async (req, res) => {
    try {
  
        binds = {};
        sql = "SELECT id_reporteB, fecha_creacion, estado_reporte, descripcion, fk_id_ordenB FROM reporte_bodega";
        result = await settings.OpenConnection(sql, binds, true);
    
        ReportesBodegas = [];
    
        result.rows.map(orden => {
            let ordenSchema = {
                "id_reporteB": orden[0],
                "fecha_creacion": moment(orden[1]).format('DD-MM-YYYY'),
                "estado_reporte": orden[3],
                "descripcion": orden[4],
                "fk_id_ordenB": orden[5]
            }
    
            ReportesBodegas.push(ordenSchema);
        })
        res.json({title: 'ReportesBodegas', 'mydata': ReportesBodegas});

    } catch (error) {
        res.status(400);
        res.json({ "error": error });
        console.log(error);
    }

  });


  module.exports = router;