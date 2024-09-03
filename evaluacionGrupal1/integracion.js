cuentas = [
    {numeroCuenta: "02234567", cedula: "1714616123", nombre: "Juan", apellido: "Perez", saldo: 0.0},
    {numeroCuenta: "02345211", cedula: "1281238233", nombre: "Felipe", apellido: "Caicedo", saldo: 0.0}
]

movimientos = [
    {numeroCuenta: "02234567", monto: 10.24, tipo: "D"},
    {numeroCuenta: "02345211", monto: 45.90, tipo: "D"},
    {numeroCuenta: "02234567", monto: 65.23, tipo: "C"},
    {numeroCuenta: "02345211", monto: 65.23, tipo: "C"},
    {numeroCuenta: "02345211", monto: 12.0, tipo: "D"},
]
 movimientosCuenta = [];
/*
    En este archivo se deben colocar todas las funciones de cuentas, movimientos y transacciones
    IMPORTANTE: NO DUPLICAR FUNCIONES, si existe una misma función en varios archivos,
    dejar solo una de ellas, ejemplo la función buscarCuenta
*/

//OCULTAR Y MOSTRAR LOS DIVS, para que cada opción muestre solo su parte


//Cuando se realiza un depósito de forma exitosa, se debe crear un objeto movimiento
//con el tipo C, que corresponde a CREDITO, el número de cuenta a la que se hizo el depósito
//y el monto que se depositó. Este objeto movimiento se agrega al arreglo movimientos

//Cuando se realiza un retiro de forma exitosa, se debe crear un objeto movimiento
//con el tipo D, que corresponde a DEBITO, el número de cuenta a la que se hizo el retiro
//y el monto que se retiró. Este objeto movimiento se agrega al arreglo movimientos


cargar = function () {
    mostrarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    ocultarComponente("divTransacciones");

}

cargarTransacciones = function () {
    mostrarComponente("divTransacciones");
    ocultarComponente("divCuentas");
    ocultarComponente("divMovimientos");

}

cargarMovimientos = function () {

    ocultarComponente("divTransacciones");
    ocultarComponente("divCuentas");
    mostrarComponente("divMovimientos");
}

mostrarCuentas = function () {
    /*
        Muestra en pantalla una tabla con la información de todas las cuentas del arreglo.
        Columnas: NUMERO CUENTA, NOMBRE, SALDO
        En la columna NOMBRE concatenar el nombre y el apellido
    */

    let cmpTabla = document.getElementById("tablaCuentas");
    let contenidoTabla = "<table><tr>" +
        "<th>N CUENTA</th>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>SALDO</th>" +
        "</tr>";

    let elementoCuenta;
    for (let i = 0; i < cuentas.length; i++) {
        elementoCuenta = cuentas[i];
        contenidoTabla +=
            "<tr><td>" + elementoCuenta.numeroCuenta + "</td>" +
            "<td>" + elementoCuenta.cedula + "</td>" +
            "<td>" + elementoCuenta.nombre + " " + elementoCuenta.apellido + "</td>" +
            "<td>" + elementoCuenta.saldo + "</td>" +
            "</tr>";  // Aquí cerramos la fila correctamente
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
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

/*
    Agrega una cuenta al arreglo, solamente si no existe otra cuenta con el mismo numero.
    No retorna nada
*/
agregarCuenta = function (cuenta) {
    //Si ya existe mostrar un alert CUENTA EXISTENTE

    let resultado = buscarCuenta(cuenta.numeroCuenta);
    if (resultado === null) {
        cuentas.push(cuenta);
        alert("CUENTA AGREGADA");
        return true;
    } else {
        alert("CUENTA EXISTENTE");
        return false;
    }

    //Si se agrega, mostrar un alert CUENTA AGREGADA
}

agregar = function () {
    //Toma los valores de las cajas de texto, sin validaciones
    let cuentaNueva = recuperarTexto("txtCuenta");
    let cedula = recuperarTexto("txtCedula");
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");

    //Crea un objeto cuenta y agrega los atributos con los valores de las cajas respectivas

    let cuenta = {};

    cuenta.numeroCuenta = cuentaNueva;
    cuenta.cedula = cedula;
    cuenta.nombre = nombre;
    cuenta.apellido = apellido;
    cuenta.saldo = 0.0;
    //Invoca a agregarCuenta

// invoca a agregarCuenta que se encargará de verificar y agregar la cuenta si no existe
    if (agregarCuenta(cuenta)) {
        console.log("Cuenta agregada:", cuenta);
    }
    console.log(cuenta);

    //Invoca a mostrarCuentas
    mostrarCuentas();

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

verMovimientos = function () {
    let numeroCuenta = recuperarTexto("txtMovimientos");

    if (numeroCuenta === "") {
        alert("Por favor ingrese un número de cuenta válido.");
        return;
    }

    let cuenta = buscarCuenta(numeroCuenta);

    if (cuenta === null) {
        alert("CUENTA NO EXISTE");
        return;
    }


    let movimientosCuenta = [];

    for (let i = 0; i < movimientos.length; i++) {
        let movimiento = movimientos[i];

        if (movimiento.numeroCuenta === numeroCuenta) {
            movimientosCuenta.push(movimiento);
        }
    }
    mostrarMovimientosFiltrados(movimientosCuenta);
}

mostrarMovimientosFiltrados = function (movimientosCuenta) {
    let cmpTabla = document.getElementById("tablaMovimientos");

    if (!cmpTabla) {
        console.error("Elemento con id 'tablaMovimientos' no encontrado.");
        return;
    }

    let contenidoTabla = "<table><tr>" +
        "<th>CUENTA</th>" +
        "<th>MONTO</th>" +
        "<th>OPERACION</th>" +
        "</tr>";

    // Recorremos el arreglo de movimientos filtrados y los mostramos en la tabla
    for (let i = 0; i < movimientosCuenta.length; i++) {
        let movimiento = movimientosCuenta[i];
        contenidoTabla +=
            "<tr><td>" + movimiento.numeroCuenta + "</td>" +
            "<td>" + movimiento.monto + "</td>" +
            "<td>" + movimiento.tipo + "</td>" +
            "</tr>";
    }

    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}


