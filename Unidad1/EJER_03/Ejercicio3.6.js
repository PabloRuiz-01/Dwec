//Implementa tu propia función maximo usando el parámetro rest, y llámala usando el operador spread sobre un vector ya existente.

const maximo = (...numeros) => {

    let mayor=numeros[0]

    for (const numero of numeros) {
        
        if (numero>mayor) {
            mayor =numero
        }
    }

    return mayor
}

const notas = [7, 9, 5, 10, 6]

console.log(maximo(...notas)) // 10