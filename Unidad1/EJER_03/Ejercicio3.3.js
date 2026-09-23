//Dado el siguiente vector de productos:
const productos = [
  { nombre: 'Ratón', precio: 15, stock: 0 },
  { nombre: 'Teclado', precio: 25, stock: 8 },
  { nombre: 'Monitor', precio: 120, stock: 3 }
]

//Sin usar bucles `for`, escribe expresiones encadenando `filter` y `map` para obtener:
//1. Un vector con los **nombres** de los productos que tienen stock disponible.
//2. Una cadena de texto con una lista HTML `<ul><li>...</li></ul>` que contenga esos nombres.

const disponible= productos.filter(producto=> producto.stock>0).map(producto=> producto.nombre)

const listaHtml = '<ul>' + disponibles
  .map(nombre => `<li>${nombre}</li>`)
  .join('') + '</ul>'

console.log(disponible)
console.log(listaHtml)
