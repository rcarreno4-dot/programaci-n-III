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

console.log('Array inicial:', tecnologias);

tecnologias.push('Proyector');
console.log('Después de push:', tecnologias);

const elementoEliminadoInicio = tecnologias.shift();
console.log(`shift eliminó: ${elementoEliminadoInicio}`);

console.log(`length indica ${tecnologias.length} elementos.`);

const elementoEliminadoFinal = tecnologias.pop();
console.log(`pop eliminó: ${elementoEliminadoFinal}`);

tecnologias.sort((a, b) => a.localeCompare(b, 'es'));
console.log('Array ordenado:', tecnologias);
