generaAleatorios = function () {
    let aleatorios;
    let numeroMultiplicado;
    let numeroEntero;
    let valor;
    aleatorios = Math.random(); //entre 0 y 1
    numeroMultiplicado = aleatorios * 100;
    numeroEntero = parseInt(numeroMultiplicado);
    valor = numeroEntero + 1;
    return valor;

}

generarAleatorios = function () {
    let aleatorios = [];
    let texto = recuperarFloat("txtValor")

    if (texto >= 5 && texto <= 20) {

        for (let i = 0; i < texto; i++) {
            console.log(i);
            let aleatorioGenerado = generaAleatorios();
            aleatorios.push(aleatorioGenerado);
            console.log(aleatorios)
        }
        mostrarResultado(aleatorios);
    } else {
        alert("El numero ingresado no esta entre 5 y 20")
    }

}

mostrarResultado = function (arregloNumeros) {
    let contenidoTabla = "<table ><tr><th></th><th></th></tr>";

    for (let i = 0; i < arregloNumeros.length; i++) {
        contenidoTabla += "<tr><td>" + (i + 1) + "</td><td>" + arregloNumeros[i] + "</td></tr>";
    }

    contenidoTabla += "</table>";

    let cmpTabla = document.getElementById("divTabla");
    cmpTabla.innerHTML = contenidoTabla;

    cmpTabla.innerHTML = contenidoTabla;
}