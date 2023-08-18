// const nombres = ["juan", "sofia", "mariana"];

// console.log(...nombres);
// console.log(nombres.join(" "));

// console.log(Math.max(4, 5, 6, 8, 9));
// const numeros = [1, 2, 3, 56, 7];
// console.log(Math.max(...numeros));
// console.log(Math.min(...numeros));

//paso por valor
// let nombre1 = "andres";
// let nombre2 = nombre1;

// nombre2 = "camila";

// console.log(nombre1);

//paso referencia
// const persona1 = { nombre: "andres", edad: 26 };
// const persona2 = {...persona1};

// persona2.nombre = "camila";
// console.log(persona1);
// console.log(persona2);

// const usuario = {
//   nombre: "juan",
//   edad: 24,
//   curso: "javascript",
// };

// const usuario1 = {
//   ...usuario,
//   direccion: "AV",
//   curso: "React",
// };

// console.log(usuario1);

// function sumar(...numeros) {
//   console.log(numeros.reduce((acum, item) => acum + item, 0));
// }

// sumar(5, 6, 8, 9);
// sumar(5, 6);

//REPASO
/* 
estructura de un condicional

if(condicion){
  codigo a ejecutar cuando la condicion es verdadera
}

if(condicion){
  codigo a ejecutar cuando la condicion es verdadera
}else{
  codigo a ejecutar cuando la condicion es falsa
}

if(condicion1){
  codigo a ejecutar cuando la condicion1 es verdadera
}else if(condicion2){
  codigo a ejecutar cuando la condicion2 es verdadera
}else{
  codigo a ejecutar cuando ninguna de las condiciones es verdadera
}
*/

/* 
for(desde; hasta; actualizacion){
  codigo a repetir
}

while(condicion){
  codigo a repetir siempre que la condicion sea verdadera
}
*/

// let entrada = prompt("Ingres el usuario");

// while (entrada != "pepito") {
//   alert("usuario incorrecto");
//   entrada = prompt("Ingres el usuario");
// }

/* 
function nombreFuncion(parm1, parm2, ..., parmn){
  codigo a ejecutar por la funcion
}

nombreFuncion(valor1, valor2, ..., valorn);

const nombreFuncion = (parm1, parm2, ..., parmn) => {
  codigo a ejecutar por la funcion
}

const sumar = (num1, num2) => num1 + num2;
*/

// class Producto {
//   constructor(nombreProducto, precioProducto) {
//     this.nombre = nombreProducto;
//     this.precio = precioProducto;
//   }

//   info() {
//     console.log(`Hola, soy ${this.nombre}`);
//   }
// }

// const producto = new Producto("camisa", 1000);
// console.log(producto);
// console.log(producto.nombre);

// producto.info();

///////////////////////////////////////////////////////////
// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 1000 },
//   { id: 3, nombre: "zapato", precio: 1000 },
//   { id: 4, nombre: "media", precio: 1000 },
// ];

// //creamos funcion para buscar el producto por id y mostrar agregar al carrito
// const agregarCarrito = (id) => {
//   //buscamos el producto por id
//   let producto = productos.find((item) => item.id === id);

//   let mensaje = `
//     Id: ${producto.id}
//     Nombre: ${producto.nombre}
//     $${producto.precio}
//   `;

//   alert(mensaje);
// };

// //recorremos el arreglo para mostrar en la pagina cada uno de los productos
// productos.forEach((item) => {
//   let div = document.createElement("div");
//   div.innerHTML = `
//     <h2>ID: ${item.id}</h2>
//     <p>Nombre: ${item.nombre}</p>
//     <b>$${item.precio}</b>
//     <button id="boton${item.id}">Agregar al carrito</button>
//   `;
//   document.body.append(div);

//   //obtenemos del dom el boton correspondiente al producto
//   let boton = document.getElementById(`boton${item.id}`);
//   boton.addEventListener("click", () => agregarCarrito(item.id));
// });

////////////////////////////////////////////////////////////////////////////
const productos = [];
let contenedor = document.getElementById("contenedor");

const renderizado = (productos) => {
  contenedor.innerHTML = "";
  productos.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = `
      <h2>ID: ${item.id}</h2>
      <p>Nombre: ${item.nombre}</p>
      <b>$${item.precio}</b>
    `;

    contenedor.append(div);
  });
};

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputs = e.target.children;
  let nombre = inputs[0].value;
  let precio = inputs[1].value;

  productos.push({ id: productos.length + 1, nombre, precio });
  renderizado(productos);
});
