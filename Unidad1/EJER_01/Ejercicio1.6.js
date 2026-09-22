//Crear un array cursos donde cada elemento sea un objeto que represente un curso

let cursos=[
{
    nombre : "DWEC",
    profesor : "Pablo",
    estudiantes:[
        {nombre:"Pablo",calificacion:9},
        {nombre:"Silvia",calificacion:8},
        {nombre:"Sergio",calificacion:6}
    ]
},
{
    nombre : "DWES",
    profesor : "Natalia",
    estudiantes:[
        {nombre:"Jessica",calificacion:9},
        {nombre:"Pablo",calificacion:7},
        {nombre:"Brandon",calificacion:4}
    ]
},
{
    nombre : "DIW",
    profesor : "Daniel",
    estudiantes:[
        {nombre:"Issac",calificacion:8},
        {nombre:"Jorge",calificacion:7},
        {nombre:"Kevin",calificacion:3}
    ]
},
{
    nombre : "DAW",
    profesor : "Marco",
    estudiantes:[
        {nombre:"Alba",calificacion:8},
        {nombre:"Miguel Angel",calificacion:9},
        {nombre:"Aday",calificacion:8}
    ]
}
]

//Crear con .map un nuevo array que contenga objetos con nombreCurso y promedioCalificaciones  

let resumenCursos = cursos.map((curso) => {
   
    let suma=0

    curso.estudiantes.forEach(estudiante => {
        suma= suma+ estudiante.calificacion
    });

    let promedio = suma/curso.estudiantes.length   
   
    return {
        nombreCurso:curso.nombre,
        promedioCalificaciones: promedio
    };
});

//Usar .filter para  obtener un array unicamente con los cursos con promedio mayor  o igual a 7

let cursosDestacados= resumenCursos.filter(curso => curso.promedioCalificaciones >= 7)

//Recorrer los cursos destacados e imprimir un mensaje

cursosDestacados.forEach(curso => {
console.log(`📘 El curso ${curso.nombreCurso} tiene un promedio de ${curso.promedioCalificaciones} y es considerado destacado.`) 
});

//Verificar si hay algun estudiante con calificacion menor a 4 en cada curso

cursos.forEach(curso => {
    curso.estudiantes.forEach(estudiante => {
        if (estudiante.calificacion<4) {
            console.log(`"⚠️ Atención: En el curso ${curso.nombreCurso} hay estudiantes con calificaciones muy bajas."`)
        }
    });
});