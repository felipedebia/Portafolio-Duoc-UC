// Importaciones
const express = require('express');
const router = express.Router();
const settings = require('../bin/settings');
const moment = require('moment');

// Contraseña
const { encriptar, desencriptar } = require('../helpers.js/encriptacion');

// CRUD USUARIOS

// Listar todos los usuarios
router.get('/listarUsuarios', async (req, res) => {
  try {

    binds = {};
    sql = "SELECT usuario.id_usuario, usuario.num_documento, usuario.nombre, usuario.apellido, usuario.fecha_nacimiento, usuario.genero, usuario.correo, usuario.telefono, usuario.password, usuario.fk_id_estado, estado_usuario.descripcion, usuario.fk_id_tipo, tipo_usuario.nombre FROM usuario JOIN tipo_usuario ON usuario.fk_id_tipo = tipo_usuario.id_tipo JOIN estado_usuario ON usuario.fk_id_estado = estado_usuario.id_estado";
    result = await settings.OpenConnection(sql, binds, true);

    Usuarios = [];

    result.rows.map(user => {
        let userSchema = {
          "id_usuario": user[0],
          "num_documento": user[1],
          "nombre": user[2],
          "apellido": user[3],
          "fecha_nacimiento": moment(user[4]).format('DD-MM-YYYY'),
          "genero": user[5],
          "correo": user[6],
          "telefono": user[7],
          "password": user[8],
          "fk_id_estado": user[9],
          "fk_texto_estado": user[10],
          "fk_id_tipo": user[11],
          "fk_texto_tipo": user[12]
        }

        Usuarios.push(userSchema);
    })
    res.json({ title: 'Usuarios', 'mydata': Usuarios });

  } catch (error) {
    res.status(400);
    res.json({ "error": error });
    console.log(error);
  }

});


// Login para movil
router.post('/login', async(req, res) => {

  try {
      var queryText = req.body.correo;
      var password_bind = req.body.password_bind;
      if (!queryText || !password_bind) {
          throw "debe enviar un correo y una contraseña";
      }
      var passwordEncrypted = encriptar(password_bind);
      let binds = [queryText, passwordEncrypted];


      // Encriptamos la contraseña del usuario

      sql = `SELECT id_usuario, num_documento, nombre, apellido, fecha_nacimiento, genero, telefono, fk_id_estado, fk_id_tipo FROM usuario WHERE correo= :corr and password= :pass and fk_id_estado= 1  `;
      console.log("antes del open");
      result = await settings.Open(sql, binds)
      console.log("llego al open");

      Usuarios = [];

      result.rows.map(user => {
          let userSchema = {
              "id_usuario": user[0],
              "num_documento": user[1],
              "nombre": user[2],
              "apellido": user[3],
              "fecha_nacimiento": user[4],
              "genero": user[5],
              "correo": user[6],
              "telefono": user[7],
              "fk_id_estado": user[9],
              "fk_id_tipo": user[10],
              "token": "askjdkdfksaljdfkljsadklfjsakldfjklsadf"
          }
          Usuarios.push(userSchema);
      })

      if (Usuarios != 0) {
          res.status(200);
          res.json({ error: 'false', 'data': Usuarios });
      } else {
          throw 'Usuario o contraseña Incorrectos';
      }

  } catch (error) {
      res.status(400);
      res.json({
          'error': 'true ',
          "msg": error
      });
  }


})



// Agregar usuario
router.post('/crearUsuario', async (req, res) => {
  try {

    var { num_documento, fk_id_tipo, nombre, apellido, fecha_nacimiento, genero, correo, telefono, password } = req.body;

    // Consulta para ver si existe el correo
    sql1 = "SELECT correo from usuario where correo = :correo";
    resultado1 = await settings.OpenConnection(sql1, [correo], true);

    if (resultado1.rows[0] == correo) {
      // FALTA: detallar error especifico de que correo ya existe
      var string = "error";
      res.redirect('/usuarios/?estado=' + string);
    } else {
      // Encriptamos la contraseña del usuario
      var passwordEncrypted = encriptar(password);

      // Creamos el nuevo usuario
      sql2 = "CALL PA_USUARIO_CREAR(:num_documento, :nombre, :apellido, :fecha_nacimiento, :genero, :correo, :telefono, :password, :fk_id_tipo)";
      resultado2 = await settings.OpenConnection(sql2, [num_documento, nombre, apellido, fecha_nacimiento, genero, correo, telefono, passwordEncrypted, fk_id_tipo], true);

      // Si tuvo conexión a la DB
      if (resultado2) {
        console.log("[!] Usuario " + correo + " creado con éxito");
        settings.enviarCorreo('Usuario registrado con éxito - Maipo Grande', 'usuario_registro');
        var respuesta_page = "valido";
        res.redirect('/usuarios/?respuesta_page=' + respuesta_page);
      } else {
        console.log("[!] Ocurrió un error al intentar registrar el usuario " + correo);
        var respuesta_page = "error";
        res.redirect('/usuarios/?respuesta_page=' + respuesta_page);
      }
    }

  } catch (error) {
    res.status(400);
    res.send("Ocurrió un error al obtener los datos de la base de datos")
    console.log(error);
  }

});


// Modificar
router.post("/modificarUsuario/:id_usuario", async (req, res) => {
  try {

    var id_usuario = req.params.id_usuario;
    var { correo, nombre, apellido, num_documento, fk_id_tipo, fecha_nacimiento, genero, fk_id_estado, telefono, password } = req.body;

    // Encriptamos la contraseña del usuario
    var passwordEncrypted = encriptar(password);

    sql = "CALL PA_USUARIO_UPDATE(:id_usuario, :num_documento, :nombre, :apellido, :fecha_nacimiento, :genero, :correo, :telefono, :password, :fk_id_estado, :fk_id_tipo)";
    resultado = await settings.OpenConnection(sql, [id_usuario, num_documento, nombre, apellido, fecha_nacimiento, genero, correo, telefono, passwordEncrypted, fk_id_estado, fk_id_tipo], true);

    // Si tuvo conexión a la DB
    if (resultado) {
      console.log("[!] Usuario " + req.body.correo + " modificado con éxito");
      var refresh_page = "true";
      res.redirect('/usuarios/?refresh_status=' + refresh_page);
    } else {
      console.log("[!] Ocurrió un error al intentar modificar el usuario " + req.body.correo);
      var refresh_page = "false";
      res.redirect('/usuarios/?refresh_status=' + refresh_page);
    }

  } catch (error) {
    res.status(400);
    res.send("Ocurrió un error al obtener los datos de la base de datos")
    console.log(error);
  }

});


// Modificar
// Agregar restriccion, solo modificar el perfil del usuario conectado
router.post("/modificarMiPerfil/:id_usuario", async (req, res) => {
  try {

    var id_usuario = req.params.id_usuario;
    var { correo, nombre, apellido, num_documento, fecha_nacimiento, genero, telefono, password } = req.body;

    // Encriptamos la contraseña del usuario
    var passwordEncrypted = encriptar(password);

    sql = "CALL PA_USUARIO_UPDATE_MIPERFIL(:id_usuario, :num_documento, :nombre, :apellido, :fecha_nacimiento, :genero, :correo, :telefono, :password)";
    resultado = await settings.OpenConnection(sql, [id_usuario, num_documento, nombre, apellido, fecha_nacimiento, genero, correo, telefono, passwordEncrypted], true);

    // Si tuvo conexión a la DB
    if (resultado) {
      console.log("[!] Usuario " + req.body.correo + " modificado con éxito");
      res.redirect('/usuarios');
    } else {
      console.log("[!] Ocurrió un error al intentar modificar el usuario " + req.body.correo);
      res.redirect('/usuarios');
    }

  } catch (error) {
    res.status(400);
    res.send("Ocurrió un error al obtener los datos de la base de datos")
    console.log(error);
  }

});


// Nueva contraseña del usuario cuando ingresa por primera vez
router.post("/nuevaContrasena/:id_usuario", async (req, res) => {
  try {

    var value_id_usuario = req.params.id_usuario;
    var { nuevaContrasena } = req.body;

    // Encriptamos la contraseña del usuario
    var passwordEncrypted = encriptar(nuevaContrasena);
    // Pasamos la cuenta del usuario a 1 = activado
    var fk_id_estado=1;

    sql = "CALL PA_USUARIO_UPDATE_NEWPASSWORD(:id_usuario, :password, :fk_id_estado)";
    resultado = await settings.OpenConnection(sql, [value_id_usuario,passwordEncrypted,fk_id_estado], true);

    // Si tuvo conexión a la DB
    if (resultado) {
      console.log("[!] Contraseña del usuario " + value_id_usuario + " cambiada con éxito");
      req.session.isLoggedIn = false;
      res.redirect('/');
      settings.enviarCorreo('Tu contraseña ha sido cambiada - Maipo Grande', 'usuario_contrasenacambiada');
    } else {
      console.log("[!] Ocurrió un error al intentar modificar la contraseña del usuario " + value_id_usuario);
      res.redirect('/');
    }

  } catch (error) {
    res.status(400);
    res.send("Ocurrió un error al obtener los datos de la base de datos")
    console.log(error);
  }

});


module.exports = router;
