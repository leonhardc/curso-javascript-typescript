Array.splice()
// O método splice() altera o conteúdo de um array, adicionando novos elementos enquanto remove elementos antigos. Ele pode ser usado para adicionar, remover ou substituir elementos em um array.

// Exemplo:
const frutas = ['maçã', 'banana', 'laranja'];
frutas.splice(1, 1, 'uva', 'pera');
console.log(frutas); // Output: ['maçã', 'uva', 'pera', 'laranja']

// Neste exemplo, o método splice() é usado para remover 1 elemento a partir do índice 1 (que é "banana") e adicionar os elementos "uva" e "pera" no lugar. O array é atualizado para ['maçã', 'uva', 'pera', 'laranja'].   

// O método splice() tem a seguinte sintaxe:
// array.splice(início, quantidade, elemento1, elemento2, ...)

// - início: O índice no qual começar a alterar o array.
// - quantidade: O número de elementos a serem removidos a partir do índice de início.
// - elemento1, elemento2, ...: Os elementos a serem adicionados ao array a partir do índice de início. Se nenhum elemento for especificado, splice() apenas removerá os elementos.

// Exemplo de uso do método splice() para remover elementos sem adicionar novos:
const cores = ['vermelho', 'verde', 'azul', 'amarelo'];
cores.splice(2, 1);
console.log(cores); // Output: ['vermelho', 'verde', 'amarelo']

// Neste exemplo, o método splice() é usado para remover 1 elemento a partir do índice 2 (que é "azul"). O array é atualizado para ['vermelho', 'verde', 'amarelo'], e "azul" é removido do array.  

// Exemplo de uso do método splice() para adicionar elementos sem remover nenhum:
const animais = ['cachorro', 'gato'];
animais.splice(1, 0, 'coelho', 'hamster');
console.log(animais); // Output: ['cachorro', 'coelho', 'hamster', 'gato']

// Neste exemplo, o método splice() é usado para adicionar os elementos "coelho" e "hamster" a partir do índice 1, sem remover nenhum elemento (quantidade é 0). O array é atualizado para ['cachorro', 'coelho', 'hamster', 'gato'].   

// O método splice() é uma ferramenta poderosa para manipular arrays em JavaScript, permitindo adicionar, remover ou substituir elementos de forma flexível. Ele é amplamente utilizado para modificar arrays de acordo com as necessidades do programa.    

