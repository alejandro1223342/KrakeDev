let empleados = [
    {cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0},
    {cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0},
    {cedula: "1050518594", nombre: "Alejandro", apellido: "Gonzalez", sueldo: 900.0}

]
let esNuevo = false;


mostrarOpcionEmpleado = function () {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();

    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");

    deshabilitarComponente("btnGuardar");

}

mostrarOpcionRol = function () {
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}

mostrarOpcionResumen = function () {
    mostrarComponente("divResumen");
    ocultarComponente("divRol");
    ocultarComponente("divEmpleado");

}

mostrarEmpleados = function () {

    let cmpTabal = document.getElementById("tablaEmpleados");
    let contenidoTabla = "<table><tr>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>APELLIDO</th>" +
        "<th>EDAD</th>"
        + "</tr>";
    let elementoCliente;
    for (let i = 0; i < empleados.length; i++) {
        elementoCliente = empleados[i];
        contenidoTabla +=
            "<tr><td>" + elementoCliente.cedula + "</td>" +
            "<td>" + elementoCliente.nombre + "</td>"
            + "<td>" + elementoCliente.apellido + "</td>"
            + "<td>" + elementoCliente.sueldo + "</td>"
            + "<tr>";
    }
    contenidoTabla += "</table>"
    cmpTabal.innerHTML = contenidoTabla;
}

ejecutarNuevo = function () {
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    esNuevo = true;
}

buscarEmpleado = function (cedula) {
    let elementoEmpleado;
    let empleadoEncontrado = null; // Agregar null
    for (let i = 0; i < empleados.length; i++) {
        elementoEmpleado = empleados[i];

        if (elementoEmpleado.cedula === cedula) {
            empleadoEncontrado = elementoEmpleado;
            break;
        }
    }

    return empleadoEncontrado;
}

agregarEmpleado = function (cliente) {

    let resultado = buscarEmpleado(cliente.cedula);
    if (resultado === null) {
        empleados.push(cliente);
        return true;
    } else {
        return false;
    }


}


guardar = function () {

    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorApellido = recuperarTexto("txtApellido");
    let valorSueldo = recuperarFloat("txtSueldo");

    if (esCampoVacio(valorCedula)) {
        mostrarTexto("lblErrorCedula", "CAMPO OBLIGATORIO")
        return;
    } else {
        mostrarTexto("lblErrorCedula", "")
    }

    if (esCampoVacio(valorNombre)) {
        mostrarTexto("lblErrorNombre", "CAMPO OBLIGATORIO")
        return;
    } else {
        mostrarTexto("lblErrorNombre", "")
    }

    if (esCampoVacio(valorApellido)) {
        mostrarTexto("lblErrorApellido", "CAMPO OBLIGATORIO")
        return;
    } else {
        mostrarTexto("lblErrorApellido", "")
    }

    if (esCampoVacio(valorSueldo)) {
        mostrarTexto("lblErrorSueldo", "CAMPO OBLIGATORIO")
        return;
    } else {
        mostrarTexto("lblErrorSueldo", "")
    }

    if (!esDigito(valorCedula)) {
        mostrarTexto("lblErrorCedula", "La cedula debe tener 10 digitos numericos")
        return;
    }

    if (!esMayuscula(valorNombre)) {
        mostrarTexto("lblErrorNombre", "El nombre debe tener al menos 3 caracteres y todos deben ser letras mayúsculas.")
        return;
    }

    if (!esMayuscula(valorApellido)) {
        mostrarTexto("lblErrorApellido", "El nombre debe tener al menos 3 caracteres y todos deben ser letras mayúsculas.")
        return;
    }
    if (!esFlotante(valorSueldo)) {
        mostrarTexto("lblErrorSueldo", "El sueldo debe ser un número decimal entre 400 y 500.")
        return;
    }

    if (esNuevo === true) {
        let datosEmpleado = {};
        datosEmpleado.cedula = valorCedula;
        datosEmpleado.nombre = valorNombre;
        datosEmpleado.apellido = valorApellido;
        datosEmpleado.sueldo = valorSueldo;
        let nuevoEmpleado = agregarEmpleado(datosEmpleado)

        if (nuevoEmpleado) {
            alert("Empleado guardado correctamente")
            esNuevo = false;
            console.log(esNuevo)
        } else {
            alert("Ya existe un empleado con la cédula " + valorCedula);


        }
        mostrarEmpleados();
        deshabilitarComponente("txtCedula");
        deshabilitarComponente("txtNombre");
        deshabilitarComponente("txtApellido");
        deshabilitarComponente("txtSueldo");

        deshabilitarComponente("btnGuardar");
    } else {

        let empleadoExistente = buscarEmpleado(valorCedula);

        if (empleadoExistente) {
            empleadoExistente.nombre = valorNombre;
            empleadoExistente.apellido = valorApellido;
            empleadoExistente.sueldo = valorSueldo;
            alert("Empleado actualizado correctamente");
            mostrarEmpleados();
        } else {
            alert("No se encontró un empleado con la cédula " + valorCedula);
        }
    }

}

esDigito = function (cedula) {

    if (cedula.length !== 10) {
        return false;
    }

    for (let i = 0; i < cedula.length; i++) {
        if (cedula.charCodeAt(i) < 48 || cedula.charCodeAt(i) > 57) {
            return false;
        }
    }

    return true;

}

esMayuscula = function (nombre) {
    if (nombre.length < 3) {
        return false;
    }
    for (let i = 0; i < nombre.length; i++) {
        if (nombre.charCodeAt(i) < 65 || nombre.charCodeAt(i) > 90) {
            return false;
        }
    }
    return true;
}

esFlotante = function (sueldo) {

    return !isNaN(sueldo) && sueldo >= 400 && sueldo <= 5000;

}

esCampoVacio = function (campo) {

    if (campo === "") {
        return true;
    } else {
        return false;
    }
}

ejecutarBusqueda = function () {
    let valorCedula = recuperarTexto("txtCedula");
    let empleado = buscarEmpleado(valorCedula);

    if (empleado === null) {
        alert("EMPLEADO NO EXISTE")
    } else {
        mostrarTextoEnCaja("txtCedula", empleado.cedula);
        mostrarTextoEnCaja("txtNombre", empleado.nombre)
        mostrarTextoEnCaja("txtApellido", empleado.apellido)
        mostrarTextoEnCaja("txtSueldo", empleado.sueldo)
        deshabilitarComponente("txtCedula");
        habilitarComponente("txtNombre");
        habilitarComponente("txtApellido");
        habilitarComponente("txtSueldo");

    }
}

limpiar = function () {
    mostrarTexto("txtCedula", "");
    mostrarTexto("txtNombre", "");
    mostrarTexto("txtApellido", "");
    mostrarTexto("txtSueldo", "");



    esNuevo = false;

    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");

    deshabilitarComponente("btnGuardar");
}


buscarPorRol=function () {

    let cedula = recuperarTexto("txtBusquedaCedulaRol");
    let empleado = buscarEmpleado(cedula);

    if (empleado) {
        mostrarTexto("infoCedula", empleado.cedula);

        let nombreCompleto = empleado.nombre + " " + empleado.apellido;
        mostrarTexto("infoNombre", nombreCompleto);

        mostrarTexto("infoSueldo", empleado.sueldo);
    } else {
        alert("Empleado no existe");
    }

}

calcularAporteEmpleado = function (sueldo) {
    // Calcula el 9.45% del sueldo
    let porcentaje = 9.45;
    let aporte = (sueldo * porcentaje) / 100;
    return aporte;
}

calcularValorAPagar = function(sueldo,aporte,descuento){

    let resultado= (sueldo-aporte-descuento);

    return resultado;
}

calcularRol= function () {

    let infoSueldo=recuperarTextoDiv("infoSueldo");

    let descuentos=recuperarFloat("txtDescuentos");



    if (isNaN(descuentos) || descuentos < 0 || descuentos > infoSueldo) {
        mostrarTexto("lblErrorDescuentos", "El descuento debe ser un número decimal entre 0 y el sueldo.");
        return;
    }


    let aporteEmple=calcularAporteEmpleado(infoSueldo);
    mostrarTexto("infoIESS",aporteEmple)

    let valorAPagar=calcularValorAPagar(infoSueldo,aporteEmple , descuentos)
    mostrarTexto("infoPago", valorAPagar.toFixed(2));


}