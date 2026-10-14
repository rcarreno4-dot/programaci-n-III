const estudiante = {
  nombre: 'Rafael Carreño',
  carrera: 'Ingenieria en Sistemas',
  semestre: 'Quinto',
  presentarse() {
    console.log(`Hola, soy ${this.nombre} y estudio ${this.carrera}.`);
  },
  mostrarSemestre() {
    console.log(`Semestre: ${this.semestre}.`);
  }
};

console.log('Nombre:', estudiante.nombre);
estudiante.presentarse();
estudiante.mostrarSemestre();
