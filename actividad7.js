const estudiante={
    nombre: "juan",
    apellido:"montevideo",
    nota:8
};
let aprobado=estudiante.nota>=6 && estudiante.nota==10 ? true : false;

console.log ("nombre:", estudiante.nombre, "apellido:", estudiante.apellido, "nota:", estudiante.nota, "¿esta aprobado?:", aprobado)
