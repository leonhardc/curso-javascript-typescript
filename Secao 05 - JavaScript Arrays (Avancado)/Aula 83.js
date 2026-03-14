// Concatenas Arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

// Usando o método concat()
const concatenado1 = array1.concat(array2, array3);
console.log(concatenado1); // Saída: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Usando o operador spread
const concatenado2 = [...array1, ...array2, ...array3];
console.log(concatenado2); // Saída: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Ambos os métodos resultam em um novo array que contém todos os elementos dos arrays originais. O método concat() é uma função de array, enquanto o operador spread é uma sintaxe mais moderna e concisa para alcançar o mesmo resultado.