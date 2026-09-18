//Crear un array de objetos estudiantes

let estudiantes=[
    alumno1 = {
    nombre : "Pablo",
    apellido : "Ruiz",
    calificacion:10,
    aprobado: true 
},
    alumno2 = {
    nombre : "Silvia",
    apellido : "Ruiz",
    calificacion:8,
    aprobado: true 
},
    alumno3 = {
    nombre : "Sergio",
    apellido : "Caramazana",
    calificacion:4,
    aprobado: true 
}
]

//Crear con .map un nuevo array y añadirle el atributo ip  

let estudiantesConId = estudiantes.map((estudiante, i) => {
    estudiante.id = i + 1;
    return estudiante;
});

//Usar .filter para  obtener un array unicamente con los estudiantes  con calificacion mayor  o igual a 5


let aprobado= estudiantesConId.filter(estudiante => estudiante.calificacion >= 5)

//Imprimir alumnos aprobados con tamplate string

aprobado.forEach(estudiantes => {
console.log(`Felicidades ${estudiantes.nombre}, has aprobado con ${estudiantes.calificacion}`) 
});



estudiantes.forEach(estudiante => {
    if (estudiante.calificacion>=5 && estudiante.aprobado==true ) {
        console.log("Es coherente")
    }else{
        console.log(`Incoherencia en el registro de ${estudiante.nombre}:calificacion =${estudiante.calificacion} aprobado=${estudiante.aprobado}`)
    }
});