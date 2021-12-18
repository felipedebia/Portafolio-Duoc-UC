// Oracle
const oracledb = require('oracledb');

configOracle = {
    user: "portafoliofinal10",
    password: "portafoliofinal10",
    connectString: "localhost:1521/xe"
}

// Abrir conexión desde web
async function OpenConnection(sql, binds, autoCommit) {
    let cnn = await oracledb.getConnection(configOracle);
    let result = await cnn.execute(sql, binds, { autoCommit });
    cnn.release();
    return result;
}

// Abrir conexión desde app movil
async function Open(sql, binds) {
    try {
        cnn = await oracledb.getConnection(configOracle);

        result = await cnn.execute(sql, binds);
    } catch (err) {
        console.error(err);
    } finally {
        if (cnn) {
            try {
                await cnn.close();
                return result;

            } catch (err) {
                console.error(err);
            }
        }
    }
}

// Contraseña
const { encriptar, desencriptar } = require('../helpers.js/encriptacion');

// Correos
var ejs = require("ejs");
var fs = require("fs");

const nodemailer = require("nodemailer");

const user_name = 'portafolioduocuc.2021@gmail.com';
const refresh_token = '1//04GHr44CHL41_CgYIARAAGAQSNwF-L9IrhGwSsXViQlhohHKQChDDlW3hSGZkpNUfpUpHh0thVi-qpsGxBUmI_Vc9-d2BatvFVRQ';
const access_token = 'ya29.a0ARrdaM-IDdPGNNoaOEvLi5DSn79XeHVTWoqm6WUFeWd88l0buvQiDfYwkuervSgEibO9ls_uRwgSU_aHv7M-Dkqm7DBV2KLB6pd_mpMiLslZ2LET6XzfYh3VW1vV3hMfrkU7FNLNXqe4te09wS_IYma84ZM3';
const client_id = '784728793947-reri9bq7th9gra757q28ujsdcfrt2d06.apps.googleusercontent.com';
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
    
    ejs.renderFile(process.cwd() + templateDir + templateName + ".ejs", { data: parametrosSchema }, function (err, data) {
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
            transporter.sendMail(mailOptions, function(err, info) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Correo electrónico enviado con éxito: ' + info.response);
                }
            });
        }
        
    });
}

exports.OpenConnection = OpenConnection;
exports.Open = Open;
exports.enviarCorreo = enviarCorreo;

