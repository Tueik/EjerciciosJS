/* 

Arrays o arreglos

Definicion
Un arreglo o array es un conjunto de datos que se pueden almacenar en una sola variable.

Cuando tenemos una variable, la usamos para almacenar UN solo dato. 
En cambio, en un arreglo, guardamos MUCHOS datos a manera de lista.

Un array ya no es un tipo de dato primitivo, se considera un objeto porque es una estructura de datos

*/ 


/*
En esta primera forma nosotros creamos un array usando la palabra reservada new y el metodo Array para especificarle a nuestro navagador que queremos crear un array. Hasta este momento, este array esta vacio por que no tenemos ningun dato dentro del parentesis (que es donde vamos a guardar los datos).

var colores = new Array(3); //Esta forma nos permite crear un array con un numero de elementos especificado, pero aún no sabemos que datos va a guardar.

var colores = new Array("rojo", "verde", "azul"); //En este punto estamos creando el array y ya le asignamos los valores en las posiciones que queremos mostrar.



2.- Segunda Forma

La segunda forma se trata de crear el arreglo solo usando corchetes []. Esta forma es la más usada para crear arreglos en JS.


// var marcaDeColores2 = ["Mapita", "Norma", "Vividel", "Faber Castell", "BlancaNieves"];


*/

// Ejemplos de arreglos

listasDePerritos = ["Chihuahua","Calupoh","Mestizos", "Callejeros", "Pug"];

console.log (listasDePerritos);


// Ejemplo de arreglos 2
listaDelSuper = ["Leche", "Papitas", "Jabon", "Nachos", "Huevos"];
console.log(listaDelSuper)



marcasDeAutos = ["BMW", "Volkswagen", "Audi", "Chevrolet", "Toyota", "Kia", "Hyundai"];
console.log(marcasDeAutos)

campeonesDeLeague = ["Garen", "Darius", "Casiopeia", "Teemo", "Zoe", "Vayne", "Braum"];
console.log(campeonesDeLeague)

playasBonitas = ["Chelem", "Isla Mujeres","Litibu", "Zicatela"];
console.log(playasBonitas);

movies = ["Magnolia", "Pretty Woman", "Elvis", "Taxi Driver", "Midsommar", "Notting Hill"];
console.log(movies)

tiposDeAbejas = ["reyna", "obrera", "bebe", "Zangano", "Voladora"];
console.log(tiposDeAbejas)

/*

-- Acceder a elementos de una Array

Antes de querer mostrar los elementos de un arreglo, hay que definir algunas cosas:

- Posicion de los elementos, donde empezamos a enumerar desde el 0 y estas posiciones se llaman indices

//Posicion de los elementos de la lista del super
    0: "Leche"
    1: "Papitas"
    2: "Jabon"
    3: "Nachos"
    4: "Huevos"

Numero de elementos NO ES LO MISMO que su posicion.
*/

// Ejemplo de Arreglo 2
listaDelSuper = ["Leche", "Papitas", "Jabon", "Nachos", "Huevos"];

console.log("El producto en la posicion 1 es : " + listaDelSuper[1]);
console.log("El producto en la posicion 4 es : " + listaDelSuper[4]);
console.log("El producto en la posicion 2 es : " + listaDelSuper[2]);

// Encontramos que al tratar de seleccionar un elemento de nuestro indice que no existe, aparece el mensaje undefined. Esto es porque la gran ventaja que tienen los arreglos en JS es que podemos crecer su tamanio cuando nosotros queramos. Para esto, el arreglo se prepara por si en algun momento recibe más información.

/*

Array Asociativo

Son arreglos donde cada elemento está asociado no solo con su índice, si no que tambien está asignado a un identificador.

Sintaxis de un arreglo asociativo



*/

// Ejemplo de eCommerce

let propiedadesDeMiComputadora = {
    marca: "Asus", //La marca es mi identificador, y "Asus" es mi valor
    procesador: "Intel i7",
    ram: "16 gb",
    almacenamiento: "1 TB",
    precio: "15000"
}

console.log(propiedadesDeMiComputadora);
console.log("La RAM de mi computadora es : ",
propiedadesDeMiComputadora["ram"]);
console.log("El tamaño de pantala es de: ", propiedadesDeMiComputadora["marca"], "y su precio es de: ", propiedadesDeMiComputadora["precio"]);

// Ejemplo de una Red Social
let publicacionRedSocial = {
    nombre: "Felipe",
    usuario: "@felipecontenis",
    fecha: "Agosto",
    likes: "5000",
    descripcion: "Esta es una bonita foto de lasanga",
    ubicacion: "Estado de Mexico",

}

console.log("Estas son las publicaciones de Agosto: ",
publicacionRedSocial["fecha"]);


/*

Metodos de los arrays

En los arreglos, tenemos ciertos metodos o instrucciones que nos van a permitir manipular los elementos de este arreglo. Estos nos permiten desde agregar y eliminar elementos, hasta reordenarlos.'

La sintaxis basica del metodo es .nombreMetodo(valorAModificar);


Podemos dividir estos metodos en 3:
    
    - Metodos transformadores
    - Metodos accesores
    - Metodos repetitivos (spoiler)




*/

console.log("////////////////////////////////////")

var arrayDeEjemplo = ["Manzanas","Peras","Mangos","Mandarinas","Uvas", "Sandia","Fresas"];

console.log("Este es nuestro arreglo original de 7 elementos", arrayDeEjemplo);


// Metodos transformadores 

//push(): Agrega un elemento al final del arreglo
arrayDeEjemplo.push("Pitaya");
console.log("Agregamos la Pitaya a nuestro arreglo de ejemplo:", arrayDeEjemplo);

// pop(): Eliminar el ultimo elemento del arreglo
arrayDeEjemplo.pop();
console.log("Eliminamos el ultimo elemento del arreglo", arrayDeEjemplo);


//unshift(): Agregamos uno o más elementos al principio del arreglo 
arrayDeEjemplo.unshift("Bananas", "Tunas", "Aguacate", "lichi");
console.log("Agregamos 4 elementos al principio del arreglo", arrayDeEjemplo);


//shift(): Eliminar el primer elemento del arreglo
arrayDeEjemplo.shift();
console.log("Eliminamos el primer elemento del arreglo", arrayDeEjemplo);

//sort(): Ordenar los elementos del arreglo y devuelve el arreglo ordenado de forma ascendente
arrayDeEjemplo.sort();
console.log("Este es mi arreglo de ejemplo ordenado", arrayDeEjemplo);

//reverse(): Invierte el orden de los elementos del arreglo y devuelve el arreglo invertido
arrayDeEjemplo.reverse();
console.log("Este es nuestro arreglo invertido", arrayDeEjemplo);

//slice(): Extraemos una seccion del arreglo o cadena, y devuelve una cadena nueva, copiando el arreglo (no se modifica, sino que creamos una copia)

var saludo1 = "Hola, estoy aprendiendo arreglos en Generation"
var saludo2 = saludo1.slice(3, 7);
console.log("Imprimimos la rebanada del arreglo original", saludo2);

var saludo3 = saludo1.slice(9);
console.log("Imprimimos la rebanada del arreglo original", saludo3);

var saludo4 = saludo1.slice(-9, -5);
console.log("Imprimimos la rebanada del arreglo original", saludo4);



/*
// Splice(): Modificar el arreglo de 3 formas distintas

- Eliminar elementos del arreglo
- Agregar elementos nuevos al arreglo
- Reemplazar elementos que ya existen en el arreglo


Sintaxis básica

splice(indice de inicio, cantidad de elementos a eliminar, nuevoelemento1, nuevoelemento2, etc.)

    - Indice de inicio: La posicion desde donde comenzamos a eliminar elementos (primer numero dentro del parentesis)
    - Cantidad de elementos a eliminar: numero de elementos a borrar (segundo numero del parentesis)
    - elemento a agregar : los nuevos elementos que se agregan al arreglo



*/


let mesesDelAnio = ["Enero","Febrero","Agosto","Septiembre"];
console.log("Este es nuestro arreglo de los meses del anio:", mesesDelAnio);

//Eliminar y agregar datos usando splice

let mesesBorrados = mesesDelAnio.splice(2, 2, "Abril", "Mayo",);
console.log("Este es el nuevo arreglo con los meses borrados: ", mesesDelAnio);

// Agregar elementos sin borrar nada arreglo
let diasSemana = ["Lunes","Martes","Miercoles"];
console.log("Los días de la semana son: ", diasSemana);

diasSemana.splice(3, 0, "Jueves", "Viernes", "Sabado",);
console.log("Los nuevos días de la semana son: ", diasSemana);


/*
Metodos Accesores
*/

var ensalada = ["jitomate", "zanahoria", "lechuga", "chicharos", "cebolla"];


// Lenght(): Nos permite saber el numero de elementos o Longitud del arreglo

console.log("Tenemos estos elementos en el arreglo ensalada",
ensalada.length);


// Join(): Nos permite unir los elementos del arreglo con una cadena de texto
console.log("Esta es una feliensalada: ", ensalada.join("-"));

//concat(): Nos permite unir dos o más arreglos en uno solo. Devuelve un nuevo arreglo con los elementos de los otros arreglos.

let dulces = ["galletas", "chetos", "glorias", "galletas", "gansitos", "picafresas", "tamborines", "galletas"];

let mezcla = ensalada.concat(dulces);
console.log("Esta es mi mezcla: ", mezcla);

//indexOf: Nos permite saber la posicion de un elemento dentro del arreglo

console.log("La posicion de los chetos de mi arreglo dulces: ", dulces.indexOf("chetos"));

// lastindexOf(): Nos permite saber la ultima posicion de un elemento determinado dentro del arreglo
console.log("La ultima posicion de las galletas es: ", dulces.lastIndexOf("galletas"));


// toString
// valueOf
console.log(dulces.valueOf());
// includes







