# Documentación Técnica: Taller Node.js (Basado en W3Schools)

## 1. Información del Proyecto
* **Recurso de Referencia:** [W3Schools Node.js Tutorial](https://www.w3schools.com/nodejs/default.asp)
* **Entorno de Ejecución:** Node.js v20.18.0
* **Archivo Principal:** `app.js`

---

## 2. Descripción General
Esta guía documenta la implementación de **10 módulos y servicios nativos de Node.js** siguiendo los conceptos, métodos y ejemplos explicados en el curso de W3Schools. El código no requiere librerías externas de terceros y ejecuta todas las operaciones mediante comandos estándar.

---

## 3. Módulos y Servicios de W3Schools Implementados

| # | Módulo / Servicio | Lección en W3Schools | Descripción y Método Utilizado |
| :--- | :--- | :--- | :--- |
| **1** | `http` | Node.js HTTP Module | Creación de un servidor web con `http.createServer()` para enviar respuestas al cliente. |
| **2** | `fs` (Crear) | Node.js File System | Escritura e inclusión de contenido en archivos mediante `fs.appendFileSync()`. |
| **3** | `fs` (Leer) | Node.js File System | Lectura sincrónica del contenido de archivos con `fs.readFileSync()`. |
| **4** | `fs` (Eliminar) | Node.js File System | Borrado de archivos del sistema mediante `fs.unlinkSync()`. |
| **5** | `url` | Node.js URL Module | Análisis y división de una URL en partes (`url.parse()`) para obtener host, ruta y parámetros. |
| **6** | `events` | Node.js Events | Gestión de eventos asíncronos creando instancias de `events.EventEmitter`. |
| **7** | `querystring` | Node.js URL Module | Conversión de cadenas de consulta en objetos manipulables con `querystring.parse()`. |
| **8** | `path` | Node.js File System | Construcción de rutas de archivos válidas para cualquier sistema con `path.join()`. |
| **9** | `os` | Node.js Modules | Consulta de información sobre la plataforma y memoria del sistema operativo (`os.platform()`, `os.freemem()`). |
| **10**| `console` / `process` | Node.js Global Objects | Salida de datos en consola y obtención de datos del proceso global (`process.version`). |

---

## 4. Instrucciones de Ejecución

1. Abre tu terminal de comandos (PowerShell o CMD).
2. Dirígete a la carpeta del proyecto:
   ```powershell
   cd "C:\Users\SALA-2\Desktop\taller node"
