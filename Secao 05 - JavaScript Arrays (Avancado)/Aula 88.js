// Aarray.forEach() - Executa uma função para cada elemento do array

const fruits = ['apple', 'banana', 'cherry'];

// Usando forEach para imprimir cada fruta
fruits.forEach((fruit, index) => {
    console.log(`Fruta ${index + 1}: ${fruit}`);
});

const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
a1.forEach((num, index) => {
    console.log(`Número ${index + 1}: ${num}`);
});

// O método forEach() é útil para executar uma função em cada elemento de um array, mas não retorna um novo array. 