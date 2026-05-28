const notas=[6,8,9,10];
let acumulador=0;
let promedio;
let aprobado;
for (let i=0; i<notas.length; i++){
acumulador=acumulador+notas[i];
promedio=acumulador/notas.length;
if (notas>6){
console.log ("aprobado");
aprobado=true;
} else if (notas<6){
console.log ("desaprobado");
aprobado=false;
}
console.log ("promedio:", promedio);
console.log ( "aprobado?:", aprobado);
}

