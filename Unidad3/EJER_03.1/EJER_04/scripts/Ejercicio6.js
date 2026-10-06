/*Hay un párrafo en la página que contiene información sobre el precio en un atributo de datos. Encuéntralo usando 
ese atributo y muestra su contenido. */
const precio = document.querySelector("p[data-precio]");
console.log(precio.textContent);
