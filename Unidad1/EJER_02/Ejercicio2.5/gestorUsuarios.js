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