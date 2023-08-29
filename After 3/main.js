// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000, cantidad: 5 },
//   { id: 2, nombre: "zapato", precio: 1000, cantidad: 5 },
//   { id: 3, nombre: "gorra", precio: 1000, cantidad: 5 },
//   { id: 4, nombre: "media", precio: 1000, cantidad: 5 },
// ];

// localStorage.setItem("carrito", JSON.stringify(productos));

// const agregarProducto = (nombre, precio) => {
//   let storage = localStorage.getItem("carrito");
//   let data = JSON.parse(storage);

//   let nuevoProducto = {
//     id: data.length + 1,
//     nombre,
//     precio,
//   };

//   data.push(nuevoProducto);

//   localStorage.setItem("carrito", JSON.stringify(data));
// };

// let nombre = prompt("Ingrese el nombre del nuevo producto");
// let precio = parseInt(prompt("Ingrese el precio del producto"));

// agregarProducto(nombre, precio);

// const restarStock = (nombre, cantidadRestar) => {
//   let storage = localStorage.getItem("carrito");
//   let data = JSON.parse(storage);

//   let producto = data.find((item) => item.nombre === nombre);
//   producto.cantidad -= cantidadRestar;

//   localStorage.setItem("carrito", JSON.stringify(data));
// };

// let nombre = prompt("Ingrese el nombre del producto");
// let cantidad = parseInt(prompt("Ingrese la cantidad a restar"));

// restarStock(nombre, cantidad);

// const eliminarProducto = (nombre) => {
//   let storage = localStorage.getItem("carrito");
//   let data = JSON.parse(storage);

//   let filtrados = data.filter((item) => item.nombre != nombre);
//   localStorage.setItem("carrito", JSON.stringify(filtrados));
// };

// let nombre = prompt("Ingrese el nombre del producto a eliminar");
// eliminarProducto(nombre);

/* 
new Promise((resolve, reject) => {
  cuerpo de la promesa
})
*/

//////////////////////////////////////servidor
// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000, cantidad: 5 },
//   { id: 2, nombre: "zapato", precio: 1000, cantidad: 5 },
//   { id: 3, nombre: "gorra", precio: 1000, cantidad: 5 },
//   { id: 4, nombre: "media", precio: 1000, cantidad: 5 },
// ];

// const traerproductos = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(productos);
//     }, 2000);
//   });
// };
//////////////////////////////////////

// traerproductos()
//   .then((response) => {
//     response.forEach((item) => {
//       let div = document.createElement("div");
//       div.innerHTML = `
//       <h2>Id: ${item.id}</h2>
//       <p>Nombre: ${item.nombre}</p>
//       <b>$${item.precio}</b>
//     `;

//       document.body.append(div);
//     });
//   })
//   .catch((error) => console.log(error));

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000, vendido: false },
//   { id: 2, nombre: "zapato", precio: 1000, vendido: false },
//   { id: 3, nombre: "gorra", precio: 1000, vendido: false },
//   { id: 4, nombre: "media", precio: 1000, vendido: false },
// ];

// localStorage.setItem("carrito", JSON.stringify(productos));

//crear una funcion que marque como comprado el producto ingresado

// const comprarProducto = (nombre) => {
//   let storage = localStorage.getItem("carrito");
//   let data = JSON.parse(storage);

//   let producto = data.find((item) => item.nombre === nombre);
//   producto.vendido = true;

//   localStorage.setItem("carrito", JSON.stringify(data));
// };

// let nombre = prompt("Ingrese el nombre del productoa vender");
// comprarProducto(nombre);
