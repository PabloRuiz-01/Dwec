/**
 * Añade un producto nuevo a la lista.
 * @param {Object[]} productos
 * @param {Object} nuevoProducto
 * @returns {Object[]} Nueva lista de productos.
 */
export const agregarProducto = (productos, nuevoProducto) => {
  return [...productos, nuevoProducto];

};

/**
 * Modifica los datos de un producto existente.
 * @param {Object[]} productos
 * @param {number|string} id
 * @param {Object} datosActualizados
 * @returns {Object[]} Nueva lista de productos.
 */
export const actualizarProducto = (productos, id, datosActualizados) => {

  return productos.map(producto => producto.id === id ? { ...producto, ...datosActualizados } : producto)
};

/**
 * Retira un producto de la lista.
 * @param {Object[]} productos
 * @param {number|string} id
 * @returns {Object[]} Nueva lista de productos.
 */
export const eliminarProducto = (productos, id) => {

  return productos.filter(producto => producto.id !== id)
};

/**
 * Añade unidades al stock de un producto.
 * @param {Object[]} productos
 * @param {number|string} id
 * @param {number} unidades
 * @returns {Object[]} Nueva lista de productos.
 */
export const reponerStock = (productos, id, unidades) => {

  return productos.map(producto => producto.id === id
    ? { ...producto, stock: producto.stock + unidades }
    : producto.stock)
};

/**
 * Resta unidades del stock cuando se realiza una venta.
 * Si no hay suficientes unidades, no se realiza la venta y se devuelve
 * la lista original sin modificar.
 * @param {Object[]} productos
 * @param {number|string} id
 * @param {number} unidades
 * @returns {Object[]} Nueva lista de productos.
 */
export const venderProducto = (productos, id, unidades) => {

  const producto = productos.find(p => p.id === id);

  if (!producto || producto.stock < unidades) {
    return productos;
  }

  return productos.map(producto => producto.id === id
    ? { ...productos, stock: producto.stock - unidades }
    : producto);

};

/**
 * Activa o desactiva la oferta de un producto.
 * @param {Object[]} productos
 * @param {number|string} id
 * @param {boolean} enOferta
 * @returns {Object[]} Nueva lista de productos.
 */
export const cambiarOferta = (productos, id, enOferta) => {

  return productos.map(producto => producto.id === id
    ? { ...producto, enOferta }
    : producto
  )
};

/**
 * Aplica un descuento a los productos de una categoría.
 * Los precios resultantes se redondean a dos decimales.
 * @param {Object[]} productos
 * @param {string} categoria
 * @param {number} descuento Porcentaje de descuento.
 * @returns {Object[]} Nueva lista de productos.
 */
export const aplicarDescuento = (productos, categoria, descuento) => {

  return productos.map(producto => producto.categoria === categoria
    ? {
      ...producto,
      precio: Number(
        (producto.precio * (1 - descuento / 100)).toFixed(2)
      )
    } : producto
  )

};

/**
 * Busca un producto por su nombre.
 * Si el texto está vacío, devuelve null.
 * Si no encuentra coincidencias, también devuelve null.
 * @param {Object[]} productos
 * @param {string} nombre
 * @returns {Object|null} Producto encontrado o null.
 */
export const buscarPorNombre = (productos, nombre) => {

  if (!nombre || nombre.trim()) {
    return null;
  }

  return productos.find(producto => producto.nombre.toLocaleLowerCase().includes(nombre.trim().toLocaleLowerCase()) || null);

};

/**
 * Filtra productos por categoría.
 * Si la categoría es "todas", devuelve todos los productos.
 * @param {Object[]} productos
 * @param {string} categoria
 * @returns {Object[]} Nueva lista de productos.
 */
export const filtrarPorCategoria = (productos, categoria = "todas") => {

  if (categoria.toLocaleLowerCase() === "todas") {
    return [...productos]
  }

  return productos.filter(producto => producto.categoria.toLocaleLowerCase() === categoria.toLocaleLowerCase());

};

/**
 * Filtra los productos que están en oferta.
 * @param {Object[]} productos
 * @returns {Object[]} Nueva lista de productos.
 */
export const filtrarPorOferta = (productos) => {

  return productos.filter(producto => producto.enOferta === true);

};

/**
 * Filtra los productos que tienen el stock agotado.
 * @param {Object[]} productos
 * @returns {Object[]} Nueva lista de productos.
 */
export const filtrarAgotados = (productos) => {

  return productos.filter(producto => producto.stock === 0);

};

/**
 * Ordena los productos por el campo indicado.
 * Admite los campos nombre, precio y stock.
 * @param {Object[]} productos
 * @param {string} campo
 * @param {string} direccion Dirección: "asc" o "desc".
 * @returns {Object[]} Nueva lista ordenada.
 */
export const ordenarProductos = (productos, campo, direccion = "asc") => {

  const copia = [...productos]

  if (direccion.toLocaleLowerCase === "asc") {

    switch (campo.toLocaleLowerCase()) {
      case "nombre":

        return copia.sort((a, b) =>
          a.nombre.localeCompare(b.nombre))
        break;

      case "precio":

        return copia.sort((a, b) =>
          a.precio - b.precio)
        break;

      case "stock":

        return copia.sort((a, b) =>
          a.stock - b.stock)
        break;
      default:
        return copia
        break;
    }


  } else if (direccion.toLocaleLowerCase === "desc") {

    switch (campo.toLocaleLowerCase()) {
      case "nombre":

        return copia.sort((a, b) =>
          b.nombre.localeCompare(a.nombre))
        break;

      case "precio":

        return copia.sort((a, b) =>
          b.precio - a.precio)
        break;

      case "stock":

        return copia.sort((a, b) =>
          b.stock - a.stock)
        break;
      default:
        return copia
        break;
    }

  } else {
    return copia
  }

};

/**
 * Cuenta cuántos productos hay en una categoría.
 * @param {Object[]} productos
 * @param {string} categoria
 * @returns {number} Cantidad de productos.
 */
export const contarPorCategoria = (productos, categoria) => {

  return productos.filter(producto =>
    producto.categoria.toLocaleLowerCase() === categoria.toLocaleLowerCase()).length;
};

/**
 * Calcula el valor económico total del almacén.
 * Multiplica el precio por las unidades disponibles de cada producto.
 * @param {Object[]} productos
 * @returns {number} Valor total del almacén.
 */
export const calcularValorAlmacen = (productos) => {

  return productos.reduce((total, producto), total + producto.precio * producto.stock, 0)

};

/**
 * Busca el producto con el precio más alto.
 * Si no hay productos, devuelve null.
 * @param {Object[]} productos
 * @returns {Object|null} Producto más caro o null.
 */
export const buscarProductoMasCaro = (productos) => {

  if (productos.length === 0) {
    return null
  }

  return productos.reduce((masCaro, producto), producto.precio > masCaro.precio ? producto : masCaro);

};

/**
 * Genera un resumen general de la tienda.
 * @param {Object[]} productos
 * @returns {Object} Resumen con cantidades, ofertas, agotados y valor del almacén.
 */
export const generarResumen = (productos) => {

  return {
    totalProductos: productos.length,

    totalEnOferta: filtrarPorOferta(productos).length,

    totalAgotados: filtrarAgotados(productos).length,

    valorAlmacen: calcularValorAlmacen(productos)
  }
};



/**
 * Comprueba que los datos de un producto sean correctos.
 * Devuelve una lista de errores. Si todo es correcto, devuelve [].
 * @param {Object[]} productos
 * @param {Object} nuevoProducto
 * @returns {string[]} Lista de errores de validación.
 */
export const validarProducto = (productos, nuevoProducto) => {
  const errores = [];

  if (!nuevoProducto.nombre || !nuevoProducto.nombre.trim()) {
    errores.push("El nombre es obligatorio.");
  }

  if (!nuevoProducto.categoria || !nuevoProducto.categoria.trim()) {
    errores.push("La categoría es obligatoria.");
  }

  if (typeof nuevoProducto.precio !== "number" ||
    nuevoProducto.precio <= 0) {
    errores.push("El precio debe ser un número mayor que cero.");
  }

  if (!Number.isInteger(nuevoProducto.stock) ||
    nuevoProducto.stock < 0) {
    errores.push("El stock debe ser un número entero igual o mayor que cero.");
  }

  if (nuevoProducto.id === undefined || nuevoProducto.id === null) {
    errores.push("El ID es obligatorio.");
  } else if (productos.some(producto => producto.id === nuevoProducto.id)) {
    errores.push("Ya existe un producto con ese ID.");
  }

  if (typeof nuevoProducto.enOferta !== "boolean") {
    errores.push("El campo enOferta debe ser true o false.");
  }

  return errores;
};
