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

// Correos
var ejs = require("ejs");
var fs = require("fs");

const nodemailer = require("nodemailer");

const user_name     = 'portafolioduocuc.2021@gmail.com';
const refresh_token = '1//04jfKHu99eTJVCgYIARAAGAQSNwF-L9IrDVIIvdf_rZaZvC1_YTL5oustxPzBn_7PFoCE4MbbI_jZfmtmvvF2RGU3Th3baPBq98g';
const access_token  = 'ya29.a0ARrdaM8ZLecefc0_Ij2Qi38JpKaz2g4PjDsF6dP4vOHVqlWNCRB0lZWfldlYrH8EjrLIL9NMM34zLfkdT53vX8RMpqDVCfDEB5my1Go2znkqJSUbv6SMmb7zxIrps8iHW7ZE3DOsMrM6JCAmCCeCyFewkjHz';
const client_id     = '784728793947-uibaj8l0k6j102lh1h4eeikboadusujb.apps.googleusercontent.com';
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

        var parametrosSchema = {
            "correo": result.rows[0],
            "password": result.rows[1]
        }

    }
    
    ejs.renderFile(process.cwd() + templateDir + templateName + ".ejs", parametrosSchema, function (err, data) {
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
                    console.log('Correo electrónico enviado con éxito: ' + info.response);
                }
            });
        }
        
    });
}

exports.OpenConnection = OpenConnection;
exports.enviarCorreo = enviarCorreo;

