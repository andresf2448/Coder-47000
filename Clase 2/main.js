/* 
estructura del if

if(condicion){
  codigo a ejecutar cuando la condicion es verdadera
}
*/

// if(false){
//   console.log("entramos");
// }

// if(""){
//   console.log("entra");
// }

// if("andres"){
//   console.log("entra");
// }

// if(-3){
//   console.log("entra");
// }

// let edad = 20;

// if (edad >= 18) {
//   console.log("Puedes entrar a la fiesta");
// }

/*
estructura del if else

if(condicion){
  codigo a ejecutar cuando la condicion es verdadera
}else{
  codigo ejecutar cuando la condicion es falsa
}
*/

// let edad = parseInt(prompt("Ingrese su edad"));

// if (edad >= 18) {
//   alert("Puede entrar a la fiesta");
// } else {
//   alert("No puede entrar a la fiesta");
// }

// let respuesta = prompt("Terminaste la tarea");

// if (respuesta === "si") {
//   alert("Puedes salir a jugar");
// } else {
//   alert("no puedes salir a jugar");
// }

/* 
estructura del if else if

if(condicion1){
  codigo a ejecutar cuando la condicion1 es verdadera
}else if(condicion2){
  codigo a ejecutar cuando la condicion2 es verdadera
}else{
  codigo a ejecutar cuando ninguna de las condiciones es verdadera
}
*/

// let edad = parseInt(prompt("Ingrese su edad"));

// if (edad < 14) {
//   alert("No puedes entrar a la fiesta");
// } else if (edad < 18) {
//   let respuesta = prompt("Tienes un adulto?").toLowerCase();

//   if (respuesta === "si") {
//     alert("Puedes entrar a la fiesta con un adulto");
//   }else{
//     alert("No puedes entrar a la fiesta");
//   }
// } else {
//   alert("puedes entrar a la fiesta");
// }

/* 
&& es verdadero cuando las condiciones son verdaderas de lo contrario es falso

|| es verdadero cuando al menos una de las condiciones es verdadera en caso contraio es falso
*/

// let nombre = prompt("ingrese su nombre");
// let apellido = prompt("ingrese su apellido");

// if (nombre != "" && apellido != "") {
//   alert("Hola " + nombre + " " + apellido);
// } else {
//   alert("El nombre y el apellido deben ser ingresados");
// }

let nombre = prompt("ingrese su nombre");

if (nombre === "ANA" || nombre === "ana") {
  alert("Hola " + nombre);
} else {
  alert("No eres ana");
}
