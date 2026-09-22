//Crear un array con al menos 6 numeros

let numeros=[8,54,6,3,78,12,64,789]

//Usar el metodo .map para crear un array que contenga el doble de cada numero del original

let dobles= numeros.map((numero)=>{
    return numero*2
})

console.log(dobles)

//Usanfo el metodo .filter crear un array que contenga solo los numero pares del array numeros

let pares=numeros.filter((numero)=>{
    return numero % 2 == 0
})

//Usar un bucle for...of para imprimir el array pares

for (const numero of pares) {
    console.log(numero)
}

