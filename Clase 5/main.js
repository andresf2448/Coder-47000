// let nombre = "pepito";
// let edad = 34;
// let direccion = "AV";

/* 
estructura de un objeto

{clave1: valor1, clave2: valor2, ..., claven: valorn}
*/

// const persona1 = {
//   nombre: "pepito",
//   edad: 34,
//   direccion: "AV",
// };

// console.log(persona1.nombre);
// console.log(persona1.edad);
// console.log(persona1.direccion);
// console.log(persona1.pepito);
// let clave = "nombre";
// console.log(persona1.clave);

// console.log(persona1["nombre"]);
// console.log(persona1["edad"]);
// console.log(persona1["direccion"]);
// let clave = "nombre";
// console.log(persona1[clave]);

// const persona1 = {
//   nombre: "pepito",
//   edad: 34,
//   direccion: "AV",
// };

// let propiedad = prompt("Ingrese la propiedad que quiere consultar");

// alert(persona1[propiedad])

// const persona = { nombre: "andres" };

// persona["edad"] = 26;
// persona.direccion = "AV";

// console.log(persona);

//funcion constructora

// function Persona(nombre, edad, direccion) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.direccion = direccion;
// }

// let nombre = prompt("Ingrese el nombre");
// let edad = prompt("Ingrese la edad");
// let direccion = prompt("Ingrese la direccion");

// const persona1 = new Persona(nombre, edad, direccion);
// const persona1 = new Persona("pepito", 34, "AV");
// const persona2 = new Persona("pepita", 50, "AV");
// console.log(persona1.nombre);
// console.log(persona2.nombre);

// function Persona(info) {
//   this.nombre = info.nombre;
//   this.edad = info.edad;
//   this.direccion = info.direccion;
// }

// const persona1 = new Persona({
//   edad: 26,
//   direccion: "AV",
//   nombre: "andres",
// });

// console.log(persona1);

// const persona1 = {
//   nombre: "pepito",
//   edad: 34,
//   direccion: "AV",
// };

// for(const propiedad in persona1){
//   console.log(propiedad);
// }

// function Persona(nombre, edad, direccion) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.direccion = direccion;
//   this.hablar = function () {
//     console.log(`Hola soy ${this.nombre}`);
//   };
// }

// const persona1 = new Persona("pepito", 34, "AV");
// console.log(persona1);

// persona1.hablar();

// class Persona {
//   constructor(nombre, edad, direccion) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.direccion = direccion;
//   }

//   hablar() {
//     console.log(`Hola soy ${this.nombre}`);
//   }
// }

// const persona1 = new Persona("pepito", 34, "AV");
// console.log(persona1);

// persona1.hablar();

// class Producto {
//   constructor(nombre, precio, imagen) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.imagen = imagen;
//     this.vendido = false;
//   }

//   vender() {
//     this.vendido = true;
//   }
// }

// const producto1 = new Producto("Kit de pesas...", 106900, "http://askjdf");
// const producto2 = new Producto(
//   "Silla de escritorio..",
//   205900,
//   "http://asdjkhfg"
// );

// console.log(producto1);
// producto1.vender();
// console.log(producto1);
// console.log(producto2);

class Producto {
  constructor(nombre, precio, imagen, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
    this.cantidad = cantidad;
  }

  vender() {
    this.cantidad -= 1; // this.cantidad -= 1     this.cantidad = this.cantidad - 1
  }
}

const producto1 = new Producto("Kit de pesas...", 106900, "http://askjdf", 5);


console.log(producto1);
producto1.vender();
console.log(producto1);
producto1.vender();
console.log(producto1);
