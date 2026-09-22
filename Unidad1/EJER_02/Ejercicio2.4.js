//Crea una objeto usuario con nombre y email.

const usuario={
    nombre:"Pablo",
    email:"XTP82531@educastur.es"
}
//Crea un objeto `perfil` con `puesto` y `empresa`.

const perfil={
    puesto:"Desarrollador web",
    empresa:"Lacera"
}

//Combina ambos objetos en un nuevo objeto empleado usando el “spread operator” (...)

const empleado={
    ...usuario,
    ...perfil
}

//Supongamos que el objeto `empleado` podría tener o no una propiedad anidada `perfil.direccion.ciudad`. 
//Intenta acceder a `empleado.perfil.direccion.ciudad` usando “Optional Chaining” (`?.`) para evitar errores.
//Usa el “Nullish Coalescing Operator” (`??`) para asignar un valor por defecto (“Ciudad no especificada”) si el resultado 
//del paso anterior es `null` o `undefined`.

const ciudad = empleado.perfil?.direccion?.ciudad ?? "Ciudad no especificada";

console.log(empleado);
console.log(ciudad);
