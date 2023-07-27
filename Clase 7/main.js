// function mayorQue(n) {
//   return (m) => m > n;
// }

// const mayorQueCinco = mayorQue(5); // (m) => m > 5;
// console.log(mayorQueCinco(6));
// console.log(mayorQueCinco(3));

// const mayorQueDiez = mayorQue(10); // (m) => m > 10;
// console.log(mayorQueDiez(11));
// console.log(mayorQueDiez(3));

// function asignarOperacion(operacion) {
//   if (operacion === "sumar") {
//     return (a, b) => a + b;
//   }

//   if (operacion === "multiplicar") {
//     return (a, b) => a * b;
//   }

//   if (operacion === "restar") {
//     return (a, b) => a - b;
//   }

//   if (operacion === "dividir") {
//     return (a, b) => a / b;
//   }
// }

// const suma = asignarOperacion("sumar"); //(a, b) => a + b;
// console.log(suma(4, 5));

// function iterador(arreglo, funcion) {
//   for (const el of arreglo) {
//     funcion(el);
//   }
// }

// iterador([2, 4, 65, 7], console.log);

// let productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 200 },
//   { id: 3, nombre: "gorra", precio: 500 },
//   { id: 4, nombre: "media", precio: 700 },
// ];

//forEach recorre el arreglo
// productos.forEach((item) => {
//   console.log(item.nombre);
// });

//find encuentra el primer elemento que cumpla la condición
// const producto = productos.find((item) => item.nombre === "camisa");
// console.log(producto.nombre);

// let nombre = prompt("Ingrese el nombre del producto");

// const producto = productos.find((item) => item.nombre === nombre);

// if (producto) {
//   let mensaje = `
//     Id: ${producto.id}
//     Nombre: ${producto.nombre}
//     $${producto.precio}
//   `;

//   alert(mensaje);
// } else {
//   alert("El producto no se encuentra disponible");
// }

// let productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 200 },
//   { id: 3, nombre: "gorra", precio: 500 },
//   { id: 4, nombre: "media", precio: 700 },
// ];

//filter filtra los elementos que cumplen con la condicion dada
// let filtrados = productos.filter((item) => item.precio > 550 && item.nombre.includes("s"));
// console.log(filtrados);

//some verifica si existe al menos un elemento que cumple la condición
// console.log(productos.some((item) => item.nombre === "zapato"));

//map transforma o modifica los elementos del arreglo
// let nombres = productos.map((item) => item.nombre);
// let precios = productos.map((item) => item.precio);
// console.log(nombres);
// console.log(precios);

// let info = productos.map((item) => {
//   return {
//     nombre: item.nombre,
//     precio: item.precio,
//   };
// });

// console.log(info);

//reduce reduce un arreglo a un único elemento
// const numeros = [3, 5, 6, 8, 8];
// const total = numeros.reduce((acumulador, item) => acumulador + item, 0);
// console.log(total);

// const numeros = ["3", "5", "6", "8", "8"];
// const total = numeros.reduce((acumulador, item) => acumulador + item, "");
// console.log(total);

// let carrito = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 200 },
//   { id: 3, nombre: "gorra", precio: 500 },
//   { id: 4, nombre: "media", precio: 700 },
// ];

// const total = carrito.reduce((acum, item) => acum + item.precio, 0);
// console.log(total);

//sort ordena el arreglo
// const numeros = [40, 1, 5, 200];
// console.log(numeros.sort((a, b) => a - b));
// console.log(numeros.sort((a, b) => b - a));

// const items = [
//   { name: "Pikachu", price: 21 },
//   { name: "Charmander", price: 37 },
//   { name: "Pidgey", price: 45 },
//   { name: "Squirtle", price: 60 },
// ];

// console.log(
//   items.sort((a, b) => {
//     if (a.name > b.name) {
//       return -1;
//     }
//     if (a.name < b.name) {
//       return 1;
//     }
//     // a es igual a b
//     return 0;
//   })
// );

// let carrito = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 200 },
//   { id: 3, nombre: "gorra", precio: 500 },
//   { id: 4, nombre: "media", precio: 700 },
// ];

// let nombre = "zapato";
// let producto;

// for (const item of carrito) {
//   if (item.nombre === nombre) {
//     producto = item;
//   }
// }

// console.log(producto);