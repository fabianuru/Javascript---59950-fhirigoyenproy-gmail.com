//SUGAR SYNTAX

//OPERADOR ++

// let acumulador = 0;
// console.log(acumulador);

// acumulador = acumulador +1;
// console.log(acumulador);

// acumulador += 1;
// console.log(acumulador);

// acumulador++ ;
// // console.log(acumulador);

// //OPERADOR TERNARIO

// // let temperatura = parseInt (prompt("Ingrese una temperatura"));

// // // if (temperatura >= 24) {
// // //     console.log("Esta agradable")
// // // } else {
// // //     console.warn("Esta de templado a frio")
// // // }


// // temperatura >= 24 ? console.log("Esta agradable"): console.warn("Esta frió")

// // condición ? true : false 

// // let permiso;

// const usuario = {
//     nombre: "Luciano",
//     edad:24,
//     cursos: {
//         desarrolloWeb: "Aprobado",
//         javascript: "En curso"
//     }
// };

// // // if (usuario.edad >=18) {
// // //     permiso = true;
// // // }else {
// // //     permiso = false;
// // // }

// // // if (permiso) {
// // //     console.log(`El usuario ${usuario.nombre} puede tomarse una cervecita`)
// // // } else {
// // //     console.warn(`El usuario ${usuario.nombre} es menor de edad`)
// // // }

// // const permiso = (usuario.edad >=18)  ?  console.log(`El usuario ${usuario.nombre} puede tomarse una cervecita`):console.warn(`El usuario ${usuario.nombre} es menor de edad`);

// //OPERADOR || (and)

// const carritoArray = [];

// carritoArray.length === 0 && console.log("El carrito esta vacío");

// const usuarioNull = null

// console.log(usuario || "El usuario No existe");
// console.log(usuarioNull || "El usuario No existe");

// //Accesso condicional  a un objeto

// console.log(usuario.cursos || "El usuario no existe");

// console.log(usuario?.cursos?.desarrolloWeb || "El curso no existe");
// console.log(usuario?.cursos?.javascript || "El curso no existe");
// console.log(usuario?.cursos?.react || "El curso no existe");
// console.log(usuarioNull?.nombre || "El usuario no existe");