function calculadoraTradicional(a, b, operacion) {
  switch (operacion) {
    case 'sumar':
      return a + b;
    case 'restar':
      return a - b;
    case 'multiplicar':
      return a * b;
    case 'dividir':
      if (b === 0) {
        throw new RangeError('No se puede dividir entre cero.');
      }
      return a / b;
    default:
      throw new Error(`Operación no reconocida: ${operacion}`);
  }
}

const operaciones = {
  sumar: (a, b) => a + b,
  restar: (a, b) => a - b,
  multiplicar: (a, b) => a * b,
  dividir: (a, b) => {
    if (b === 0) {
      throw new RangeError('No se puede dividir entre cero.');
    }
    return a / b;
  }
};

const primerNumero = 12;
const segundoNumero = 3;

for (const [nombre, operacion] of Object.entries(operaciones)) {
  console.log(
    `${nombre}: función tradicional = ${calculadoraTradicional(primerNumero, segundoNumero, nombre)}, ` +
    `función flecha = ${operacion(primerNumero, segundoNumero)}`
  );
}
