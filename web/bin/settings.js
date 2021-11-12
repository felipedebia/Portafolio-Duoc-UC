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
const nodemailer = require("nodemailer");

const user_name     = 'portafolioduocuc.2021@gmail.com';
const refresh_token = '1//04UtqSgmtbZURCgYIARAAGAQSNwF-L9IrFqyitF4CMuIaGiLrMbwXPOu3U9mE4lhTL_dVeF2iJ42osumrBG9oT0z7qtMtIhMK0Pw';
const access_token  = 'ya29.a0ARrdaM8LYTkZ5mXC7Ll7c8RjkNwA0HJLlNreDBYRqxshaSTcyxXm_nWv3I7YNC5CvcswUVO9Pe_ducNeXuzVKJ_9kW5zxSWnIPXEa5RT7xwf9Bf8SAz6420R-EykY8RUrVP_uigzFDeWf2dZisNm-bTMlkcD';
const client_id     = '784728793947-u496rgrjf062e7nlfe649pj70u6q7bid.apps.googleusercontent.com';
const client_secret = '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';

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
    console.log('A new access token was generated');
    console.log('User: %s', token.user);
    console.log('Access Token: %s', token.accessToken);
    console.log('Expires: %s', new Date(token.expires));
});

// setup e-mail data with unicode symbols

function enviarCorreo(para, tema, html) {
    let mailOptions = {
        from    : user_name, // sender address
        to      : para, // list of receivers
        subject : tema, // Subject line
        html    : html, // html body
    
        auth : {
            user         : user_name,
            refreshToken : refresh_token,
            accessToken  : access_token,
            expires      : 1494388182480
        }
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Correo enviado con exito: ' + info.response);
    });

  }

exports.OpenConnection = OpenConnection;
exports.enviarCorreo = enviarCorreo;