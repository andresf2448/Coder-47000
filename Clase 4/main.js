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

// function calculadora(num1, num2, operacion) {
//   switch (operacion) {
//     case "+":
//       return num1 + num2;
//       break;

//     case "-":
//       return num1 - num2;
//       break;

//     case "*":
//       return num1 * num2;
//       break;

//     case "/":
//       return num1 / num2;
//       break;

//     default:
//       return "Operacion no encontrada";
//       break;
//   }
// }

// let numero1 = parseInt(prompt("Ingrese el número uno"));
// let numero2 = parseInt(prompt("Ingrese el número dos"));
// let operacion = prompt("Ingrese la operación");

// let resultado = calculadora(numero1, numero2, operacion);

// alert(`El resultado de la operacion es: ${resultado}`);
// let resultado;

// function sumar(numero1, numero2) {
//   resultado = numero1 + numero2;
// }

// sumar(5, 6);
// console.log(resultado);

// {
//   let nombre = "andres";
// }

// console.log(nombre);

// var nombre = "andres";
// var nombre = "camila";

// function sumar(num1, num2) {
//   let resultado = num1 + num2;
//   return resultado;
// }

// function restar(num1, num2) {
//   let resultado = num1 - num2;
//   return resultado;
// }

// function multiplicar(num1, num2) {
//   let resultado = num1 * num2;
//   return resultado;
// }

// function dividir(num1, num2) {
//   let resultado = num1 / num2;
//   return resultado;
// }

// const suma = function (a, b) {
//   return a + b;
// };

// console.log(suma(5, 6));

//arrow  function o funcion flecha
// function suma(a, b) {
//   return a + b;
// }

// const suma = (a, b) => {
//   return a + b;
// };

// console.log(suma(8, 9));

// const resta = (a, b) => a - b;
// () => "hola";
// x => x

// const saludar = () => "hola";
// console.log(saludar());

// const sumarCinco = x => x + 5;
// console.log(sumarCinco(6));

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = (x) => x * 0.21;

let precioProducto = 1000;
let descuento = 100;

// precioProducto + precioProducto*iva - descuento
let nuevoProducto = resta(suma(precioProducto, iva(precioProducto)), descuento);
                  // = resta(suma(1000, iva(1000)), 100);
                  // = resta(suma(1000, 210), 100);
                  // = resta(1210, 100);
                  // = 110;
console.log(nuevoProducto);
