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
- http://localhost:3000/ventas_externas *
- http://localhost:3000/ventas_locales *
- http://localhost:3000/subastas_frutas *
- http://localhost:3000/subastas_transportes *
- http://localhost:3000/frutas *

### Menú Productor

- http://localhost:3000/productos *
- http://localhost:3000/subastas_productor *
- http://localhost:3000/ventas *

### Menú Cliente Externo e Interno *
- http://localhost:3000/pedidos *
- http://localhost:3000/miscompras *

### Menú Transportista
- http://localhost:3000/subastas_transportes *

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
| POST | http://localhost:3000/api_usuarios/crearusuario  | |
| GET  | http://localhost:3000/modificarUsuario/:id_usuario  |  |
| PUT  | http://localhost:3000/api_usuarios/modificarUsuario/:id_usuario  | |
| POST | http://localhost:3000/api_usuarios/desactivarUsuario/:id_usuario  | |
| GET  | http://localhost:3000/api_usuarios/listarUsuarios  | JSON |
| GET  | http://localhost:3000/api_usuarios/listarUsuarios/:id_usuario  | JSON |
| GET  | http://localhost:3000/perfil/:id_usuario  |  |

## CRUD Contrato
| Tipo | URL | Retorna |
| ------------- | ------------- | ------------- |
| GET  | http://localhost:3000/api_contratos/listarContratos  | JSON |
| GET  | http://localhost:3000/api_contratos/listarContratos/:id_contrato  | JSON |
| POST | http://localhost:3000/api_contratos/anularContrato/:id_contrato  | |
| GET  | http://localhost:3000/contrato/:id_contrato  |  |

## CRUD Subasta Frutas
| Tipo | URL | Retorna |
| ------------- | ------------- | ------------- |
| GET  | http://localhost:3000/api_subastas/listarSubastasFrutas  | JSON |
| GET  | http://localhost:3000/api_subastas/listarSubastasFrutas/:id_subastaF  | JSON |
| POST | http://localhost:3000/api_subastas/anularSubastaFruta/:id_subastaF  | |

## CRUD Subasta Transporte
| Tipo | URL | Retorna |
| ------------- | ------------- | ------------- |
| GET  | http://localhost:3000/api_subastas/listarSubastasTransportes  | JSON |
| GET  | http://localhost:3000/api_subastas/listarSubastasTransportes/:id_subastaT  | JSON |
| POST | http://localhost:3000/api_subastas/anularSubastaTransporte/:id_subastaT  | |

## CRUD Fruta
| Tipo | URL | Retorna |
| ------------- | ------------- | ------------- |
| GET  | http://localhost:3000/api_frutas/listarFrutas  | JSON |
| GET  | http://localhost:3000/api_frutas/listarFrutas/:id_fruta  | JSON |
| POST | http://localhost:3000/api_frutas/desactivarFruta/:id_fruta  | |

## CRUD Producto
| Tipo | URL | Retorna |
| ------------- | ------------- | ------------- |
| GET  | http://localhost:3000/api_productos/listarProductos  | JSON |
| GET  | http://localhost:3000/api_productos/listarProductos/:id_producto  | JSON |
| POST | http://localhost:3000/api_productos/eliminarProducto/:id_producto  | |

## CRUD Pedido
| Tipo | URL | Retorna |
| ------------- | ------------- | ------------- |
| GET  | http://localhost:3000/api_pedidos/listarPedidos  | JSON |
| GET  | http://localhost:3000/api_pedidos/listarPedidos/:id_pedido  | JSON |
| POST | http://localhost:3000/api_pedidos/anularPedido/:id_pedido  | |

## CRUD Venta
| Tipo | URL | Retorna |
| ------------- | ------------- | ------------- |
| GET  | http://localhost:3000/api_ventas/listarVentas  | JSON |
| GET  | http://localhost:3000/api_ventas/listarVentas/:id_venta  | JSON |
| POST | http://localhost:3000/api_ventas/anularVenta/:id_venta  | |

## CRUD Orden Bodega
| Tipo | URL | Retorna |
| ------------- | ------------- | ------------- |
| GET  | http://localhost:3000/api_ordenes/listarOrdenesBodegas  | JSON |
| GET  | http://localhost:3000/api_ordenes/listarOrdenesBodegas/:id_ordenB  | JSON |
| POST | http://localhost:3000/api_ordenes/anularOrdenBodega/:id_ordenB  | |

## CRUD Orden Transporte
| Tipo | URL | Retorna |
| ------------- | ------------- | ------------- |
| GET  | http://localhost:3000/api_ordenes/listarOrdenesTransportes  | JSON |
| GET  | http://localhost:3000/api_ordenes/listarOrdenesTransportes/:id_ordenT  | JSON |
| POST | http://localhost:3000/api_ordenes/anularOrdenTransporte/:id_ordenT  | |

## CRUD Oferta Productor
| Tipo | URL | Retorna |
| ------------- | ------------- | ------------- |
| GET  | http://localhost:3000/api_ofertas/listarOfertasProductores  | JSON |
| GET  | http://localhost:3000/api_ofertas/listarOfertasProductores/:id_ofertaP  | JSON |
| POST | http://localhost:3000/api_ofertas/anularOfertaProductor/:id_ofertaP  | |

## CRUD Oferta Transporte
| Tipo | URL | Retorna |
| ------------- | ------------- | ------------- |
| GET  | http://localhost:3000/api_ofertas/listarOfertasTransportes  | JSON |
| GET  | http://localhost:3000/api_ofertas/listarOfertasTransportes/:id_ofertaT  | JSON |
| POST | http://localhost:3000/api_ofertas/anularOfertaTransporte/:id_ofertaT  | |