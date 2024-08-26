// //Spread de operador

// const numeros = [1,2,56,-10,25,100,0];

// console.log(Math.max(numeros)); // Porque el metodo precisa numeros y el array es un objeto
// console.log(Math.max(1,2,56,-10,25,100,0));
// console.log(Math.min(1,2,56,-10,25,100,0));
// console.log(...numeros); // muestra todos los numeros sin mostrar array
// console.log(Math.max(...numeros));

// const productos = ["Azúcar", "Yerba" , "Café", "Pepsi"];

// console.log(productos);
// console.log(...productos);

// const productos2 = ["Coca Cola", "Fernet" , "Hielo"];


// const nuevoArrayProductos = [...productos,...productos2] ;

// console.log(nuevoArrayProductos);

// const otroNuevoArrayDeProductos = ["Chocolate","Helado", ...nuevoArrayProductos];

// console.log(otroNuevoArrayDeProductos);

// const otroArray = [ "Milanesa","Chivito","Carne"]

// //RE ESCRIBE LOS VALORES 0 1 2 DEL PRIMER ARRAY CON LOS DATOS DEL SEGUNDO ARRAY
// const objetoProducto = {
//     ...otroNuevoArrayDeProductos,
//     ...otroArray
// }

// console.log(objetoProducto)