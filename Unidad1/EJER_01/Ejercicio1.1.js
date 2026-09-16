const nombre="Pablo"
let edad= 25
const mascota=true

edad=18
// mascota = false

let tienemascota=true

if (mascota==true) {
    tienemascota="si"
}else{
    tienemascota="no"
}

console.log(nombre)
console.log(typeof nombre)
console.log(edad)
console.log(typeof edad)
console.log(mascota)
console.log(typeof mascota)

console.log(`${nombre} tiene ${edad} años y ${tienemascota} tiene mascotas.`)