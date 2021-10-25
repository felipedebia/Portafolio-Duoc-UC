const oracledb = require('oracledb');

config = {
    user: "portafolio_final1",
    password: "portafolio_final1",
    connectString: "localhost:1521/xe"
}

async function Open(sql, binds, autoCommit) {
    console.log('\x1b[36m','[!] Trying to connect to database');
    let cnn = await oracledb.getConnection(config);
    console.log('\x1b[36m','[!] Connected to Oracle DB');
    let result = await cnn.execute(sql, binds, { autoCommit });
    console.log('\x1b[36m','[!] Query executed');
    cnn.release();
    return result;
}

exports.Open = Open;