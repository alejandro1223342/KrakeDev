cuentas=[
    {numeroCuenta:"02234567", cedula:"1714616123",nombre:"Juan",apellido:"Perez",saldo:0.0},
    {numeroCuenta:"02345211",cedula:"1281238233",nombre:"Felipe",apellido:"Caicedo",saldo:0.0}
]

cargar=function(){
    mostrarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    ocultarComponente("divTransacciones");
    
}

mostrarCuentas = function() {
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
buscarCuenta=function(numeroCuenta){

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
agregarCuenta=function(cuenta){
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

agregar=function(){
    //Toma los valores de las cajas de texto, sin validaciones
    let cuentaNueva=recuperarTexto("txtCuenta");
    let cedula=recuperarTexto("txtCedula");
    let nombre=recuperarTexto("txtNombre");
    let apellido=recuperarTexto("txtApellido");

    //Crea un objeto cuenta y agrega los atributos con los valores de las cajas respectivas

    let cuenta={};

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
