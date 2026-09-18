
const os = require('node:os');
console.log("Sistema operativo:", os.platform());
console.log("Arquitectura del sistema:", os.arch());
console.log("Memoria total del sistema:", os.totalmem());
console.log("Memoria libre del sistema:", os.freemem());
console.log("Número de CPUs:", os.cpus().length);
console.log("Directorio de inicio del usuario:", os.homedir());
console.log("Nombre del host:", os.hostname());
