//Importa todas las funciones desde inventario.js.

import resumenInventario, {crearProducto,filtrarPorCategoria,listarProductosAgotados,calcularValorTotalInventario} from "./inventario.js";

//Crea un array vacío inventario.

let inventario=[]

//Usa la función crearProducto para añadir al menos 6 productos al array. Asegúrate de tener 
// varias categorías (ej: “Electrónica”, “Ropa”, “Libros”) y de que al menos un producto tenga stock: 0.

inventario.push(
    crearProducto("Portátil", "Electrónica", 600, 4),
    crearProducto("Auriculares Bluetooth", "Electrónica", 45, 6),
    crearProducto("Camiseta", "Ropa", 10, 8),
    crearProducto("Pantalón", "Ropa", 35, 12),
    crearProducto("El Principito", "Libros", 25, 13),
    crearProducto("El nombre del viento", "Libros", 15, 0)
);

//Obtén y muestra todos los productos de la categoría “Ropa”.

console.log(filtrarPorCategoria(inventario,"Ropa"))

//Obtén y muestra una lista de los productos agotados.

console.log(listarProductosAgotados(inventario))

//Calcula y muestra el valor total del inventario.

console.log(calcularValorTotalInventario(inventario))

//Ejecuta la función `resumenInventario` para ver el resumen completo.

resumenInventario(inventario)