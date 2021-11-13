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

## Flujo: 

- Cliente hace pedido y luego completa detalle_pedido
- Administrador hace subasta de frutas
- Productores subes sus ofertas de productos
- Sistema elije mejor oferta en base a precio calidad
- Administrador hace subasta de transporte
- Transportistas suben sus ofertas de transporte
- Administrador elije mejor oferta de transporte
- Administrador completa datos de detalle_venta
- Si administrador acepta negociación con cliente externo, se cambia estado de venta, se crea orden transporte, orden de bodega y se notifica a productores que deben enviar sus productos. Si se rechaza la negociacón se cancela la venta.
- El sistema debe reconocer cuando llegan productos a bodega, se debe marcar como recepcionado en bodega, en bodega se pone "Revisión de producto"
- Luego de la revisión, se genera informe (reporte_bodega) y el estado cambia a "Producto revisado" 
- Esperar que llegue el transportista, cuando llegue cambiar estado a "Producto entregado a transportista"
- Cuando el paquete llegue al cliente final, el estado cambia "Arribado a ciudad", luego se lleva al cliente final y cuando esta entregada cambia estado a "Producto entregado". Si el cliente lo rechaza se crea un informe de problema, si no se marca como "Producto entregado satisfactoriamente".

## Páginas pendientes:

- AGREGAR NUEVA OFERTA_PRODUCTOR (haciendo mario)
- AGREGAR NUEVA ORDEN_BODEGA Y ORDEN_TRANSPORTE, LUEGO ORDEN_BODEGA Y REPORTE_BODEGA
- MisCompras y Pago (haciendo debia)
- FRUTA_RESTANTE
- DIVIDIR VENTAS A MISVENTAS PARA PRODUCTOR, QUE SEA VEA LOS SUYOS
- REPORTES

## Funciones pendientes:

- Cambiar todos los sql a try catch como en informes/id_venta
- Gráficos de página Reportes
- Contadores de Usuarios, Frutas, Ventas y Subastas para la página dashboard
- Implementar subida de archivos a Pago como en Contrato
- Cambiar secuencias SQL a procedimientos
- Hacer templates de correos y agregarlos (paquete configurado y funcionando)
- Algunas páginas se caen si no se usa el perfil principal mari.barreraa@duocuc.cl
- Arreglar error de si no existen pedidos, pagina pedidos se cae
- Arreglar error de si no tienes pedidos, pagina mispedidos se cae
- Agregar peso maximo a la subida de documentos (contrato, seguro y pago)
- ModificarProducto : Agregar estado
- ListarProducto: Agregar estado
- Agregar limite carasteres (2000) a descripción en informes
- Agregar PDF boton cuando se ve un informe
- ¿Tiene refrigeración?: 1 en misofertas_transporte, ver oferta
- Anular oferta en misofertas no funca
- Añadir filtro a Productos, para que el productor solo vea sus productos

- PARA EL FINAL: Agregar validaciones de fechas a los formularios (como en crear contrato)
- PARA EL FINAL: Comprobación de rango para entrar a las páginas

## Otros
- http://localhost:3000/plantilla
- http://localhost:3000/plantilla_con_tabla

* PENDIENTE

### Menú Administrador
- http://localhost:3000/usuarios
- http://localhost:3000/contratos *
- http://localhost:3000/ventas *
- http://localhost:3000/ordenes *
- http://localhost:3000/subastas *
- http://localhost:3000/frutas
- http://localhost:3000/pedidos *
- http://localhost:3000/seguros *

### Menú Productor

- http://localhost:3000/misofertas_productor *
- http://localhost:3000/productos *
- http://localhost:3000/subastas_productor *
- http://localhost:3000/misventas *

### Menú Cliente Externo e Interno *
- http://localhost:3000/miscompras *
- http://localhost:3000/mispedidos *

### Menú Transportista
- http://localhost:3000/misofertas_transportes *
- http://localhost:3000/subastas_transporte *

### Menú Consultor
- http://localhost:3000/reportes *

## alertError Login
- 1 Contraseña o correo incorrecto
- 2 Usuario desactivado

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

## Estado venta - orden - producto
- 1 Activado
- 2 Desactivado

## Estado usuario
- 1 Activado
- 2 Desactivado
- 3 Contraseña pendiente

## Estado contrato
- 1 Vigente
- 2 Anulado

## Estado subasta
- 1 Abierta
- 2 Cerrada

## Estado seguro
- 1 Enviado
- 2 Cancelado

## Estado oferta
- 1 Sin revisar
- 2 Aceptada
- 3 Rechazada
- 4 Anulada

## Estado Pedido
- 1 En preparación
- 2 Enviado
- 3 En revisión
- 4 En subasta
- 5 Finalizado
- 6 Anulado

## Estado Reporte (char)
- 1 no se
- 2 no se

## Necesita - fruta - oferta_Transporte (char)
- 1 Si
- 2 No

## CRUD Extras
| Tipo | URL | Retorna |
| ------------- | ------------- | ------------- |
| GET  | http://localhost:3000/api_extras/listarCiudades  | JSON |
| GET  | http://localhost:3000/api_extras/listarPaises  | JSON |
| GET  | http://localhost:3000/api_extras/listarCalidadesFrutas  | JSON |

## CRUD Usuario
| Tipo | URL | Retorna |
| ------------- | ------------- | ------------- |
| GET  | http://localhost:3000/usuarios  |  |
| GET  | http://localhost:3000/api_usuarios/listarUsuarios  | JSON |
| GET  | http://localhost:3000/modificarUsuario/:id_usuario  |  |
| GET  | http://localhost:3000/perfil/:id_usuario  |  |
| GET  | http://localhost:3000/miperfil/:id_usuario  |  |

## CRUD Contrato
| Tipo | URL | Retorna |
| ------------- | ------------- | ------------- |
| GET  | http://localhost:3000/contratos  |  |
| GET  | http://localhost:3000/api_contratos/listarContratos  | JSON |
| GET  | http://localhost:3000/modificarContrato/:id_contrato  |  |
| GET  | http://localhost:3000/contrato/:id_contrato  |  |
| GET  | http://localhost:3000/documentoContrato/:id_contrato  |  |

## CRUD Fruta
| Tipo | URL | Retorna |
| ------------- | ------------- | ------------- |
| GET  | http://localhost:3000/frutas  |  |
| GET  | http://localhost:3000/api_frutas/listarFrutas  | JSON |
| GET  | http://localhost:3000/modificarFruta/:id_fruta  |  |
| POST | http://localhost:3000/api_frutas/eliminarFruta/:id_fruta  | |
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

## CRUD Seguro
| Tipo | URL | Retorna |
| ------------- | ------------- | ------------- |
| GET  | http://localhost:3000/seguros  |  |
| GET  | http://localhost:3000/api_seguros/listarSeguros  | JSON |
| POST | http://localhost:3000/api_seguros/crearSeguro  | |
| POST | http://localhost:3000/api_seguros/anularSeguro/:id_seguro  | |

## CRUD Pedido
| Tipo | URL | Retorna |
| ------------- | ------------- | ------------- |
| GET  | http://localhost:3000/pedidos  |  |
| GET  | http://localhost:3000/api_pedidos/listarPedidos  | JSON |
| GET  | http://localhost:3000/api_pedidos/anularPedido/:id_pedido  | |

## CRUD Pedido_Detalle
| Tipo | URL | Retorna |
| ------------- | ------------- | ------------- |
| GET  | http://localhost:3000/api_pedidos/listarPedidoDetalles  | JSON |
| POST | http://localhost:3000/api_pedidos/crearPedidoDetalles  | |
| GET  | http://localhost:3000/api_pedidos/eliminarPedidoDetalles/:id_pedido  | |

## CRUD Mis Pedidos
| Tipo | URL | Retorna |
| ------------- | ------------- | ------------- |
| GET  | http://localhost:3000/mispedidos  |  |
| GET  | http://localhost:3000/api_pedidos/anularMiPedido/:id_pedido  | |

## CRUD Venta
| Tipo | URL | Retorna |
| ------------- | ------------- | ------------- |
| GET  | http://localhost:3000/ventas  |  |
| POST | http://localhost:3000/api_ventas/crearVenta  | |
| GET  | http://localhost:3000/api_ventas/listarVentas  | JSON |
| GET  | http://localhost:3000/modificarVenta/:id_venta  |  |
| GET  | http://localhost:3000/api_ventas/anularVenta/:id_venta  | |
| GET  | http://localhost:3000/venta/:id_venta  |  |

## CRUD Venta_Detalle
| Tipo | URL | Retorna |
| ------------- | ------------- | ------------- |
| GET  | http://localhost:3000/api_ventas/listarVentaDetalles  | JSON |
| POST | http://localhost:3000/api_ventas/crearVentaDetalles  | |
| GET  | http://localhost:3000/api_ventas/eliminarVentaDetalles/:id_venta  | |

## CRUD Informe
| Tipo | URL | Retorna |
| ------------- | ------------- | ------------- |
| GET  | http://localhost:3000/informes/:id_venta  |  |
| GET  | http://localhost:3000/api_informes/listarInformes  | JSON |
| POST | http://localhost:3000/api_informes/modificarInforme/:id_informe  | 
| GET  | http://localhost:3000/api_informes/eliminarInforme/:id_informe  | |

## CRUD Subasta Frutas
| Tipo | URL | Retorna |
| ------------- | ------------- | ------------- |
| GET  | http://localhost:3000/subastas_frutas  |  |
| GET  | http://localhost:3000/api_subastas/crearSubastaFruta/:id_subastaF  | |
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

## CRUD Informe
| Tipo | URL | Retorna |
| ------------- | ------------- | ------------- |
| GET  | http://localhost:3000/api_informes/listarInformes  | JSON |
| GET  | http://localhost:3000/crearInforme/:id_venta  | |
| GET  | http://localhost:3000/informes/:id_venta  | |

## CRUD Fruta_Restante
| Tipo | URL | Retorna |
| ------------- | ------------- | ------------- |
| GET  | http://localhost:3000/api_frutasrestantes/listarFrutasRestantes  | JSON |

## CRUD Reporte_Bodega
| Tipo | URL | Retorna |
| ------------- | ------------- | ------------- |
| GET  | http://localhost:3000/api_reportes/listarReportesBodegas  | JSON |