// //Declarar función
// function nombreDeLaFuncion(){
//     console.log("Esto es lo que va a hacer una función")
// }

// //Llamar a la función
// nombreDeLaFuncion();

// function ingresarNombre() {
//     let ingreseSuNombre= prompt("Ingrese su nombre")
//     console.log("El nombre ingresado es: " + ingreseSuNombre)
// }

// for (let i=0; i <5;i++){
//     ingresarNombre()
// }


// //Parametros
// function enviarMensajeConParametros(mensaje1,mensaje2){
//     console.log(mensaje1);
//     console.log(mensaje2);
// }
// enviarMensajeConParametros("El profe se la come", "mensaje tonto");

// SUMAR 2 NUMEROS Y MOSTRAR
// let resultado = 0;

// function sumar(numero1,numero2){
//     resultado = numero1+numero2;
// }

// function mostrarResultado(mensaje){
//     console.log(mensaje);
// }

// sumar (10,15);
// mostrarResultado("El resultado de la suma es: " + resultado);

// function sumarConReturn(numero1,numero2){
//     return numero1+numero2;
// }

// console.log("El resultado de la suma es: " + sumarConReturn(5,4))

// // Funciones anónimas

// const suma = function(a,b) {return a+b}

// console.log(suma(5,4));

// // Funciones flecha =>

// const resta = (a,b) => a-b;

// console.log(resta(10,3))


//FUNCIÓN IVA

const iva = x  => x*0.22;

let precio = 1500;

console.log(iva(precio))

function calcularPrecioConIva(precio){
    const precioConIva = precio + iva(precio)
    console.log(precioConIva)
}

calcularPrecioConIva(100)