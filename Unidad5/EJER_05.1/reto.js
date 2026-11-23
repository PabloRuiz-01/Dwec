const titulos = {
    1: 'El nombre de la rosa',
    2: 'Cien años de soledad',
    3: 'Fahrenheit 451',
};

const buscarLibro = (id) =>
    new Promise((resolver, rechazar) => {
        setTimeout(() => {
            if (titulos[id]) {
                resolver({ id, titulo: titulos[id] });
            } else {
                rechazar(new Error(`No existe ningún libro con id ${id}`));
            }
        }, 500);
    });

const textoIds = '[3, 1, 99, 2]';

async function informeLibros() {

    let ids;

    try {
        ids = JSON.parse(textoIds);

        if (!Array.isArray(ids)) {
            throw new Error('El JSON debe contener un array');
        }

    } catch (error) {
        console.log('Error al leer los identificadores:', error.message);
        return;
    }

    const resultados = await Promise.allSettled(
        ids.map(id => buscarLibro(id))
    );

    let encontrados = 0;
    let noEncontrados = 0;

    resultados.forEach((resultado, i) => {

        const id = ids[i];

        if (resultado.status === 'fulfilled') {
            console.log(`✔ ${id} · ${resultado.value.titulo}`);
            encontrados++;
        } else {
            console.log(`✘ ${id} · ${resultado.reason.message}`);
            noEncontrados++;
        }

    });

    console.log(`${encontrados} encontrados y ${noEncontrados} no existen`);
}

await informeLibros();