import {
  agregarLibro,
  obtenerLibros,
  buscarLibro,
  eliminarLibro,
  calcularTotalPaginas,
  ordenarPorPaginas
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

//Mosrar la colección de libros, luego llamar a ordenarPorPaginas() y volver a mostrar la colección para verificar que se ha 
// ordenado correctamente.

console.log("Coleccion normal")
console.log(obtenerLibros());

console.log("Coleccion ordenada")
console.log(ordenarPorPaginas(obtenerLibros()))