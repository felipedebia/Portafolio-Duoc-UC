const oracledb = require('oracledb');

config = {
    user: "portafolio",
    password: "portafolio",
    connectString: "localhost:1521/xe"
}

async function Open(sql, binds, autoCommit) {
    let cnn = await oracledb.getConnection(config);
    console.log('[!] Trying to connect to database');
    let result = await cnn.execute(sql, binds, { autoCommit });

    //if(result.status(200)) {

    //} else {

    //}

    console.log('[!] Query executed');
    cnn.release();
    return result;
}

exports.Open = Open;