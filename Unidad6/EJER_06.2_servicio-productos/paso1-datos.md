| Campo     |   Tipo    | Ejemplo   | Reglas         |
|-----------|-----------|-----------|----------------|
| id        | entero    | 2         | >0             |
| nombre    | string    | Monitor   | obligatorio    |
| categoria | string    | Monitores | CATEGORIAS     |
| precio    | Number    | 59.9      | >0             |
| stock     | Number    | 12        | >=0            |
| enOferta  | Boolean   | false     | true o false   |

1.¿Por qué campos tendría sentido ordenar la lista?
Por todos excepto por el id

2.¿Por qué campos tendría sentido filtrar?
Por categoria, por enOferta, nombre y precio 

3.¿Con qué campos se pueden hacer cálculos?
Con los campos de precio y stock