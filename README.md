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

### CRUD Usuario

| Tipo | URL | Retorna |
| ------------- | ------------- | ------------- |
| GET  | http://localhost:3000/crearusuario  |  |
| POST | http://localhost:3000/api/crearusuario  | |
| GET  | http://localhost:3000/modificarUsuario/:id_usuario  |  |
| PUT  | http://localhost:3000/api/modificarUsuario/:id_usuario  | |
| POST | http://localhost:3000/api/desactivarUsuario/:id_usuario  | |
| GET  | http://localhost:3000/listadousuarios  |  |
| GET  | http://localhost:3000/api/listadousuarios  | JSON |
| GET  | http://localhost:3000/verUsuario/:id_usuario  |  |


### CRUD Ventas

| Tipo | URL | Retorna |
| ------------- | ------------- | ------------- |
| DELETE  | http://localhost:3000/api/eliminarVenta/:id_venta  |  |

## Roles
- 1 administrador
- 2 transportista
- 3 cliente externo
- 4 cliente interno
- 5 productor
- 6 consultor

## Género
- 1 Femenino
- 2 Masculino

## Estado cuenta
- 1 Activado
- 2 Desactivado

