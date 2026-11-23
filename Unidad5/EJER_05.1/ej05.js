function esAlumnoValido(texto) {
    let alumno;

    try {
        alumno = JSON.parse(texto);
    } catch (error) {
        return false;
    }

    if (alumno === null || typeof alumno !== 'object' || Array.isArray(alumno)) {
        return false;
    }

    if (typeof alumno.nombre !== 'string' || alumno.nombre.trim() === '') {
        return false;
    }

    if (typeof alumno.nota !== 'number' || alumno.nota < 0 || alumno.nota > 10) {
        return false;
    }

    return true;
}

const entradas = [
    '{"nombre":"Ana","nota":8.5}',
    '{"nombre":"Luis","nota":"9"}',
    '{"nombre":"","nota":7}',
    '{"nombre":"Marta","nota":11}',
    '{"nombre":"Pablo","nota":6',
    'null',
];

for (const texto of entradas) {
    if (esAlumnoValido(texto)) {
        console.log(`✔ aceptado  ${texto}`);
    } else {
        console.log(`✘ rechazado ${texto}`);
    }
}
