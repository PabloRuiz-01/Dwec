/*El equipo de UX sugiere que sería útil para los usuarios ver de un vistazo cuántos cursos ofrecemos. La tarea consiste en que 
el enlace del menú que lleva a la sección de contacto refleje siempre el número total de cursos listados en la página. Por 
ejemplo, si hay 3 cursos, el enlace debería cambiar a “Contacto (3 Cursos)”. */

const cursosNav = document.querySelectorAll(".curso");
const enlacesCurso = document.querySelectorAll(".navegacion a");

const numeroCursos = cursos.length;

enlacesCurso[2].textContent = `Contacto (${numeroCursos} Cursos)`;
