// Oracle
const oracledb = require('oracledb');

configOracle = {
    user: "portafoliofinal9",
    password: "portafoliofinal9",
    connectString: "localhost:1521/xe"
}

async function OpenConnection(sql, binds, autoCommit) {
    let cnn = await oracledb.getConnection(configOracle);
    let result = await cnn.execute(sql, binds, { autoCommit });
    cnn.release();
    return result;
}

// Contraseña
const { encriptar, desencriptar } = require('../helpers.js/encriptacion');

// Correos
var ejs = require("ejs");
var fs = require("fs");

const nodemailer = require("nodemailer");

const user_name     = 'portafolioduocuc.2021@gmail.com';
const refresh_token = '1//047CAvJ7HXcrkCgYIARAAGAQSNwF-L9IrQ85dVffnnk6K9IvQFAmMYZ5-fXrAexH68q7FhsOEeh_aZY-35G7LyDXYx4JN_QNvGLQ';
const access_token  = 'ya29.a0ARrdaM_VvHp5fuzNI-PdGvFpcPDqLLFlTkz2fxSzTHMqu0htX4PoBRxkb3_fIHikXJjwLD5MTbEdMfA-K3u79GC7EjyBhm_7uZJAwy2NNlxs9mp4iJYOHsgxjX3hqdgY_6y24mY4Zojh-UbCQtyqfRqFPZua';
const client_id     = '784728793947-our04m9d571mfpck2kcvi3i2t36ft78j.apps.googleusercontent.com';
const client_secret = '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';
const templateDir = '/views/correo/';

let transporter = nodemailer

.createTransport({
    service: 'Gmail',
    auth: {
        type: 'OAuth2',
        clientId: client_id,
        clientSecret: client_secret
    }
});

transporter.on('token', token => {
    //console.log('A new access token was generated');
    //console.log('User: %s', token.user);
    //console.log('Access Token: %s', token.accessToken);
    //console.log('Expires: %s', new Date(token.expires));
});

// setup e-mail data with unicode symbols

async function enviarCorreo(tema, templateName) {

    if (templateName == 'usuario_registro') {

        //Con esto tomamos el ultimo registro en la tabla usuario
        sql = "SELECT correo, password FROM (SELECT * FROM usuario ORDER BY id_usuario DESC ) WHERE rownum = 1";
        result = await OpenConnection(sql, [], true);

        // Desencriptamos la contraseña para mostrarla en el correo
        var passwordDecrypted = desencriptar(result.rows[0][1])

        var parametrosSchema = [
            {
                correo: result.rows[0][0],
                password: passwordDecrypted
            }
        ];

    }
    
    ejs.renderFile(process.cwd() + templateDir + templateName + ".ejs", {data: parametrosSchema}, function (err, data) {
        if (err) {
            console.log(err);
        } else {

            let mailOptions = {

                from    : user_name,
                to      : result.rows[0],
                subject : tema,
                html    : data,
        
                auth : {
                    user         : user_name,
                    refreshToken : refresh_token,
                    accessToken  : access_token,
                    expires      : 1494388182480
                }
            };

            //console.log("html data ======================>", mailOptions.html);
            transporter.sendMail(mailOptions, function (err, info) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(parametrosSchema)
                    console.log('Correo electrónico enviado con éxito: ' + info.response);
                }
            });
        }
        
    });
}

exports.OpenConnection = OpenConnection;
exports.enviarCorreo = enviarCorreo;

