// Array.reduce()

const numbers = [1, 2, 3, 4, 5];

// Usando reduce para calcular a soma dos números
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log('Soma dos Números:', sum); // 15

// funcao de callback para reduzir os números a um único valor, que é a soma. O valor inicial do acumulador é definido como 0, e a função é chamada para cada elemento do array, acumulando o resultado final.
// O método reduce() é útil para realizar operações de agregação, como soma, produto, máximo, mínimo, etc., em um array. Ele pode ser usado para transformar um array em um único valor com base em uma função
// de redução personalizada.

// Usando reduce para encontrar o produto dos números
const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log('Produto dos Números:', product); // 120

// Usando reduce para encontrar o maior número
const max = numbers.reduce((accumulator, currentValue) => (currentValue > accumulator ? currentValue : accumulator), numbers[0]);
console.log('Maior Número:', max); // 5

// O método reduce() é muito poderoso e pode ser usado para uma variedade de operações de agregação em arrays. Ele permite que você acumule um valor com base nos elementos do