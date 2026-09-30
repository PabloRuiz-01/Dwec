import {
    mostrarEmpleados,
    agregarEmpleado,
    eliminarEmpleado,
    buscarPorDepartamento,
    calcularSalarioPromedio,
    obtenerEmpleadosOrdenadosPorSalario
} from "./empleados.js";

//Empleados iniciales
console.log("Empleados iniciales:");
console.log(mostrarEmpleados());

//Agregar empleados
console.log("Agregar empleados")
agregarEmpleado(
    {
    id: 6,
    nombre: "Isaac Fernandez",
    departamento: "Desarrollador Full-Stack",
    salario: 25000
  }
)

console.log(mostrarEmpleados());

//Eliminar empleado
console.log("Eliminar empleado")
eliminarEmpleado(6)

console.log(mostrarEmpleados());

//Buscar por departamento
console.log("Buscar por departamento")
console.log(buscarPorDepartamento("Desarrollador Full-Stack"))

//Calacular Salario Promedio
console.log("Calacular Salario Promedio")
console.log(calcularSalarioPromedio())

//Obtener Empleados Ordenados Por Salario
console.log("Obtener Empleados Ordenados Por Salario")
console.log(obtenerEmpleadosOrdenadosPorSalario())