class Libro {
  constructor(cantidadPaginas, precio) {
    this.cantidadPaginas = cantidadPaginas;
    this.precio = precio;
    this.reservado = false;
  }

  reservar() {
    this.reservado = true;
  }

  quitarReserva() {
    this.reservado = false;
  }
}

const libro1 = new Libro(54, 50000);
console.log(libro1);

libro1.reservar();
console.log(libro1);

libro1.quitarReserva();
console.log(libro1);
