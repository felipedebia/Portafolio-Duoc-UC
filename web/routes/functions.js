// Importaciones
const request = require('request');

// Función API ListarUsuarios
async function requestApiListarUsuarios() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_usuarios/listarUsuarios', function (error, response, body) {
			if (error) console.log("error");
				importedJSON = JSON.parse(body);
				console.log('\x1b[37m','[!] requestApiListarUsuarios cargado en memoria');
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
				console.log('\x1b[37m','[!] requestApiListarContratos cargado en memoria');
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
				console.log('\x1b[37m','[!] requestApiListarSubastasFrutas cargado en memoria');
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
				console.log('\x1b[37m','[!] requestApiListarSubastasTransportes cargado en memoria');
				return resolve(importedJSON);
		});
	});
};

var ListarSubastasTransportes = requestApiListarSubastasTransportes();


// Función API ListarFrutas
async function requestApiListarFrutas() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_frutas/listarFrutas', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				console.log('\x1b[37m','[!] requestApiListarFrutas cargado en memoria');
				return resolve(importedJSON);
		});
	});
};

var ListarFrutas = requestApiListarFrutas();


module.exports ={
    listarUsuarios, 
	listarContratos, 
	ListarSubastasFrutas, 
	ListarSubastasTransportes, 
	ListarFrutas,
	'requestApiListarUsuarios': requestApiListarUsuarios
}