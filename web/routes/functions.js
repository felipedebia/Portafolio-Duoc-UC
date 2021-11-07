// Importaciones
const request = require('request');

// FUNCIONES

function obtenerFechaActual() {
	var fecha = new Date(); //Fecha actual
	var mes = fecha.getMonth() + 1; //obteniendo mes
	var dia = fecha.getDate(); //obteniendo dia
	var ano = fecha.getFullYear(); //obteniendo año
	if (dia < 10)
		dia = '0' + dia; //agrega cero si el menor de 10
	if (mes < 10)
		mes = '0' + mes //agrega cero si el menor de 10

	var result = ano + "-" + mes + "-" + dia;
	return result;
}

function agregarMesAFecha(date, months) {
    var d = date.getDate();
    date.setMonth(date.getMonth() + +months);
    if (date.getDate() != d) {
      date.setDate(0);
    }
    return date;
}


// Función API ListarUsuarios
async function ListarUsuarios() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_usuarios/listarUsuarios', function (error, response, body) {
			if (error) console.log("error");
				importedJSON = JSON.parse(body);
				console.log('\x1b[37m','[!] ListarUsuarios cargado');
				return resolve(importedJSON);
		});
	});
};

var listarUsuarios = ListarUsuarios();


// Función API ListarContratos
async function ListarContratos() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_contratos/listarContratos', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				console.log('\x1b[37m','[!] ListarContratos cargado');
				return resolve(importedJSON);
		});
	});
};

var listarContratos = ListarContratos();


// Función API ListarSubastasFrutas
async function ListarSubastasFrutas() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_subastas/listarSubastasFrutas', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				console.log('\x1b[37m','[!] ListarSubastasFrutas cargado');
				return resolve(importedJSON);
		});
	});
};

var listarSubastasFrutas = ListarSubastasFrutas();


// Función API ListarSubastasTransportes
async function ListarSubastasTransportes() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_subastas/listarSubastasTransportes', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				console.log('\x1b[37m','[!] ListarSubastasTransportes cargado');
				return resolve(importedJSON);
		});
	});
};

var listarSubastasTransportes = ListarSubastasTransportes();


// Función API ListarOrdenesBodegas
async function ListarOrdenesBodegas() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_ordenes/listarOrdenesBodegas', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				console.log('\x1b[37m','[!] ListarOrdenesBodegas cargado');
				return resolve(importedJSON);
		});
	});
};

var listarOrdenesBodegas = ListarOrdenesBodegas();


// Función API ListarOrdenesTransportes
async function ListarOrdenesTransportes() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_ordenes/listarOrdenesTransportes', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				console.log('\x1b[37m','[!] ListarOrdenesTransportes cargado');
				return resolve(importedJSON);
		});
	});
};

var listarOrdenesTransportes = ListarOrdenesTransportes();


// Función API ListarFrutas
async function ListarFrutas() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_frutas/listarFrutas', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				console.log('\x1b[37m','[!] ListarFrutas cargado');
				return resolve(importedJSON);
		});
	});
};

var listarFrutas = ListarFrutas();


// Función API ListarPedidos
async function ListarPedidos() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_pedidos/listarPedidos', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				console.log('\x1b[37m','[!] ListarPedidos cargado');
				return resolve(importedJSON);
		});
	});
};

var listarPedidos = ListarPedidos();


// Función API ListarMisPedidos
async function ListarMisPedidos() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_pedidos/listarMisPedidos', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				console.log('\x1b[37m','[!] ListarMisPedidos cargado');
				return resolve(importedJSON);
		});
	});
};

var listarMisPedidos = ListarMisPedidos();


// Función API ListarOfertasProductores
async function ListarOfertasProductores() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_ofertas/listarOfertasProductores', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				console.log('\x1b[37m','[!] ListarOfertasProductores cargado');
				return resolve(importedJSON);
		});
	});
};

var listarOfertasProductores = ListarOfertasProductores();


// Función API ListarOfertasTransportes
async function ListarOfertasTransportes() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_ofertas/listarOfertasTransportes', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				console.log('\x1b[37m','[!] ListarOfertasTransportes cargado');
				return resolve(importedJSON);
		});
	});
};

var listarOfertasTransportes = ListarOfertasTransportes();


// Función API ListarVentas
async function ListarVentas() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_ventas/listarVentas', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				console.log('\x1b[37m','[!] ListarVentas cargado');
				return resolve(importedJSON);
		});
	});
};

var listarVentas = ListarVentas();


// Función API ListarPaises
async function ListarPaises() {
    return new Promise(function(resolve, reject) {
        request('http://localhost:3000/api_extras/listarPaises', function(error, response, body) {
            if (error) return reject(error);
            importedJSON = JSON.parse(body);
            console.log('\x1b[37m', '[!] ListarPaises cargado');
            return resolve(importedJSON);
        });
    });
};
var listarPaises = ListarPaises();


// Función API ListarCiudades
async function ListarCiudades() {
    return new Promise(function(resolve, reject) {
        request('http://localhost:3000/api_extras/listarCiudades', function(error, response, body) {
            if (error) return reject(error);
            importedJSON = JSON.parse(body);
            console.log('\x1b[37m', '[!] ListarCiudades cargado');
            return resolve(importedJSON);
        });
    });
};
var listarCiudades = ListarCiudades();


// Función API ListarCalidadesFrutas
async function ListarCalidadesFrutas() {
    return new Promise(function(resolve, reject) {
        request('http://localhost:3000/api_extras/listarCalidadesFrutas', function(error, response, body) {
            if (error) return reject(error);
            importedJSON = JSON.parse(body);
            console.log('\x1b[37m', '[!] ListarCalidadesFrutas cargado');
            return resolve(importedJSON);
        });
    });
};
var listarCalidadesFrutas = ListarCalidadesFrutas();


// Función API ListarPedidoDetalles
async function ListarPedidoDetalles() {
    return new Promise(function(resolve, reject) {
        request('http://localhost:3000/api_pedidos/listarPedidoDetalles', function(error, response, body) {
            if (error) return reject(error);
            importedJSON = JSON.parse(body);
            console.log('\x1b[37m', '[!] ListarPedidoDetalles cargado');
            return resolve(importedJSON);
        });
    });
};
var listarPedidoDetalles = ListarPedidoDetalles();


// Función API ListarSeguros
async function ListarSeguros() {
    return new Promise(function(resolve, reject) {
        request('http://localhost:3000/api_seguros/listarSeguros', function(error, response, body) {
            if (error) return reject(error);
            importedJSON = JSON.parse(body);
            console.log('\x1b[37m', '[!] ListarSeguros cargado');
            return resolve(importedJSON);
        });
    });
};
var listarSeguros = ListarSeguros();


module.exports ={
	'obtenerFechaActual': obtenerFechaActual,
	'agregarMesAFecha': agregarMesAFecha,
	'ListarUsuarios': ListarUsuarios,
	'ListarContratos': ListarContratos,
	'ListarSubastasFrutas': ListarSubastasFrutas,
	'ListarSubastasTransportes': ListarSubastasTransportes,
	'ListarOrdenesBodegas': ListarOrdenesBodegas,
	'ListarOrdenesTransportes': ListarOrdenesTransportes,
	'ListarFrutas': ListarFrutas,
    'ListarPedidos': ListarPedidos,
	'ListarMisPedidos': ListarMisPedidos,
	'ListarOfertasProductores': ListarOfertasProductores,
	'ListarOfertasTransportes': ListarOfertasTransportes,
	'ListarVentas': ListarVentas,
    'ListarPaises': ListarPaises,
    'ListarCiudades': ListarCiudades,
	'ListarCalidadesFrutas': ListarCalidadesFrutas,
    'ListarPedidoDetalles': ListarPedidoDetalles,
	'ListarSeguros': ListarSeguros
}