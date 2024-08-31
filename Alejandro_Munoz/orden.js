personas = [
    {nombre: "Marcos", edad: "18"},
    {nombre: "Roberto", edad: "15"},
    {nombre: "Kate", edad: "25"},
    {nombre: "Diana", edad: "12"},
    {nombre: "Benja", edad: "5"}

]


agregarPersona = function () {

    let valorNombre = recuperarTexto("txtNombre");
    let valorEdad = recuperarInt("txtEdad");

    let esValido = true;

    if (!esMayuscula(valorNombre)) {
        mostrarTexto("lblErrorNombre", "El nombre debe tener al menos 3 caracteres y todos deben ser letras mayúsculas.");
        esValido = false;
    } else if (esCampoVacio(valorNombre)) {
        mostrarTexto("lblErrorNombre", "CAMPO OBLIGATORIO");
        esValido = false;
    } else {
        mostrarTexto("lblErrorNombre", "");
    }

    if (!esEntero(valorEdad)) {
        mostrarTexto("lblErrorEdad", "La edad debe ser un numero entero entre 0 y 100");
        esValido = false;
    } else {
        mostrarTexto("lblErrorEdad", "");
    }

    if (esValido) {
        let nuevaPersona = {};
        nuevaPersona.nombre = valorNombre;
        nuevaPersona.edad = valorEdad;
        personas.push(nuevaPersona);
        alert("Persona Agregada Correctamente");
        console.log(nuevaPersona)
    }

    mostrarPersona();
}


esCampoVacio = function (campo) {

    if (campo === "") {
        return true;
    } else {
        return false;
    }
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


esEntero = function (edad) {

    return Number.isInteger(edad) && edad >= 0 && edad <= 100;

}


mostrarPersona = function () {

    let cmpTabla = document.getElementById("tablaPersona");
    let contenidoTabla = "<table border='1'><tr>" +
        "<th>EDAD</th>" +
        "<th>NOMBRE</th>" +
        "</tr>";

    for (let i = 0; i < personas.length; i++) {
        let elementoCliente = personas[i];
        contenidoTabla +=
            "<tr><td>" + elementoCliente.edad + "</td>" +
            "<td>" + elementoCliente.nombre + "</td>" +
            "</tr>";
    }

    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

