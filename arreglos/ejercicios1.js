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
    for (let indice = 0; indice < notas.length; indice++) {
        notaR = notas[indice];
        console.log(notaR);
    }
}


agregarNota = function (nota) {

    notas.push(nota);

    mostraNotas();
}


calcularPromedio = function () {

    let sumaNotas = 0;
    let promedio;
    let notaR;

    for (let indice = 0; indice < notas.length; indice++) {
        notaR = notas[indice];
        sumaNotas = sumaNotas + notaR;

    }


    promedio = sumaNotas / notas.length;
    return promedio;

}

ejecutarPromedio = function () {
    let promedio = calcularPromedio();
    mostrarTexto("lblNotas", promedio);
}

generarTabla = function () {

    let contenidoTabla = [];
    let cmpTabla = document.getElementById("divTabla")
    contenidoTabla += "<table><tr><td>UNO</td></tr>" +
        "<tr><td>DOS</td></tr></table>";
    cmpTabla.innerHTML = contenidoTabla;

}

mostraNotas = function () {
    let cmpTabla = document.getElementById("divTabla")

    let contenidoTabla = "<table><tr><th>NOTA</th></tr>";

    for(let i=0; i<notas.length; i++) {
        //obtengo las notas
        let nota = notas[i];
        contenidoTabla+="<tr><td>";
        contenidoTabla+=nota;
        contenidoTabla+="</tr></td>"

    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML = contenidoTabla;
}