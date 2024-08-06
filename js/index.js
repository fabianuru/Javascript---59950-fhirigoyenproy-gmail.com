//OBJET MATH 

// PI
const PI = Math.PI;
console.log(PI);

// Numero de Euler
const E = Math.E;
console.log(E)

const A = -6.59;
const B = 5.12;
const C = 0.49;

//MIN & MAX 
//min - Devuelve el número más chico
// console.log(Math.min(-1,5,9,-500,1000,125,-236))

//max - Devuelve el número más grande
// console.log(Math.max(-1,5,9,-500,1000,125,-236))

//CEIL - REDONDEA EL SIGUIENTE ENTERO QUE TENGAS.  HACIA ARRIBA
// console.log(PI)
// console.log(Math.ceil(PI))
// console.log(Math.ceil(A))
// console.log(Math.ceil(B))
// console.log(Math.ceil(C))

//FLOOR - REDONDEA PARA ABAJO 
// console.log(Math.floor(PI))
// console.log(Math.floor(A))
// console.log(Math.floor(B))
// console.log(Math.floor(C))
// console.log(Math.floor(E))

// //ROUND - REDONDEA AL MAS CERCANO , PARA ARRIBA Y PARA ABAJO
// console.log(Math.round(PI))
// console.log(Math.round(A))
// console.log(Math.round(B))
// console.log(Math.round(C))
// console.log(Math.round(E))

//SQUARE ROOT - raiz cuadrada
console.log(Math.sqrt(9))

//RAIZ CUBICA
console.log(Math.cbrt(8))

//POW - potencia 9^3
console.log(Math.pow(9,3))

//RANDOM- Genera un numero pseudo aleatorio entre 0 y 1
console.log(Math.random())

//Numeros entre 0 y 100
console.log(Math.round((Math.random()*100))) 

//Numeros entre 100 y 200
console.log(Math.round((Math.random()*100))+100)


const generadorNum = () => Math.round(Math.random()*100);

console.log(generadorNum());

//10 numeros al azar
for (let i = 0; i <=10; i++){
    console.log(generadorNum())
}