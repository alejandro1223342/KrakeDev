validarPlaca = function () {
    let placa;
    placa = recuperarTexto("lblPlaca");
    let erroresEstructura
    erroresEstructura = validarEstructura(placa);

    let dia;
    dia=obtenerDiaPicoYPlaca(placa )
    if (erroresEstructura === null) {
        mostrarTexto("lblPicoPlaca", "" + dia);

        mostrarTexto("lblErrores", "ESTRUCTURA VALIDA")


    } else {

        mostrarTexto("lblErrores", "ESTRUCTURA INCORRECTA\n" + erroresEstructura)
    }

    let provincia;
    provincia = obtenerProvincia(placa);
    if (provincia != null) {
        mostrarTexto("lblProvincia", provincia);
    } else {
        mostrarTexto("lblProvincia", "Provincia Incorrecta");
    }

    let tipoV;

    tipoV = obtenerTipoVehiculo(placa);

    if (tipoV != null) {
        mostrarTexto("lblTipoV", "TIPO VEHICULO: " + tipoV);
    }



}

limpiar = function () {
   mostrarTextoEnCaja("lblPlaca","")
    mostrarTexto("lblErrores","Errores");
    mostrarTexto("lblProvincia","Provincia");
    mostrarTexto("lblTipoV","Tipo Vehículo");
    mostrarTexto("lblPicoPlaca","Pico Placa");


}