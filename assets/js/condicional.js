// // const nineros = false;
// // const hambre = true;

// alert(nineros == hambre); // false

// alert(nineros || hambre); // true

// // AND
// // Todas las condiciones deben ser true
// // true && true => true
// // true && false => false
// // false && false => false


// // OR
// // Solo una condicion debe ser true 
// // true || true = true
// // true || false = true
// // false || false = false


// // NOT
// // Es la negacion a la condcion
// // true => false, false => true



// if (condition) {
//     // block of code to be executed if the condition is true
// }


// var hora = 8;

// if (hora == 8) {
// 	console.log("Buen dia");
// }

// var hora = 3;

// if (hora != 8) {
// 	console.log("Buen dia");
// }

// var hungry = true;

// if (hungry == true) {
//     alert("Tengo mal del porky");
// } else {
//     alert("To mimir")
// }




// var hora = 18;

// if (hour <= 18) {
//     alert ("Good Day");
// } else {
//     alert ("Tardes, ya")
// }


// var edad = 17;
// if (edad >= 18) {
//     alert("Crear cuenta")
// } else {
//     alert("bai bai")
// }



// var hora = -1;

// if (hora <= 7 && hora > 0 ) {
//     alert("Buenas madrugadas");
// } else {
//     alert("Que tenga un buen dia");
// }



// var hora = 12;

// if (hora > 0){
//     if (hora <= 7 &&) {
//         alert("Buenas madrugadas");
//     } else {
//         alert("Que tengas un buen dia");
//     }
// } else {
//     alert("Su hora no existe");
// }



// var nineros = prompt("Ingresa tus nineros");

// if (nineros <=10) {
//     alert("Concha de vainilla y 4 picafresas");
// } else if (nineros <= 50) {
//     alert("Tacos al vaporwave y una agua de horchata");
// } else if (nineros <= 129) {
//     alert("Pizza de liru sisa sin piña combo fiesta");
// } else {
//     alert("Compra 3 casas, renta 2 y vive en una");
// }


// var dia = new Date().getDay();

// var dia = 4;
// function evalDate(day) {
// 	switch(day){
// 	case 0:
// 		return "Domingo";
//         break;
//     case 1:
//     	return "Lunes";
//         break;
//     case 2:
//     	return "Martes";
//         break;
//     case 3:
//     	return "Miercoles";
//         break;
//     case 4:
//     	return "Jueves";
//         break;
//     case 5:
//     	return "Viernes";
//         break;
//     case 6:
//     	return "Sabado";
//         break;
//     default:
//     	return "Su fecha no es válida";
// 	}
// }

// alert(evalDate(dia));


var nineros = prompt("Ingrese su deposito");

var compra

switch(nineros) {
    let mensaje;

    case nineros <= 10:
        compra = "Churrumais";
    case nineros <= 50:
        compra = "McTrio";
    case nineros <= 100:
        compra = "Chilaquiles verdes c/ poio y 1/2L de naranja";
    case nineros <= 500: 
         compra = "1/2kg de chicharrones y 1 boleto al cine"; 


}

alert(compra);








