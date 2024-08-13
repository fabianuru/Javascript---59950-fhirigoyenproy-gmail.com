//tipos de evento

//EVENTOS DE MOUSE
//cuando paso arriba de la palabra expedita el texto se pinta de violeta
parrafoSpan.addEventListener("mouseover",()=> {
    parrafoCompleto.style.color ="violet"
})
//mousedown  cuandoapreto
//mouseup cuando suelto el click
//mouseover //cuando paso por arriba
//mouseout
//mousemove
//click

//EVENTOS DE TECLADO
//keydown
//keyup

//EVENTO ONCHANGE
const nombreProducto = document.querySelector('#nombreProducto');

nombreProducto.onchange = () => {
    console.log("El nuevo valor del imput es : " + nombreProducto.value)
}

//EVENTO INPUT CADA VEZ QUE ESCRIBO UN CARACTER
const nombrePersona = document.querySelector('#nombrePersona');
nombrePersona.addEventListener('input' , ()=> {
    console.log(nombrePersona.value);
})

//EVENTO SUBMIT
//prevent Default --> previene lo que hace por defecto el subit
let formulario = document.querySelector('#formulario');

formulario.addEventListener ("submit" , (e) => {
e.preventDefault();
// console.log("formulario enviado")
let form = e.target;
console.log(form.children[0].value)
console.log(form.children[1].value)

document.getElementById("nombre").innerHTML = form.children[0].value;
document.getElementById("edad").innerHTML = form.children[1].value;
})



