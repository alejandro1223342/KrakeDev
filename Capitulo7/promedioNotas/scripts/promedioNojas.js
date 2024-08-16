calcularPromedioNotas = function () {

    let cmpNota1;
    let cmpNota2;
    let cmpNota3;

    cmpNota1=recuperarFloat("primeraNota");
    cmpNota2=recuperarFloat("segundaNota");
    cmpNota3=recuperarFloat("terceraNota");

    let promedio;
    promedio=calcularPromedio(cmpNota1,cmpNota2,cmpNota3);
    mostrartexto("lblResultado",promedio.toFixed(2));

    if (promedio < 5 && promedio > 0){

        mostrarImagen("imgResultado","../files/img/reprobado.gif")
        alert("REPROBADO");
    }else if (promedio >=5 && promedio <=8){
        mostrarImagen("imgResultado","../files/img/exito.gif")
        alert("BUEN TRABAJO");
    }else if (promedio>8 && promedio <=10){
        mostrarImagen("imgResultado","../files/img/aprobado.gif")
        alert("EXCELENTE");
    }
    else{

        mostrarImagen("imgResultado","../files/img/fallo.gif")
        alert("DATOS INCORRECTOS");
    }
    return promedio;


}