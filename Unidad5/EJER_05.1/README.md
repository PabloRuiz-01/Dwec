--Ejercicio 1--

Inicio
Dentro del try 1
Capturado: ReferenceError
Limpieza
Fin

No se ejecuta las lineas console.log(total); y console.log('Dentro del try 2');

Inicio
Dentro del try 1
0
Dentro del try 2
Limpieza
Fin
Sí, finally sigue ejecutándose aunque no haya errores.

--Ejercicio3--
Los textos 1 y 4 son válidos. Los otros cuatro necesitan corrección.

--Ejercicio4--
¿por qué no aparece apodo en el texto?
Porque su valor es undefined

¿Por qué fechaAlta ya no es una fecha al volver?
Porque JSON.stringify() convierte los objetos Date en cadenas de texto

--Ejercicio6--
En el apartado B, ¿por qué el propietario del original no cambió pero sus productos sí?
Porque el propietario es un dato primitivo y se copia de forma independiente

Si la lista solo tuviera textos y números, sin arrays dentro, ¿qué copia usarías?
Utilizaría una copia superficial con el operador spread

--Ejercicio7--
1 → 3 → 6 → 4 → 2 → 5

Aunque el temporizador tenga 0 milisegundos, no se ejecuta inmediatamente, sino cuando termina el código principal y le llega su turno.

--Ejercicio8--
Porque las promesas utilizan setTimeout para esperar 1 segundo antes de devolver un resultado

