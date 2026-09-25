// exportar funcion saludar

// Importamos solo las funciones que necesitamos del módulo
const { saludar, areaTriangulo, calculardiametro } = require('./saludo.js');

console.log(saludar("Rafael"));
console.log("El área del triángulo es = ", areaTriangulo(5, 10));
console.log("El diámetro es = ", calculardiametro(5)); // Esto generará un error porque calculardiametro no está exportada  
