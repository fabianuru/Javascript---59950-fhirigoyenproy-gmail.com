// const arrayDeNumerosVacio = [];
// console.log(arrayDeNumerosVacio);

// const arrayDeNumerosLleno = [1,2,3,89];
// console.log(arrayDeNumerosLleno);
// console.log(arrayDeNumerosLleno[3]) //acceder al 89

// const arrayDeStrings = ["Hola", "a", "todos"];
// console.log(arrayDeStrings)

// let calculoDeSuma = arrayDeNumerosLleno[3]+arrayDeNumerosLleno[5]
// console.log(calculoDeSuma)

// const arrayDeBooleanos= [true,false,false,true];
// console.log(arrayDeBooleanos);


// //Recorrer el array
// const arrayDeNumerosLleno = [1,2,3,89,8,8,39,40,32];
// for (let i = 0; i < arrayDeNumerosLleno.length; i++){
//     console.log("El indindice Nro: " +i+ " contiene el Elemento: " + arrayDeNumerosLleno[i])
// }

// // Ver longitud del array array.length
// console.log("Hay " + arrayDeNumerosLleno.length + " de elemenos en este array");

// //Agregar elementos al array
// arrayDeNumerosLleno.push(123); //agrega al final
// console.log(arrayDeNumerosLleno)
// arrayDeNumerosLleno.unshift(123);// agrega al principio del array , no se recomienda
// console.log(arrayDeNumerosLleno)

// //Eliminar elementos al array
// arrayDeNumerosLleno.pop() // elimina el último elemento del array
// console.log(arrayDeNumerosLleno)
// arrayDeNumerosLleno.shift() // elimina el primer elemento del array
// console.log(arrayDeNumerosLleno)

// //Splice
// arrayDeNumerosLleno.splice(4,2) //A partir del indice 4, borro 2 elementos.
// console.log(arrayDeNumerosLleno)

// //join concatena los elementos con lo que quieras
// arrayDeStrings=["Hola","a","todos"]
// console.log(arrayDeStrings.join(" / "))
// console.log(arrayDeStrings.join("  "))
// console.log(arrayDeStrings.join(" | "))
// console.log(arrayDeStrings.join(""))


// //concatenar arrays

// const nombres1 = ["Sharon","Jose" ,"harold"];
// const nombres2 = ["Juan","Fabian","Mario"];

// const nombresConcatenados =  nombres1.concat(nombres2)
// console.log(nombresConcatenados);

// //Slice
// const nuevoArrayConSlice = nombresConcatenados.slice(2,4);
// console.log(nuevoArrayConSlice)

// //indexOf devuelve el index de lo que busque

// console.log(nuevoArrayConSlice.indexOf("Juan"));
// console.log(nuevoArrayConSlice.indexOf("Sharon"));

// //includes devuelve true or false si la busqueda esta en el array o no

// console.log(nuevoArrayConSlice.includes("Juan"));
// console.log(nuevoArrayConSlice.includes("Sharon"));

// //reverse devuelve el array pero en el orden inverso

// console.log(nuevoArrayConSlice.reverse());

// ARRAY DE OBJETOS

const objeto1 = {nombre: "banana", precio: 1200};
const objeto2= {nombre:"manzana", precio: 1450}

const arrayDeObjetos = [objeto1,objeto2,{nombre: "frutilla",precio:1600}];
console.log(arrayDeObjetos);

arrayDeObjetos.push({nombre:"pera", precio: 1350});

for (const frutas of arrayDeObjetos){
    console.log(frutas.nombre);
    console.log(frutas.precio)
}

class Producto {
    constructor(nombre,precio,stock){
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.stock = parseInt(stock);
    }
    sumarIva() {
        this.precio = this.precio *1.22;
    }

    mostrarNombre(){
        console.log("El nombre de la fruta es: " + this.nombre)
    }
}

const productos = [];
console.log(productos)
productos.push(new Producto("Banana",1000.50,"12"));
productos.push(new Producto("Mandarina",1500,"20"));
productos.push(new Producto("Limon",1900,"15"));
console.log(productos)


for (const fruta of productos) {
    fruta.sumarIva();
}


for (const fruta of productos) {
    fruta.mostrarNombre();
}