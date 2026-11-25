const temperaturas = [12, 5, 32, 100, 28, 0, -5];

const tempOrdenada=[...temperaturas].sort()

console.log(tempOrdenada);

const tempOrdenada2=[...temperaturas].sort((a,b)=>a-b)

console.log(tempOrdenada2);