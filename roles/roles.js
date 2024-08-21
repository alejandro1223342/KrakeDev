
let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"1050518594",nombre:"Alejandro",apellido:"Gonzalez",sueldo:900.0}

]



mostrarOpcionEmpleado=function () {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");

    mostrarEmpleados();
}

mostrarOpcionRol=function (){
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}

mostrarOpcionResumen=function () {
    mostrarComponente("divResumen");
    ocultarComponente("divRol");
    ocultarComponente("divEmpleado");

}

mostrarEmpleados=function (){

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