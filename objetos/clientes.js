let clientes = [
    {cedula: "1050518594", nombre: "Alejandro", edad: 20},
    {cedula: "1234567891", nombre: "Paula", edad: 17},
    {cedula: "1234567892", nombre: "Silvia", edad: 50}
];


ejecutarBusqueda = function () {
    let valorCedula = recuperarTexto("txtCedulaBusqueda");
    let cliente = buscarCliente(valorCedula);

    if(cliente===null){
        alert("No encontro la cedula")
    }else{
        mostrarTextoEnCaja("txtCedula",cliente.cedula);
        mostrarTextoEnCaja("txtNombre",cliente.nombre)
        mostrarTextoEnCaja("txtEdad",cliente.edad)

    }
}
mostrarClientes = function () {
    let cmpTabal = document.getElementById("tablaClientes");
    let contenidoTabla = "<table><tr>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>EDAD</th>"
        + "</tr>";
    let elementoCliente;
    for (let i = 0; i < clientes.length; i++) {
        elementoCliente = clientes[i];
        contenidoTabla +=
            "<tr><td>" + elementoCliente.cedula + "</td>" +
            "<td>" + elementoCliente.nombre + "</td>"
            + "<td>" + elementoCliente.edad + "</td>"
            + "<tr>";
    }
    contenidoTabla += "</table>"
    cmpTabal.innerHTML = contenidoTabla;

}

buscarCliente = function (cedula) {
    let elementoCliente;
    let clienteEncontrado=null; // Agregar null
    for (let i = 0; i < clientes.length; i++) {
        elementoCliente = clientes[i];

        if (elementoCliente.cedula === cedula) {
            clienteEncontrado = elementoCliente;
            break;
        }
    }
    return clienteEncontrado;
}

crearCliente = function () {
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorEdad = recuperarFloat("txtEdad");

    let nuevoCliente = {};
    nuevoCliente.cedula=valorCedula;
    nuevoCliente.nombre=valorNombre;
    nuevoCliente.edad=valorEdad;

    agregarCliente(nuevoCliente)
}
agregarCliente = function (cliente) {

    let resultado = buscarCliente(cliente.cedula);
    if (resultado === null) {
        clientes.push(cliente);
    } else {
        alert("ya exite el cliente");
    }


}

guardarCambios = function () {

    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorEdad = recuperarFloat("txtEdad");
    let datosCliente = {};

    datosCliente.cedula=valorCedula;
    datosCliente.nombre=valorNombre;
    datosCliente.edad=valorEdad;
    modificarCliente(datosCliente);
    mostrarClientes();
}
modificarCliente =function (cliente) {

    let clienteEncontrado = buscarCliente(cliente.cedula);


    if(clienteEncontrado!=null){
        clienteEncontrado.nombre=cliente.nombre;
        clienteEncontrado.edad=cliente.edad;
    }
}