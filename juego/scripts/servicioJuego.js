obtenerAleatorio = function () {
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valor;
    aleatorio = Math.random(); //entre 0 y 1
    numeroMultiplicado = aleatorio * 3;
    numeroEntero = parseInt(numeroMultiplicado);
    valor = numeroEntero + 1;
    return valor;
}

generarElemento = function () {
    let numero
    numero = obtenerAleatorio();

    if (numero === 1) {
        return "piedra"
    }

    if (numero === 2) {
        return "papel"
    }

    if (numero === 3) {
        return "tijeras"
    }

    return numero
}

determinarGanador = function (eleccionJugador1, eleccionJugador2) {
    if (eleccionJugador1 === eleccionJugador2) {
        return 0;
    }
    if (
        (eleccionJugador1 === "piedra" && eleccionJugador2 === "tijeras") ||
        (eleccionJugador1 === "papel" && eleccionJugador2 === "piedra") ||
        (eleccionJugador1 === "tijeras" && eleccionJugador2 === "papel")
    ) {
        return 1;
    } else {
        return 2;
    }


}

generarRuta = function (nombre) {

    return  "../img/" + nombre +".png";



}