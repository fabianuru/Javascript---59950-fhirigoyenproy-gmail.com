// // console.dir(document);
// // console.log(document);

// // console.log(document.body)
// // console.dir(document.body)

// //ACCESO A LOS NODOS
// //getElementById("id")
// console.log(document.getElementById("titulo"));

// //getElementsByClassName()
// console.log(document.getElementsByClassName("contenedor"));

// const contenedores = document.getElementsByClassName("contenedor");

// console.log(contenedores[0])
// console.log(contenedores[1])
// console.log(contenedores[2])
// console.log(contenedores[3])

// //ACCEDER AL NODO TEXTO DEL TITULO
// console.log(document.getElementById("titulo").innerText);
// let titulo = document.getElementById("titulo").innerText;

// //getElementsByTagName()
// const main = document.getElementsByTagName("main")
// console.log(main[0])

// const secciones = document.getElementsByTagName("section")
// console.log(secciones[0].innerHTML);

// //MODIFICAR UN NODO

// secciones[0].innerHTML = "<h2>Esta section fue actualizada </h2>"

// for (const seccion of secciones) {
//     console.log(seccion.innerHTML);
// }

let divAModificar = document.getElementById("parrafo");
let parrafo = document.createElement("p"); 
// parrafo.innerHTML= "esto es un parafo creado dinamicamente"

// // console.log(parrafoAModificar);

// //Agregar el parrafo al div id parrafo
divAModificar.append(parrafo);

// //Eliminar el parrafo 
// parrafo.remove();


let inputNombre = document.createElement("input");
let inputEdad = document.createElement("input");

divAModificar.appendChild(inputEdad);
divAModificar.appendChild(inputNombre);

inputNombre.id = "nombre"
inputEdad.id ="edad"
inputNombre.value = "Fabian"
inputEdad.value = "31"