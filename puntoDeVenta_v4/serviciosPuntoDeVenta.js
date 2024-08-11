calcularValorDescuento = function (monto, porcentajeDescuento) {

    let calcularDescuento;

    calcularDescuento=(monto*porcentajeDescuento)/100;

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