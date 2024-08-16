calcularTasaIntereses = function (ingresoAnual) {
    let valorTasa;
    if (ingresoAnual < 300000) {
        valorTasa = 0.16;

    } else if (ingresoAnual <= 300000 && ingresoAnual < 500000) {
        valorTasa = 0.15;
    } else if (ingresoAnual >= 500000 && ingresoAnual < 1000000) {
        valorTasa = 0.14;
    } else if (ingresoAnual >= 1000000 && ingresoAnual > 20000000) {
        valorTasa = 0.13;
    } else if (ingresoAnual >= 2000000) {
        valorTasa = 0.12;
    }

    return valorTasa;
}

calcularCapacidadPago = function (edad, ingresos, egresos) {

    let cuotaMensual;
    if (edad > 50) {
        cuotaMensual = (egresos - ingresos) * 0.30;
    } else if (edad === 50) {
        cuotaMensual = (egresos - ingresos) * 0.40;
    }
    return cuotaMensual;

}

calcularDescuento = function (precio, cantidad) {
    let descuento;
    if (cantidad < 3) {
        descuento = precio;
    } else if (cantidad >= 3 || cantidad <= 5) {
        descuento = precio * 0.2;
    } else if (cantidad >= 6 || cantidad <= 11) {
        descuento = precio * 0.3;
    } else if (cantidad >= 12) {
        descuento = precio * 0.4;
    }
    return descuento;
}


determinarColesterolLDL = function (nivelColesterol) {

    let mensaje;
    if (nivelColesterol < 100) {
        mensaje = 'DESEABLE';
    } else if (nivelColesterol >= 100 && nivelColesterol <= 129) {
        mensaje = 'CASI OPTIMO';
    } else if (nivelColesterol >= 130 && nivelColesterol <= 159) {
        mensaje = 'LIMITE SUPERIOR DEL RANGO NORMAL'
    } else if (nivelColesterol >= 160 && nivelColesterol <= 189) {
        mensaje = 'ALTO';
    } else if (nivelColesterol >= 190) {
        mensaje = 'MUY ALTO';
    }

    return mensaje;
}

validarClave = function(clave){

    if (clave.length ===8 || clave.length === 16) {
        return true;
    }else{
        return false;
    }
}

esMayuscula = function (caracter){

    if (caracter.charCodeAt(0)>=65 && caracter.charCodeAt(0)<=90) {
        return true;
    }else  {
        return false;
    }
}

esMinuscula = function (caracter){

    if (caracter.charCodeAt(0)>=97 && caracter.charCodeAt(0)<=122 && caracter.charCodeAt(0)>=192 && caracter.charCodeAt(0)<=163) {
        return true;
    }else  {
        return false;
    }
}

esDigito = function (caracter){
    if (caracter.charCodeAt(0)>= 48 && caracter.charCodeAt(0) <= 57){
        return true
    }else{
        return false;
    }
}


darPermiso= function (notaMatematica,notaFisica,notaGeometria){
    if((notaMatematica || notaFisica || notaGeometria)>90){
        return true;
    }else{
        return false;
    }
}

dejarSalir= function (notaMatematica,notaFisica,notaGeometria){
    if((notaMatematica || notaGeometria || notaGeometria)>90 && (notaFisica>notaGeometria)){
        return true;
    }else{
        return false;
    }
}
