calcularValorDescuento = function (monto, porcentajeDescuento) {

    let calcularDescuento;

    calcularDescuento=monto*(porcentajeDescuento/100);

    return calcularDescuento;

}

calcularIVA = function (monto) {


    let calcularIVA;

    calcularIVA=(monto*0.12)
    return calcularIVA;
}

calcularSubtotal = function (precio, cantidad) {

    let calcularsubTotal;
    calcularsubTotal= (precio*cantidad);

    return calcularsubTotal;
}

calcularTotal = function (subtotal, descuento, iva) {

    let total;

    total=(subtotal-descuento)+iva;

    return total;

}

calcularDescuentoporVolumen = function (subtotal,cantidad) {
   let descuento;

    if (cantidad >=3 && cantidad <5) {
        descuento=(subtotal*0.03);
    }else if(cantidad >=6 && cantidad <11) {
        descuento=(subtotal*0.04);
    }else if(cantidad>=12){
        descuento=(subtotal*0.05);
    }else{
        alert("NO TIENE DESCUENTO");
    }

    return descuento;

}