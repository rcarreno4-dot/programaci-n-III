// Objetos
const persona = {
    nombre: "Juan",
    edad: 30
};
console.log(persona.nombre); // Acceder a la propiedad "nombre"
console.log(persona.edad); // Acceder a la propiedad "edad" 

// Objeto con propiedades y métodos
const mascota = {
    nombre: "Firulais",
    tipo: "Perro",
    ladrar: function() {
        console.log("Guau, guau!");
    }
};
mascota.ladrar(); // Llamar al método "ladrar" del objeto "mascota"
console.log(mascota.nombre); // Acceder a la propiedad "nombre" del objeto "mascota"
