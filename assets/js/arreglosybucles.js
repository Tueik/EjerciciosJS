// /* 

// Arrays o arreglos

// Definicion
// Un arreglo o array es un conjunto de datos que se pueden almacenar en una sola variable.

// Cuando tenemos una variable, la usamos para almacenar UN solo dato. 
// En cambio, en un arreglo, guardamos MUCHOS datos a manera de lista.

// Un array ya no es un tipo de dato primitivo, se considera un objeto porque es una estructura de datos

// */ 


// /*
// En esta primera forma nosotros creamos un array usando la palabra reservada new y el metodo Array para especificarle a nuestro navagador que queremos crear un array. Hasta este momento, este array esta vacio por que no tenemos ningun dato dentro del parentesis (que es donde vamos a guardar los datos).

// var colores = new Array(3); //Esta forma nos permite crear un array con un numero de elementos especificado, pero aún no sabemos que datos va a guardar.

// var colores = new Array("rojo", "verde", "azul"); //En este punto estamos creando el array y ya le asignamos los valores en las posiciones que queremos mostrar.



// 2.- Segunda Forma

// La segunda forma se trata de crear el arreglo solo usando corchetes []. Esta forma es la más usada para crear arreglos en JS.


// // var marcaDeColores2 = ["Mapita", "Norma", "Vividel", "Faber Castell", "BlancaNieves"];


// */

// // Ejemplos de arreglos

// listasDePerritos = ["Chihuahua","Calupoh","Mestizos", "Callejeros", "Pug"];

// console.log (listasDePerritos);


// // Ejemplo de arreglos 2
// listaDelSuper = ["Leche", "Papitas", "Jabon", "Nachos", "Huevos"];
// console.log(listaDelSuper)



// marcasDeAutos = ["BMW", "Volkswagen", "Audi", "Chevrolet", "Toyota", "Kia", "Hyundai"];
// console.log(marcasDeAutos)

// campeonesDeLeague = ["Garen", "Darius", "Casiopeia", "Teemo", "Zoe", "Vayne", "Braum"];
// console.log(campeonesDeLeague)

// playasBonitas = ["Chelem", "Isla Mujeres","Litibu", "Zicatela"];
// console.log(playasBonitas);

// movies = ["Magnolia", "Pretty Woman", "Elvis", "Taxi Driver", "Midsommar", "Notting Hill"];
// console.log(movies)

// tiposDeAbejas = ["reyna", "obrera", "bebe", "Zangano", "Voladora"];
// console.log(tiposDeAbejas)

// /*

// -- Acceder a elementos de una Array

// Antes de querer mostrar los elementos de un arreglo, hay que definir algunas cosas:

// - Posicion de los elementos, donde empezamos a enumerar desde el 0 y estas posiciones se llaman indices

// //Posicion de los elementos de la lista del super
//     0: "Leche"
//     1: "Papitas"
//     2: "Jabon"
//     3: "Nachos"
//     4: "Huevos"

// Numero de elementos NO ES LO MISMO que su posicion.
// */

// // Ejemplo de Arreglo 2
// listaDelSuper = ["Leche", "Papitas", "Jabon", "Nachos", "Huevos"];

// console.log("El producto en la posicion 1 es : " + listaDelSuper[1]);
// console.log("El producto en la posicion 4 es : " + listaDelSuper[4]);
// console.log("El producto en la posicion 2 es : " + listaDelSuper[2]);

// // Encontramos que al tratar de seleccionar un elemento de nuestro indice que no existe, aparece el mensaje undefined. Esto es porque la gran ventaja que tienen los arreglos en JS es que podemos crecer su tamanio cuando nosotros queramos. Para esto, el arreglo se prepara por si en algun momento recibe más información.

// /*

// Array Asociativo

// Son arreglos donde cada elemento está asociado no solo con su índice, si no que tambien está asignado a un identificador.

// Sintaxis de un arreglo asociativo



// */

// // Ejemplo de eCommerce

// let propiedadesDeMiComputadora = {
//     marca: "Asus", //La marca es mi identificador, y "Asus" es mi valor
//     procesador: "Intel i7",
//     ram: "16 gb",
//     almacenamiento: "1 TB",
//     precio: "15000"
// }

// console.log(propiedadesDeMiComputadora);
// console.log("La RAM de mi computadora es : ",
// propiedadesDeMiComputadora["ram"]);
// console.log("El tamaño de pantala es de: ", propiedadesDeMiComputadora["marca"], "y su precio es de: ", propiedadesDeMiComputadora["precio"]);

// // Ejemplo de una Red Social
// let publicacionRedSocial = {
//     nombre: "Felipe",
//     usuario: "@felipecontenis",
//     fecha: "Agosto",
//     likes: "5000",
//     descripcion: "Esta es una bonita foto de lasanga",
//     ubicacion: "Estado de Mexico",

// }

// console.log("Estas son las publicaciones de Agosto: ",
// publicacionRedSocial["fecha"]);


// /*

// Metodos de los arrays

// En los arreglos, tenemos ciertos metodos o instrucciones que nos van a permitir manipular los elementos de este arreglo. Estos nos permiten desde agregar y eliminar elementos, hasta reordenarlos.'

// La sintaxis basica del metodo es .nombreMetodo(valorAModificar);


// Podemos dividir estos metodos en 3:
    
//     - Metodos transformadores
//     - Metodos accesores
//     - Metodos repetitivos (spoiler)




// */

// console.log("////////////////////////////////////")

// var arrayDeEjemplo = ["Manzanas","Peras","Mangos","Mandarinas","Uvas", "Sandia","Fresas"];

// console.log("Este es nuestro arreglo original de 7 elementos", arrayDeEjemplo);


// // Metodos transformadores 

// //push(): Agrega un elemento al final del arreglo
// arrayDeEjemplo.push("Pitaya");
// console.log("Agregamos la Pitaya a nuestro arreglo de ejemplo:", arrayDeEjemplo);

// // pop(): Eliminar el ultimo elemento del arreglo
// arrayDeEjemplo.pop();
// console.log("Eliminamos el ultimo elemento del arreglo", arrayDeEjemplo);


// //unshift(): Agregamos uno o más elementos al principio del arreglo 
// arrayDeEjemplo.unshift("Bananas", "Tunas", "Aguacate", "lichi");
// console.log("Agregamos 4 elementos al principio del arreglo", arrayDeEjemplo);


// //shift(): Eliminar el primer elemento del arreglo
// arrayDeEjemplo.shift();
// console.log("Eliminamos el primer elemento del arreglo", arrayDeEjemplo);

// //sort(): Ordenar los elementos del arreglo y devuelve el arreglo ordenado de forma ascendente
// arrayDeEjemplo.sort();
// console.log("Este es mi arreglo de ejemplo ordenado", arrayDeEjemplo);

// //reverse(): Invierte el orden de los elementos del arreglo y devuelve el arreglo invertido
// arrayDeEjemplo.reverse();
// console.log("Este es nuestro arreglo invertido", arrayDeEjemplo);

// //slice(): Extraemos una seccion del arreglo o cadena, y devuelve una cadena nueva, copiando el arreglo (no se modifica, sino que creamos una copia)

// var saludo1 = "Hola, estoy aprendiendo arreglos en Generation"
// var saludo2 = saludo1.slice(3, 7);
// console.log("Imprimimos la rebanada del arreglo original", saludo2);

// var saludo3 = saludo1.slice(9);
// console.log("Imprimimos la rebanada del arreglo original", saludo3);

// var saludo4 = saludo1.slice(-9, -5);
// console.log("Imprimimos la rebanada del arreglo original", saludo4);



// /*
// // Splice(): Modificar el arreglo de 3 formas distintas

// - Eliminar elementos del arreglo
// - Agregar elementos nuevos al arreglo
// - Reemplazar elementos que ya existen en el arreglo


// Sintaxis básica

// splice(indice de inicio, cantidad de elementos a eliminar, nuevoelemento1, nuevoelemento2, etc.)

//     - Indice de inicio: La posicion desde donde comenzamos a eliminar elementos (primer numero dentro del parentesis)
//     - Cantidad de elementos a eliminar: numero de elementos a borrar (segundo numero del parentesis)
//     - elemento a agregar : los nuevos elementos que se agregan al arreglo



// */


// let mesesDelAnio = ["Enero","Febrero","Agosto","Septiembre"];
// console.log("Este es nuestro arreglo de los meses del anio:", mesesDelAnio);

// //Eliminar y agregar datos usando splice

// let mesesBorrados = mesesDelAnio.splice(2, 2, "Abril", "Mayo",);
// console.log("Este es el nuevo arreglo con los meses borrados: ", mesesDelAnio);

// // Agregar elementos sin borrar nada arreglo
// let diasSemana = ["Lunes","Martes","Miercoles"];
// console.log("Los días de la semana son: ", diasSemana);

// diasSemana.splice(3, 0, "Jueves", "Viernes", "Sabado",);
// console.log("Los nuevos días de la semana son: ", diasSemana);


// /*
// Metodos Accesores
// */

// var ensalada = ["jitomate", "zanahoria", "lechuga", "chicharos", "cebolla"];


// // Lenght(): Nos permite saber el numero de elementos o Longitud del arreglo

// console.log("Tenemos estos elementos en el arreglo ensalada",
// ensalada.length);


// // Join(): Nos permite unir los elementos del arreglo con una cadena de texto
// console.log("Esta es una feliensalada: ", ensalada.join("-"));

// //concat(): Nos permite unir dos o más arreglos en uno solo. Devuelve un nuevo arreglo con los elementos de los otros arreglos.

// let dulces = ["galletas", "chetos", "glorias", "galletas", "gansitos", "picafresas", "tamborines", "galletas"];

// let mezcla = ensalada.concat(dulces);
// console.log("Esta es mi mezcla: ", mezcla);

// //indexOf: Nos permite saber la posicion de un elemento dentro del arreglo

// console.log("La posicion de los chetos de mi arreglo dulces: ", dulces.indexOf("chetos"));

// // lastindexOf(): Nos permite saber la ultima posicion de un elemento determinado dentro del arreglo
// console.log("La ultima posicion de las galletas es: ", dulces.lastIndexOf("galletas"));




// /*

// Investigar esto de tarea


// // toString
// // valueOf
// console.log(dulces.valueOf());
// // includes


// */

// //toString(): Nos permite convertir el arreglo en una cadena de texto
// console.log(mezcla.toString());

// //valueOf(): Nos permite devolver el valor de nuestro arreglo
// console.log(mezcla.valueOf());

// //includes(): Nos permite saber si un elemento existe o no dentro de un arreglo
// console.log("Así podremos saber si un elemento está dentro del arreglo", mezcla.includes("gansitos")); //true

// console.log("Así podremos saber si un elemento está dentro del arreglo", mezcla.includes("cacahuates")); //false



// /* 

// Métodos repetidores



// */


// //filter(): Recorre el arreglo y devuelve uno nuevo con los elementos que cumplan la condicion. (Es como un bucle)

// var numeros = [1, 2, 3, 4, 5 ,6 ,7 ,8, 9, 10];
// console.log("Numeros del 1 al 10", numeros);

// // Filtraremos las datos del arreglo
// var numeros1al5 = numeros.filter(numero => numero <5);
// console.log("Estos son los numeros que cumplen la condicion al ser menores que 5", numeros1al5);

// var numeros6al9 = numeros.filter(numero => numero>=6 && numero<10);
// console.log("Estos son los numeros que cumplen la condicion al ser mayores que 5 y menores que 10", numeros6al9);


// //map(): Recorrer el arreglo, modificar los elementos presentes en el y retornar esos valores modificados en uno nuevo con la misma longitud que el arreglo original

// var map = numeros.map(numeros => numeros *3);
// console.log("Estos son los numeros multiplicados por 3", map);

// // Variable global = Afecta a todo el código

// //Ejercicio Improvisado tablas del 1 al 10

// var arregloBase = [1, 2, 3, 4, 5, 6, 7 ,8 ,9, 10];


// var tabla2 = arregloBase.map(arregloBase => arregloBase *2);
// console.log("Esta es la tabla del 2", tabla2);

// //Esta es una tabla que toma una variable global (funciona, pero no es lo que debemos hacer)

// var tabla3 = arregloBase.map(numeros => numeros *3);
// console.log("Esta es la tabla del 3", tabla3);

// /*

// forEach(): Este metodo nos permite llamar a una funcion "callback" especifica una vez por cada elemento sobre le que se itera del array. Al igual que otros iteradores como el map o el filter, este metodo recibe algunos parámetros:

// */



// //Ejemplo para remover el primer numero impar de un arreglo

// let listaNumeros = [3, 6, 8, 10, 12,];
// let impar = 3;

// listaNumeros.forEach(function(numero){ //por cada elemento del arreglo, ejecuta la funcion
//     if (numero === impar){
//         listaNumeros.shift();
//     }
// });

// console.log("Estos son los elementos del array que no son impares", listaNumeros);



////////////////////////////////////////////////////////////////


/*

Bucles o loops

En JS, los bucles o loops son utilizados para realizar tareas repetitivas con base en una condicion. Las condiciones normalmente devuelven un true o false al ser evaluadas, ademas de que el bucle continuara ejecutandose hasta que la condicion devuelva un false

Normalmente tenemos 3 ciclos
    - While (mientras)
    - Do while (hacer mientras)
    - For (para)

Tenemos otras sentencias mas especificas:

    - for in: sirve para recorrer un arreglo y por cada uno de los elementos de este arreglo obtenemos LA POSICION

    - for of: Sirve para recorrer un arreglo, y por cada uno de los elementos de este arreglo, obtenemos SU VALOR


*/

/*

Sentencia WHILE (mientras)

Esta sentencia nos va a permitr recorrer un bloque de codigo SIEMPRE que se cumpla una condicion especifica, donde el resultado debe ser true

la estructura de WHILE es:

palabraReservada while (condicion que tiene que ser true) {
    //codigo a ejecutar
}


*/

// Porgrama para sumar numeros ALERTA

// let numeroParaSumar= 0;
// while (numeroParaSumar <10){
//     console.log('el numero es menor a 10');

// }





// Contador Sencillo

let valorInicial = 0; //Declaramos un valor inicial en 0
while (valorInicial <5){//mientras el valor inicial sea <5
    valorInicial ++;//Ejecutamos este bloque de código (1 en 1)
    console.log(valorInicial);//Imprimimos los resultados
}

//La sentencia while se ejecuta mientras se sigan obteniendo los resultados positivos (true), y hasta que el resultado sea false, se detiene.

//Practica grupal: Escribir un programa que pida al usuario un numero entero positivo y muestre por pantalla todos los numeros impares desde 1 hasta ese número.

let numeroInicial = 1;

let valorLimite = prompt(
  "Hola, por favor ingresa un numero entero positivo que sea el limite"
);

while (numeroInicial <= valorLimite) { //MIENTRAS el numero inicial sea menor que el limite, ejecutamos lo de abajo
  if (numeroInicial % 2 != 0) { //si al dividir el numero inicial entre 2, el residuo es diferente de 0 (es impar)...
    console.log(numeroInicial); //Imprimimos el valor de la variable
  }
  numeroInicial++; // Incrementamos de uno en uno nuestra variable inicial
}


/*

Ingresamos un 5
1 es menor o igual a 5? si
entonces dividimos 1 entre 2. El residuo es diferente de 0? si
entonces imprimimos el inicial que es 1
termina el bucle, imprimimos el numero inicial que es 1
sumamos uno al inicial
inicial ahora vale 2

Ingresando limite 5 Inicial, conservamos 2
2 es menor o igual a 5? si
entonces dividimos 1 entre 2. El residuo es diferente de 0? si
entonces imprimimos el inicial que es 1
termina el bucle, imprimimos el numero inicial que es 1
sumamos uno al inicial 
inicial ahora vale 3










































*/

/* 

Do while (HACER MIENTRAS O HASTA)

El bucle do while nos sirve para ejecutar una sentencia especificada hasta que la condición de aprobación se evalua como falsa. La condición se evalua después de ejecutar la sentencia dando como resultado que la sentencia especificada se ejecuta al menos una vez.

En pocas palabras, con el while preguntamos una vez, evaluamos la condicion y ejecutamos la instruccion. Con el do while ejecutamos la instruccion al menos una vez, y luego preguntamos la condicion. 


Estrutuca básica de un do while

palabraReservada do{
    //Codigo a ejecutar
}
while(condicion);


*/


// Ejemplo 1

let numerito = 0; //Declaramos la variable en 0
do{//Esto se hará...
    console.log("El número es: " + numerito); //imprimimos
    numerito ++; //aumentamos de 1 en 1
}

while (numerito <=10); //... hasta que el numero sea menor o igual a 10



// While vs Do While

console.log("While");

let numeroWhile = 0 //iniciamos en 0
while (numeroWhile <5){ // mientras la variable sea menor a 5
    numeroWhile ++; // la incremento en 1
    console.log(numeroWhile); // la imprimo

}






console.log("Do While");
let numeroDoWhile = 0; // iniciamos en 0
do{ // hacemos esto ....
    console.log(numeroDoWhile); //imprimir
    numeroDoWhile ++; //aumentar en 1

}
while (numeroDoWhile<5); //... mientras mi numero sea menor a 5




/* 

Sentencia FOR (para)

Este cicle para iterar sobre una seccion de una variable. Es diferente al while porque le podemos pasar una lista de valores y ejecutar una vez por cada uno de ellos. Para esto tenemos tres elementos: 

- El valor inicial de la variable que vamos a iterar (i = 0)
- La condicion que tiene que cumplirse para que el bucle se siga ejecutando (i <5)
- La operacion que se realiza una vez que termina el bucle (i++)

Estructura basica del for:

for (valor inicial, condicion, operacion){

}

*/


//Ejemplo:

console.log("For");
for (let i = 0; i < 10; i++){
    console.log(i);
}

//let i=0 es mi valor inicial
// i < 5 establece la condición para que el bucle se siga ejecutando
// i++ incrementa el valor en 1


let animalitosDelBosque =["ardillas","conejos","venados","osos","mariposas"]