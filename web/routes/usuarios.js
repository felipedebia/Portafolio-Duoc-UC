// Importaciones
const express = require('express');
const router = express.Router();
const settings = require('../bin/settings');
var moment = require('moment');

// Contraseña
var SimpleCrypto = require("simple-crypto-js").default
const secretKey = "1X42JJKLjkuid"
const simpleCryp = new SimpleCrypto(secretKey)

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


// Agregar usuario
router.post('/crearUsuario', async (req, res) => {
  try {

    var { num_documento, fk_id_tipo, nombre, apellido, fecha_nacimiento, genero, correo, telefono, password } = req.body;
    
    // Definimos la cuenta pendiente de cambiar contraseña
    var fk_id_estado = 3;

    // Consulta para ver si existe el correo
    consulta = "SELECT correo from usuario where correo = :correo";
    validator = await settings.OpenConnection(consulta, [correo], true);

    if (validator.rows[0] == correo) {
      // FALTA: detallar error especifico de que correo ya existe
      var string = "error";
      res.redirect('/usuarios/?estado=' + string);
    } else {
      // Encriptamos la contraseña del usuario
      var passwordEncrypted = simpleCryp.encrypt(password)

      // Creamos el nuevo usuario
      sql = "CALL PA_USUARIO_CREAR(:num_documento, :nombre, :apellido, :fecha_nacimiento, :genero, :correo, :telefono, :password, :fk_id_tipo)";
      await settings.OpenConnection(sql, [num_documento, nombre, apellido, fecha_nacimiento, genero, correo, telefono, passwordEncrypted, fk_id_estado, fk_id_tipo], true);

      // Si tuvo conexión a la DB
      if (res.status(200)) {
        console.log("[!] Usuario " + correo + " creado con éxito");
        var string = "valido";
        res.redirect('/usuarios/?estado=' + string);
        settings.enviarCorreo('Usuario registrado con éxito - Maipo Grande', 'usuario_registro');
      } else {
        console.log("[!] Ocurrió un error al intentar registrar el usuario " + correo);
        var string = "error";
        res.redirect('/usuarios/?estado=' + string);
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
    var passwordEncrypted = simpleCryp.encrypt(password)

    sql = "CALL PA_USUARIO_UPDATE(:id_usuario, :num_documento, :nombre, :apellido, :fecha_nacimiento, :genero, :correo, :telefono, :password, :fk_id_estado, :fk_id_tipo)";
    await settings.OpenConnection(sql, [id_usuario, num_documento, nombre, apellido, fecha_nacimiento, genero, correo, telefono, passwordEncrypted, fk_id_estado, fk_id_tipo], true);

    // Si tuvo conexión a la DB
    if (res.status(200)) {
      console.log("[!] Usuario " + req.body.correo + " modificado con éxito");
      var string = "valido";
      res.redirect('/usuarios/?estado=' + string);
    } else {
      console.log("[!] Ocurrió un error al intentar modificar el usuario " + req.body.correo);
      var string = "error";
      res.redirect('/usuarios/?estado=' + string);
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
    var passwordEncrypted = simpleCryp.encrypt(password)

    sql = "CALL PA_USUARIO_UPDATE_MIPERFIL(:id_usuario, :num_documento, :nombre, :apellido, :fecha_nacimiento, :genero, :correo, :telefono, :password)";
    await settings.OpenConnection(sql, [id_usuario, num_documento, nombre, apellido, fecha_nacimiento, genero, correo, telefono, passwordEncrypted], true);

    // Si tuvo conexión a la DB
    if (res.status(200)) {
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
    var passwordEncrypted = simpleCryp.encrypt(nuevaContrasena)

    sql = "CALL PA_USUARIO_UPDATE_NEWPASSWORD(:id_usuario, :password, :fk_id_estado)";
    await settings.OpenConnection(sql, [value_id_usuario,passwordEncrypted,fk_id_estado], true);

    // Si tuvo conexión a la DB
    if (res.status(200)) {
      console.log("[!] Contraseña del usuario " + value_id_usuario + " cambiada con éxito");
      req.session.isLoggedIn = false;
      res.redirect('/');
      //settings.enviarCorreo('Tu contraseña ha sido cambiada - Maipo Grande', 'usuario_contrasenacambiada');
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
