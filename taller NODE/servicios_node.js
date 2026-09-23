// ============================================================================
// TALLER NODE.JS - BASADO EN EL TUTORIAL DE W3SCHOOLS
// Referencia: https://www.w3schools.com/nodejs/default.asp
// ============================================================================

// 1. MÓDULO 'http' (W3Schools: Node.js HTTP Module)
const http = require('http');

// 2. MÓDULO 'fs' (W3Schools: Node.js File System)
const fs = require('fs');

// 3. MÓDULO 'url' (W3Schools: Node.js URL Module)
const url = require('url');

// 4. MÓDULO 'events' (W3Schools: Node.js Events)
const events = require('events');

// 5. MÓDULO 'path' (W3Schools: Node.js Built-in Modules)
const path = require('path');

// 6. MÓDULO 'os' (W3Schools: Node.js Built-in Modules)
const os = require('os');

// 7. MÓDULO 'querystring' (W3Schools: Node.js Built-in Modules)
const querystring = require('querystring');

// 8. MÓDULO 'util' (W3Schools: Node.js Built-in Modules)
const util = require('util');

// 9. MÓDULO 'crypto' (W3Schools: Node.js Built-in Modules)
const crypto = require('crypto');

// 10. MÓDULO 'process' (W3Schools: Node.js Global Object)
// ============================================================================

function ejecutarTallerW3Schools() {
  console.log("==================================================");
  console.log("   DEMOSTRACIÓN DE SERVICIOS NODE.JS (W3SCHOOLS)  ");
  console.log("==================================================\n");

  // --- 1 & 2. MÓDULOS OS Y PROCESS ---
  console.log("--- 1 & 2. Módulos OS y Process ---");
  console.log("Plataforma SO: " + os.platform());
  console.log("Arquitectura: " + os.arch());
  console.log("Memoria Libre: " + (os.freemem() / 1024 / 1024).toFixed(2) + " MB");
  console.log("ID del Proceso (PID): " + process.pid);
  console.log("Versión de Node: " + process.version + "\n");

  // --- 3. MÓDULO PATH ---
  console.log("--- 3. Módulo Path ---");
  const rutaEjemplo = path.join(__dirname, 'mynewfile1.txt');
  console.log("Ruta creada con path.join: " + rutaEjemplo);
  console.log("Extensión del archivo: " + path.extname(rutaEjemplo) + "\n");

  // --- 4. MÓDULO FS (File System) ---
  console.log("--- 4. Módulo FS (File System) ---");
  fs.writeFileSync(rutaEjemplo, 'Hello content from W3Schools!');
  console.log("Archivo creado exitosamente con fs.writeFileSync.");
  
  const contenido = fs.readFileSync(rutaEjemplo, 'utf8');
  console.log("Contenido leído: '" + contenido + "'");

  fs.unlinkSync(rutaEjemplo);
  console.log("Archivo eliminado correctamente con fs.unlinkSync.\n");

  // --- 5. MÓDULO URL ---
  console.log("--- 5. Módulo URL ---");
  const adr = 'http://localhost:8080/default.htm?year=2026&month=september';
  const q = new url.URL(adr);
  console.log("Host: " + q.host);           
  console.log("Pathname: " + q.pathname);   
  console.log("Search: " + q.search);       
  console.log("Parámetro Mes: " + q.searchParams.get('month') + "\n");

  // --- 6. MÓDULO QUERYSTRING ---
  console.log("--- 6. Módulo QueryString ---");
  const parsedQS = querystring.parse('curso=NodeJS&autor=Rafael&nivel=Basico');
  console.log("Objeto analizado desde QueryString:", parsedQS);
  console.log("Curso: " + parsedQS.curso + "\n");

  // --- 7. MÓDULO EVENTS ---
  console.log("--- 7. Módulo Events ---");
  const eventEmitter = new events.EventEmitter();
  const myEventHandler = function () {
    console.log("[Evento]: ¡Escuché un grito/evento en Node.js!");
  };
  eventEmitter.on('scream', myEventHandler);
  eventEmitter.emit('scream');
  console.log("");

  // --- 8. MÓDULO UTIL ---
  console.log("--- 8. Módulo Util ---");
  const txtFormateado = util.format('Estudiando %s en la plataforma %s', 'Node.js', 'W3Schools');
  console.log("Texto formateado con util.format: " + txtFormateado + "\n");

  // --- 9. MÓDULO CRYPTO ---
  console.log("--- 9. Módulo Crypto ---");
  const myHash = crypto.createHash('md5').update('w3schools').digest('hex');
  console.log("Hash MD5 de 'w3schools': " + myHash + "\n");

  // --- 10. MÓDULO HTTP ---
  console.log("--- 10. Módulo HTTP ---");
  const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World from W3Schools Node.js Server!');
    res.end();
  });

  server.listen(8080, function() {
    console.log("Servidor HTTP escuchando en http://localhost:8080/");
    
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
