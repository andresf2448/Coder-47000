/* 
estructura de un arreglo

[elemento1, elemento2, ..., elementon];
*/

// const arregloVacio = [];
// const numeros = [2, 4, 56, 8, 9, 4, 3];
// const nombres = ["andres", "camila", "pepito"];
// const valores = [true, false, false, true];
// const variados = [true, false, 3, 4, "andres"];

// console.log(nombres);

// const nombres = ["andres", "camila", "pepito"];

// console.log(nombres[0]);
// console.log(nombres[2]);

// const nombres = ["andres", "camila", "pepito", "sofia"];

// for (let index = 0; index < nombres.length; index++) {
//   console.log(nombres[index]);
// }

// const nombres = ["andres", "camila"];

// console.log(nombres.length); //longitud o cantidad de elementos e el arreglo

// nombres.push("sofia"); // agrega une lemento al final del arreglo
// console.log(nombres);

// nombres.unshift("vanesa"); // agrega un elemento al principio del arreglo
// console.log(nombres);

// nombres.pop(); // saca el último elemento del arreglo
// console.log(nombres);

// nombres.shift(); // saca el primer elemento del arreglo
// console.log(nombres);

// const nombres = ["andres", "camila", "pepito", "sofia"];
// nombres.splice(1, 2); //elimina varios elementos del arreglo
// nombres.splice(1, 0, "juan"); //agrega un elemento en una posición dada

// console.log(nombres);

// const nombres = ["andres", "camila", "pepito", "sofia"];
// console.log(nombres.join("**")); //unir en un solo string todos los elementos del arreglo separados por el parametro

// const nombres = ["andres", "camila", "pepito", "sofia"];
// const mascotas = ["firu", "max", "zeus"];

// const varios = nombres.concat(mascotas); //une todos los elementos de los arreglos en uno solo
// console.log(varios);

// const nombres = ["andres", "camila", "pepito", "sofia"];
// const copia = nombres.slice(1, 4); // realiza una copia de un fragmento de un arreglo
// console.log(copia);

// const nombres = ["andres", "camila", "pepito", "sofia"];
// console.log(nombres.indexOf("sofia")); //buscar la posicion del elemento pasado por parametro
// console.log(nombres.indexOf("mariana"));

// const nombres = ["andres", "camila", "pepito", "sofia"];
// console.log(nombres.includes("andres"));
// console.log(nombres.includes("mariana"));

// const productos = ["camisa", "media", "zapato", "gorra"];
// let nombre = prompt("Ingrese el poducto a validar disponibilidad");

// if (productos.includes(nombre)) {
//   alert("El producto se encuentra disponible");
// } else {
//   alert("El producto no está disponible");
// }

// const productos = ["camisa", "media", "zapato", "gorra"];
// productos.reverse();
// console.log(productos);

// const nombres = ["andres", "camila", "pepito", "sofia"];

// const eliminar = (nombre) => {
//   let index = nombres.indexOf(nombre);

//   if (index != -1) {
//     nombres.splice(index, 1);
//     console.log(nombres);
//   }
// };

// eliminar("pepito");

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 1000 },
//   { id: 3, nombre: "gorra", precio: 1000 },
//   { id: 4, nombre: "media", precio: 1000 },
// ];

// for (const producto of productos) {
//   console.log(producto.nombre);
// }

// class Producto {
//   constructor(nombre, precio) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.vendido = false;
//   }

//   vender() {
//     this.vendido = true;
//   }
// }

// const productos = [];

// productos.push(new Producto("camisa", 1234));
// productos.push(new Producto("gorra", 134));
// productos.push(new Producto("pantalon", 1000));
// productos.push(new Producto("zaapto", 700));

// let nombre = prompt("producto a consultar la información");
// let producto;

// for (let index = 0; index < productos.length; index++) {
//   if (productos[index].nombre === nombre) {
//     producto = productos[index];
//   }
// }

// for (const item of productos) {
//   if (item.nombre === nombre) {
//     producto = item;
//   }
// }

// alert(`El nombre es: ${producto.nombre} precio: ${producto.precio}`);
