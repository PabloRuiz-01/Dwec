import { productos } from './productos.js';

import {
    agregarProducto,
    actualizarProducto,
    eliminarProducto,
    reponerStock,
    venderProducto,
    cambiarOferta,
    aplicarDescuento,
    buscarPorNombre,
    filtrarPorCategoria,
    filtrarPorOferta,
    filtrarAgotados,
    ordenarProductos,
    contarPorCategoria,
    calcularValorAlmacen,
    buscarProductoMasCaro,
    generarResumen,
    validarProducto
} from './servicio-productos.js';

// Función auxiliar para mostrar solamente los nombres
const nombres = (lista) => lista.map(p => p.nombre);


// 1. AGREGAR PRODUCTO
console.log('--- agregarProducto ---');

// Espero: 9 productos
console.log(agregarProducto(productos, {
    id: 9,
    nombre: 'Tablet',
    categoria: 'Informática',
    precio: 199.99,
    stock: 5,
    enOferta: false
}).length);

// Caso límite: añadir a una lista vacía
// Espero: 1 producto
console.log(agregarProducto([], {
    id: 10,
    nombre: 'Tablet',
    categoria: 'Informática',
    precio: 199.99,
    stock: 5,
    enOferta: false
}).length);


// 2. ACTUALIZAR PRODUCTO
console.log('--- actualizarProducto ---');

// Espero: el producto con ID 1 tendrá precio 50
console.log(
    actualizarProducto(productos, 1, { precio: 50 })
        .find(p => p.id === 1)
);

// Caso límite: ID inexistente
// Espero: los productos originales sin cambios
console.log(actualizarProducto(productos, 999, { precio: 50 }));


// 3. ELIMINAR PRODUCTO
console.log('--- eliminarProducto ---');

// Espero: un producto menos
console.log(eliminarProducto(productos, 1).length);

// Caso límite: ID inexistente
// Espero: la misma cantidad de productos
console.log(eliminarProducto(productos, 999).length);


// 4. REPONER STOCK
console.log('--- reponerStock ---');

// Espero: el stock del producto 1 aumenta en 5
console.log(reponerStock(productos, 1, 5));

// Caso límite: ID inexistente
// Espero: lista original sin cambios
console.log(reponerStock(productos, 999, 5));


// 5. VENDER PRODUCTO
console.log('--- venderProducto ---');

// Espero: el stock del producto 1 disminuye en 2
console.log(venderProducto(productos, 1, 2));

// Caso límite: vender más unidades de las disponibles
// Espero: lista original sin modificar
console.log(venderProducto(productos, 1, 999));


// 6. CAMBIAR OFERTA
console.log('--- cambiarOferta ---');

// Espero: producto 1 con enOferta = true
console.log(cambiarOferta(productos, 1, true));

// Caso límite: ID inexistente
// Espero: lista original sin cambios
console.log(cambiarOferta(productos, 999, true));


// 7. APLICAR DESCUENTO
console.log('--- aplicarDescuento ---');

// Espero: productos de Audio con un 10% de descuento
console.log(
    aplicarDescuento(productos, 'Audio', 10)
);

// Caso límite: categoría inexistente
// Espero: lista original sin cambios
console.log(
    aplicarDescuento(productos, 'Inexistente', 10)
);


// 8. BUSCAR POR NOMBRE
console.log('--- buscarPorNombre ---');

// Espero: Auriculares Bluetooth
console.log(buscarPorNombre(productos, 'Auriculares'));

// Caso límite: texto vacío
// Espero: null
console.log(buscarPorNombre(productos, ''));


// 9. FILTRAR POR CATEGORÍA
console.log('--- filtrarPorCategoria ---');

// Espero: 3 productos de Periféricos
console.log(
    nombres(filtrarPorCategoria(productos, 'Periféricos'))
);

// Caso límite: todas las categorías
// Espero: todos los productos
console.log(
    filtrarPorCategoria(productos, 'todas').length
);


// 10. FILTRAR POR OFERTA
console.log('--- filtrarPorOferta ---');

// Espero: Ratón inalámbrico, Auriculares Bluetooth y Monitor 24"
console.log(nombres(filtrarPorOferta(productos)));

// Caso límite: lista vacía
// Espero: []
console.log(filtrarPorOferta([]));


// 11. FILTRAR AGOTADOS
console.log('--- filtrarAgotados ---');

// Espero: Ratón inalámbrico y Webcam HD
console.log(nombres(filtrarAgotados(productos)));

// Caso límite: lista vacía
// Espero: []
console.log(filtrarAgotados([]));


// 12. ORDENAR PRODUCTOS
console.log('--- ordenarProductos ---');

// Espero: Alfombrilla XL, Altavoces 2.1 y Auriculares Bluetooth
console.log(
    nombres(ordenarProductos(productos, 'nombre', 'asc')).slice(0, 3)
);

// Caso límite: campo inexistente
// Espero: lista sin ordenar (copia)
console.log(ordenarProductos(productos, 'inexistente'));

// Otra prueba: precio descendente
console.table(ordenarProductos(productos, 'precio', 'desc'));


// 13. CONTAR POR CATEGORÍA
console.log('--- contarPorCategoria ---');

// Espero: 3
console.log(contarPorCategoria(productos, 'Periféricos'));

// Caso límite: categoría inexistente
// Espero: 0
console.log(contarPorCategoria(productos, 'Inexistente'));


// 14. CALCULAR VALOR ALMACÉN
console.log('--- calcularValorAlmacen ---');

// Espero: 4435.73
console.log(calcularValorAlmacen(productos));

// Caso límite: lista vacía
// Espero: 0
console.log(calcularValorAlmacen([]));


// 15. BUSCAR PRODUCTO MÁS CARO
console.log('--- buscarProductoMasCaro ---');

// Espero: Monitor 27"
console.log(buscarProductoMasCaro(productos));

// Caso límite: lista vacía
// Espero: null
console.log(buscarProductoMasCaro([]));


// 16. GENERAR RESUMEN
console.log('--- generarResumen ---');

// Espero: resumen general de la tienda
console.log(generarResumen(productos));

// Caso límite: lista vacía
// Espero: todos los contadores y el valor a 0
console.log(generarResumen([]));


// 17. VALIDAR PRODUCTO
console.log('--- validarProducto ---');

const nuevoProducto = {
    id: 100,
    nombre: 'Tablet',
    categoria: 'Informática',
    precio: 199.99,
    stock: 5,
    enOferta: false
};

// Espero: []
console.log(validarProducto(productos, nuevoProducto));

// Caso límite: producto incorrecto
// Espero: lista de errores
console.log(validarProducto(productos, {
    id: 1,
    nombre: '',
    categoria: '',
    precio: -5,
    stock: -2,
    enOferta: 'no'
}));


// COMPROBACIÓN FINAL
console.log('--- Datos originales intactos ---');

console.table(productos);
