const notas=[6,8,9,10];
let acumulador=0;
let promedio;

for (let i=0; i<notas.length; i++){
acumulador=acumulador+notas[i];
promedio=acumulador/notas.length;
let aprobado=promedio>6 ? true : false;
console.log ("promedio:", promedio);
console.log ( "aprobado?:", aprobado);
}

