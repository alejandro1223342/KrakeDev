//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;

esMayuscula = function (caracter){

    if (caracter.charCodeAt(0) >= 65 && caracter.charCodeAt(0) <= 90) {
        return true;
    } else {
        return false;
    }
}

mostrarLetra=function (letra,posicion){


    for(let i=0;i<letra.length;i++){
        let caracter = letra.charAt(i);
        posicion = i;
        if(posicion===0){
            console.log(caracter);
            mostrarTextoEnCaja("div0",caracter)
        }

        if(posicion===1){
            mostrarTextoEnCaja("div1",caracter)
            console.log(caracter);
        }
        if(posicion===2){
            mostrarTextoEnCaja("div2",caracter)
            console.log(caracter);
        }
        if(posicion===3){
            console.log(caracter);
            mostrarTextoEnCaja("div3",caracter)
        }
        if(posicion===4){
            console.log(caracter);
            mostrarTextoEnCaja("div4",caracter)
        }
    }

}




guardarPalabra = function (){
    let palabra

    palabra=recuperarTexto("txtSecreta");
    let esValida= true;
    if(palabra.length===5){

        for(let i=0;i<palabra.length;i++){
            let caracter = palabra.charAt(i);
            if(!esMayuscula(caracter)){
                esValida=false;

            }
        }

        if (!esValida){
            alert("ERROR: La palabra tiene 5 caracteres pero no todos son mayúsculas.");

        }else{
            palabraSecreta=palabra;
            console.log(palabraSecreta);
        }

    }else{
        alert("ERROR: La palabra no tiene exactamente 5 caracteres.");

    }

mostrarLetra(palabraSecreta);



}

