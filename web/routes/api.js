var express = require('express');
var router = express.Router();
const BD = require('../bin/configbd');


// CRUD USUARIOS

// Leer - Todos los usuarios
router.get('/listadousuarios', async (req, res) => {
  sql = "SELECT * FROM usuario";
  binds = {};
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
          "estado_cuenta": user[9],
          "telefono": user[8],
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

  // Si tuvo conexión a la DB
  if(res.status(200)) {
    console.log("[!] Usuario " + correo + " creado con éxito");
    res.render('crearUsuario', { msgAlert: 'Usuario creado con éxito' });
	} else {
		console.log("[!] Ocurrió un error al intentar registrar el usuario " + correo);
    res.render('crearUsuario', { msgAlert: 'Ocurrió un error al intentar registrar el usuario' });
	}
})

// Modificar
router.put("/modificarUsuario/:id_usuario", async (req, res) => {
  const usuario_id = req.body;

  sql = "UPDATE usuario SET correo=:correo, nombre=:nombre, apellido=:apellido, num_documento=:num_documento, tipo_usuario=:tipo_usuario, fecha_nacimiento=:fecha_nacimiento, genero=:genero, estado_cuenta=:estado_cuenta, telefono=:telefono, password=:password WHERE id_usuario=:id_usuario";

  await BD.Open(sql, [correo, nombre, apellido, num_documento, tipo_usuario, estado_cuenta, telefono, password, fecha_nacimiento, genero], true);

  // Si tuvo conexión a la DB
  if(res.status(200)) {
    console.log("[!] Usuario " + correo + " modificado con éxito");
    res.render('listadoUsuarios', { msgAlert: 'Usuario modificado con éxito' });
  } else {
    console.log("[!] Ocurrió un error al intentar modificar el usuario " + correo);
    res.render('listadoUsuarios', { msgAlert: 'Ocurrió un error al intentar modificar el usuario' });
  }

})


// Desactivar
router.post("/desactivarUsuario/:id_usuario", async (req, res) => {
  const { id_usuario } = req.params;

  sql = "UPDATE usuario SET estado_cuenta=0 WHERE id_usuario=:id_usuario";

  await BD.Open(sql, [id_usuario], true);

  if(res.status(200)) {
    console.log("[!] Usuario " + correo + " eliminado con éxito");
    res.render('listadoUsuarios', { msgAlert: 'Usuario eliminado con éxito' });
	} else {
		console.log("[!] Ocurrió un error al intentar eliminar el usuario " + correo);
    res.render('listadoUsuarios', { msgAlert: 'Ocurrió un error al intentar eliminar el usuario' });
	}
})


// CRUD VENTAS

router.post("/eliminarVenta/:id_venta", async (req, res) => {
})

module.exports = router;
