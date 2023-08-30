// const getCharacters = async () => {
//   try {
//     const response = await fetch("https://rickandmortyapi.com/api/character");
//     const data = await response.json();

//     console.log(data);
//     const characters = data.results;

//     characters.forEach((character) => {
//       let div = document.createElement("div");
//       div.innerHTML = `
//         <h1>${character.name}</h1>
//         <p>${character.status}</p>
//         <p>${character.gender}</p>
//         <img src="${character.image}">
//         <hr/>
//       `;

//       document.body.append(div);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// getCharacters();

const getCharacters = async () => {
  try {
    let response = await axios("https://rickandmortyapi.com/api/character");
    console.log(response);
    let characters = response.data.results;

    characters.forEach((character) => {
      let item = document.createElement("div");
      item.innerHTML = `
      <h1>${character.name}</h1>
      <p>${character.status}</p>
      <p>${character.gender}</p>
      <img src="${character.image}">
      <hr/>
    `;

      document.body.append(item);
    });
  } catch (error) {
    console.log(error);
  }
};

getCharacters();
