import {
  agregarLibro,
  obtenerLibros,
  buscarLibro,
  eliminarLibro,
  calcularTotalPaginas
} from "./biblioteca.js";

// Mostrar la colección inicial
console.log("Colección inicial:");
console.log(obtenerLibros());

// Añadir un nuevo libro
agregarLibro({
  id: 11,
  titulo: "El Hobbit",
  autor: "J. R. R. Tolkien",
  paginas: 310
});

// Buscar un libro por su ID
console.log("Libro encontrado:");
console.log(buscarLibro(11));

// Eliminar un libro por su ID
eliminarLibro(11);

// Mostrar la colección final
console.log("Colección final:");
console.log(obtenerLibros());

//Mostrar el número total de páginas
console.log("Numero total de paginas")
console.log(calcularTotalPaginas(obtenerLibros()))

