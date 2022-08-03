// Mejores practicas
// Simplificar funciones lo mas que se pueda

// 1. Utilizar keyboard function
// 2. Nombrar nuestra funcion
// 3. Utilizar () y abrir y cerrar la función { }

function myFunction() {
    // Aqui va el cuerpo de la función
    console.log("Hola Mundo");
}

// myFunction();

function myName() {
    let name = "Zabdiel";
    console.log(name);
}

// myName();

// Variable con scope local
function scopeFunction() {
    let local = "Esto se encuentra dentro de la func.";
    console.log(local);
}

// scopeFunction();
// console.log(local);

var nombre = 'Zabdiel Diaz';

function globalScope() {
    console.log(nombre);   
}

// globalScope();

// Scope de variables
// LET
// Scope global
//Hoisting: La variable no existe para nuestro interprete de JS
// console.log(a);
let a = "Hoisting let";

// VAR
// Scope global, local
// Hoisting: No se puede utilizar o invocar antes de declararla. Aparece como undefined.
// console.log(x);
var x = "hola";

// CONST
// Scope global, local
// Hoisting: No se puede utilizar. No existe para nuestro interprete de JS.
// console.log(c);
const c = "Hoisting const";




// Input
const miNombre = "Zabdiel";

function fiuFiu(x) {
    // console.log(x);
}

// Parámetro declarado variable
fiuFiu(miNombre);

// Parámetro aleatorio
fiuFiu("Zabdiel Diaz")
fiuFiu(2);

// fiuFiu(miNombre, 2);

// Function con más de 1 parámetro
function dosParam(x, y) {
    // console.log(x + y);
    
}
// Invocación con 2 parámetros aleatorios
dosParam("Hola", "Mundo");

function tresParam(x, y, z) {
    // console.log(x + y + z);
}

tresParam("Hola", "Soy", "Zabdiel");

// ////////////////////////////////////////////////////////////

// OUTPUT

function out() {
    let x = "Hola";
    return x;
}
// Podemos recibir el dato de forma directa
// console.log(out());

// Podemos guardar el output en una variable
// Y la podemos utilizar después
const receive = out();

// console.log (receive);

// Funcion con parámetro y return

function areaRectangulo(b, a) {
    var resultado = b * a;
    return resultado;
}

console.log(areaRectangulo(6, 3));


function areaTriangulo(b, a) {
    var resultado = b * a / 2;
    return resultado;
}

console.log( areaTriangulo(8, 4));
