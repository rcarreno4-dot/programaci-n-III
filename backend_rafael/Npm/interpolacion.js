// template strings, interpolacion y funcion tradicional
const precio = 100;
const descuento = 0.2;
function calcularPrecioFinal(precio, descuento) {
    const precioFinal = precio - (precio * descuento);
    return `El precio final es: ${precioFinal}`;
}   
const mensaje = calcularPrecioFinal(precio, descuento);
console.log(mensaje); // Imprime: El precio final es: 80
