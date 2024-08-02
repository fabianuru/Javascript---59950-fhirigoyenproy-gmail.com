//metodos de busqueda y transformación

const numeros =[1,2,3,4,5,10];

// numeros.forEach((numero)=>{
//     console.log(numero);
// })

const cursos = [
    {
    nombre:"JavaScript",estado: "Finalizado"
    },
    {
    nombre: "React", estado:"cursando"
    },
    {
    nombre: " fullstack", estado: "cursando"
    }
]


//METODO FIND
const resultado = cursos.find((elemento)=> elemento.nombre ==="JavaScript")
console.log(resultado)
const resultadoUndefined = cursos.find((elemento)=>elemento.nombre ==="Java")
console.log(resultadoUndefined)
const resultadoEstado = cursos.find((elemento)=> elemento.estado ==="cursando")
console.log (resultadoEstado)

//METODO FILTER
const resultado1 = cursos.filter((elemento) => elemento.nombre ==="JavaScript")
console.log(resultado1)
const resultadoEstado1 = cursos.filter((elemento)=> elemento.estado ==="cursando")
console.log (resultadoEstado1)

//METODO SOME
const resultado2 = cursos.some((elemento)=> elemento.some==="JavaScript")
console.log(resultado2) // true
const resultado3 = cursos.some((elemento)=> elemento.some==="phyton")
console.log(resultado3) // false

//METODO MAP
const nombresDeCursos = cursos.map((elemento)=>elemento.nombre);
console.log(nombresDeCursos)

const numerosDobles = numeros.map((elemento)=> elemento*2)
console.log(numerosDobles)

//METODO REDUCE

const resultado5 = numeros.reduce((acumulador, elemento)=> acumulador + elemento, 0  ) 
console.log(resultado5)

//METODO SORT
console.log(numeros)
const resultado6 = numeros.sort((a,b)=> b-a)

console.log(resultado6)

