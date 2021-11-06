// Importaciones
const express = require('express');
const router = express.Router();
const BD = require('../bin/configbd');


// Listar Paises
router.get('/listarPaises', async(req, res) => {

    binds = {};
    sql = "SELECT cod_pais, nombre FROM pais";
    result = await BD.Open(sql, binds, true);

    Paises = [];

    result.rows.map(pais => {
        let paisSchema = {
            "cod_pais": pais[0],
            "nombre": pais[1]
        }

        Paises.push(paisSchema);
    })
    res.json({ title: 'Paises', 'mydata': Paises });
});


// Listar Ciudades
router.get('/listarCiudades', async(req, res) => {

    binds = {};
    sql = "SELECT id_ciudad, nombre, pais_cod_pais FROM ciudad";
    result = await BD.Open(sql, binds, true);

    Ciudades = [];

    result.rows.map(ciudad => {
        let ciudadSchema = {
            "id_ciudad": ciudad[0],
            "nombre": ciudad[1],
            "pais_cod_pais": ciudad[2]
        }

        Ciudades.push(ciudadSchema);
    })
    res.json({ title: 'Ciudades', 'mydata': Ciudades });
});


//Leer calidad de la fruta
router.get('/listarCalidadesFrutas', async(req, res) => {

    binds = {};
    sql = "SELECT id_calidad, nombre FROM fruta_calidad";
    result = await BD.Open(sql, binds, true);
  
    Calidades = [];
  
    result.rows.map(calidad => {
        let calidadSchema = {
            "id_calidad": calidad[0],
            "nombre": calidad[1]
        }
  
        Calidades.push(calidadSchema);
    })
    res.json({ title: 'Calidades', 'mydata': Calidades });
  });



module.exports = router; 