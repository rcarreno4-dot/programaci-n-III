// funciones flechitas, lamnbda, este en el ES6 
const sumar = (a, b) => {console.log("La suma es = " , (a + b));}   
sumar(5, 10);
const restar = (a, b) => {console.log("La resta es = " , (a - b));}
restar(10, 5);
const multiplicar = (a, b) => {console.log("La multiplicación es = " , (a * b));}   
multiplicar(5, 10);
const dividir = (a, b) => {console.log("La división es = " , (a / b))}   
dividir(10, 5)

// funcion flechita con un parametro no necesita parentesis
const cuadrado =num=>{console.log("El cuadrado es = ", (num * num))}
cuadrado(5)
// funcion flechita con retorno implicito
const cubo = num => num * num * num
console.log("El cubo es = ", cubo(5))
// funcion flechita con retorno implicito y sin llaves
const raizCuadrada = num => Math.sqrt(num)
console.log("La raíz cuadrada es = ", raizCuadrada(25)) 
//funcion flechita con return 
const potencia = (base, exponente) => {
    return Math.pow(base, exponente)    
}
console.log("La potencia es = ", potencia(2, 3)) 

// funcion flechita con require

// funcion flechita con require
const despedir = (nombre) => {
    console.log(`Adiós ${nombre}`);
}

