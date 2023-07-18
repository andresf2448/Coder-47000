/* 
function nombreFuncion(){
  codigo a ejecutar por la funcion
}

invocar, llamar o ejecutar una funcion
nombreFuncion();
*/

// function saludar() {
//   console.log("Hola");
// }

// saludar();

// function pedirDatos() {
//   let nombre = prompt("Ingrese su nombre");
//   alert(`su nombre es ${nombre}`);
// }

// pedirDatos();

/* 
function nombreFuncion(parm1, parm2, ..., parmn){
  codigo a ejecutar por la funcion
}

nombreFuncion(valor1, valor2, ..., valorn);
*/

// function saludar(saludo, nombre) {
//   alert(`${saludo} ${nombre}`);
// }

// let saludo = prompt("Ingrese el saludo");
// let nombre = prompt("Ingrese el nombre");
// saludar(saludo, nombre);
// saludar("Bienvenido", "Andrés");

// function sumar(num1, num2) {
//   console.log(num1 + num2);
// }

// sumar(10, 8);
// sumar(3, 2);

// function saludar() {
//   return "hola";
// }

// console.log(saludar());

function calculadora(num1, num2, operacion) {
  switch (operacion) {
    case "+":
      return num1 + num2;
      break;

    case "-":
      return num1 - num2;
      break;

    case "*":
      return num1 * num2;
      break;

    case "/":
      return num1 / num2;
      break;

    default:
      return "Operacion no encontrada";
      break;
  }
}

let numero1 = parseInt(prompt("Ingrese el número uno"));
let numero2 = parseInt(prompt("Ingrese el número dos"));
let operacion = prompt("Ingrese la operación");

let resultado = calculadora(numero1, numero2, operacion);

alert(`El resultado de la operacion es: ${resultado / 100}`);
