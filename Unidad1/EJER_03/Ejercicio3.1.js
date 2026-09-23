//Completa la función esContrasenaValida, que debe devolver true si la contraseña tiene 8 caracteres o más.

function esContrasenaValida(contrasena) {
  //TODO: completa el cuerpo de la función

  if (contrasena.length>=8) {
    return true
  }else{
    return false
  }

}

const contrasenas = ['1234', 'miClave2024', 'abc']

//TODO: usa esContrasenaValida como literal de función anónimo
// dentro de un .map() para obtener [false, true, false]
const resultado = contrasenas.map(function(contrasena){
    return esContrasenaValida(contrasena)
})

console.log(resultado) // [false, true, false]