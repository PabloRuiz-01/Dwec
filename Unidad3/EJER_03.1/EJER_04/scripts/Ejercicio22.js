/*El formulario de contacto debe ser funcional. Evita que la página se recargue al enviarlo y, en su lugar, captura los valores 
de los campos de nombre y mensaje y muéstralos en la consola. */

document.getElementById('formulario-contacto').addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(document.getElementById('nombre').value);
    console.log(document.getElementById('mensaje').value);
});
