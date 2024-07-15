// Declaración de variables - reservo espacio de memoria
// evitar usar var para declarar variables

// var nombre = "Fabián";
// console.log(nombre);

// var nombre = "Javascript";
// console.log(nombre)

// var nombre = "Javascript2";
// console.log(nombre)

//DECLARACIÓN Y DESIGNACIÓN

//Empezamos a usar let para declarar variables

//Declaración de variable - crear variable
let userName;

//Asignación de variable - asignar valor a la variable
userName = "Fabian";
console.log(userName);

//Inicializar variable - crear variable con el valor designado
let userPassword = "123456"; 
console.log(userPassword)

//CONST no se pueden reasignar sus valores
const PI =3.14;
const LETRA = 'A';
const ESPACIO = " ";

//OPERACIONES CON VARIABLES y/o CONSTANTES

//Concatenación
let variablesConcatenadas = userName + ESPACIO + userPassword;
console.log(variablesConcatenadas)
console.log(userName,userPassword) // deja un espacio entre string y string

//Operaciones matemáticas

const UNO = 1
const DOS = 2
const TRES =3
const CUATRO = 4
const CINCO = 5
const SEIS =6
const SIETE =7
const OCHO = 8
const NUEVE =9

let resultado;

//Suma
resultado = DOS + TRES;
console.log(resultado);
//Resta
resultado = CUATRO - TRES;
console.log(resultado);
//Multiplicación
resultado = DOS * TRES;
console.log(resultado);
//División
resultado = NUEVE / TRES;
console.log(resultado);

//PROMPT, CONSOLA Y ALERT
const textoPrevio = "El nombre ingresado es:"
let nombreCompleto = prompt ("Ingrese su nombre");
console.log(nombreCompleto);

// En alert() a diferencia de console.log() no puedo usar , para concatenar
alert (textoPrevio +ESPACIO+ nombreCompleto)


