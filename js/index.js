//CICLOS E ITERACIONES
// let i = 0
// console.log(i)

//FOR 
// for (desde ; hasta; actualizacion) {
//     lo que quiero que se ejecute
// }

// for (let i = 0; i < 10; i++) {
//     console.log("Se esta ejecutando un for hasta el " + i)
// }


//Tabla del x
// let ingreseUnNumero = parseInt(prompt("Ingrese un número"));
// console.log("Tabla de Multiplicar del " + ingreseUnNumero)
// for (let i=1; i <=10; i++) {
//     let r = ingreseUnNumero * i;
//     console.log(ingreseUnNumero + " x " +i+ " = " + r)
// }

//BREAK
// for (let i = 1; i <=10; i++) {
//     if (i==5) {
//         break;
//     }
//     console.log("Los números son: " + i)
// }

//CONTINUE
// for (let i = 1; i <=20; i++) {
//     if (i==15) {
//         continue ;
//     }
//     console.log("Los números son: " + i)
// }

// WHILE
// let ingreseUnValor = prompt("Ingrese un número");
// while(ingreseUnValor != 0) {
//     console.log("El usuario ingreso: " + ingreseUnValor);
//     ingreseUnValor = prompt ("ingrese un numero")
// }

// DO WHILE 
// let ingreseUnValor = prompt("Ingrese un numero")
// do {
//     console.log("El usuario ingreso: " + ingreseUnValor)
//     ingreseUnValor= prompt("Ingrese otro valor");
// } while (ingreseUnValor !=0)

//SWITCH

let ingreseSuNombre = prompt ("Ingrese su nombre")

while (ingreseSuNombre != "Chau") {
switch(ingreseSuNombre) {
    case "Alejandro": 
    console.log("Su nombre es Alejandro");
    break;
    case "Javascript": 
    console.log(ingreseSuNombre + " No es un nombre");
    break;
    default:
    console.log ("nOS VEMOS en disney")
    break;
}
ingreseSuNombre = prompt ("Ingrese otro nombre")
}