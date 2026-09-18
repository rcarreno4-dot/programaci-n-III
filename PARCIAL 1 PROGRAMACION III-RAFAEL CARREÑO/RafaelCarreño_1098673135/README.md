# fabiangames

Aplicación web académica de videojuegos llamada fabiangames que demuestra MVC, REST y SOA.

**Estudiante:** Rafael Carreño  
**Cédula:** 1098673135

## Estructura

- `index.html` y `views/`: tres documentos HTML.
- `css/main.css` y `css/pages.css`: dos archivos CSS separados.
- `model/game-model.js`: modelo de datos.
- `services/`: `api-service`, `favorite-service` y `ui-service`, más de dos servicios JavaScript.
- `controllers/`: lógica de cada pantalla.
- `docs/`: documentación de Ingeniería de Software.

## REST y SOA

`api-service.js` simula los endpoints `GET`, `POST`, `PUT` y `DELETE` sobre el recurso `/games`. Los servicios están separados por responsabilidad: catálogo/datos, favoritos y representación de interfaz. El controlador consume estos servicios y actualiza las vistas HTML.

Abre `index.html` con un servidor local para ejecutar los módulos ES correctamente.
