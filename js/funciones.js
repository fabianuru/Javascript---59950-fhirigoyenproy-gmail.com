//CLASE DATE 

new Date ();

console.log(new Date ())// FECHA HOY HORA HOY

// console.log(new Date (año,mes-1,dia,hora,minutos,segundos)) 
console.log(new Date (1992,8,29,9,15,0));

const miNacimiento =new Date (1992,8,29,9,15,0);
const casiNavidad = new Date (2024,11,24,23,50,59)

//Mostrar año actual
const fechaActual = new Date()
console.log(fechaActual.getFullYear())

//Obtener solamente el año
console.log(miNacimiento.getFullYear());

//ObtenerSolo mes
console.log(miNacimiento.getMonth());

//Obtener el dia de la semana del new date
console.log(miNacimiento.getDay());

console.log(fechaActual.toLocaleString());
console.log(fechaActual.toDateString());
console.log(fechaActual.toLocaleDateString());
console.log(fechaActual.toTimeString());


//LA DIFERENCIA ENTRE FECHAS SE MIDE EN MILISEGUNDOS // cuantos milisegundos tiene un dia? // 86.400.000

const MILISEGUNDOS_DIA = 24*60*60*1000;
console.log(MILISEGUNDOS_DIA)

const arapeySando = new Date (2025,2,14,15,00,00)
const DIFERENCIA = ((arapeySando - fechaActual) /MILISEGUNDOS_DIA)
console.log(Math.round(DIFERENCIA))

//Calcular el tiempo de ejecucion de un código
// const INICIO = new Date();
// for (i=0;i<=1000;i++){
//     console.log("Programa Ejecutandose")
// }
// const FIN = new Date();

// console.log("El proceso tardo " + (FIN-INICIO))