const estudiante = {
  datos: {
    nombre: 'Rafael Carreño',
    carrera: 'Ingenieria en Sistemas',
    edad: '37 años',
    sexo: 'Masculino',
    estatura: '1.71 m'
  },
  fecha: new Date().toLocaleDateString('es-CO'),
  mostrarCarrera: () => `Carrera: ${estudiante.datos.carrera}`,
  mostrarEdadYSexo: () => `Edad: ${estudiante.datos.edad}; sexo: ${estudiante.datos.sexo}`,
  mostrarEstatura: () => `Estatura: ${estudiante.datos.estatura}`
};

console.log(
  `Perfil de ${estudiante.datos.nombre} — ${estudiante.fecha}\n` +
  `${estudiante.mostrarCarrera()}\n` +
  `${estudiante.mostrarEdadYSexo()}\n` +
  `${estudiante.mostrarEstatura()}`
);
