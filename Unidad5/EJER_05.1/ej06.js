const nuevaLista = () => ({
    propietario: 'Ana',
    productos: ['pan', 'leche']
});

const lista1 = nuevaLista();
const igual = lista1;

igual.productos.push('huevos');

console.log('A) Igualar:');
console.log(lista1.productos);
console.log(lista1 === igual);

const lista2 = nuevaLista();
const superficial = { ...lista2 };

superficial.propietario = 'Luis';
superficial.productos.push('queso');

console.log('B) Copia superficial:');
console.log(lista2.propietario);
console.log(lista2.productos);

const lista3 = nuevaLista();
const profunda = structuredClone(lista3);

profunda.propietario = 'Marta';
profunda.productos.push('fruta');

console.log('C) Copia profunda:');
console.log('Original:', lista3);
console.log('Copia:', profunda);