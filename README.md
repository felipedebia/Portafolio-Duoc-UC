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
- http://localhost:3000/perfil *

* PENDIENTE

### Menú Administrador
- http://localhost:3000/usuarios
- http://localhost:3000/contratos *
- http://localhost:3000/ventas_externas *
- http://localhost:3000/ventas_locales *
- http://localhost:3000/subastas_frutas *
- http://localhost:3000/subastas_transportes *

### Menú Productor

- http://localhost:3000/productos *
- http://localhost:3000/subastas_productor *
- http://localhost:3000/ventas *

### Menú Cliente Externo e Interno *
- http://localhost:3000/solicitudes *
- http://localhost:3000/miscompras *

### Menú Transportista
- http://localhost:3000/subastas_transportes *

### Menú Consultor
- http://localhost:3000/reportes *
- http://localhost:3000/soporte * 

## Roles
- 1 Administrador
- 2 Transportista
- 3 Cliente externo
- 4 Cliente interno
- 5 Productor
- 6 Consultor

## Género
- 1 Femenino
- 2 Masculino

## Estado cuenta
- 1 Activado
- 2 Desactivado

## Otros
| Tipo | URL | Retorna |
| ------------- | ------------- | ------------- |
| POST | http://localhost:3000/api/crearusuario  | |
| GET  | http://localhost:3000/modificarUsuario/:id_usuario  |  |
| PUT  | http://localhost:3000/api/modificarUsuario/:id_usuario  | |
| POST | http://localhost:3000/api/desactivarUsuario/:id_usuario  | |
| GET  | http://localhost:3000/api/listadousuarios  | JSON |
| GET  | http://localhost:3000/perfil/:id_usuario  |  |

