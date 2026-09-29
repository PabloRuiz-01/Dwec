/*mporta las funciones del módulo biblioteca.js*/

import { agregarLibro, obtenerLibros } from "./biblioteca.js";

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

// Vuelve a mostrar la colección para verificar que se ha añadido.
console.log("Colección después de añadir el libro:");
console.log(obtenerLibros());
