// let nombreProducto = "Azúcar";
// let precioProducto = 1000;
// let categoriaProducto = "Almacen";

// console.log(nombreProducto)
// console.log(precioProducto)
// console.log(categoriaProducto)

// let nombreProducto1 = "yerba"
// let precioProducto1="1200"
// let categoriaProducto1="Almacen";

// console.log(nombreProducto1,precioProducto1,categoriaProducto1)

// //Definir objeto producto

// const producto1 = {
//     nombre: "Azúcar",
//     precio: 1000,
//     categoria:"Almacen"
// }
// console.log(producto1)
// console.log(producto1.nombre)
// console.log(producto1.precio)
// console.log(producto1.categoria)
// console.table(producto1)

// const producto2 = {
//     nombre: "Yerba",
//     precio:1200,
//     categoria: "Almacen"
// }
// console.log(producto2)
// console.log(producto2.nombre)
// console.log(producto2["nombre"])
// console.log(producto2.precio)
// console.log(producto2["precio"])
// console.log(producto2.categoria)
// console.log(producto2["categoria"])

// producto1.categoria = "dulces"; // reasignación de valor

// console.log(producto1.categoria)

//Constructor de objetos .OPCION 1
// function Producto(nombre,precio,categoria){
//     this.nombre = nombre;
//     this.precio = precio;
//     this.categoria = categoria;
// }

// const producto3 = new Producto("Azúcar",1000,"Almacen")
// console.log(producto3)

//Constructor de objetos. OPCION 2

// function Producto1 (objeto) {
//     this.nombre = objeto.nombre;
//     this.precio = objeto.precio;
//     this.categoria = objeto.categoria;
// }

// const producto5 = new Producto1({
//     nombre: "yerba",
//     precio: 1200,
//     categoria:"almacen"
// })

// console.log(producto5)


// //Crear un auto
 
// function Auto (marca,color,precio,modelo,cilindraje){
//     this.marca = marca;
//     this.color= color;
//     this.precio= precio;
//     this.modelo=modelo;
//     this.cilindraje=cilindraje;
// }

// const auto1 = new Auto ("chevrolet","negro",2500,"corsa","1.0");
// const auto2 = new Auto ("Toyota", "",null , 2024, "1.8");
// const auto3 = new Auto ("Ferrari",undefined,1000000,"6.0" )


// console.log(auto1)
// console.log(auto2)
// console.log(auto3)

//Diferencia entre funciones y metodos

// function Auto (marca,color,precio,modelo,cilindraje){
//     this.marca = marca;
//     this.color= color;
//     this.precio= precio;
//     this.modelo=modelo;
//     this.cilindraje=cilindraje;
//     this.encender = function () {
//         console.log("El auto esta encendido")
//     }
//     this.apagar = function () {
//         console.log("El auto esta apagado")
//     }
// }

// const auto3 = new Auto ("Ford","Azul",100000,2024,"3.0");
// auto3.encender();
// auto3.apagar();

// function Moto (marca,color,precio,modelo,cilindraje){
//     this.marca = marca;
//     this.color= color;
//     this.precio= precio;
//     this.modelo=modelo;
//     this.cilindraje=cilindraje;
//     this.encender = function () {
//         console.log("La moto esta encendida")
//     }
//     this.apagar = function () {
//         console.log("La moto esta apagada")
//     }
//     this.precioFinal = function (){
//         this.precio = precio*1.21
//     }
// }

// const moto1 = new Moto ("BMW", "Verde",12000,2022,"1.0")
// moto1.encender();
// moto1.apagar();
// console.log(moto1)
// moto1.precioFinal();


// console.log("marca" in auto3);
// console.log("nombre" in auto3);

// for (const propiedad in auto3) {
//     console.log(auto3[propiedad])
// }

//CLASES 

class Vehiculo {
    constructor (marca,color,precio,modelo,cilindraje) {
        this.marca = marca;
        this.color=color;
        this.precio =precio;
        this.modelo = modelo;
        this.cilindraje= cilindraje;
    }
    encender() {
        console.log("El auto esta encendido")
    }
    apagar() {
        console.log("El auto esta apagado")
    }
}

const auto = new Vehiculo("Ford","Azul",10000,2024,"3.0");
console.log(auto);