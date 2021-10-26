// Importaciones
const express = require('express');
const router = express.Router();
const BD = require('../bin/configbd');

// CRUD FRUTAS

// Leer - Todos las frutas
router.get('/listarFrutas', async (req, res) => {
  
  binds = {};
  sql = "SELECT id_fruta, nombre, cantidad, tipo_calidad, ultima_modificacion, peso, precio_por_unidad, id_usuario FROM fruta";
  result = await BD.Open(sql, binds, true);

  Frutas = [];

  result.rows.map(fruta => {
      let frutaSchema = {
          "id_fruta": fruta[0],
          "nombre": fruta[1],
          "cantidad": fruta[2],
          "tipo_calidad": fruta[3],
          "ultima_modificacion": fruta[4],
          "peso": fruta[5],
          "precio_por_unidad": fruta[6],
          "id_usuario": fruta[7]
      }

      Frutas.push(frutaSchema);
  })
  res.json({title: 'Frutas', 'mydata': Frutas});
});


// Leer - Frutas en especifico
router.get('/listarFrutas/:id_fruta', async (req, res) => {
  
  binds = { "id_fruta_bind": req.params.id_fruta };
  sql = "SELECT nombre, cantidad, tipo_calidad, ultima_modificacion, peso, precio_por_unidad, id_usuario FROM fruta WHERE id_fruta = :id_fruta_bind";
  result = await BD.Open(sql, binds, true);

  Frutas = [];

  result.rows.map(fruta => {
      let frutaSchema = {
        "id_fruta": id_fruta_bind,
        "nombre": fruta[0],
        "cantidad": fruta[1],
        "tipo_calidad": fruta[2],
        "ultima_modificacion": fruta[3],
        "peso": fruta[4],
        "precio_por_unidad": fruta[5],
        "id_usuario": fruta[6]
      }

      Frutas.push(frutaSchema);
  })
  res.json({title: 'Frutas', 'mydata': Frutas});
});




// Eliminar
router.get("/eliminarFruta/:id_fruta", async (req, res) => {
  var { id_fruta } = req.params;
  sql = "DELETE FROM fruta WHERE id_fruta = :id_fruta";
  await BD.Open(sql, [id_fruta], true);

  if(res.status(200)) {
    console.log("[!] Fruta " + req.params.id_fruta + " eliminada con éxito");
    res.redirect('/frutas');
	} else {
		console.log("[!] Ocurrió un error al intentar eliminar la fruta " + req.params.id_fruta);
    res.redirect('/frutas');
	}
})

module.exports = router;
