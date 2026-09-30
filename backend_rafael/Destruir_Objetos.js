// destruir objetos 
const usuario = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};  

// destructor
const {nombre, edad, ciudad} = usuario; // Destructuring del objeto "usuario"   
console.log(nombre); // Imprimir el nombre del usuario  
console.log(edad); // Imprimir la edad del usuario
console.log(ciudad); // Imprimir la ciudad del usuario

// invocar las propiedades en una sola declaracion 

console.log(nombre,edad,ciudad); // Imprimir todas las propiedades del usuario en una sola declaración


// en arrays importa la posicion

const [a,b]=[1,2,3,4,5]; // Destructuring de un array
console.log(a); // Imprimir el primer elemento del array
console.log(b); // Imprimir el segundo elemento del array   

// ignorar elementos 

const numeros = [10, 20, 30, 40, 50];
const [primerNumero, , tercerNumero] = numeros;

console.log(primerNumero); // Imprimir el primer número del array
console.log(tercerNumero); // Imprimir el tercer número del array   
// valores por defecto
