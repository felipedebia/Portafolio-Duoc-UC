var DEBUG = (function(){
    var timestamp = function(){};
    timestamp.toString = function(){
        return "[" + (new Date).toLocaleTimeString() + "]";    
    };

    return {
        log: console.log.bind(console, '%s', timestamp)
    }
})();

const oracledb = require('oracledb');

config = {
    user: "portafoliofinal4",
    password: "portafoliofinal4",
    connectString: "localhost:1521/xe"
}

async function Open(sql, binds, autoCommit) {
    DEBUG.log('\x1b[36m','[!] Trying to connect to database');
    let cnn = await oracledb.getConnection(config);
    let result = await cnn.execute(sql, binds, { autoCommit });
    cnn.release();
    return result;
}

exports.Open = Open;