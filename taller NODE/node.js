// 1. MÓDULO 'fs' (File System): Manipulación de archivos e interacciones con el sistema de archivos.
const fs = require('fs');

// 2. MÓDULO 'path': Manejo y transformación de rutas de archivos y directorios.
const path = require('path');

// 3. MÓDULO 'os': Proporciona información sobre el sistema operativo de la máquina.
const os = require('os');

// 4. MÓDULO 'crypto': Funcionalidades criptográficas como encriptación, hashes y generación de datos aleatorios.
const crypto = require('crypto');

// 5. MÓDULO 'events': Permite implementar el patrón de diseño Observador / Event Emitter.
const EventEmitter = require('events');

// 6. MÓDULO 'url': Utilidades para la resolución y análisis sintáctico de URLs.
const url = require('url');

// 7. MÓDULO 'util': Funciones de utilidad para formateo, conversión de promesas y depuración.
const util = require('util');

// 8. MÓDULO 'http': Creación de servidores y clientes HTTP para transferir datos.
const http = require('http');

// 9. MÓDULO 'process': Proporciona control e información sobre el proceso actual de ejecución de Node.js.
// (Es un módulo global, pero se documenta formalmente como servicio de Node).

// 10. MÓDULO 'v8': Acceso a métricas e información del motor V8 de Google que ejecuta Node.js.
const v8 = require('v8');

// --- LÓGICA EJECUTADA CON NODE.JS ---

async function ejecutarServicios() {
  console.log("=== INICIANDO DEMOSTRACIÓN DE SERVICIOS DE NODE.JS ===\n");

  // Uso de OS y PROCESS
  console.log("--- 1 & 2. OS y Process ---");
  console.log(`Sistema Operativo: ${os.type()} (${os.arch()})`);
  console.log(`Memoria Libre: ${(os.freemem() / 1024 / 1024).toFixed(2)} MB`);
  console.log(`ID del Proceso Actual (PID): ${process.pid}`);
  console.log(`Versión de Node.js: ${process.version}\n`);

  // Uso de V8
  console.log("--- 3. Módulo V8 ---");
  const heapStats = v8.getHeapStatistics();
  console.log(`Límite del Heap de Memoria V8: ${(heapStats.heap_size_limit / 1024 / 1024).toFixed(2)} MB\n`);

  // Uso de PATH
  console.log("--- 4. Módulo Path ---");
  const rutaArchivo = path.join(__dirname, 'ejemplo.txt');
  console.log(`Ruta construida para el archivo: ${rutaArchivo}\n`);

  // Uso de FS
  console.log("--- 5. Módulo FS (File System) ---");
  fs.writeFileSync(rutaArchivo, 'Hola desde Node.js!');
  console.log('Archivo creado exitosamente.');
  const contenido = fs.readFileSync(rutaArchivo, 'utf-8');
  console.log(`Contenido leído del archivo: "${contenido}"`);
  fs.unlinkSync(rutaArchivo); // Limpieza del archivo temporal
  console.log('Archivo temporal eliminado.\n');

  // Uso de CRYPTO
  console.log("--- 6. Módulo Crypto ---");
  const hash = crypto.createHash('sha256').update(contenido).digest('hex');
  const tokenAleatorio = crypto.randomBytes(8).toString('hex');
  console.log(`SHA-256 del contenido: ${hash}`);
  console.log(`Token aleatorio generado: ${tokenAleatorio}\n`);

  // Uso de URL
  console.log("--- 7. Módulo URL ---");
  const miUrl = new url.URL('https://nodejs.org/api/all.html?search=fs#fs_file_system');
  console.log(`Dominio: ${miUrl.hostname}`);
  console.log(`Parámetro 'search': ${miUrl.searchParams.get('search')}\n`);

  // Uso de EVENTS
  console.log("--- 8. Módulo Events ---");
  const miEmisor = new EventEmitter();
  miEmisor.on('notificacion', (mensaje) => {
    console.log(`[Evento Recibido]: ${mensaje}`);
  });
  miEmisor.emit('notificacion', 'El flujo de eventos de Node funciona correctamente.\n');

  // Uso de UTIL
  console.log("--- 9. Módulo Util ---");
  const mensajeFormateado = util.format('Usuario %s registrado con ID %d', 'Carlos', 101);
  console.log(`Texto formateado: ${mensajeFormateado}\n`);

  // Uso de HTTP (Creación y consumo de servidor local)
  console.log("--- 10. Módulo HTTP ---");
  const servidor = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Respuesta del servidor HTTP');
  });

  servidor.listen(3000, () => {
    console.log('Servidor en ejecución en http://localhost:3000/');
    
    // Petición HTTP cliente
    http.get('http://localhost:3000/', (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        console.log(`Respuesta recibida del servidor: "${data}"`);
        servidor.close(() => console.log('\n=== EJECUCIÓN FINALIZADA Y SERVIDOR CERRADO ==='));
      });
    });
  });
}

// Ejecución
ejecutarServicios();
