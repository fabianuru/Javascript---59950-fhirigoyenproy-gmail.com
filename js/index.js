//PARTE 2 - DESESTRUCTURACIÓN

const usuario = {
    nombre: "Luciano",
    edad:24,
    cursos: {
        desarrolloWeb: "Aprobado",
        javascript: "En curso"
    }
}

const usuario2 = {
    nombre: "Sharon",
    edad:27,
    cursos: {
        desarrolloWeb: "Aprobado",
        javascript: "En curso"
    }
}

// let nombre = usuario2.nombre
// let edad = usuario2.edad

// console.log(nombre,edad);

// let {nombre,edad, telefono, cursos:{javascript, desarrolloWeb}} = usuario
// console.log (nombre,edad, telefono, javascript, desarrolloWeb);


//Alias

// const {
//     nombre:nombreAlias,
//     edad:edadAlias
// } = usuario2;

// console.log(nombreAlias,edadAlias)

const desestructurarObjetos =(objeto) => {
    const {nombre,edad}= objeto;
    console.log(nombre,edad);

}

desestructurarObjetos(usuario);

const productos = ["Azúcar","Yerba","Café"];

const [ , b, c] = productos;
console.log(b);
console.log(c);