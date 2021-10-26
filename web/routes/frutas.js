// Importaciones
const express = require('express');
const router = express.Router();
const BD = require('../bin/configbd');

// CRUD FRUTAS

// Leer - Todos las frutas
router.get('/listarFrutas', async (req, res) => {
  
  binds = {};
  sql = "SELECT id_fruta, nombre, necesita_refrigeracion FROM fruta";
  result = await BD.Open(sql, binds, true);

  Frutas = [];

  result.rows.map(fruta => {
      let frutaSchema = {
          "id_fruta": fruta[0],
          "nombre": fruta[1],
          "necesita_refrigeracion": fruta[2]
      }

      Frutas.push(frutaSchema);
  })
  res.json({title: 'Frutas', 'mydata': Frutas});
});


// Leer - Frutas en especifico
router.get('/listarFrutas/:id_fruta', async (req, res) => {
  
  binds = { "id_fruta_bind": req.params.id_fruta };
  sql = "SELECT nombre, necesita_refrigeracion FROM fruta WHERE id_fruta = :id_fruta_bind";
  result = await BD.Open(sql, binds, true);

  Frutas = [];

  result.rows.map(fruta => {
      let frutaSchema = {
        "id_fruta": id_fruta_bind,
        "nombre": fruta[0],
        "necesita_refrigeracion": fruta[1]
      }

      Frutas.push(frutaSchema);
  })
  res.json({title: 'Frutas', 'mydata': Frutas});
});




// Desactivar
router.get("/desactivarFruta/:id_fruta", async (req, res) => {
  var { id_fruta } = req.params;
  sql = "UPDATE fruta SET fk_id_estado=2 WHERE id_fruta = :id_fruta";
  await BD.Open(sql, [id_fruta], true);

  if(res.status(200)) {
    console.log("[!] Fruta " + req.params.id_fruta + " desactivada con éxito");
    res.redirect('/frutas');
	} else {
		console.log("[!] Ocurrió un error al intentar desactivar la fruta " + req.params.id_fruta);
    res.redirect('/frutas');
	}
})

module.exports = router;
