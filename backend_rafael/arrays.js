// arrays con js

const frutas = ["manzana", "banana", "naranja", "pera"];

// Acceder a un elemento del array
console.log(frutas[0]); // manzana  
// funciones en arrays
console.log("El array de frutas es =", frutas)
frutas.push("kiwi"); // Agregar un elemento al final del array
console.log("El array de frutas es =", frutas)
frutas.pop(); // Eliminar el último elemento del array
console.log("El array de frutas es =", frutas)

// arrays con numeros
const numeros = [1, 2, 3, 4, 5];  
console.log("El array de numeros es =", numeros)

// arrays booleanos
const booleanos = [true, false, true, false];
console.log("El array de booleanos es =", booleanos)

// arrays con objetos
const personas = [
  { nombre: "Juan", edad: 30 },
  { nombre: "María", edad: 25 },
  { nombre: "Pedro", edad: 35 }
];
console.log("El array de personas es =", personas);

const mascotas = {
  nombre: "Fido",
  edad: 3,
  tipo: "gato",
  raza: "siamés",
  vivo: true
};

console.log(mascotas.nombre);
console.log(mascotas.edad);
console.log(mascotas.tipo);
console.log(mascotas.raza);
console.log(mascotas.vivo);

console.log(mascotas);