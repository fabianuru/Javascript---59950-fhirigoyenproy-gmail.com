//REST NUMEROS

const numeros = [1,2,56,-10,25,100,0];

function sumarElementosDelArray(...numeros) {
    return console.log( numeros.reduce((acumulador,numero)=> acumulador + numero,0 ));
}

sumarElementosDelArray(...numeros);

function suma (a,b,c){
    return console.log(a+b+c)

}

suma (10,20,30);