// funcion tradicional 

function saludar(nombre) {
    return `Hola ${nombre}`;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function calculardiametro(radio) {
    return 2 * radio;
}

// Exportamos un objeto que contiene ambas funciones
module.exports = {
    saludar,
    areaTriangulo,
    calculardiametro
};