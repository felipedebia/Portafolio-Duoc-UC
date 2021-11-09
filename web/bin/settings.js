var DEBUG = (function() {
    var timestamp = function() {};
    timestamp.toString = function() {
        return "[" + (new Date).toLocaleTimeString() + "]";    
    };

    return {
        log: console.log.bind(console, '%s', timestamp)
    }
})();


// Oracle
const oracledb = require('oracledb');

configOracle = {
    user: "portafoliofinal7",
    password: "portafoliofinal7",
    connectString: "localhost:1521/xe"
}

async function OpenConnection(sql, binds, autoCommit) {
    DEBUG.log('\x1b[36m', '[!] Trying to connect to database');
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

const email_to = 'fabyold@gmail.com';

exports.OpenConnection = OpenConnection;