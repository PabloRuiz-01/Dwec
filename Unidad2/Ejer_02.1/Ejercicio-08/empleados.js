const empleados = [
  {
    id: 1,
    nombre: "Jorge Camblo",
    departamento: "Desarrollador Backend",
    salario: 28000
  },
  {
    id: 2,
    nombre: "Jessica Martinez",
    departamento: "Desarrollador Frontend",
    salario: 25000
  },
  {
    id: 3,
    nombre: "Silvia Ruiz",
    departamento: "Desarrollador FrontEnd",
    salario: 27000
  },
  {
    id: 4,
    nombre: "Pablo Ruiz",
    departamento: "Desarrollo Backend",
    salario: 32000
  },
  {
    id: 5,
    nombre: "Sergio Ibarrucea",
    departamento: "Desarrollador Full-Stack",
    salario: 24000
  }
];

//Mostrar empleados

export  function mostrarEmpleados() {
  return empleados;
}


//Agregar empleado

export function agregarEmpleado(nuevoEmpleado) {
  empleados.push(nuevoEmpleado);
}

//Eliminar empleado

export function eliminarEmpleado(id) {
  const indice = empleados.findIndex(Empleado => Empleado.id === id);

  if (indice !== -1) {
    empleados.splice(indice, 1);
  }
}

//Buscar por departamento

export function buscarPorDepartamento(departamento) {
  return empleados.filter(empleado => empleado.departamento === departamento);
}

//Calacular Salario Promedio

export function calcularSalarioPromedio() {

const total= empleados.reduce((suma, empleado)=>suma + empleado.salario,0)

return total/empleados.length
}

//Obtener Empleados Ordenados Por Salario

export function obtenerEmpleadosOrdenadosPorSalario() {
  return empleados.sort((a , b)=>a.salario- b.salario)
}