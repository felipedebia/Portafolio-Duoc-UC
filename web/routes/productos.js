// Importaciones
const express = require('express');
const router = express.Router();
const BD = require('../bin/configbd');
var moment = require('moment');

// CRUD PRODUCTOS

// Leer - Todos los productos
router.get('/listarProductos', async (req, res) => {
  
  binds = {};
  sql = "SELECT id_producto, cantidad, fecha_modificacion, fk_id_fruta, fk_id_calidad, fk_id_usuario FROM producto";
  result = await BD.Open(sql, binds, true);

  Productos = [];

  result.rows.map(producto => {
      let productoSchema = {
          "id_producto": producto[0],
          "cantidad": producto[1],
          "fecha_modificacion": moment(producto[2]).format('DD-MM-YYYY'),
          "fk_id_fruta": producto[3],
          "fk_id_calidad": producto[4],
          "fk_id_usuario": producto[5]
      }

      Productos.push(productoSchema);
  })
  res.json({title: 'Productos', 'mydata': Productos});
});


// Leer - Productos en especifico
router.get('/listarProductos/:id_producto', async (req, res) => {
  
  binds = { "id_producto_bind": req.params.id_fruta };
  sql = "SELECT cantidad, fecha_modificacion, fk_id_fruta, fk_id_calidad, fk_id_usuario FROM producto WHERE id_producto = :id_producto_bind";
  result = await BD.Open(sql, binds, true);

  Productos = [];

  result.rows.map(producto => {
      let productoSchema = {
          "id_producto": id_producto_bind,
          "cantidad": producto[0],
          "fecha_modificacion": moment(producto[1]).format('DD-MM-YYYY'),
          "fk_id_fruta": producto[2],
          "fk_id_calidad": producto[3],
          "fk_id_usuario": producto[4]
      }

      Productos.push(productoSchema);
  })
  res.json({title: 'Productos', 'mydata': Productos});
});




// Eliminar
router.get("/eliminarProducto/:id_producto", async (req, res) => {
  var id_producto_bind = req.params;
  sql = "DELETE FROM producto WHERE id_producto = :id_producto_bind";
  await BD.Open(sql, [id_producto_bind], true);

  if(res.status(200)) {
    console.log("[!] Producto " + req.params.id_producto + " eliminado con éxito");
    res.redirect('/productos');
	} else {
		console.log("[!] Ocurrió un error al intentar eliminar el producto " + req.params.id_producto);
    res.redirect('/productos');
	}
})

module.exports = router;
