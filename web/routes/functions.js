// Importaciones
const request = require('request');

// Función API ListarUsuarios
async function requestApiListarUsuarios() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_usuarios/listarUsuarios', function (error, response, body) {
			if (error) console.log("error");
				importedJSON = JSON.parse(body);
				console.log('\x1b[37m','[!] requestApiListarUsuarios cargado');
				return resolve(importedJSON);
		});
	});
};

var listarUsuarios = requestApiListarUsuarios();


// Función API ListarContratos
async function requestApiListarContratos() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_contratos/listarContratos', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				console.log('\x1b[37m','[!] requestApiListarContratos cargado');
				return resolve(importedJSON);
		});
	});
};

var listarContratos = requestApiListarContratos();


// Función API ListarSubastasFrutas
async function requestApiListarSubastasFrutas() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_subastas/listarSubastasFrutas', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				console.log('\x1b[37m','[!] requestApiListarSubastasFrutas cargado');
				return resolve(importedJSON);
		});
	});
};

var ListarSubastasFrutas = requestApiListarSubastasFrutas();


// Función API ListarSubastasTransportes
async function requestApiListarSubastasTransportes() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_subastas/listarSubastasTransportes', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				console.log('\x1b[37m','[!] requestApiListarSubastasTransportes cargado');
				return resolve(importedJSON);
		});
	});
};

var ListarSubastasTransportes = requestApiListarSubastasTransportes();


// Función API ListarOrdenesBodegas
async function requestApiListarOrdenesBodegas() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_ordenes/listarOrdenesBodegas', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				console.log('\x1b[37m','[!] requestApiListarOrdenesBodegas cargado');
				return resolve(importedJSON);
		});
	});
};

var ListarOrdenesBodegas = requestApiListarOrdenesBodegas();


// Función API ListarOrdenesTransportes
async function requestApiListarOrdenesTransportes() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_ordenes/listarOrdenesTransportes', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				console.log('\x1b[37m','[!] requestApiListarOrdenesTransportes cargado');
				return resolve(importedJSON);
		});
	});
};

var ListarOrdenesTransportes = requestApiListarOrdenesTransportes();


// Función API ListarFrutas
async function requestApiListarFrutas() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_frutas/listarFrutas', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				console.log('\x1b[37m','[!] requestApiListarFrutas cargado');
				return resolve(importedJSON);
		});
	});
};

var ListarFrutas = requestApiListarFrutas();


// Función API ListarPedidos
async function requestApiListarPedidos() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_pedidos/listarPedidos', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				console.log('\x1b[37m','[!] requestApiListarPedidos cargado');
				return resolve(importedJSON);
		});
	});
};

var ListarPedidos = requestApiListarPedidos();


// Función API ListarOfertasProductores
async function requestApiListarOfertasProductores() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_ofertas/listarOfertasProductores', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				console.log('\x1b[37m','[!] requestApiListarOfertasProductores cargado');
				return resolve(importedJSON);
		});
	});
};

var ListarOfertasProductores = requestApiListarOfertasProductores();


// Función API ListarOfertasTransportes
async function requestApiListarOfertasTransportes() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_ofertas/listarOfertasTransportes', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				console.log('\x1b[37m','[!] requestApiListarOfertasTransportes cargado');
				return resolve(importedJSON);
		});
	});
};

var ListarOfertasTransportes = requestApiListarOfertasTransportes();


// Función API ListarVentas
async function requestApiListarVentas() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_ventas/listarVentas', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				console.log('\x1b[37m','[!] requestApiListarVentas cargado');
				return resolve(importedJSON);
		});
	});
};

var ListarVentas = requestApiListarVentas();


// Función API ListarPaises
async function requestApiListarPaises() {
    return new Promise(function(resolve, reject) {
        request('http://localhost:3000/api_extras/listarPaises', function(error, response, body) {
            if (error) return reject(error);
            importedJSON = JSON.parse(body);
            console.log('\x1b[37m', '[!] requestApiListarPaises cargado');
            return resolve(importedJSON);
        });
    });
};
var ListarPaises = requestApiListarPaises();


// Función API ListarCiudades
async function requestApiListarCiudades() {
    return new Promise(function(resolve, reject) {
        request('http://localhost:3000/api_extras/listarCiudades', function(error, response, body) {
            if (error) return reject(error);
            importedJSON = JSON.parse(body);
            console.log('\x1b[37m', '[!] requestApiListarCiudades cargado');
            return resolve(importedJSON);
        });
    });
};
var ListarCiudades = requestApiListarCiudades();


// Función API ListarCalidadesFrutas
async function requestApiListarCalidadesFrutas() {
    return new Promise(function(resolve, reject) {
        request('http://localhost:3000/api_extras/listarCalidadesFrutas', function(error, response, body) {
            if (error) return reject(error);
            importedJSON = JSON.parse(body);
            console.log('\x1b[37m', '[!] requestApiListarCalidadesFrutas cargado en memoria');
            return resolve(importedJSON);
        });
    });
};
var listarCalidadesFrutas = requestApiListarCalidadesFrutas();


// Función API ListarPedidoDetalles
async function requestApiListarPedidoDetalles() {
    return new Promise(function(resolve, reject) {
        request('http://localhost:3000/api_pedidos/listarPedidoDetalles', function(error, response, body) {
            if (error) return reject(error);
            importedJSON = JSON.parse(body);
            console.log('\x1b[37m', '[!] requestApiListarPedidoDetalles cargado en memoria');
            return resolve(importedJSON);
        });
    });
};
var ListarPedidoDetalles = requestApiListarPedidoDetalles();


module.exports ={
	'requestApiListarUsuarios': requestApiListarUsuarios,
	'requestApiListarContratos': requestApiListarContratos,
	'requestApiListarSubastasFrutas': requestApiListarSubastasFrutas,
	'requestApiListarSubastasTransportes': requestApiListarSubastasTransportes,
	'requestApiListarOrdenesBodegas': requestApiListarOrdenesBodegas,
	'requestApiListarOrdenesTransportes': requestApiListarOrdenesTransportes,
	'requestApiListarFrutas': requestApiListarFrutas,
    'requestApiListarPedidos': requestApiListarPedidos,
	'requestApiListarOfertasProductores': requestApiListarOfertasProductores,
	'requestApiListarOfertasTransportes': requestApiListarOfertasTransportes,
	'requestApiListarVentas': requestApiListarVentas,
    'requestApiListarPaises': requestApiListarPaises,
    'requestApiListarCiudades': requestApiListarCiudades,
	'requestApiListarCalidadesFrutas': requestApiListarCalidadesFrutas,
    'requestApiListarPedidoDetalles': requestApiListarPedidoDetalles
}