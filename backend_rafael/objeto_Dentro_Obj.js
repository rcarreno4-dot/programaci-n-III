// Objeto dentro de otro objeto
const web = {
    nombre: "facebook",
    // objeto 1
    link: {enlace: "https://www.facebook.com", activo : true},
    // objeto 2
    propietario: {nombre: "Mark Zuckerberg", edad: 37, nacionalidad : "Estadounidense"},
    // objeto 3
        redessociales: {
            // obje3.1
            twitter: {enlace: "https://www.twitter.com", activo : true},
            // obje3.2
            instagram: {enlace: "https://www.instagram.com", activo : false},
            // obje3.3
            facebook: {enlace: "https://www.facebook.com", activo : true}
        }
};
const enlaceFacebook = web.link.enlace; // Acceder a la propiedad "enlace" del objeto "link"
console.log("El enlace de Facebook es: " ,enlaceFacebook); // Imprimir el enlace de Facebook
const enlace2 = web.redessociales; // Acceder a la propiedad "nombre" del objeto "propietario"
console.log(nombrePropietario); // Imprimir el nombre del propietario   
const enlaceTwitter = web.redessociales.twitter.enlace; 