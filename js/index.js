//Ejercicios Clase 2

// Variables y Constantes

// Declara una variable llamada nombre y asígnale tu nombre.
let nombre = "Fabián"

// Declara una constante llamada PI y asígnale el valor de π (pi).
let pi = 3.14

// Booleanos

// Declara una variable llamada esMayorDeEdad y asígnale true si tienes más de 18 años, o false si tienes 18 años o menos.
let esMayorDeEdad = true

// Prompt, Alert y Console.log

// Pide al usuario que ingrese su edad utilizando prompt y almacena el valor en una variable llamada edadUsuario.
let edadUsuario = parseInt(prompt("Ingrese su edad"))

// Muestra un mensaje de alerta que diga "¡Hola!".
alert ("!Hola!")

// Imprime en la consola el mensaje "La edad ingresada es: [valor de edadUsuario]".
alert("La edad ingresada es: " + edadUsuario)

// Control de Flujo con if y if else

// Utilizando un if, verifica si un número ingresado por el usuario es positivo, negativo o cero, e imprime un mensaje correspondiente.
if (edadUsuario > 0) {
    console.log("El número es positivo.");
}
if (edadUsuario < 0) {
    console.log("El número es negativo.");
}
if (edadUsuario === 0) {
    console.log("El número es cero.");
}
// Utilizando un if else, verifica si un número ingresado por el usuario es par o impar, e imprime un mensaje correspondiente.
if (edadUsuario%2===0){
    console.log("El número es par")
}else {
    console.log("El número es impar")
}

// Utilizando un if else, verifica si un número ingresado por el usuario es mayor que 100, menor que 100 o igual a 100, e imprime un mensaje correspondiente.
if (edadUsuario > 100 ){
    console.log("La edad ingresada es mayor a 100")
}else if (edadUsuario < 100){
    console.log ("La edad ingresada es menor a 100")
} else {
    console.log("La edad ingresada es igual a 100")
}

// Operadores Lógicos

// Utilizando operadores lógicos, verifica si un número ingresado por el usuario es divisible tanto por 2 como por 3.
if ((edadUsuario%2===0) && (edadUsuario%3===0)) {
    console.log("El número es divisible tanto por 2 como por 3")
}

// Utilizando operadores lógicos, verifica si un número ingresado por el usuario es mayor que 0 y menor que 100.
if ((edadUsuario>0)&& (edadUsuario<100)){
    console.log("El numero ingresado es mayor que 0 y menor que 100")
}

// Utilizando operadores lógicos, verifica si un número ingresado por el usuario es mayor que 10 o menor que -10.
if ((edadUsuario>10)||(edadUsuario< -10)){
    console.log("El numero ingresado es mayor que 10 o menor que -10")
}

// Ejercicios Adicionales
// Pide al usuario que ingrese un número utilizando prompt, luego verifica si es un número primo e imprime un mensaje correspondiente.

let numeroPrimo = parseInt(prompt("Ingrese un número"))

