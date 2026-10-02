// permite convertir un template string en un string normal
let nombre = "Juan";
let edad = 25;
let ciudad = "Bucaramanga";
let texto = `Hola, mi nombre es ${nombre} y tengo ${edad} años. Vivo en ${ciudad}.`;
console.log(texto)
//console.log(textoNormal); // Imprimir el string normal  

let firstName = "Juan";
let lastName = "Pérez";
// Concatenar variables en un template string
let fullName = `Mi nombre completo es ${firstName} ${lastName}.`;
console.log(fullName); // Imprimir el nombre completo

let precio = 1000
let descuento = 0.15
let total = `El precio es: ${precio} y el descuento es: ${descuento}. El total a pagar es: ${precio - (precio * descuento)}`;
console.log(total); // Imprimir el total a pagar

// Template string con expresiones alt +96
const numero = (num1, num2)=> {
    return`el numero es: ${num1 + num2}`;   
}
const resultado = numero(5, 10);    
console.log(resultado); // Imprimir el resultado de la función
