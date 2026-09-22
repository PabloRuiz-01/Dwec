//Crea una función que reciba un saldo y una cantidad a retirar.
//Dentro de la función, comprueba si el `saldo` es mayor o igual a la cantidad a `retirar`.
//Si se puede retirar, muestra “Retiro exitoso. Saldo restante: [nuevo saldo]”.
//Si no, muestra “Saldo insuficiente”.

function dinero(saldo,retirar) {
  
    if (saldo>= retirar) {

        let nuevoSaldo=saldo-retirar

        console.log(`Retiro exitoso.Saldo restante: ${nuevoSaldo}` )
    }else{
        console.log(`Saldo insuficiente`)
    }
}

console.log(dinero(1500,500))

//Extra: Añade una variable booleana tieneTarjetaCredito. Modifica la lógica para que, si el saldo no es suficiente 
// PERO tieneTarjetaCredito es true, muestre “Saldo insuficiente, pagando con tarjeta de crédito”.

function dinero2(saldo,retirar,tieneTarjetaCredito) {
  
    if (saldo< retirar && tieneTarjetaCredito == true ) {
        
        console.log(`Saldo insuficiente, pagando con tarjeta de crédito`)

    }else if (saldo< retirar) {

        console.log(`Saldo insuficiente`)
    }else{
        let nuevoSaldo=saldo-retirar

        console.log(`Retiro exitoso.Saldo restante: ${nuevoSaldo}` )
    }
}

console.log(dinero2(500,1500,true))

