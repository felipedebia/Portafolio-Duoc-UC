// Importaciones
const express = require('express');
const router = express.Router();
const BD = require('../bin/configbd');

//Extras pais y ciudad
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

router.get('/listarCiudades', async(req, res) => {

    binds = {};
    sql = "SELECT id_ciudad, nombre, pais_cod_pais FROM ciudad";
    result = await BD.Open(sql, binds, true);

    Ciudades = [];

    result.rows.map(ciudad => {
        let paisSchema = {
            "id_ciudad": ciudad[0],
            "nombre": ciudad[1],
            "pais_cod_pais": ciudad[2]
        }

        Ciudades.push(paisSchema);
    })
    res.json({ title: 'Ciudades', 'mydata': Ciudades });
});



module.exports = router; 