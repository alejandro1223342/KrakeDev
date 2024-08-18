ejecutarPrueba = function () {
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}

ejecutarPrueba2 = function () {
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    let cadenaInvertida = invertirCadena(mensaje);

    mostrarTexto("lblInvertida",cadenaInvertida)
}



recorrerCadena = function (cadena) {

    //JUANITO
    let caracter;
    for (let posicion = 0; posicion < cadena.length; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("Caracter " + caracter + " posicion " + posicion);
    }

    for (let posicion = 0; posicion <= cadena.length - 1; posicion++) {
        caracter = cadena.charAt(posicion);

        console.log("CARACTER " + caracter + " posicion " + posicion);
    }
}

// REVISAR
invertirCadena = function (cadena) {
    let cadenaI="";

    let caracter;

    for (let posicion = cadena.length -1; posicion >= 0; posicion--) {

        caracter = cadena.charAt(posicion);
        cadenaI += caracter;
    }

    console.log(cadenaI);
    return cadenaI;
}