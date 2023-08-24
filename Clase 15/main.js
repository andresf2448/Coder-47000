//setTimeout
/* 
estructura del setTimeout

setTimeout(funcion, timer);
*/

// setTimeout(() => {
//   console.log("Hola");
// }, 5000);

// console.log("Inicio");

// setTimeout(() => {
//   console.log("Intermedio");
// }, 3000);

// console.log("fin");

// let saludo = document.getElementById("saludo");
// let boton = document.getElementById("boton");

// boton.addEventListener("click", () => {
//   saludo.classList.add("color");

//   setTimeout(() => {
//     saludo.classList.remove("color");
//   }, 3000);
// });

// for (const letra of "Hola") {
//   setTimeout(() => {
//     console.log(letra);
//   }, 1000);
// }

// for (const letra of "Mundo") {
//   setTimeout(() => {
//     console.log(letra);
//   }, 3000);
// }

// console.log("Inicio");

// setTimeout(() => {
//   console.log("Intermedio");
// }, 0);

// console.log("fin");

// function multiply(x, y) {
//   return x * y;
// }

// function printSquare(x) {
//   let resultado = multiply(x, x);
//   console.log(resultado);
// }

// printSquare(5);

// console.log("Inicio");

// setTimeout(() => {
//   console.log("Intermedio");
// }, 0);

// console.log("fin");

// setInterval(() => {
//   console.log("Hola");
// }, 1000);

// let counter = 0;
// const interval = setInterval(() => {
//   counter++;
//   console.log("Counter: ", counter);

//   if (counter >= 5) {
//     clearInterval(interval);
//     console.log("Se removió el intervalo");
//   }
// }, 1000);

//PROMESAS
/* 
estrucutra de una promesa

new Promise((resolve, reject) => {
  //cuerpo de la promesa
})
*/

// const futuro = (valor) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       valor ? resolve(["andres", "camila", "juan"]) : reject("Promesa rechazada");
//     }, 5000);
//   });
// };

// console.log(futuro(false));

// let edad = 18;

// if (edad >= 18) {
//   console.log("eres mayor de edad");
// } else {
//   console.log("Eres menor de edad");
// }

// edad >= 18 ? console.log("eres mayor de edad") : console.log("Eres menor de edad")

// const futuro = (valor) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       valor
//         ? resolve(["andres", "camila", "juan"])
//         : reject("Promesa rechazada");
//     }, 3000);
//   });
// };

// futuro(true)
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Proceso finalizado"));

/////////////////////////////////////////////////////////SERVIDOR
const BD = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "gorra", precio: 1000 },
  { id: 3, nombre: "media", precio: 1000 },
  { id: 4, nombre: "zapato", precio: 1000 },
];

const obtenerProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(BD);
      reject("Error al procesar")
    }, 2000);
  });
};
////////////////////////////////////////////////////////

obtenerProductos()
  .then((response) => {
    response.forEach((item) => {
      let div = document.createElement("div");
      div.innerHTML = `
        <h2>Id: ${item.id}</h2>
        <p>Nombre: ${item.nombre}</p>
        <b>$${item.precio}</b>
      `;

      document.body.append(div);
    });
  })
  .catch((error) => {
    let div = document.createElement("div");
    div.innerHTML = `Error intente luego ${error}`;

    document.body.append(div);
  });
