var express = require('express');
var router = express.Router();
const BD = require('../bin/configbd');


// CRUD USUARIOS

// Leer - Todos los usuarios
router.get('/listarUsuarios', async (req, res) => {
  
  binds = {};
  sql = "SELECT id_usuario, num_documento, tipo_usuario, nombre, apellido, fecha_nacimiento, genero, correo, estado_cuenta, telefono, password FROM usuario";
  result = await BD.Open(sql, binds, false);

  Usuarios = [];

  result.rows.map(user => {
      let userSchema = {
          "id_usuario": user[0],
          "num_documento": user[1],
          "tipo_usuario": user[2],
          "nombre": user[3],
          "apellido": user[4],
          "fecha_nacimiento": user[5],
          "genero": user[6],
          "correo": user[7],
          "telefono": user[8],
          "estado_cuenta": user[9],
          "password": user[10]
      }

      Usuarios.push(userSchema);
  })
  res.json({title: 'Usuarios', 'mydata': Usuarios});
});

// Leer - Usuario en especifico
router.get('/listarUsuarios/:id_usuario', async (req, res) => {
  
  binds = { "id_usuario_bind": req.params.id_usuario };
  sql = "SELECT id_usuario, num_documento, tipo_usuario, nombre, apellido, fecha_nacimiento, genero, correo, estado_cuenta, telefono, password FROM usuario WHERE id_usuario = :id_usuario_bind";
  result = await BD.Open(sql, binds, false);

  Usuarios = [];

  result.rows.map(user => {
      let userSchema = {
          "id_usuario": user[0],
          "num_documento": user[1],
          "tipo_usuario": user[2],
          "nombre": user[3],
          "apellido": user[4],
          "fecha_nacimiento": user[5],
          "genero": user[6],
          "correo": user[7],
          "telefono": user[8],
          "estado_cuenta": user[9],
          "password": user[10]
      }

      Usuarios.push(userSchema);
  })
  res.json({title: 'Usuarios', 'mydata': Usuarios});
});

// Agregar
// Falta hacer filtro de que no se repita el correo
router.post('/crearUsuario', async (req, res) => {
  const { num_documento, tipo_usuario, nombre, apellido, fecha_nacimiento, genero, correo, telefono, password } = req.body;

  const estado_cuenta = 1;

  sql = "INSERT INTO usuario(num_documento, tipo_usuario, nombre, apellido, fecha_nacimiento, genero, correo, estado_cuenta, telefono, password) VALUES (:num_documento,:tipo_usuario,:nombre,:apellido,to_DATE(:fecha_nacimiento,'YYYY/MM/DD'),:genero,:correo,:estado_cuenta,:telefono,:password)";

  await BD.Open(sql, [num_documento, tipo_usuario, nombre, apellido, fecha_nacimiento, genero, correo, estado_cuenta, telefono, password], true);
  result = await BD.Open(sql, binds, false);

  // Si tuvo conexión a la DB
  if(res.status(200)) {
    console.log("[!] Usuario " + correo + " creado con éxito");
    res.redirect('/usuarios');
	} else {
		console.log("[!] Ocurrió un error al intentar registrar el usuario " + correo);
    res.redirect('/usuarios');
	}
})

// Modificar
router.post("/modificarUsuario/:id_usuario", async (req, res) => {
  
  binds = { "id_usuario_bind": req.params.id_usuario, "correo_bind": req.body.correo, "nombre_bind": req.body.nombre, "num_documento_bind": req.body.num_documento, "tipo_usuario_bind": req.body.tipo_usuario, "fecha_nacimiento_bind": req.body.fecha_nacimiento, "genero_bind": req.body.genero, "estado_cuenta_bind": req.body.estado_cuenta, "telefono_bind": req.body.telefono };
  sql = "UPDATE usuario SET correo= :correo_bind, nombre= :nombre_bind, num_documento= :num_documento_bind, tipo_usuario= :tipo_usuario_bind, fecha_nacimiento= :fecha_nacimiento_bind, genero= :genero_bind, estado_cuenta= :estado_cuenta_bind, telefono= :telefono_bind WHERE id_usuario= :id_usuario_bind";
  result = await BD.Open(sql, binds, false);

  // Si tuvo conexión a la DB
  if(res.status(200)) {
    console.log("[!] Usuario " + req.body.correo + " modificado con éxito");
    res.redirect('/usuarios');
  } else {
    console.log("[!] 2- Ocurrió un error al intentar modificar el usuario " + req.body.correo);
    res.redirect('/usuarios');
  }

})


// Desactivar
router.get("/desactivarUsuario/:id_usuario", async (req, res) => {

  binds = { "id_usuario_bind": req.params.id_usuario };
  sql = "DELETE FROM usuario WHERE id_usuario = :id_usuario_bind";
  //sql = "UPDATE usuario SET estado_cuenta=0 WHERE id_usuario = :id_usuario_bind";
  result = await BD.Open(sql, binds, false);

  if(res.status(200)) {
    console.log("[!] Usuario " + req.params.id_usuario + " desactivado con éxito");
    res.redirect('/usuarios');
	} else {
		console.log("[!] Ocurrió un error al intentar desactivar el usuario " + req.params.id_usuario);
    res.redirect('/usuarios');
	}
})


// CRUD VENTAS

router.post("/eliminarVenta/:id_venta", async (req, res) => {
})

module.exports = router;
