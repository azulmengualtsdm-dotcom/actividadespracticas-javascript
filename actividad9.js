let nombre="arturo";
const notas= [9,8,7,10];
let promedio;
let acumulador=0;
for (let i=0; i<notas.length; i++){
acumulador=acumulador+notas[i];
promedio=acumulador/notas.length;
if (promedio>=7){
    console.log ("Muy bueno");
} else if (promedio==6){
    console.log ("aprobado");
} else if (promedio<6){
    console.log ("desaprobado");
}
}
console.log (nombre,"promedio:", promedio )