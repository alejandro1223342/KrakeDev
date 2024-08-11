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

    
    return promedio;


}