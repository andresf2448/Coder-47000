// hacer un algoritmo que diga si un número es primo o no

// let numero = 10;
// let cantidadDivisores = 0;

// for(let i = 1; i <= numero; i++){
//   if(numero % i === 0){
//     cantidadDivisores++;
//   }
// }

// if(cantidadDivisores === 2){
//   console.log("El numero es primo");
// }else{
//   console.log("El numero no es primo");
// }

// ingresar un número, si se ingresa "ESC" el flujo termina pero si es diferente de ESC debe mostrar por consola lo siguiente

/* 
1 => Tomate
2 => Papa
3 => Carne
4 => Pollo
otro diferente => No esta dentro de la lista
*/

let numero = prompt("Ingrese el numero");

while (numero != "ESC") {
  switch (numero) {
    case "1":
      console.log("Tomate");
      break;

    case "2":
      console.log("Papa");
      break;

    case "3":
      console.log("Carne");
      break;

    case "4":
      console.log("Pollo");
      break;
    default:
      console.log("No está dentro de la lista");
      break;
  }

  numero = prompt("Ingrese el numero");
}
