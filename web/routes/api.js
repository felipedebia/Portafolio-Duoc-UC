// Importaciones
const express = require('express');
const router = express.Router();
const BD = require('../bin/configbd');

// Contraseña
var SimpleCrypto = require("simple-crypto-js").default
const secretKey = "1X42JJKLjkuid"
const simpleCryp = new SimpleCrypto(secretKey)

// CRUD USUARIOS

// Leer - Todos los usuarios
router.get('/listarUsuarios', async (req, res) => {
  
  binds = {};
  sql = "SELECT id_usuario, num_documento, tipo_usuario, nombre, apellido, fecha_nacimiento, genero, correo, estado_cuenta, telefono, password FROM usuario";
  result = await BD.Open(sql, binds, true);

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
  result = await BD.Open(sql, binds, true);

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
  var { num_documento, tipo_usuario, nombre, apellido, fecha_nacimiento, genero, correo, telefono, password } = req.body;
  var estado_cuenta = 1;

  // Encriptamos la contraseña del usuario
  var passwordEncrypted = simpleCryp.encrypt(password)

  sql = "INSERT INTO usuario(num_documento, tipo_usuario, nombre, apellido, fecha_nacimiento, genero, correo, estado_cuenta, telefono, password) VALUES (:num_documento,:tipo_usuario,:nombre,:apellido,to_DATE(:fecha_nacimiento,'YYYY/MM/DD'),:genero,:correo,:estado_cuenta,:telefono,:passwordEncrypted)";
  await BD.Open(sql, [num_documento, tipo_usuario, nombre, apellido, fecha_nacimiento, genero, correo, estado_cuenta, telefono, passwordEncrypted], true);

  // Si tuvo conexión a la DB
  if(res.status(200)) {
    console.log("[!] Usuario " + correo + " creado con éxito");
    res.redirect('/usuarios');
    //res.refresh();
	} else {
		console.log("[!] Ocurrió un error al intentar registrar el usuario " + correo);
    res.redirect('/usuarios');
	}
})

// Modificar
router.post("/modificarUsuario/:id_usuario", async (req, res) => {
  var { id_usuario } = req.params;
  var { num_documento, tipo_usuario, nombre, apellido, fecha_nacimiento, genero, correo, estado_cuenta, telefono} = req.body;
  sql = "UPDATE usuario SET correo= :correo, nombre= :nombre, apellido= :apellido, num_documento= :num_documento, tipo_usuario= :tipo_usuario, fecha_nacimiento= :fecha_nacimiento, genero= :genero, estado_cuenta= :estado_cuenta, telefono= :telefono WHERE id_usuario= :id_usuario";
  await BD.Open(sql, [num_documento, tipo_usuario, nombre, apellido, fecha_nacimiento, genero, correo, estado_cuenta, telefono, id_usuario], true);

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
  var { id_usuario} = req.params;
  sql = "DELETE FROM usuario WHERE id_usuario = :id_usuario";
  //sql = "UPDATE usuario SET estado_cuenta=0 WHERE id_usuario = :id_usuario";
  await BD.Open(sql, [id_usuario], true);

  if(res.status(200)) {
    console.log("[!] Usuario " + req.params.id_usuario + " desactivado con éxito");
    res.redirect('/usuarios');
	} else {
		console.log("[!] Ocurrió un error al intentar desactivar el usuario " + req.params.id_usuario);
    res.redirect('/usuarios');
	}
})


// CRUD CONTRATOS

// Leer - Todos los contratos
router.get('/listarContratos', async (req, res) => {
  
  binds = {};
  sql = "SELECT id_contrato, fecha_vigencia, fecha_vencimiento, estado_contrato FROM contrato";
  result = await BD.Open(sql, binds, true);

  Contratos = [];

  result.rows.map(contrato => {
      let contratoSchema = {
          "id_contrato": contrato[0],
          "fecha_vigencia": contrato[1],
          "fecha_vencimiento": contrato[2],
          "estado_contrato": contrato[3]
      }

      Contratos.push(contratoSchema);
  })
  res.json({title: 'Contratos', 'mydata': Contratos});
});

// Leer - Contrato en especifico
router.get('/listarContratos/:id_contrato', async (req, res) => {
  
  binds = { "id_contrato_bind": req.params.id_contrato };
  sql = "SELECT id_contrato, fecha_vigencia, fecha_vencimiento, estado_contrato FROM contrato WHERE id_contrato = :id_contrato_bind";
  result = await BD.Open(sql, binds, true);

  Contratos = [];

  result.rows.map(contrato => {
      let contratoSchema = {
        "id_contrato": contrato[0],
        "fecha_vigencia": contrato[1],
        "fecha_vencimiento": contrato[2],
        "estado_contrato": contrato[3]
      }

      Contratos.push(contratoSchema);
  })
  res.json({title: 'Contratos', 'mydata': Contratos});
});


// CRUD SUBASTA

// Leer - Todos las subastas
router.get('/listarSubastas', async (req, res) => {
  
  binds = {};
  sql = "SELECT id_subasta, fecha_creacion, fecha_actualizacion, fecha_termino, estado_subasta FROM subasta";
  result = await BD.Open(sql, binds, true);

  Subastas = [];

  result.rows.map(subasta => {
      let subastaSchema = {
          "id_subasta": subasta[0],
          "fecha_creacion": subasta[1],
          "fecha_actualizacion": subasta[2],
          "fecha_termino": subasta[3],
          "estado_subasta": subasta[4]
      }

      Subastas.push(subastaSchema);
  })
  res.json({title: 'Subastas', 'mydata': Subastas});
});

// Leer - Subasta en especifico
router.get('/listarSubastas/:id_subasta', async (req, res) => {
  
  binds = { "id_subasta_bind": req.params.id_subasta };
  sql = "SELECT id_subasta, fecha_creacion, fecha_actualizacion, fecha_termino, estado_subasta FROM subasta WHERE id_subasta = :id_subasta_bind";
  result = await BD.Open(sql, binds, true);

  Subastas = [];

  result.rows.map(subasta => {
      let subastaSchema = {
        "id_subasta": subasta[0],
        "fecha_creacion": subasta[1],
        "fecha_actualizacion": subasta[2],
        "fecha_termino": subasta[3],
        "estado_subasta": subasta[4]
      }

      Subastas.push(subastaSchema);
  })
  res.json({title: 'Subastas', 'mydata': Subastas});
});


// CRUD SUBASTA DE TRANSPORTES

// Leer - Todos las subastas
router.get('/listarSubastasTransportes', async (req, res) => {
  
  binds = {};
  sql = "SELECT id_subastaT, fecha_creacion, fecha_actualizacion, fecha_termino, estado_subasta FROM subasta";
  result = await BD.Open(sql, binds, true);

  Subastas = [];

  result.rows.map(subasta => {
      let subastaSchema = {
          "id_subastaT": subasta[0],
          "fecha_creacion": subasta[1],
          "fecha_actualizacion": subasta[2],
          "fecha_termino": subasta[3],
          "estado_subasta": subasta[4]
      }

      Subastas.push(subastaSchema);
  })
  res.json({title: 'Subastas', 'mydata': Subastas});
});

// Leer - Subasta en especifico
router.get('/listarSubastasTransportes/:id_subastaT', async (req, res) => {
  
  binds = { "id_subastaT_bind": req.params.id_subasta };
  sql = "SELECT id_subastaT, fecha_creacion, fecha_actualizacion, fecha_termino, estado_subasta FROM subasta WHERE id_subasta = :id_subastaT_bind";
  result = await BD.Open(sql, binds, true);

  Subastas = [];

  result.rows.map(subasta => {
      let subastaSchema = {
        "id_subastaT": subasta[0],
        "fecha_creacion": subasta[1],
        "fecha_actualizacion": subasta[2],
        "fecha_termino": subasta[3],
        "estado_subasta": subasta[4]
      }

      Subastas.push(subastaSchema);
  })
  res.json({title: 'Subastas', 'mydata': Subastas});
});


module.exports = router;
