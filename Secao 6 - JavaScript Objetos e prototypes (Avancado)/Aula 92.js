// Metodos uteis para objetos

const pessoa = {
    nome: 'João',
    idade: 30,
    cidade: 'São Paulo'
};

// Object.keys() - Retorna um array com as chaves do objeto
console.log(Object.keys(pessoa)); // ['nome', 'idade', 'cidade']

// Object.values() - Retorna um array com os valores do objeto
console.log(Object.values(pessoa)); // ['João', 30, 'São Paulo']

// Object.entries() - Retorna um array de arrays, onde cada sub-array é um par chave-valor
console.log(Object.entries(pessoa)); // [['nome', 'João'], ['idade', 30], ['cidade', 'São Paulo']]

// Object.assign() - Copia os valores de todas as propriedades de um ou mais objetos para um objeto de destino
const pessoa2 = { ...pessoa }; // Usando spread operator para copiar o objeto
console.log(pessoa2); // { nome: 'João', idade: 30, cidade: 'São Paulo' }

// Object.freeze() - Congela um objeto, impedindo que novas propriedades sejam adicionadas ou que as existentes sejam modificadas
Object.freeze(pessoa);
pessoa.nome = 'Maria'; // Não terá efeito, pois o objeto está congelado
console.log(pessoa.nome); // 'João'

// Object.seal() - Selar um objeto, impedindo que novas propriedades sejam adicionadas, mas permitindo a modificação das existentes
const pessoa3 = { ...pessoa };
Object.seal(pessoa3);
pessoa3.idade = 35; // Permitido, pois o objeto está selado
pessoa3.cidade = 'Rio de Janeiro'; // Não permitido, pois o objeto está selado
console.log(pessoa3); // { nome: 'João', idade: 35, cidade: 'São Paulo' }

