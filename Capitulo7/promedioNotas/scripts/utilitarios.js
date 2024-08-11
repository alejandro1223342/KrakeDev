recuperarTexto = function(idComponente){

    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
}

recuperarInt = function (idComponente){
    let valorCaja= recuperarTexto(idComponente);
    let valorEntero =parseInt(valorCaja);
    return valorEntero;
}


recuperarFloat = function (idComponente){
    let valorCaja= recuperarTexto(idComponente);
    let valorFlotante =parseFloat(valorCaja);
    return valorFlotante;
}

mostrartexto = function(idComponente,mensaje){

    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText=mensaje;
}

mostrarImagen = function (idComponente,rutaImagen){

    let componente;
    componente=document.getElementById(idComponente);
    componente.src=rutaImagen;
}


mostrarTextoEnCaja = function (idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.value=mensaje;
}