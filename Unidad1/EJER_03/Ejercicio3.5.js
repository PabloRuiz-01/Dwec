//Completa crearUsuario, que reciba un nombre obligatorio y un rol con valor predeterminado 'alumno'.

const crearUsuario = (nombre, rol = "alumno") => ({ nombre, rol })

console.log(crearUsuario('Ana'))          // { nombre: 'Ana', rol: 'alumno' }
console.log(crearUsuario('Luis', 'admin')) // { nombre: 'Luis', rol: 'admin' }