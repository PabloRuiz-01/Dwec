import {
  agregarLibro,
  obtenerLibros,
  buscarLibro,
  eliminarLibro,
  calcularTotalPaginas,
  ordenarPorPaginas,
  hayLibrosLargos,
  todosSonLibrosCortos
  
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
console.log(calcularTotalPaginas())

//Mostrar la colección de libros, luego llamar a ordenarPorPaginas() y volver a mostrar la colección para verificar que se ha 
// ordenado correctamente.

console.log("Coleccion normal")
console.log(obtenerLibros());

console.log("Coleccion ordenada")
console.log(ordenarPorPaginas())

//Mostrar cuales son libros largos y cortos con diferentes valores limites

const limite=500
const limite2=800
const limite3=20

console.log(`Libros con mas de ${limite} paginas`)
console.log(hayLibrosLargos(limite))

console.log(`Todos los libros tienen mas de ${limite} paginas`)
console.log(todosSonLibrosCortos(limite))

console.log(`Libros con mas de ${limite2} paginas`)
console.log(hayLibrosLargos(limite2))

console.log(`Todos los libros tienen mas de ${limite2} paginas`)
console.log(todosSonLibrosCortos(limite2))

console.log(`Libros con mas de ${limite3} paginas`)
console.log(hayLibrosLargos(limite3))

console.log(`Todos los libros tienen mas de ${limite3} paginas`)
console.log(todosSonLibrosCortos(limite3))

