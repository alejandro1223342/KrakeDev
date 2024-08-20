// se crea el arreglo de tamaño 0 let notas=[];

/*agregarElementos = function (){

//siempre voy a tener un arreglo de tamaño 2
    let notas=[];

    notas.push(5);
    notas.push(10);
    console.log(notas);
}*/
let notas = [];

agregarElementos = function () {


    notas.push(5);
    notas.push(10);
    console.log(notas);
}

probarAgregar = function () {
    let nota;
    nota = recuperarInt("txtNota");
    agregarNota(nota);

}

recorrecArrego = function () {
    let notaR;
    for(let indice=0; indice < notas.length; indice++){
        notaR=notas[indice];
        console.log(notaR);
    }
}


agregarNota = function (nota) {

    notas.push(nota);
}


calcularPromedio = function () {

    let sumaNotas=0;
    let promedio;
    let notaR;

    for(let indice=0; indice < notas.length; indice++){
        notaR=notas[indice];
        sumaNotas=sumaNotas+notaR;

    }


    promedio=sumaNotas/notas.length;
    return promedio;

}

ejecutarPromedio = function () {
    let promedio= calcularPromedio();
    mostrarTexto("lblNotas",promedio);
}