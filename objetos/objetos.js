probarAtributos = function () {
    let persona = {
        nombre : "Alejandro",
        apellido : "Muñoz",
        edad : 21,
        estaVivo : true
    };

    console.log(persona.nombre);
    console.log(persona.edad);

    if(persona.estaVivo === false){
        console.log("no esta vivo")
    }else{
        console.log("si esta vivo");
    }
}

crearProducto = function () {
    let producto1 ={
        nombre: "COCA",
        precio: 1.99,
        stock : 2,
    }

    let producto2={
        nombre: "PEPSI",
        precio: 2.99,
        stock : 3,
    }

    console.log(producto1.nombre);
    console.log(producto2.precio);
    if(producto2.stock>producto1.stock){
        console.log("PRODUCTO 2 TIENE MAYOR STOCK")
    }else if(producto1.stock>producto2.stock){
        console.log("PRODUCTO 1 TIENE MAYOR STOCK")
    }else if(producto1.stock===producto2.stock){
        console.log("AMBOS PRODUCTOS TIENEN EL MISMO STOCK")
    }
}