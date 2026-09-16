//Crear un array de ciudades

let ciudades=["Madrid", "Buenos Aires", "Tokio", "Nueva York", "París"]

//Añadir otro valor al final del array con otra sentencia
  ciudades.push("Roma")

//Crear un array para las ciudades en mayusculas usando .map

let ciudadesMayusculas=ciudades.map(ciudad => ciudad.toUpperCase())

//Crear un array con las ciudades filtradas que tengan mas de 6 caracteres

let ciudadesFiltradas= ciudades.filter(ciudad => ciudad.length > 6)

//Imprimir los 3 arrays

console.log(ciudades)
console.log(ciudadesMayusculas)
console.log(ciudadesFiltradas)