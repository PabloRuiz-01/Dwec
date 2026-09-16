//Crear objeto coche
const coche = {
    marca : "Hyundai",
    modelo: "atos",
    año: 2001,
    estaDisponible: false
}
//Imprimir objeto en modo tabla
console.table(coche)

//Destructuracion para sacar la marca y modelo como variables
const {marca,modelo}= coche

//Imprimir marca y modelo como variables
console.log("Marca:" ,marca)
console.log("Modelo:" ,modelo)

//Cambiar la disponobilidad del coche
coche.estaDisponible=true

//Añadir la propiedad color al coche
coche.color="Amarillo"

//Eliminar la propiedad año al coche
delete coche.año

//Imprimir el objeto coche modificado
console.table(coche)
