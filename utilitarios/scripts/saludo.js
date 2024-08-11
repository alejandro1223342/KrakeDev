
saludar = function (){
    let nombre;
    let apellido;
    nombre=recuperarTexto("txtNombre");
    apellido=recuperarTexto("txtApellido");

    let edad= recuperarInt("txtEdad");
    let estatura=  recuperarFloat("txtEstatura")

    let mensajeBienvenida="Bienvenido "+nombre+" "+apellido

    mostrartexto("lblResultado",mensajeBienvenida);

    mostrarImagen("imgSaludo","../files/img/park.gif")

    mostrarTextoEnCaja("txtNombre","");
}

