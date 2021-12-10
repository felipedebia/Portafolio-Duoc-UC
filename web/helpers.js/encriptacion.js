const encriptar = (clave = '') => {
    return Buffer.from(clave).toString('base64');
}

const desencriptar = (clave = '') => {

    return Buffer.from(clave, 'base64').toString('ascii');
}

module.exports = {
    encriptar,
    desencriptar

}