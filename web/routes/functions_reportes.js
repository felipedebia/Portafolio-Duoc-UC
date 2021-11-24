// Importaciones
const request = require('request');
const settings = require('../bin/settings');

// FUNCIONES


//Funcion API TotalSeguros
async function TotalSeguros() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_reportes/totalSeguros', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				return resolve(importedJSON);
		});
	});
};

var totalSeguros = TotalSeguros();


//Funcion API TotalFruta de reportes
async function TotalFrutas() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_reportes/totalFrutas', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				return resolve(importedJSON);
		});
	});
};

var totalFrutas = TotalFrutas();

//Funcion API TotalUsuario de reportes
async function TotalUsuarios() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_reportes/totalUsuarios', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				return resolve(importedJSON);
		});
	});
};

var totalUsuarios = TotalUsuarios();

//Funcion API TotalSubastas de reportes
async function TotalSubastas() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_reportes/totalSubastas', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				return resolve(importedJSON);
		});
	});
};

var totalSubastas = TotalSubastas();

//Funcion API TotalVentas de reportes
async function TotalVentas() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_reportes/totalVentas', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				return resolve(importedJSON);
		});
	});
};

var totalVentas = TotalVentas();

//Funcion API VENTAS TOTALES REPORTES
async function VentasTotal() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_reportes/ventasTotal', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				return resolve(importedJSON);
		});
	});
};

var ventasTotal = VentasTotal();


//Funcion API SUBASTAS TOTAL FRUTAS REPORTE
async function RepSubastaF() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_reportes/repSubastaF', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				return resolve(importedJSON);
		});
	});
};

var repSubastaF = RepSubastaF();

//Funcion API subasta fruta activos reporte
async function SubastaFTotalActivos() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_reportes/subastaFTotalActivos', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				return resolve(importedJSON);
		});
	});
};

var subastaFTotalActivos = SubastaFTotalActivos();

//Funcion api subasta fruta inactivos reporte
async function SubastaFTotalInactivos() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_reportes/subastaFTotalInactivos', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				return resolve(importedJSON);
		});
	});
};

var subastaFTotalInactivos = SubastaFTotalInactivos();
//Funcion api subasta fruta por dia reporte
async function TotalSubastasFPD() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_reportes/totalSubastasFPD', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				return resolve(importedJSON);
		});
	});
};

var totalSubastasFPD = TotalSubastasFPD();
//Funcion api subasta fruta por MES reporte
async function TotalSubastasFPM() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_reportes/totalSubastasFPM', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				return resolve(importedJSON);
		});
	});
};

var totalSubastasFPM = TotalSubastasFPM();
//Funcion api subasta fruta por AÑO reporte
async function TotalSubastasFPA() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_reportes/totalSubastasFPA', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				return resolve(importedJSON);
		});
	});
};

var totalSubastasFPA = TotalSubastasFPA();
//funcion api subastas trasporte total reporte
async function SubastaTTotal() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_reportes/subastaTTotal', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				return resolve(importedJSON);
		});
	});
};

var subastaTTotal = SubastaTTotal();
//funcion api subastas trasporte activo reporte
async function SubastaTActivo() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_reportes/subastaTActivo', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				return resolve(importedJSON);
		});
	});
};

var subastaTActivo = SubastaTActivo();
//funciones api subastas transporte inactivos reporte
async function SubastaTInactivo() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_reportes/subastaTInactivo', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				return resolve(importedJSON);
		});
	});
};

var subastaTInactivo = SubastaTInactivo();
//funciones api subastas transporte por dia reporte
async function TotalSubastasTPD() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_reportes/totalSubastasTPD', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				return resolve(importedJSON);
		});
	});
};

var totalSubastasTPD = TotalSubastasTPD();
//funciones api subastas transporte por mes reporte
async function TotalSubastasTPM() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_reportes/totalSubastasTPM', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				return resolve(importedJSON);
		});
	});
};

var totalSubastasTPM = TotalSubastasTPM();
//funciones api subastas transporte por mes reporte
async function TotalSubastasTPA() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_reportes/totalSubastasTPA', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				return resolve(importedJSON);
		});
	});
};

var totalSubastasTPA = TotalSubastasTPA();

//funciones api Total productos reporte
async function TotalProductos() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_reportes/totalProductos', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				return resolve(importedJSON);
		});
	});
};

var totalProductos = TotalProductos();

//funciones api Total productosA reporte
async function TotalProductosA() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_reportes/totalProductosA', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				return resolve(importedJSON);
		});
	});
};

var totalProductosA = TotalProductosA();
//funciones api Total productosI reporte
async function TotalProductosI() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_reportes/totalProductosI', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				return resolve(importedJSON);
		});
	});
};

var totalProductosI = TotalProductosI();

//funciones api Total productos primera calidad reporte
async function TotalProductosPC() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_reportes/totalProductosPC', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				return resolve(importedJSON);
		});
	});
};

var totalProductosPC = TotalProductosPC();

//funciones api Total productos segunda calidad reporte
async function TotalProductosSC() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_reportes/totalProductosSC', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				return resolve(importedJSON);
		});
	});
};

var totalProductosSC = TotalProductosSC();
//funciones api Total productos tercera calidad reporte
async function TotalProductosTC() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_reportes/totalProductosTC', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				return resolve(importedJSON);
		});
	});
};

var totalProductosTC = TotalProductosTC();
//funciones api Total productos cuarta calidad reporte
async function TotalProductosCC() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_reportes/totalProductosCC', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				return resolve(importedJSON);
		});
	});
};

var totalProductosCC = TotalProductosCC();

//funciones api Total productos quinta calidad reporte
async function TotalProductosQC() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_reportes/totalProductosQC', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				return resolve(importedJSON);
		});
	});
};

var totalProductosQC = TotalProductosQC();
//funciones api Total productos DEL DIA reporte
async function TotalProductosPD() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_reportes/totalProductosPD', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				return resolve(importedJSON);
		});
	});
};

var totalProductosPD = TotalProductosPD();
//funciones api Total productos DEL MES reporte
async function TotalProductosPM() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_reportes/totalProductosPM', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				return resolve(importedJSON);
		});
	});
};

var totalProductosPM = TotalProductosPM();
//funciones api Total productos DEL AÑO reporte
async function TotalProductosPA() {
	return new Promise(function(resolve, reject) {
		request('http://localhost:3000/api_reportes/totalProductosPA', function (error, response, body) {
			if (error) return reject(error);
				importedJSON = JSON.parse(body);
				return resolve(importedJSON);
		});
	});
};

var totalProductosPA = TotalProductosPA();


module.exports ={
	'TotalSeguros':TotalSeguros,
	'TotalFrutas':TotalFrutas,
	'TotalUsuarios':TotalUsuarios,
	'TotalSubastas':TotalSubastas,
	'TotalVentas': TotalVentas,
	'VentasTotal':VentasTotal,
	'RepSubastaF':RepSubastaF,
	'SubastaFTotalActivos':SubastaFTotalActivos,
	'SubastaFTotalInactivos':SubastaFTotalInactivos,
    'TotalSubastasFPD':TotalSubastasFPD,
    'TotalSubastasFPM':TotalSubastasFPM,
    'TotalSubastasFPA':TotalSubastasFPA,
	'SubastaTTotal':SubastaTTotal,
	'SubastaTActivo': SubastaTActivo,
	'SubastaTInactivo':SubastaTInactivo,
	'TotalSubastasTPD':TotalSubastasTPD,
	'TotalSubastasTPM':TotalSubastasTPM,
    'TotalSubastasTPA':TotalSubastasTPA,
	'TotalProductos':TotalProductos,
	'TotalProductosA':TotalProductosA,
	'TotalProductosI':TotalProductosI,
	'TotalProductosPC':TotalProductosPC,
	'TotalProductosSC':TotalProductosSC,
	'TotalProductosTC':TotalProductosTC,
	'TotalProductosCC':TotalProductosCC,
	'TotalProductosQC':TotalProductosQC,
	'TotalProductosPD':TotalProductosPD,
	'TotalProductosPM':TotalProductosPM,
	'TotalProductosPA':TotalProductosPA
}