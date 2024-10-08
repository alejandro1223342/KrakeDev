cuentas=[
    {numeroCuenta:"02234567", cedula:"1714616123",nombre:"Juan",apellido:"Perez",saldo:0.0},
    {numeroCuenta:"02345211",cedula:"1281238233",nombre:"Felipe",apellido:"Caicedo",saldo:0.0}
]

cargar=function(){
    mostrarComponente("divTransacciones");
    ocultarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    
}

/*
    Busca la cuenta en el arreglo en función del número de cuenta,
    si existe retorna el objeto cuenta, caso contrario retorna null. 
*/
buscarCuenta = function (numeroCuenta) {

    let elementoCuenta;
    let cuentaEncontrado = null; // Agregar null
    for (let i = 0; i < cuentas.length; i++) {
        elementoCuenta = cuentas[i];

        if (elementoCuenta.numeroCuenta === numeroCuenta) {
            cuentaEncontrado = elementoCuenta;
            break;
        }
    }

    return cuentaEncontrado;

}
ejecutarBusqueda = function () {
    let valorCuenta = recuperarTexto("txtCuentaTra");
    let cuenta = buscarCuenta(valorCuenta);

    if (cuenta === null) {
        alert("CUENTA NO EXISTE")
    } else {
        mostrarTextoEnCaja("txtCedulaTra", cuenta.cedula);
        mostrarTextoEnCaja("txtNombreTra", cuenta.nombre + " " + cuenta.apellido)
        mostrarTextoEnCaja("txtSaldoTra", cuenta.saldo);
        deshabilitarComponente("txtCuentaTra");
        deshabilitarComponente("txtCedulaTra");
        deshabilitarComponente("txtNombreTra");
        deshabilitarComponente("txtSaldoTra");

    }
}


depositar = function () {

    let numeroCuenta = recuperarTexto("txtCuentaTra");
    let monto = parseFloat(recuperarTexto("txtMontoDepo"));

    let cuenta = buscarCuenta(numeroCuenta);

    cuenta.saldo += monto;

    movimientosCuenta = {
        numeroCuenta: numeroCuenta,
        monto: monto,
        tipo: "C"  // Crédito
    };

    movimientos.push(movimientosCuenta);
    console.log(movimientosCuenta)
    alert("DEPÓSITO REALIZADO");
    mostrarTextoEnCaja("txtSaldoTra", cuenta.saldo);

}


depositar = function () {

    let numeroCuenta = recuperarTexto("txtCuentaTra");
    let monto = parseFloat(recuperarTexto("txtMontoDepo"));

    let cuenta = buscarCuenta(numeroCuenta);

    cuenta.saldo += monto;

    movimientosCuenta = {
        numeroCuenta: numeroCuenta,
        monto: monto,
        tipo: "C"  // Crédito
    };

    movimientos.push(movimientosCuenta);
    console.log(movimientosCuenta)
    alert("DEPÓSITO REALIZADO");
    mostrarTextoEnCaja("txtSaldoTra", cuenta.saldo);

}
retirar = function () {
    let numeroCuenta = recuperarTexto("txtCuentaTra");
    let monto = parseFloat(recuperarTexto("txtMontoDepo"));

    let cuenta = buscarCuenta(numeroCuenta);

    if(cuenta.saldo<monto || cuenta.saldo===0){
        alert("No puede retirar esta cantidad")

    }else{
        cuenta.saldo -= monto;

        movimientosCuenta = {
            numeroCuenta: numeroCuenta,
            monto: monto,
            tipo: "D"  // Crédito
        };

        movimientos.push(movimientosCuenta);
        console.log(movimientosCuenta)

        alert("RETIRO REALIZADO");
        mostrarTextoEnCaja("txtSaldoTra", cuenta.saldo);
    }


}