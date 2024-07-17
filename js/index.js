// //if (condicion) 
// //  {lo que queremos que se ejecute
// //  } 

// if (true) {
//     console.log("Condición cumplida o verdadera")
// }

// if (false) {
//     console.log("condición no cumplida o falsa, no se imprime")
// }

// //Las booleanas también son variables primitivas

// let V = true;
// let F = false;

// if (V) {
//     console.log("Condición cumplida o verdadera usando V")
// }

// const EDAD = 18;
// const edadIngresada = prompt("Ingrese su edad:")
// if (edadIngresada >= EDAD) {
//     alert ("Puede ingresar")
// } else {
//     alert ("No puede ingresar")
// }

// //Condiciones anidadas if ... else if... else if
// const PI = 3.14;
// const ingreseUnValor = prompt ("Ingrese un número:")
// if(ingreseUnValor < PI) {
//     console.log("El número ingresado es menor a PI")
// } else if (ingreseUnValor == PI) { 
//     console.log("el número ingresado es igual a PI")
// } else if (ingreseUnValor > PI) {
//     console.log("El número ingresado es Mayor a PI")
// } else {
//     console.error("El dato ingresado no es un número")
// }

// //Ejemplo con string

// let color = "Azul";
// let ingreseUnColor = prompt("Ingrese un color")

// if (ingreseUnColor == color) {
//     console.log("El color ingresado es " + color)
// } else {
//     console.warn("El Color ingresado NO ES " + color)
// }

// //Tabla de verdad (lógica proposicional)
// const V = true;
// const F = false;

// console.log("Tabla de Verdad del Operador && (Y)")
// console.log(V && V); //Si ambos son v => true
// console.log(V && F); //Si al menos uno de los valores es f => false
// console.log(F && V); //Si al menos uno de los valores es f => false
// console.log(F && F); //Si ambos son F => false

// console.log("Tabla de Verdad del Operador || (O)")
// console.log(V || V); //Si ambos son V => true
// console.log(V || F); //Si al menos uno de los valores es V => true
// console.log(F || V); //Si al menos uno de los valores es V => true
// console.log(F || F); //Si ambos son F  => false

// console.log("Tabla de Verdad del Operador Negación (!)")
// console.log(!V); //si no es Verdadero => false
// console.log(!F); //si no es false => true

const VACIO = "";
const ingreseUnNumeroPorPrompt= prompt("Ingrese un numero")

if (ingreseUnNumeroPorPrompt == VACIO) {
    console.warn("No ha ingresado nada")
}else if (ingreseUnNumeroPorPrompt <=0){
    console.warn("No se puede ingresar u valor negativo o igual a 0")
}else if (ingreseUnNumeroPorPrompt >0 && ingreseUnNumeroPorPrompt <1){
    console.log ("EeL NUMERO INGRESADO ESTA ENTRE 0 y 1")
}else if (ingreseUnNumeroPorPrompt ==1 ){
    console.log("Usted ingreso el 1")
}else if (ingreseUnNumeroPorPrompt >1 && ingreseUnNumeroPorPrompt <=50){
    console.log("El numero ingresado esta entre 1 y 50")
}else if (ingreseUnNumeroPorPrompt >50){
    console.log("El numero ingresado es mayor a 50")
}else {
    console.error ("El dato ingresado no es un numero")
}


//ACTIVIDAD EN CLASE:

if(prompt("Ingreseun valor: ") > 1000){
    alert ("Numero mayor a 1000")
}

if (prompt("Ingrese un texto: ")== "Hola"){
    console.warn("hola")
}

const valor = prompt ("ingrese un valor");
if ((valor >10 || valor == 10) && (valor <50 || valor ==50)) {
    alert ("Aprobo")
}