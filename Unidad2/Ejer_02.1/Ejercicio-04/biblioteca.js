/*1. Un arreglo de objetos llamado libros. Cada objeto representará un libro con id (número), titulo (string), 
autor (string) y paginas (número). Inicialízalo con 10 libros.*/ 

const libros = [
  {
    id: 1,
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    paginas: 417
  },
  {
    id: 2,
    titulo: "1984",
    autor: "George Orwell",
    paginas: 328
  },
  {
    id: 3,
    titulo: "Don Quijote de la Mancha",
    autor: "Miguel de Cervantes",
    paginas: 863
  },
  {
    id: 4,
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry",
    paginas: 96
  },
  {
    id: 5,
    titulo: "Orgullo y prejuicio",
    autor: "Jane Austen",
    paginas: 432
  },
  {
    id: 6,
    titulo: "La sombra del viento",
    autor: "Carlos Ruiz Zafón",
    paginas: 576
  },
  {
    id: 7,
    titulo: "Fahrenheit 451",
    autor: "Ray Bradbury",
    paginas: 256
  },
  {
    id: 8,
    titulo: "El nombre del viento",
    autor: "Patrick Rothfuss",
    paginas: 872
  },
  {
    id: 9,
    titulo: "Crónica de una muerte anunciada",
    autor: "Gabriel García Márquez",
    paginas: 128
  },
  {
    id: 10,
    titulo: "Los miserables",
    autor: "Victor Hugo",
    paginas: 1216
  }
];

/*Una función agregarLibro(nuevoLibro) que añada un nuevo libro a la colección. */

export function agregarLibro(nuevoLibro) {
  libros.push(nuevoLibro);
}

/*Una función obtenerLibros() que devuelva la colección completa. */

export  function obtenerLibros() {
  return libros;
}

//Utiliza .find() para buscar un libro por su id y devolverlo.

export function buscarLibro(id) {
  return libros.find(libro => libro.id === id);
}

// Utiliza .findIndex() para encontrar el índice del libro con ese id y luego .splice() para eliminarlo de la colección.

export function eliminarLibro(id) {
  const indice = libros.findIndex(libro => libro.id === id);

  if (indice !== -1) {
    libros.splice(indice, 1);
  }
}