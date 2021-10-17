const oracledb = require('oracledb');

config = {
    user: "portafolio",
    password: "portafolio",
    connectString: "localhost:1521/xe"
}

async function Open(sql, binds, autoCommit) {
    let cnn = await oracledb.getConnection(config);
    let result = await cnn.execute(sql, binds, { autoCommit });
    cnn.release();
    return result;
}

exports.Open = Open;