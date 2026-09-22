//Importa crearPerfil y mostrarPerfil desde gestorUsuarios.js
import {crearPerfil,mostrarPerfil,esMayorDeEdad,obtenerMayoresDeEdad } from "./gestorUsuarios.js";

//Llama a crearPerfil dos veces para crear dos perfiles de usuario y guárdalos en un array .

const usuarios=[
crearPerfil("Pablo","emailejemplo@educastur.es",25),
crearPerfil("Sergio","emailejemplo2@educastur.es",19)]

//Itera sobre el array usuarios y, para cada usuario, utiliza mostrarPerfil para imprimir su información en la consola.

usuarios.forEach(usuario => {
   mostrarPerfil(usuario)
});



