//Crear objetos producto y cliente
const producto = {
    nombre : "Coche",
    precio: 500
}
const cliente = {
    nombreCliente : "Pablo",
    esPremium: true
}
//Combinar ambos objeto en un nuevo objetio(pedido)
 const pedido={
    ...cliente,
    ...producto
 }

//Mostrar el objeto pedido
console.log(pedido)

//Crear objeto producto2 con atributo nombre y combinarlo con cliente

const producto2 = {
    nombre : "Movil",
}

const pedido2={
    ...producto,
    ...producto2
 }

 console.log(pedido2)

 //Cuando se juntan dos objetos con la misma propiedad este y se combinan este atributo coge el valor del ultimo producto añadido