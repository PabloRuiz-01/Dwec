const textos = [
    '{"nombre":"Ana","edad":19}',
    "{'nombre':'Luis'}",
    '{"activo":true,}',
    '[1, 2, 3]',
    '{nombre:"Marta"}',
    '{"curso":"2DAW"',
];

for (const texto of textos) {
    try {
        const resultado = JSON.parse(texto);
        console.log(`✔ ${texto} → ${typeof resultado}`);
    } catch (error) {
        console.log(`✘ ${texto} → ${error.name}`);
    }
}

const corregidos = [
    '{"nombre":"Luis"}',
    '{"activo":true}',
    '{"nombre":"Marta"}',
    '{"curso":"2DAW"}',
];

console.log('\nTextos corregidos:');

for (const texto of corregidos) {
    try {
        JSON.parse(texto);
        console.log(`✔ ${texto}`);
    } catch (error) {
        console.log(`✘ ${texto} → ${error.name}`);
    }
}
