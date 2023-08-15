//OPERADOR ++

// let numero = 10;
// numero = numero + 1;
// numero += 1;
// numero++;

//OPERADOR TERNARIO
/* 
estructura del operador ternario

condicion ? codigo cuando condicion verdadera : codigo cuando la condicion es falsa
*/

// let edad = 18;

// if (edad >= 18) {
//   console.log("eres mayor de edad");
// } else {
//   console.log("eres menor de edad");
// }

// edad >= 18 ? console.log("eres mayor de edad") : console.log("eres menor de edad");

// let permiso;
// const usuario = {
//   nombre: "juan",
//   edad: 23,
// };

// if (usuario.edad >= 18) {
//   permiso = true;
// } else {
//   permiso = false;
// }

// if (permiso) {
//   console.log("Puedes entrar a la fiesta");
// } else {
//   console.log("No puedes entrar a la fiesta");
// }

// const usuario = {
//   nombre: "juan",
//   edad: 23,
// };

// let permiso = usuario.edad >= 18 ? true : false;
// permiso ? console.log("Puedes entrar a la fiesta") : console.log("No puedes entrar a la fiesta");

/* 
operador1 && operador2 retorna operador1 si operador1 es false en caso contrario retorna operador2
operador1 || operador2 retorna operador1 si este es verdadera en caso contrario retorna false
*/

// const carrito = [];

// if (carrito.length === 0) {
//   console.log("El carrito está vacio");
// }

// carrito.length === 0 && console.log("El carrito está vacio");

// const usuario = {
//   edad: 20,
//   nombre: "John",
// };

// const registro = usuario.edad >= 18 && new Date();
// console.log(registro);

// console.log(0 || "Falsy"); //falsy
// console.log(40 || "Falsy"); //40
// console.log(null || "Falsy"); //falsy
// console.log(undefined || "Falsy"); //falsy
// console.log("Hola Mundo" || "Falsy"); //"hola mundo"
// console.log("" || "Falsy"); //falsy
// console.log(NaN || "Falsy"); //falsy
// console.log(true || "Falsy"); //true
// console.log(false || "Falsy"); //falsy

// const usuario1 = {
//   edad: 12,
//   nombre: "juan",
// };

// const usuario2 = null;

// console.log(usuario1 || "El usuario no existe");
// console.log(usuario2 || "El usuario no existe");

// let carrito;
// let carritoStorage = JSON.parse(localStorage.getItem("carrito"));

// if (carritoStorage) {
//   carrito = carritoStorage;
// } else {
//   carrito = [];
// }

// let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// const usuario = null;

// console.log(usuario?.nombre || "El usuario no existe");

//DESESTRUCTURACION
// const usuario = {
//   nombre: "juan",
//   edad: 23,
//   direccion: "AV",
// };

// let nombre = usuario.nombre;
// let edad = usuario.edad;
// let direccion = usuario.direccion;

// let { nombre, edad } = usuario;
// console.log(nombre);
// console.log(edad);

// const usuario = {
//   nombre: "juan",
//   edad: 23,
//   direccion: "AV",
//   telefonos: {
//     casa: 1234,
//     celular: 34,
//     trabajo: 234,
//   },
// };

// const {
//   nombre: nombrePersona,
//   telefonos: { casa },
// } = usuario;

// console.log(nombrePersona, casa);

// const desestructurar = ({ nombre, edad }) => {
//   console.log(nombre, edad);
// };

// desestructurar({ nombre: "juan", edad: 45, direccion: "AV" });

// const nombres = ["camila", "andres", "sofia", "pepito"];

// const [a, , c, d] = nombres;
// console.log(a, c, d);

const mascota = {
  nombre: "Zeus",
  edad: 3,
  propietario: {
    casa: {
      propietario1: "juan",
      propietario2: "pepito",
    },
    oficina: {
      propietario1: "manuela",
    },
  },
};

const {
  nombre: nombreMascota,
  propietario: {
    casa: { propietario1: asd },
    oficina: { propietario1 },
  },
} = mascota;

console.log(propietario1, nombreMascota);
