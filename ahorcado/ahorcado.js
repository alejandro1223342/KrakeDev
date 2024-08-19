//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;

esMayuscula = function (caracter){

    if (caracter.charCodeAt(0) >= 65 && caracter.charCodeAt(0) <= 90) {
        return true;
    } else {
        return false;
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





}

