// ============================================================================
// TALLER NODE.JS - BASADO EN EL TUTORIAL DE W3SCHOOLS
// Referencia: https://www.w3schools.com/nodejs/default.asp
// ============================================================================

// 1. MÓDULO 'http' (W3Schools: Node.js HTTP Module)
// Utilizado para crear servidores HTTP y procesar peticiones web.
const http = require('http');

// 2. MÓDULO 'fs' (W3Schools: Node.js File System)
// Permite trabajar con el sistema de archivos del equipo (crear, leer, eliminar).
const fs = require('fs');

// 3. MÓDULO 'url' (W3Schools: Node.js URL Module)
// Divide una dirección web en partes legibles (parse).
const url = require('url');

// 4. MÓDULO 'events' (W3Schools: Node.js Events)
// Permite crear, emitir y escuchar eventos personalizados con EventEmitter.
const events = require('events');

// 5. MÓDULO 'path' (W3Schools: Node.js Built-in Modules)
// Proporciona utilidades para manejar y transformar rutas de archivos.
const path = require('path');

// 6. MÓDULO 'os' (W3Schools: Node.js Built-in Modules)
// Proporciona información sobre el sistema operativo subyacente.
const os = require('os');

// 7. MÓDULO 'querystring' (W3Schools: Node.js Built-in Modules)
// Proporciona herramientas para formatear y parsear cadenas de consulta URL.
const querystring = require('querystring');

// 8. MÓDULO 'util' (W3Schools: Node.js Built-in Modules)
// Ofrece funciones de utilidad como depuración y formateo de texto.
const util = require('util');

// 9. MÓDULO 'crypto' (W3Schools: Node.js Built-in Modules)
// Maneja algoritmos criptográficos para generar hashes y tokens de seguridad.
const crypto = require('crypto');

// 10. MÓDULO 'process' (W3Schools: Node.js Global Object)
// Proporciona información sobre el proceso de Node.js en ejecución actual.
// (Módulo nativo/global accesible en todo el entorno)

// ============================================================================
// EJECUCIÓN Y DEMOSTRACIÓN DE LA LÓGICA (ESTILO W3SCHOOLS)
// ============================================================================

function ejecutarTallerW3Schools() {
  console.log("==================================================");
  console.log("   DEMOSTRACIÓN DE SERVICIOS NODE.JS (W3SCHOOLS)  ");
  console.log("==================================================\n");

  // --- 1. MÓDULO OS & PROCESS ---
  console.log("--- 1 & 2. Módulos OS y Process ---");
  console.log("Plataforma SO: " + os.platform());
  console.log("Arquitectura: " + os.arch());
  console.log("Memoria Libre: " + (os.freemem() / 1024 / 1024).toFixed(2) + " MB");
  console.log("ID del Proceso (PID): " + process.pid);
  console.log("Versión de Node: " + process.version + "\n");

  // --- 2. MÓDULO PATH ---
  console.log("--- 3. Módulo Path ---");
  const rutaEjemplo = path.join(__dirname, 'mynewfile1.txt');
  console.log("Ruta creada con path.join: " + rutaEjemplo);
  console.log("Extensión del archivo: " + path.extname(rutaEjemplo) + "\n");

  // --- 3. MÓDULO FS (File System) ---
  console.log("--- 4. Módulo FS (File System) ---");
  // Crear archivo con fs.appendFile (Ejemplo exacto de W3Schools)
  fs.writeFileSync(rutaEjemplo, 'Hello content from W3Schools!');
  console.log("Archivo creado exitosamente con fs.writeFileSync.");
  
  // Leer archivo con fs.readFile
  const contenido = fs.readFileSync(rutaEjemplo, 'utf8');
  console.log("Contenido leído: '" + contenido + "'");

  // Eliminar archivo con fs.unlink
  fs.unlinkSync(rutaEjemplo);
  console.log("Archivo eliminado correctamente con fs.unlinkSync.\n");

  // --- 4. MÓDULO URL ---
  console.log("--- 5. Módulo URL ---");
  const adr = 'http://localhost:8080/default.htm?year=2026&month=september';
  const q = url.parse(adr, true);
  console.log("Host: " + q.host);           // retorna 'localhost:8080'
  console.log("Pathname: " + q.pathname);   // retorna '/default.htm'
  console.log("Search: " + q.search);       // retorna '?year=2026&month=september'
  const qdata = q.query;                    // retorna un objeto: { year: 2026, month: 'september' }
  console.log("Parámetro Mes: " + qdata.month + "\n");

  // --- 5. MÓDULO QUERYSTRING ---
  console.log("--- 6. Módulo QueryString ---");
  const parsedQS = querystring.parse('curso=NodeJS&autor=W3Schools&nivel=Basico');
  console.log("Objeto analizado desde QueryString:", parsedQS);
  console.log("Curso: " + parsedQS.curso + "\n");

  // --- 6. MÓDULO EVENTS ---
  console.log("--- 7. Módulo Events ---");
  const eventEmitter = new events.EventEmitter();
  // Crear un manejador de eventos (Event Handler)
  const myEventHandler = function () {
    console.log("[Evento]: ¡Escuché un grito/evento en Node.js!");
  };
  // Asignar el manejador al evento 'scream'
  eventEmitter.on('scream', myEventHandler);
  // Disparar el evento 'scream'
  eventEmitter.emit('scream');
  console.log("");

  // --- 7. MÓDULO UTIL ---
  console.log("--- 8. Módulo Util ---");
  const txtFormateado = util.format('Estudiando %s en la plataforma %s', 'Node.js', 'W3Schools');
  console.log("Texto formateado con util.format: " + txtFormateado + "\n");

  // --- 8. MÓDULO CRYPTO ---
  console.log("--- 9. Módulo Crypto ---");
  const myHash = crypto.createHash('md5').update('w3schools').digest('hex');
  console.log("Hash MD5 de 'w3schools': " + myHash + "\n");

  // --- 9. MÓDULO HTTP ---
  console.log("--- 10. Módulo HTTP ---");
  // Crear el servidor HTTP al estilo tradicional de W3Schools
  const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World from W3Schools Node.js Server!');
    res.end();
  });

  server.listen(8080, function() {
    console.log("Servidor HTTP escuchando en http://localhost:8080/");
    
    // Petición de prueba automática
    http.get('http://localhost:8080/', function(res) {
      let data = '';
      res.on('data', function(chunk) { data += chunk; });
      res.on('end', function() {
        console.log("Respuesta obtenida del servidor: '" + data + "'");
        server.close(function() {
          console.log("\n==================================================");
          console.log("   EJECUCIÓN FINALIZADA Y SERVIDOR CERRADO");
          console.log("==================================================");
        });
      });
    });
  });
}

// Ejecutar todo el script
ejecutarTallerW3Schools();