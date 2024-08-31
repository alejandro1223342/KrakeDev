//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;
let intentos = 0;
let coincidencias = 0;
let errores = 0;

esMayuscula = function (caracter) {

    if (caracter.charCodeAt(0) >= 65 && caracter.charCodeAt(0) <= 90) {
        return true;
    } else {
        return false;
    }
}

mostrarLetra = function (letra, posicion) {

    if (posicion === 0) {
        mostrarTexto("div0", letra);
    } else if (posicion === 1) {
        mostrarTexto("div1", letra);
    } else if (posicion === 2) {
        mostrarTexto("div2", letra);
    } else if (posicion === 3) {
        mostrarTexto("div3", letra);
    } else if (posicion === 4) {
        mostrarTexto("div4", letra);
    }
    coincidencias++;
}

validar = function (letra) {

    let letrasEncontradas = 0;

    for (let i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta.charAt(i) === letra) {
            mostrarLetra(letra, i);
            letrasEncontradas++;
        }

    }

    if (letrasEncontradas === 0) {
        alert("LA LETRA NO ES PARTE DE LA PALABRA")
        errores++;
        mostrarAhorcado();
        console.log(errores)
    }

}

ingresarLetra = function () {
    let recuperar;
    recuperar = recuperarTexto("txtLetra");
    let esValida = true;

    intentos++;

    if (coincidencias === 5) {
        alert("HA GANADO")
        mostrarImagen("ahorcadoImagen","ganador.gif")
    }

    if (intentos === 10) {
        alert("HA PERDIDO")
        mostrarImagen("ahorcadoImagen","./gameOver.gif")
    }

    for (let i = 0; i < recuperar.length; i++) {
        let caracter = recuperar.charAt(i);
        if (!esMayuscula(caracter)) {
            esValida = false;


        }
    }

    if (!esValida) {
        alert("Solo se aceptan mayusculas.");

    } else {
        validar(recuperar);
    }


}


guardarPalabra = function () {
    let palabra

    palabra = recuperarTexto("txtSecreta");
    let esValida = true;
    if (palabra.length === 5) {

        for (let i = 0; i < palabra.length; i++) {
            let caracter = palabra.charAt(i);
            if (!esMayuscula(caracter)) {
                esValida = false;

            }
        }

        if (!esValida) {
            alert("ERROR: La palabra tiene 5 caracteres pero no todos son mayúsculas.");

        } else {
            palabraSecreta = palabra;
            console.log(palabraSecreta);
        }

    } else {
        alert("ERROR: La palabra no tiene exactamente 5 caracteres.");

    }


}

mostrarAhorcado = function () {

    if (errores > 0) {
        mostrarImagen("ahorcadoImagen", "./Ahorcado_0"+errores+".png");
    }
}
