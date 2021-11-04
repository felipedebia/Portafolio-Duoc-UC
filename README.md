# Portafolio

NodeJS - Ejs - OracleDB - Express.js

# Instalación

Instalar Github Bash

Ejecutamos estos comandos en la carpeta raíz del proyecto
- npm install -g nodemon
- npm install express-session

Ejecutamos este comando en la carpeta web
- npm install

Configurar web/bin/configdb.js con sus datos de Oracle

Iniciar node en la carpeta web
- nodemon start

## Rutas principales
- http://localhost:3000/
- http://localhost:3000/plantilla
- http://localhost:3000/plantilla_con_tabla
- http://localhost:3000/miperfil

* PENDIENTE

### Menú Administrador
- http://localhost:3000/usuarios
- http://localhost:3000/contratos *
- http://localhost:3000/ordenes *
- http://localhost:3000/ventas *
- http://localhost:3000/subastas_fruta *
- http://localhost:3000/subastas_transporte *
- http://localhost:3000/frutas *

### Menú Productor

- http://localhost:3000/productos *
- http://localhost:3000/subastas_productor *
- http://localhost:3000/ventas *

### Menú Cliente Externo e Interno *
- http://localhost:3000/pedidos *
- http://localhost:3000/miscompras *

### Menú Transportista
- http://localhost:3000/subastas_transporte *

### Menú Consultor
- http://localhost:3000/reportes *
- http://localhost:3000/soporte * 

## Tipo Usuario
- 1 Administrador
- 2 Transportista
- 3 Cliente externo
- 4 Cliente interno
- 5 Productor
- 6 Consultor

## Tipo Contrato
- 1 Productor
- 2 Cliente interno
- 3 Cliente Externo
- 4 Transportista

## Tipo Pedido
- 1 Local 
- 2 Externo

## Tipo Venta
- 1 Local 
- 2 Externo

## Tipo Pago
- 1 Productor
- 2 Transporte
- 3 Cliente
- 4 Seguro

## Fruta Calidad
- 1 Primera calidad
- 2 Segunda calidad
- 3 Tercera calidad
- 4 Cuarta calidad
- 5 Quinta calidad

## Género
- 1 Femenino
- 2 Masculino

## Estado usuario - contrato - pedido - subasta - venta - orden - oferta
- 1 Activado
- 2 Desactivado

## CRUD Usuario
| Tipo | URL | Retorna |
| ------------- | ------------- | ------------- |
| GET  | http://localhost:3000/usuarios  |  |
| POST | http://localhost:3000/api_usuarios/crearusuario  | |
| GET  | http://localhost:3000/modificarUsuario/:id_usuario  |  |
| POST | http://localhost:3000/api_usuarios/modificarUsuario/:id_usuario  | |
| POST | http://localhost:3000/api_usuarios/modificarMiPerfil/:id_usuario  | |
| POST | http://localhost:3000/api_usuarios/desactivarUsuario/:id_usuario  | |
| GET  | http://localhost:3000/api_usuarios/listarUsuarios  | JSON |
| GET  | http://localhost:3000/api_usuarios/listarUsuarios/:id_usuario  | JSON |
| GET  | http://localhost:3000/perfil/:id_usuario  |  |
| GET  | http://localhost:3000/miperfil/:id_usuario  |  |

## CRUD Contrato
| Tipo | URL | Retorna |
| ------------- | ------------- | ------------- |
| GET  | http://localhost:3000/contratos  |  |
| GET  | http://localhost:3000/api_contratos/listarContratos  | JSON |
| GET  | http://localhost:3000/modificarContrato/:id_contrato  |  |
| POST | http://localhost:3000/api_contratos/anularContrato/:id_contrato  | |
| GET  | http://localhost:3000/contrato/:id_contrato  |  |

## CRUD Fruta
| Tipo | URL | Retorna |
| ------------- | ------------- | ------------- |
| GET  | http://localhost:3000/frutas  |  |
| GET  | http://localhost:3000/api_frutas/listarFrutas  | JSON |
| GET  | http://localhost:3000/modificarFruta/:id_fruta  |  |
| POST | http://localhost:3000/api_frutas/desactivarFruta/:id_fruta  | |
| GET  | http://localhost:3000/fruta/:id_fruta  |  |

## CRUD Producto
| Tipo | URL | Retorna |
| ------------- | ------------- | ------------- |
| GET  | http://localhost:3000/productos  |  |
| GET  | http://localhost:3000/api_productos/listarProductos  | JSON |
| GET  | http://localhost:3000/modificarProducto/:id_producto  |  |
| POST | http://localhost:3000/api_productos/eliminarProducto/:id_producto  | |
| GET  | http://localhost:3000/producto/:id_producto  |  |

## CRUD Pago
| Tipo | URL | Retorna |
| ------------- | ------------- | ------------- |
| GET  | http://localhost:3000/pagos  |  |
| GET  | http://localhost:3000/api_pagos/listarPagos  | JSON |
| GET  | http://localhost:3000/modificarPago/:id_pago  |  |
| POST | http://localhost:3000/api_pagos/eliminarPago/:id_pago  | |
| GET  | http://localhost:3000/pago/:id_pago  |  |

## CRUD Pedido
| Tipo | URL | Retorna |
| ------------- | ------------- | ------------- |
| GET  | http://localhost:3000/api_pedidos/listarPedidos  | JSON |
| GET  | http://localhost:3000/modificarPedido/:id_pedido  |  |
| POST | http://localhost:3000/api_pedidos/anularPedido/:id_pedido  | |
| GET  | http://localhost:3000/pedido/:id_pedido  |  |

## CRUD Venta
| Tipo | URL | Retorna |
| ------------- | ------------- | ------------- |
| GET  | http://localhost:3000/ventas  |  |
| GET  | http://localhost:3000/api_ventas/listarVentas  | JSON |
| GET  | http://localhost:3000/modificarVenta/:id_venta  |  |
| POST | http://localhost:3000/api_ventas/anularVenta/:id_venta  | |
| GET  | http://localhost:3000/venta/:id_venta  |  |

## CRUD Informe
| Tipo | URL | Retorna |
| ------------- | ------------- | ------------- |
| GET  | http://localhost:3000/informes  |  |
| GET  | http://localhost:3000/api_informes/listarInformes  | JSON |
| GET  | http://localhost:3000/modificarInforme/:id_informe  |  |
| POST | http://localhost:3000/api_informes/anularInforme/:id_informe  | |
| GET  | http://localhost:3000/informe/:id_venta  |  |

## CRUD Subasta Frutas
| Tipo | URL | Retorna |
| ------------- | ------------- | ------------- |
| GET  | http://localhost:3000/subastas_frutas  |  |
| GET  | http://localhost:3000/api_subastas/listarSubastasFrutas  | JSON |
| GET  | http://localhost:3000/modificarSubastaFruta/:id_subastaF  |  |
| POST | http://localhost:3000/api_subastas/anularSubastaFruta/:id_subastaF  | |
| GET  | http://localhost:3000/subasta_fruta/:id_subastaF  |  |

## CRUD Subasta Transporte
| Tipo | URL | Retorna |
| ------------- | ------------- | ------------- |
| GET  | http://localhost:3000/subastas_transportes  |  |
| GET  | http://localhost:3000/api_subastas/listarSubastasTransportes  | JSON |
| GET  | http://localhost:3000/modificarSubastaTransporte/:id_subastaT  |  |
| POST | http://localhost:3000/api_subastas/anularSubastaTransporte/:id_subastaT  | |
| GET  | http://localhost:3000/subasta_transporte/:id_subastaT  |  |

## CRUD Orden Bodega
| Tipo | URL | Retorna |
| ------------- | ------------- | ------------- |
| GET  | http://localhost:3000/ordenes_bodegas  |  |
| GET  | http://localhost:3000/api_ordenes/listarOrdenesBodegas  | JSON |
| GET  | http://localhost:3000/modificarOrdenBodega/:id_ordenB  |  |
| POST | http://localhost:3000/api_ordenes/anularOrdenBodega/:id_ordenB  | |
| GET  | http://localhost:3000/orden_bodega/:id_ordenB  |  |

## CRUD Orden Transporte
| Tipo | URL | Retorna |
| ------------- | ------------- | ------------- |
| GET  | http://localhost:3000/ordenes_transportes  |  |
| GET  | http://localhost:3000/api_ordenes/listarOrdenesTransportes  | JSON |
| GET  | http://localhost:3000/modificarOrdenTransporte/:id_ordenT  |  |
| POST | http://localhost:3000/api_ordenes/anularOrdenTransporte/:id_ordenT  | |
| GET  | http://localhost:3000/orden_transporte/:id_ordenT  |  |

## CRUD Oferta Productor
| Tipo | URL | Retorna |
| ------------- | ------------- | ------------- |
| GET  | http://localhost:3000/ofertas_productores  |  |
| GET  | http://localhost:3000/api_ofertas/listarOfertasProductores  | JSON |
| GET  | http://localhost:3000/modificarOfertaProductor/:id_ofertaP  |  |
| POST | http://localhost:3000/api_ofertas/anularOfertaProductor/:id_ofertaP  | |
| GET  | http://localhost:3000/oferta_productor/:id_ofertaP  |  |

## CRUD Oferta Transporte
| Tipo | URL | Retorna |
| ------------- | ------------- | ------------- |
| GET  | http://localhost:3000/ofertas_transportes  |  |
| GET  | http://localhost:3000/api_ofertas/listarOfertasTransportes  | JSON |
| GET  | http://localhost:3000/modificarOfertaTransporte/:id_ofertaT  |  |
| POST | http://localhost:3000/api_ofertas/anularOfertaTransporte/:id_ofertaT  | |
| GET  | http://localhost:3000/oferta_transporte/:id_ofertaT  |  |