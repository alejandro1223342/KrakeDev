
let puntosUsuario=0;
let puntosComputador=0;

jugar = function (seleccionado){
    let elemento;

    elemento=generarElemento();
   let ruta;

   ruta=generarRuta(elemento);

   let ganador;

   mostrarImagen("imgCompu",ruta);
   ganador=determinarGanador(seleccionado,elemento);

   if(ganador ===0){
        mostrarTexto("lblGanador","EMPATE!!!")
   }else if(ganador === 1){
       mostrarTexto("lblGanador","GANASTE LA PARTIDA!!!")

       puntosUsuario+=1;
       mostrarTexto("lblPuntos","PUNTOS USUARIO"+puntosUsuario);

       if (puntosUsuario===5){
           mostrarTexto("lblGanador","HAS GANADO EL JUEGO")
       }
   }else if(ganador === 2){
       mostrarTexto("lblGanador","PERDISTE LA PARTIDA!!!")
       puntosComputador+=1;
       mostrarTexto("lblPuntosC","PUNTOS COMPUTADOR "+puntosComputador);

       if (puntosComputador===5){
           mostrarTexto("lblGanador","COMPUTADOR TE HA VENCIDO")
       }
   }


}

limpiar = function () {
     puntosUsuario=0;
     puntosComputador=0;

    mostrarTexto("lblGanador","Ganador");
    mostrarTexto("lblPuntos","Puntos Usuario");
    mostrarTexto("lblPuntosC","Puntos Computador");
    mostrarImagen("imgCompu","");


}