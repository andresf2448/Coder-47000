/* 
estructura del bucle for

for(desde; hasta; actualizacion){
  codigo a repetir
}
*/
// i++       i = i + 1
// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

// let numero = parseInt(prompt("Ingrese el numero"));

// for (let i = 1; i <= 10; i++) {
//   let resultado = numero * i;

//   alert(`${numero} * ${i} = ${resultado}`);
// }

// let edad = 10;
// console.log("Hola mi edad es " + edad);
// console.log(`Hola mi edad es ${edad}`);

// for (let turno = 1; turno <= 7; turno++) {
//   let nombre = prompt("Ingrese el nombre");
//   alert(`Turno #${turno} Nombre ${nombre}`);
// }

// alert("se acabaron los turnos");

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     break;
//   }

//   console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//   if (i === 5 || i === 2) {
//     continue;
//   }

//   console.log(i);
// }

/* 
estructura del while

while(condicion){
  codigo a repetir cuando la condicion es verdadera
}
*/

// let repetir = true; BUCLE INFININTO

// while(repetir){
//   console.log("Hola");
// }

// let usuario = prompt("Ingrese el usuario");

// while (usuario != "andres") {
//   alert("usuario incorrecto");
//   usuario = prompt("Ingrese el usuario");
// }

// let entrada = prompt("Ingrese un dato");

// while(entrada != "ESC"){
//   alert(`Se ingresó ${entrada}`);
//   entrada = prompt("Ingrese un dato");
// }

/* 
estructura del do while

do{
  codigo a ejecutar por primera vez y cunado la condicion sea verdadera
}while(condicion);
*/

// let repetir = false;

// while (repetir) {
//   console.log("Entramos");
// }

// do {
//   console.log("Entramos");
// } while (repetir);

/* 
estructura del switch

switch(valor){
  case valor1:
    codigo a ejecutar cuando el valor === valor1
    break;

  case valor:
    codigo a ejecutar cuando el valor === valor2
    break;

  .
  .
  .

  default:
    codico a ejecutar cunado valor no coincide con ningun valor anterior
    break;
}
*/

// let moneda = prompt("Ingresa el codio de la moneda");

// switch (moneda) {
//   case "ars":
//     alert("moneda de argentina");
//     break;

//   case "cop":
//     alert("moneda de colombia");
//     break;

//   case "clp":
//     alert("moneda de chile");
//     break;

//   case "uyu":
//     alert("moneda de uruguay");
//     break;

//   default:
//     alert("moneda no reconocida");
//     break;
// }

let entrada = prompt("Ingresar un nombre");

while (entrada != "ESC") {
  switch (entrada) {
    case "ANA":
      alert("HOLA ANA");
      break;
    case "JUAN":
      alert("HOLA JUAN");
      break;
    default:
      alert("¿QUIÉN SOS?");
      break;
  }
  entrada = prompt("Ingresar un nombre");
}
