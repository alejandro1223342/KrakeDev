ejecutarPrueba = function () {
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}

ejecutarPrueba2 = function () {
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    let cadenaInvertida = invertirCadena(mensaje);

    mostrarTexto("lblInvertida", cadenaInvertida)
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
    let cadenaI = "";

    let caracter;

    for (let posicion = cadena.length - 1; posicion >= 0; posicion--) {

        caracter = cadena.charAt(posicion);
        cadenaI += caracter;
    }

    console.log(cadenaI);
    return cadenaI;
}

buscarLetra = function (cadena, letra) {
    let letraI;
    let existeLetra = false;
    for (let i = 0; i < cadena.length; i++) {
        letraI = cadena.charAt(i);

        //comparo la letra
        if (letraI === letra) {
            existeLetra = true;
        }
    }
    //No poner la validación dentro del for
    if (existeLetra === true) {
        return true
    } else {
        return false;
    }

}

contarMayusculas=function (cadena) {
    let letraM;
    let contadorM=0;
    for(let i=0;i<cadena.length;i++){
        letraM = cadena.charAt(i);

       if(esMayuscula(letraM)===true){
           contadorM++;
       }
    }

    console.log(contadorM);
}