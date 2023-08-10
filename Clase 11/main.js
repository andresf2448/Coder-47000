//LOCALSTORAGE

// console.log(localStorage);

//setItem
// localStorage.setItem("nombre", "andres");
// localStorage.setItem("numero", 5);
// localStorage.setItem("valor", true);

//getItem
// let nombre = localStorage.getItem("nombre");
// console.log(nombre);

// let numero = localStorage.getItem("numero");
// console.log(numero);

// let valor = localStorage.getItem("valor");
// console.log(valor);

// let objeto = {
//   nombre: "andres",
//   edad: 26,
// };

// localStorage.setItem("objeto", objeto);

// let arreglo = [1, 2, 3, 4, 6];
// localStorage.setItem("arreglo", arreglo);

// for (let i = 0; i < localStorage.length; i++) {
//   let clave = localStorage.key(i);
//   console.log("clave", clave);
//   console.log("valor obtenido", localStorage.getItem(clave));
// }

//removeItem para eliminar un solo valor del storage
// localStorage.removeItem("nombre")

//clear para eliminar todo el storage
// localStorage.clear();

//SESSIONSTORAGE
//setItem
// sessionStorage.setItem("nombre", "andres");
// sessionStorage.setItem("valor", "false");
// sessionStorage.setItem("numero", "7");

//getItem
// let nombre = sessionStorage.getItem("nombre");
// console.log(nombre);

// let numero = sessionStorage.getItem("numero");
// console.log(numero);

// let valor = sessionStorage.getItem("valor");
// console.log(valor);

// for (let i = 0; i < sessionStorage.length; i++) {
//   let clave = sessionStorage.key(i);
//   console.log("clave", clave);
//   console.log("valor obtenido", sessionStorage.getItem(clave));
// }

//removeItem para eliminar un solo valor del storage
// sessionStorage.removeItem("nombre")

//clear para eliminar todo el storage
// sessionStorage.clear();

//JSON
// let objeto = {
//   nombre: "andres",
//   edad: 26,
// };

// localStorage.setItem("objeto", JSON.stringify(objeto));

// let arreglo = [2, 3, 5, 6];

// localStorage.setItem("arreglo", JSON.stringify(arreglo));

// let objeto = localStorage.getItem("objeto");
// console.log(objeto);
// console.log(JSON.parse(objeto));

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 700 },
//   { id: 3, nombre: "zapato", precio: 230 },
//   { id: 4, nombre: "media", precio: 175 },
// ];

// const guardarStorage = (clave, valor) => {
//   localStorage.setItem(clave, valor);
// };

// productos.forEach((producto) => {
//   guardarStorage(producto.id, JSON.stringify(producto));
// });

// localStorage.setItem(productos[0].id, productos[0])
// localStorage.setItem(productos[1].id, productos[1])
// localStorage.setItem(productos[2].id, productos[2])
// localStorage.setItem(productos[3].id, productos[3])

// localStorage.setItem("carrito", JSON.stringify(productos));

// let objeto = { nombre: "andres" };
// alert(objeto);

// alert(`nombre: ${objeto.nombre}`);

// let objeto = {
//   nombre: "andres",
// };

// localStorage.setItem("prueba", JSON.stringify(objeto));

// let usuario;
// let usuarioStorage = sessionStorage.getItem("usuario");

// if (usuarioStorage) {
//   usuario = usuarioStorage;
//   alert(`Bienvenido nuevamente ${usuario}`);
// } else {
//   usuario = prompt("Ingrese el usuario");
//   sessionStorage.setItem("usuario", usuario);
//   alert(`Bienvenido por primera vez ${usuario}`);
// }

// para cargar el localStorage con el carrito
// const carrito = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 700 },
//   { id: 3, nombre: "zapato", precio: 230 },
//   { id: 4, nombre: "media", precio: 175 },
// ];

// localStorage.setItem("carrito", JSON.stringify(carrito))

let eliminar = document.getElementById("eliminar");
let carrito = [];
let carritoStorage = localStorage.getItem("carrito");

if (carritoStorage) {
  carrito = JSON.parse(carritoStorage);
} else {
  let div = document.createElement("div");
  div.innerHTML = "No hay productos en el carrito";
  document.body.append(div);
}

carrito.forEach((producto) => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>Id: ${producto.id}</h2>
    <p>Nombre: ${producto.nombre}</p>
    <b>$${producto.precio}</b>
  `;
  document.body.append(div);
});

eliminar.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
  alert("carrito borrado");
});
