// filter, map, reduce

const numbers = [1, 2, 3, 4, 5];

// filter
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Even Numbers:', evenNumbers); // [2, 4]

// map
const squaredNumbers = numbers.map(num => num * num);
console.log('Squared Numbers:', squaredNumbers); // [1, 4, 9, 16, 25]

// reduce
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log('Sum of Numbers:', sum); // 15

// O método filter() cria um novo array com todos os elementos que passam no teste implementado pela função fornecida. No exemplo, ele retorna um array contendo apenas os números pares.

// O método map() cria um novo array com os resultados da chamada de uma função para cada elemento do array. No exemplo, ele retorna um array contendo os quadrados dos números originais.

// O método reduce() aplica uma função a um acumulador e a cada valor do array (da esquerda para a direita) para reduzi-lo a um único valor. No exemplo, ele calcula a soma de todos os números no array, começando com um valor inicial de 0.