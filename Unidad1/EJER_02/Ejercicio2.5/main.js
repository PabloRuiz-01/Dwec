//Importa crearPerfil y mostrarPerfil desde gestorUsuarios.js
import {crearPerfil,mostrarPerfil,esMayorDeEdad,obtenerMayoresDeEdad,calcularPromedioEdad } from "./gestorUsuarios.js";

//Llama a crearPerfil dos veces para crear dos perfiles de usuario y guárdalos en un array .

const usuarios=[
crearPerfil("Pablo","emailejemplo@educastur.es",25),
crearPerfil("Silvia","emailejemplo1@educastur.es",15),
crearPerfil("Issac","emailejemplo2@educastur.es",17),
crearPerfil("Jorge","emailejemplo3@educastur.es",20),
crearPerfil("Sergio","emailejemplo4@educastur.es",19)]

//Itera sobre el array usuarios y, para cada usuario, utiliza mostrarPerfil para imprimir su información en la consola.

usuarios.forEach(usuario => {
   mostrarPerfil(usuario)
});

//Llama a obtenerMayoresDeEdad para filtrar el array y guarda el resultado en una nueva variable

let mayoresEdad= obtenerMayoresDeEdad(usuarios)

//Muestra un encabezado que diga “Usuarios mayores de edad:” y luego 
//itera sobre el nuevo array para mostrar el perfil de cada uno de esos usuarios.

console.log(`Usuarios mayores de edad:`)

mayoresEdad.forEach(usuario => {
   mostrarPerfil(usuario)
});

//Llama a calcularPromedioEdad con el array original de usuarios y muestra el resultado en un 
//mensaje claro, por ejemplo: “La edad promedio de los usuarios es: [promedio]”.

let promedio= calcularPromedioEdad(usuarios)

console.log(`La edad promedio de los usuarios es: ${promedio}`)
