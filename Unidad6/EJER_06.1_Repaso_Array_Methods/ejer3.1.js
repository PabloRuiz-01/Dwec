const libros = [
    { titulo: "Cien años de soledad", autor: "García Márquez", paginas: 410, categoria: "Ficción", precio: 25.00 },
    { titulo: "El poder del ahora", autor: "Eckhart Tolle", paginas: 235, categoria: "Autoayuda", precio: 15.50 },
    { titulo: "El código Da Vinci", autor: "Dan Brown", paginas: 689, categoria: "Misterio", precio: 12.75 },
    { titulo: "1984", autor: "George Orwell", paginas: 328, categoria: "Ficción", precio: 18.00 },
    { titulo: "Sapiens", autor: "Yuval Noah Harari", paginas: 498, categoria: "Historia", precio: 30.00 }
];

const paginas = libros.map((libro) => (libro.paginas));

const totalPaginas = paginas.reduce((total, paginas) => total + paginas, 0);
const totalPaginas2 = libros.reduce((total, libros) => total + libros.paginas, 0);
const mediaPaginas2  = libros.reduce((total,libros)=>total+libros.paginas,0)/libros.length;

console.log(totalPaginas);
console.log(totalPaginas2);
console.log(mediaPaginas2);