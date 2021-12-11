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
        sql = "SELECT fr.id_frutaR, fr.fecha_creacion, fr.fecha_actualizacion, fr.saldo_cantidad, fr.fk_id_producto, f.nombre, fc.nombre, p.cantidad FROM fruta_restante fr JOIN producto p ON p.id_producto = fr.fk_id_producto JOIN fruta_calidad fc ON p.fk_id_calidad = fc.id_calidad JOIN fruta f ON f.id_fruta = p.fk_id_fruta";
        result = await settings.OpenConnection(sql, binds, true);
    
        FrutasRestantes = [];
    
        result.rows.map(fruta => {
            let frutaSchema = {
                "id_frutaR": fruta[0],
                "fecha_creacion": moment(fruta[1]).format('DD-MM-YYYY'),
                "fecha_actualizacion": moment(fruta[2]).format('DD-MM-YYYY'),
                "saldo_cantidad": fruta[3],
                "fk_id_producto": fruta[4],
                "fruta_fk_nombre": fruta[5],
                "frutacalidad_fk_nombre": fruta[6],
                "producto_fk_cantidad": fruta[7]
            }
    
            FrutasRestantes.push(frutaSchema);
        })
        res.json({title: 'FrutasRestantes', 'mydata': FrutasRestantes});
        
    } catch (error) {
        res.status(400);
        res.json({ "error": error });
        console.log(error);
    }

});


// Comprar Fruta Restante
router.post('/comprarFrutaRestante', async (req, res) => {
    try {
  
      var { nombre, necesita_refrigeracion } = req.body;
      var fecha_creacion = functions.obtenerFechaActual();
  
      sql = "CALL PA_FRUTA_CREAR(:nombre,:fecha_creacion,:necesita_refrigeracion)";
      await settings.OpenConnection(sql, [nombre, fecha_creacion, necesita_refrigeracion], true);
  
      // Si tuvo conexión a la DB
      if(res.status(200)) {
        console.log("[!] Fruta restante comprada con éxito");
        res.redirect('/miscompras');
        //res.refresh();
      } else {
        console.log("[!] Ocurrió un error al intentar comprar la fruta restante");
        res.redirect('/miscompras');
      }
  
    } catch (error) {
      res.status(400);
      res.send("Ocurrió un error al obtener los datos de la base de datos")
      console.log(error);
    }
  
})


module.exports = router;