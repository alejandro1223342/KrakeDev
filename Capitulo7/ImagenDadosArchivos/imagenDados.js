let puntos;
puntos = 0;
let lanzamientos;
lanzamientos = 5;


jugar = function () {
    let resultado;
    resultado = lanzarDado();
    console.log(resultado);
    mostrarCara(resultado);
    modificarPuntos(resultado)
    modificarLanzamientos(resultado);
}

modificarPuntos = function (numero) {
    //Si el jugador obtiene más de 20 puntos
    //mostrar un mensaje de Ganaste!!
    //Colocar puntaje en 0 y lanzamientos en 5

    puntos = puntos + numero;
    cambiarTexto("lblPuntos", puntos)
    let mensaje;
    mensaje = "GANASTES!!!"
    if (puntos > 20) {
        cambiarTexto("lblWin", mensaje)
        limpiar();

    }


}

limpiar = function () {
//Colocar puntaje en 0 y lanzamientos en 5
    //en las variables y en pantalla
    //quitar la imagen

    puntos = 0;
    lanzamientos = 6;

    if (lanzamientos>6){
        cambiarTexto("lblPuntos", "0");
        cambiarTexto("lblLanzamiento", "5");
        cambiarImagen("imgDado","")
    }


}

//No recibe parametros
//resta 1 a la variable lanzamientos, guarda el resultado en la misma variable
//y muestra en pantalla
modificarLanzamientos = function () {

    lanzamientos = lanzamientos - 1;
    cambiarTexto("lblLanzamiento", lanzamientos)

    //Si lanzamiento llega a 0
    //mostrar en pantalla

    let mensaje;
    mensaje = "PERDISTES :C"

    if (lanzamientos == 0) {
        cambiarTexto("lblWin", mensaje)
        limpiar();

    }


}

//Funcion mostrar cara, recibe el numero que quiere mostrar
//muestra la imagen correspondiente al numero que recibe
//no retorna nada

mostrarCara = function (numero) {

    if (numero == 1) {
        cambiarImagen("imgDado", "./dados1.png");
    } else if (numero == 2) {
        cambiarImagen("imgDado", "./dados2.png");
    } else if (numero == 3) {
        cambiarImagen("imgDado", "./dados3.png");
    } else if (numero == 4) {
        cambiarImagen("imgDado", "./dados4.png");
    } else if (numero == 5) {
        cambiarImagen("imgDado", "./dados5.png");
    } else if (numero == 6) {
        cambiarImagen("imgDado", "./dados6.png");
    }
}


lanzarDado = function () {
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio = Math.random();
    aleatorioMultiplicado = aleatorio * 6;
    aleatorioEntero = parseInt(aleatorioMultiplicado);
    valorDado = aleatorioEntero + 1;
    return valorDado;
}