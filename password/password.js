ejecutarValidacion = function () {
    let texto;
    texto = recuperarTexto("txtPassword");

    let validar = validarPassword(texto);
    if (validar === "") {
        mostrarTexto("lblResultado", "PASSWORD CORRECTO")
    }else{
        mostrarTexto("lblResultado", validar)
    }

}

validarPassword = function (password) {
    let error = "";

    //variables bander, para verificar si cumplen las condiciones dentro del bucle
    let tieneMayuscula = false;
    let tieneDigito = false;
    let tieneEspecial = false;
// se recorre cada caracter dentro de la contraseña y segun el tipo de caracter se activa la variable correspondiente
    for (let i = 0; i < password.length; i++) {
//si quiero hacer un barrido debo tomar la variable i como caracter a validar;
        let caracter = password.charAt(i);

        if (esMayuscula(caracter)) {
            tieneMayuscula = true;
        }

        if (esDigito(caracter)) {
            tieneDigito = true;
        }

        if (esEspecial(caracter)) {
            tieneEspecial = true;
        }


    }

    if (password.length < 8) {
        error += "La password debe tener mínimo 8 caracteres"
    }
    if (password.length > 16) {
        error += "La password debe maximo 16 caracteres"
    }

    if (!tieneMayuscula) {
        error += "La password debe tener al menos una letra mayuscula"
    }
    if (!tieneDigito) {
        error += "La password debe tener al menos un digito"
    }

    if (!tieneEspecial) {
        error += "La password debe tener al menos un caracter especial (*),(-),(_)"
    }

    if (error === "") {
        return ""
    } else {
        return error;
    }


}

esMayuscula = function (caracter) {

    if (caracter.charCodeAt(0) >= 65 && caracter.charCodeAt(0) <= 90) {
        return true;
    } else {
        return false;
    }
}


esDigito = function (caracter) {
    if (caracter.charCodeAt(0) >= 48 && caracter.charCodeAt(0) <= 57) {
        return true
    } else {
        return false;
    }
}

esEspecial = function (caracter) {
    if (caracter.charCodeAt(0) === 42 || caracter.charCodeAt(0) === 95 || caracter.charCodeAt(0) === 196) {
        return true
    } else {
        return false;
    }
}