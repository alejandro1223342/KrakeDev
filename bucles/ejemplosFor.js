mostrar = function () {
    let i;
    console.log("antes del for")
    for (i = 0; i < 4; i++) {
        console.log(i);
    }

    console.log("despues del for:")
}

mostrarNumeros2 = function () {



}

mostrarPares = function () {
    console.log("antes del for:");

    for(let valor=2;valor<=10; valor+=2){
        //x+=2;
        //x=x+2
        console.log(valor)
    }
    console.log("despues del for:");
}


mostrarInversa= function () {
    console.log("antes del for:");
    let i;

    for(i=10;i>=0;i--){

        console.log(i);
    }

    console.log("despues del for:");
}

hackearNasaPelis = function () {
    //hakeando nasa =%
    let nasa;
    for (nasa=0;nasa<=100;nasa+=10) {
        console.log("Hackeando nasa "+nasa+"%")
    }

    console.log("La nasa a sido hackeada")
}

mostrarImpares =function () {
    console.log("antes del for:");

    let xd;

    for(xd=1;xd<=21;xd+=2){
        console.log(xd);
    }

    console.log("despues del for:");

}