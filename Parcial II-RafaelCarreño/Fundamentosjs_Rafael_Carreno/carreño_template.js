const readline = require('node:readline');
const { stdin, stdout } = require('node:process');

async function solicitarDatos() {
  const interfaz = readline.createInterface({ input: stdin, output: stdout });
  const lineas = interfaz[Symbol.asyncIterator]();

  async function preguntar(texto) {
    stdout.write(texto);
    const respuesta = await lineas.next();

    if (respuesta.done) {
      throw new Error('La entrada terminó antes de completar todos los datos.');
    }

    return respuesta.value.trim();
  }

  try {
    const nombre = await preguntar('Nombre: ');
    const apellido = await preguntar('Apellido: ');
    const ciudad = await preguntar('Ciudad: ');

    if (!nombre || !apellido || !ciudad) {
      throw new Error('Todos los datos son obligatorios.');
    }

    console.log(`Hola, ${nombre} ${apellido}. Registramos tu ciudad: ${ciudad}.`);
  } finally {
    interfaz.close();
  }
}

solicitarDatos().catch((error) => {
  console.error(`No se pudieron solicitar los datos: ${error.message}`);
  process.exitCode = 1;
});
