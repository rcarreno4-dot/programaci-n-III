const tecnologias = [
  'Laptop',
  'Teclado',
  'Mouse',
  'Monitor',
  'Impresora',
  'Tablet',
  'Smartphone',
  'Router',
  'Audífonos',
  'Micrófono',
  'Webcam',
  'Disco SSD',
  'Memoria USB',
  'Consola',
  'Smartwatch'
];

const [primeraTecnologia, segundaTecnologia, terceraTecnologia, ...resto] = tecnologias;

const mostrarPrimerElemento = () => console.log('Primer elemento:', primeraTecnologia);
const mostrarSegundoElemento = () => console.log('Segundo elemento:', segundaTecnologia);
const mostrarResto = () => console.log('Elementos restantes:', resto);

mostrarPrimerElemento();
mostrarSegundoElemento();
mostrarResto();
