const fs = require('node:fs/promises');
const os = require('node:os');
const path = require('node:path');

async function demostrarServicios() {
  // node:os consulta propiedades del sistema operativo actual.
  console.log('Servicio node:os');
  console.log('Plataforma:', os.platform());
  console.log('Arquitectura:', os.arch());
  console.log(`Memoria libre: ${(os.freemem() / 1024 / 1024).toFixed(2)} MB`);

  // node:fs/promises crea, escribe, lee y elimina un archivo de prueba temporal.
  const directorioTemporal = await fs.mkdtemp(path.join(os.tmpdir(), 'demo-node-'));
  const rutaArchivo = path.join(directorioTemporal, 'ejemplo.txt');
  const entrada = 'Ejemplo de fs/promises';

  try {
    await fs.writeFile(rutaArchivo, entrada, 'utf8');
    console.log('\nServicio node:fs/promises');
    console.log('Texto escrito:', entrada);

    const salida = await fs.readFile(rutaArchivo, 'utf8');
    console.log('Texto leído:', salida);
  } finally {
    await fs.rm(directorioTemporal, { recursive: true, force: true });
  }

  console.log('Archivo temporal eliminado.');
}

demostrarServicios().catch((error) => {
  console.error('Error al demostrar los servicios de Node.js:', error);
  process.exitCode = 1;
});
