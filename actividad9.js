let nombre="arturo medina";
const notas= [9,8,7,10];
let promedio;
let acumulador=0;
for (let i=0; i<notas.length; i++){
acumulador=acumulador+notas[i];
promedio=acumulador/notas.length;
}
if (promedio>=7 && promedio<=10){
    console.log ("Muy bueno");
} else if (promedio===6){
    console.log ("aprobado");
} else if (promedio<6){
    console.log ("desaprobado");
}
console.log (`su nombre es ${nombre} y su promedio es ${promedio.toFixed(1)}`); 