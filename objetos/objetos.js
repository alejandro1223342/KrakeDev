probarAtributos = function () {
    let persona = {
        nombre: "Alejandro",
        apellido: "Muñoz",
        edad: 21,
        estaVivo: true
    };

    console.log(persona.nombre);
    console.log(persona.edad);

    if (persona.estaVivo === false) {
        console.log("no esta vivo")
    } else {
        console.log("si esta vivo");
    }
}

crearProducto = function () {
    let producto1 = {
        nombre: "COCA",
        precio: 1.99,
        stock: 2,
    }

    let producto2 = {
        nombre: "PEPSI",
        precio: 2.99,
        stock: 3,
    }

    console.log(producto1.nombre);
    console.log(producto2.precio);
    if (producto2.stock > producto1.stock) {
        console.log("PRODUCTO 2 TIENE MAYOR STOCK")
    } else if (producto1.stock > producto2.stock) {
        console.log("PRODUCTO 1 TIENE MAYOR STOCK")
    } else if (producto1.stock === producto2.stock) {
        console.log("AMBOS PRODUCTOS TIENEN EL MISMO STOCK")
    }
}

modificarAtributos = function () {
    let cuenta = {
        numero: "53535353",
        saldo: 0.0,

    }

    cuenta.saldo = 100;
    cuenta.saldo += 10;
    console.log(cuenta.saldo);
}

crearCliente = function () {
    let cliente = {
        cedula: "1050518594",
        nombre: "Alejandro"
    }
    cliente.nombre = "STEVO";
    // Se crea un nuevo atributo en la clase
    //cliente.nombr="xxx";

    let cliente1 = {}
    cliente1.nombre = "Romeo";
    cliente1.apellido = "SANTOS";
    cliente1.cedula = "1234567891";
}

probarIncrementoSaldo=function () {
    let cuenta ={
        numero:"2222",
        saldo:34.0
    }
    incrementarSaldo(cuenta,100);
    console.log(cuenta.saldo)
}

probarDeterminarMayor =function () {
    let persona = {
        nombre:"Alejandro",
        edad : 19,

    }

    let persona2={
        nombre:"Paula",
        edad : 17,
    }

    let mayor=determinarMayor(persona,persona2);
    if(mayor != null){
        console.log("El mayor es:" + mayor.nombre)
    }
}
incrementarSaldo = function (cuenta, monto) {

    cuenta.saldo += monto;

}



determinarMayor = function (persona1, persona2) {

    if (persona1.edad > persona2.edad) {
        return persona1;
    }else if(persona2.edad>persona1.edad) {
        return persona2
    }else{
        return null;
    }
}