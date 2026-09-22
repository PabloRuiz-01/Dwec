//Crea y exporta una funcion llamada crear perfil

export function crearPerfil(nombre,email,edad) {
    return {
        nombre,
        email,
        edad
    }
}

//Crea y exporta otra función llamada mostrarPerfil. Esta debe aceptar un objeto usuario y devolver un string con formato

export function mostrarPerfil(usuario) {
    
    console.log(`Nombre: ${usuario.nombre}, Email: ${usuario.email}, Edad: ${usuario.edad}`)

}

//Añade y exporta una nueva función esMayorDeEdad

export function esMayorDeEdad(usuario) {
    
    if (usuario.edad>18) {
        return true
    }else{
        return false
    }
}

//Añade y exporta una función obtenerMayoresDeEdad que reciba un array de usuarios y, utilizando el método .filter() y la función 
// esMayorDeEdad, devuelva un nuevo array solo con los usuarios que cumplen la condición.

export function obtenerMayoresDeEdad(usuario) {
    
    return usuarios.filter(usuario => esMayorDeEdad)
}

//Añade y exporta una función calcularPromedioEdad que reciba un array de usuarios y calcule su edad 
//promedio. Puedes usar el método .reduce() para esto.