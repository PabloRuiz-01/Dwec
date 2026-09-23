//Define y exporta una función crearProducto que acepte nombre, categoria, precio y stock, y devuelva un objeto producto.

export function crearProducto(nombre,categoria,precio, stock) {
    return {
        nombre,
        categoria,
        precio,
        stock
    }
}

//Define y exporta una función filtrarPorCategoria que reciba el 
// array de inventario y una categoria, y devuelva un nuevo array con los productos que pertenecen a esa categoría.

export function filtrarPorCategoria(inventario,categoria) {
    return inventario.filter(prducto => prducto.categoria == categoria)
}

//Define y exporta una función listarProductosAgotados que reciba el inventario y devuelva un array con los productos cuyo stock es 0.

export function listarProductosAgotados(inventario) {
    return inventario.filter(prducto=> prducto.stock==0)
}

//Define y exporta una función calcularValorTotalInventario que reciba el inventario y devuelva el 
// valor total (sumando el precio * stock de cada producto).

export function calcularValorTotalInventario(inventario) {
    
    return inventario.reduce((total,prducto)=> {
        return total+ prducto.precio*prducto.stock
    },0)

}

//Como exportación por defecto (export default), crea una función resumenInventario que reciba el inventario y muestre 
//en consola un resumen: número total de productos, número de categorías distintas y valor total.

export default function resumenInventario(inventario) {
    
    const totalProductos =inventario.length

    const categorias =[]

    inventario.forEach(prducto => {
        if (!categorias.includes(prducto.categoria)) {
            categorias.push(prducto.categoria)
        }
    });

    const numeroCategorias=categorias.length

    const valorTotal= calcularValorTotalInventario(inventario)

    console.log(`Numero total de productos: ${totalProductos}`)
    console.log(`Numero de categorias: ${numeroCategorias}`)
    console.log(`Valor total del inventario: ${valorTotal}`)

}

