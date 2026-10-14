const botones = document.getElementById("botonesPestanas");
const contenidos = document.querySelectorAll(".contenido");

// Delegación de eventos
botones.addEventListener("click", function (event) {

    // Comprobar que se ha pulsado un botón
    if (event.target.tagName === "BUTTON") {

        // 1. Ocultar todos los contenidos
        contenidos.forEach(function (contenido) {
            contenido.classList.add("oculto");
        });

        // 2. Obtener el data-id del botón pulsado
        const idContenido = event.target.dataset.id;

        // 3. Mostrar el contenido correspondiente
        const contenidoActivo = document.getElementById(idContenido);

        if (contenidoActivo) {
            contenidoActivo.classList.remove("oculto");
        }
    }
});