// Ejercicio 1

function idCard() {
    var nombre = "Ricardo"
    var ubicacion = "Puebla"
    var pasatiempo = "Usar PC" ;
    return "Hola, mi nombre es ___. Vivo en ___ y disfruto ___"
}

console.log (idCard());

// Ejercicio 2


function calcularPerroEdad (edadAnioHumano) {
    let dato = edadAnioHumano
    let equivalenciaHumana = 8;
    let resultado = dato*equivalenciaHumana;
    return console.log(`la edad de tu perro es ${resultado} años`)
}