// //Funciones de orden superior

// //Abstracción

// function cualquiera(){
//     console.log("Hola mundi");
// }

// cualquiera();

// //const suma =(a,b) => {
// // return a+b ;
// // }
// // igual a la de arriba mas simple
// const suma = (a,b) => a+b;
// console.log(suma(5,6));


// //Funciones que retornan funciones

// function mayorQue(n){
//     return(m) => m > n;
// }

// const mayorQue = (n) => {
//     return (m) => m > n;
// }

// let mayorQueDiez = mayorQue(10);

// console.log(mayorQueDiez(12)) // Compara si 12 es mayor que 10
// console.log(mayorQueDiez(2)) // false


//Otro ejemplo

// function asignarOperacion(operacion) {
//     if (operacion=="suma") {
//         return (a,b) => a+b
//     }else if (operacion =="resta"){
//         return (a,b) => a-b
//     }else {
//         return console.log("Debe ingresar suma o resta")
//     }
// }

// const sumar = asignarOperacion("suma");
// const restar = asignarOperacion("resta");

// console.log(sumar (4,5))
// console.log(restar(10,9))

//Recibir funciones por parametros
// function porCadaUno(array,funcion){
//     for (const elemento of array){
//         funcion(elemento);
//     }
// }

// const numeros =[1,2,3,4,5,10];

// porCadaUno(numeros,alert);

// const segundoArray = [];

// porCadaUno(numeros,(elemento)=>{
//     segundoArray.push(elemento*3);
// })


