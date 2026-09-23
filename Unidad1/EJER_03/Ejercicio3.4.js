//Implementa sumaFlexible(x, y), que acepte números o vectores de números, comprobando el tipo real con Array.isArray.

'use strict'

const sumaFlexible = (x, y) => {
  const valorDe = (v) => Array.isArray(v) ? v.reduce((acc, num) => acc + num, 0) : v
  
  return valorDe(x) + valorDe(y)
}

console.log(sumaFlexible(3, 4))      // 7
console.log(sumaFlexible([1, 2], 4)) // 7