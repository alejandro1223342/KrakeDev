calcularPromedio = function (nota1, nota2, nota3) {
    let promedio;
    promedio = (nota1 + nota2 + nota3) / 3;
    return promedio;
}

calcular = function () {
    let nota1;
    let nota2;
    let nota3;
    let resultado;
    let resultadoFormato;
    let existeError = false;

    nota1 = recuperarFloat("txtNota1");


    nota2 = recuperarFloat("txtNota2");


    nota3 = recuperarFloat("txtNota3");


    if (esNotaValida(nota1, "lblError1") & esNotaValida(nota2, "lblError2") & esNotaValida(nota3, "lblError3")) {
        resultado = calcularPromedio(nota1, nota2, nota3);
        resultadoFormato = resultado.toFixed(2);
        mostrarTexto("lblResultado", resultadoFormato);
    } else {
        mostrarTexto("lblResultado", "0.0");
    }


}

esNotaValida = function (nota, idComponeneteError) {
    let hayErrores = false;
    if (isNaN(nota)) {
        mostrarTexto(idComponeneteError, "DEBE INGRESAR UN NUMERO");
        hayErrores = true;
    }

    if (nota < 0 || nota > 10) {
        mostrarTexto(idComponeneteError, "EL NUMERO DEBE ESTAR ENTRE 0 Y 10");
        hayErrores = true;

    }
    if(hayErrores===false){
        mostrarTexto(idComponeneteError,"");
    }
    return !hayErrores;

}


//COMPARA SI EL NUMERO ES UN NUMERO isNaN
/*if (isNaN(nota1)) {
    alert("SOLO INGRESAR NUMEROS");
} else {
    nota2 = recuperarFloat("txtNota2");
    if (isNaN(nota2)) {
        alert("SOLO INGRESAR NUMEROS");
    } else {
        nota3 = recuperarFloat("txtNota3");
        if (isNaN(nota3)) {
            alert("SOLO INGRESAR NUMEROS");
        }else{
            resultado=calcularPromedio(nota1, nota2, nota3);
            resultadoFormato=resultado.toFixed(2);
            mostrarTexto("lblResultado",resultadoFormato);
        }
    }
}*/