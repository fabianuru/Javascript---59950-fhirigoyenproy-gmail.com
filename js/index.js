const cuerpo = document.body; 
const boton1 = document.querySelector('#eventoUno');
const boton2 = document.querySelector('#eventoDos');
const boton3 = document.querySelector('#eventoTres');

//1er forma de Capturar un evento de un boton

// elemento.addEventListener ("Tipo de evento",funcion)

boton1.addEventListener("click", ()=> {
    console.log("Se hizo click en el botón 1");
    cuerpo.style.backgroundColor = "pink";
})

//2da forma de capturar un evento de un  boton

boton2.onclick = () => {
    cuerpo.style.backgroundColor ="White"
}

boton3.onclick = () =>{
    document.getElementById('titulo').style.color = "White"
}

//DESPUES DEL RECREO

const parrafoSpan = document.querySelector('#parrafoSpan');
const parrafoCompleto = document.querySelector('#parrafoCompleto');

parrafoSpan.onclick = () => {
    parrafoCompleto.style.color ='red';
}