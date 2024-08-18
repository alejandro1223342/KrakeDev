validarEstructura = function (placa) {

    let hayerrores = "";

    if (placa.length !== 7 && placa.length !== 8) {

        hayerrores += "La placa debe tener 7 u 8 digitos";
    }

    let primerCaracter = placa.charAt(0);
    let segundoCaracter = placa.charAt(1);
    let tercerCaracter = placa.charAt(2);
    let cuartoCaracter = placa.charAt(3);
    let quintoCaracter = placa.charAt(4);
    let sextoCaracter = placa.charAt(5);
    let septimoCaracter = placa.charAt(6);

    if (!esMayuscula(primerCaracter)) {
        hayerrores += "El primer caracter debe ser una letra mayuscula, ";
    }
    if (!esMayuscula(segundoCaracter)) {
        hayerrores += "El segundo caracter debe ser una letra mayuscula, ";
    }
    if (!esMayuscula(tercerCaracter)) {
        hayerrores += "El tercer caracter debe ser una letra mayuscula, ";
    }
    if (!esGion(cuartoCaracter)) {
        hayerrores += "El cuarto caracter debe ser un gion, "
    }
    if (!esDigito(quintoCaracter)) {
        hayerrores += "El quinto caracter debe ser un digito, "

    }
    if (!esDigito(sextoCaracter)) {
        hayerrores += "El sexto caracter debe ser un digito, "

    }
    if (!esDigito(septimoCaracter)) {
        hayerrores += "el septimo caracter debe ser un digito, "
    }

    if (placa.length === 8) {
        let octavoCaracter = placa.charAt(7);
        if (!esDigito(octavoCaracter)) {
            hayerrores += "El octavo carácter debe ser un dígito";
        }
    }

    if (hayerrores === "") {
        return null;
    } else {
        return hayerrores;
    }


}


obtenerProvincia = function (placa) {

    let letraPlaca;
    letraPlaca = placa.charAt(0);

    if (letraPlaca === "A") {
        return "AZUAY";
    } else if (letraPlaca === "B") {
        return "BOLÍVAR";
    } else if (letraPlaca === "C") {
        return "CAÑAR";
    } else if (letraPlaca === "D") {
        return "CARCHI";
    } else if (letraPlaca === "E") {
        return "CHIMBORAZO";
    } else if (letraPlaca === "F") {
        return "COTOPAXI";
    } else if (letraPlaca === "G") {
        return "EL ORO";
    } else if (letraPlaca === "H") {
        return "ESMERALDAS";
    } else if (letraPlaca === "I") {
        return "GUAYAS";
    } else if (letraPlaca === "J") {
        return "LOJA";
    } else if (letraPlaca === "K") {
        return "LOS RÍOS";
    } else if (letraPlaca === "L") {
        return "MANABÍ";
    } else if (letraPlaca === "M") {
        return "MORONA SANTIAGO";
    } else if (letraPlaca === "N") {
        return "NAPO";
    } else if (letraPlaca === "O") {
        return "PASTAZA";
    } else if (letraPlaca === "P") {
        return "PICHINCHA";
    } else if (letraPlaca === "Q") {
        return "SANTA ELENA";
    } else if (letraPlaca === "R") {
        return "SANTO DOMINGO DE LOS TSÁCHILAS";
    } else if (letraPlaca === "S") {
        return "SUCHIL";
    } else if (letraPlaca === "T") {
        return "TUNGURAHUA";
    } else if (letraPlaca === "U") {
        return "ZAMORA-CHINCHIPE";
    } else {
        return null;
    }

}

obtenerTipoVehiculo = function (placa) {

    let letraPlaca;
    letraPlaca = placa.charAt(1);

    if (letraPlaca === "A" || letraPlaca === "Z") {
        return "VEHICULO COMERCIAL";
    }else if(letraPlaca === "E"){
        return "VEHICULO GUBERNAMENTAL"

    }else if(letraPlaca==="X"){
        return "VEHICULO DE USO OFICIAL"
    }else if(letraPlaca==="S"){
        return "VEHICULO DEL GOBIERNO PROVINCIAL"
    }else if(letraPlaca==="M"){
        return "VEHICULOS MUNICIPALES"
    } else {
        return null;
    }
}

obtenerDiaPicoYPlaca = function (placa) {
    let letraPlaca;
    let letraPlaca2;


    if (placa.length === 7 ) {
        letraPlaca = placa.charAt(6);
        letraPlaca2 = placa.charAt(7);
        if (letraPlaca ==="1" || letraPlaca === "2") {
            return "LUNES";
        }else if(letraPlaca === "3" || letraPlaca === "4") {
            return "MARTES"
        }else if(letraPlaca === "5" || letraPlaca === "6") {
            return "MIERCOLES"
        }else if(letraPlaca === "7" || letraPlaca === "8") {
            return "JUEVES"
        }else if(letraPlaca ==="9" || letraPlaca ==="0"){
            return "VIERNES"
        }

    }

    if(placa.length===8){
        letraPlaca2 = placa.charAt(7);
        if (letraPlaca2 ==="1" || letraPlaca === "2") {
            return "LUNES";
        }else if(letraPlaca2 === "3" || letraPlaca === "4") {
            return "MARTES"
        }else if(letraPlaca2 === "5" || letraPlaca === "6") {
            return "MIERCOLES"
        }else if(letraPlaca2 === "7" || letraPlaca === "8") {
            return "JUEVES"
        }else if(letraPlaca2 ==="9" || letraPlaca ==="0"){
            return "VIERNES"
        }

    }





}