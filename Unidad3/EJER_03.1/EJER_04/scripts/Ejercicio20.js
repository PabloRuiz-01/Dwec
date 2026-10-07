/*Localiza el segundo enlace del menú. Tu objetivo es, partiendo de él, llegar hasta el título <h1> principal de 
la cabecera y cambiar su color a naranja.*/

const segundoEnlace = document.querySelectorAll(".navegacion a")[1];
const header = segundoEnlace.parentElement.parentElement;
const titulo = header.querySelector("h1");

titulo.style.color = "orange";
