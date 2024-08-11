jugar = function () {

    let aleatorio;
    aleatorio = lanzarDado();
    cambiarTexto("lblNumero", aleatorio)
    let mensaje=("EL PEPE= " + aleatorio)
    let mensaje2=("PEPITO= " + aleatorio)

    if(aleatorio == 5){
        cambiarTexto("lblNumero", mensaje)

    }else{
        cambiarTexto("lblNumero", mensaje2)
    }
}

//Crear una función llamada lanzarDado
//No recibe parametros
//retorna un número aleatorio entre 1 y 6

lanzarDado = function () {
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    aleatorio = Math.random(); //entre 0 y 1
    numeroMultiplicado = aleatorio * 6;
    numeroEntero = parseInt(numeroMultiplicado);
    valorDado = numeroEntero + 1;
    return valorDado;

}