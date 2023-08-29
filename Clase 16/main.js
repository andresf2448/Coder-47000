//estructura del fetch    fetch(url, config);
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((info) => {
//       console.log(info.title);
//       console.log(info.body);
//     });
//   });

// listado donde se mostrarán las publicaciones en la página
// let listado = document.getElementById("listado");

// //llamada al servidor para traer con el fetch las publicaciones
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => {
//     //recorremos todas las publicaciones traidas del servidor
//     data.forEach((publicacion) => {
//       const li = document.createElement("li");
//       li.innerHTML = `
//         <h2>${publicacion.title}</h2>
//         <p>${publicacion.body}</p>
//       `;

//       listado.append(li);
//     });
//   });

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     body: "Nuestra primera publicacion de coder",
//     title: "Probando publicacion",
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// let listado = document.getElementById("listado");

// fetch("./data.json")
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((item) => {
//       const li = document.createElement("li");
//       li.innerHTML = `
//         <h2>ID: ${item.id}</h2>
//         <p>Nombre: ${item.nombre}</p>
//         <b>$${item.precio}</b>
//       `;

//       listado.append(li);
//     });
//   });

//ASYNC - AWAIT

let listado = document.getElementById("listado");

const pedirProductos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  data.forEach((publicacion) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <h2>${publicacion.title}</h2>
      <p>${publicacion.body}</p>
    `;

    listado.append(li);
  });
};

pedirProductos();
