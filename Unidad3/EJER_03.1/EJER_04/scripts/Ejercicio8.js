/*El segundo enlace del menú de navegación es importante. Selecciónalo 
directamente (sin iterar una lista) y muestra su texto en la consola. */

const segundoEnlace = document.querySelector("nav a:nth-child(2)");
console.log(segundoEnlace.textContent);
