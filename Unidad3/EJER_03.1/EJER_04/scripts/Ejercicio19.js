/*Comienza en el primer div de información (.info). Desde ahí, sube a su elemento padre (la tarjeta) y, una vez ahí, desciende 
para encontrar el primer elemento hijo de esa tarjeta, que debería ser la imagen.*/

const info = document.querySelector(".info");
const tarjeta = info.parentElement;
const imagen = tarjeta.firstElementChild;