//Escribe una Function Declaration llamada calcularAreaRectangulo que acepte base y altura y devuelva el área.

function calcularAreaRectangulo(base,altura) {
    
    return base*altura
}

//Escribe la misma lógica usando una Function Expression y guárdala en una constante calcularAreaTriangulo.

const calcularAreaTriangulo=function(base,altura) {
    
    return (base*altura)/2
}

//Convierte la función anterior en una Arrow Function

const calcularAreaFlecha=(base,altura)=>{return base*altura}


//Añade valores por defecto a los parámetros de cualquiera de las funciones anteriores

function calcularAreaRectangulo2(base=10,altura=4) {
    
    return base*altura
}

// Llama a cada función con valores de prueba y muestra el resultado en la consola.

console.log(calcularAreaRectangulo(10,8))
console.log(calcularAreaTriangulo(456,56))
console.log(calcularAreaFlecha(7,6))
console.log(calcularAreaRectangulo2())


