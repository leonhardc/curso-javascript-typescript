Array.join()
// O método join() junta todos os elementos de um array em uma string e retorna essa string. Você pode especificar um separador para ser usado entre os elementos, caso contrário, o padrão é uma vírgula.

// Exemplo:
const frutas = ['maçã', 'banana', 'laranja'];
const resultado = frutas.join(', ');
console.log(resultado); // Output: "maçã, banana, laranja"

// Neste exemplo, o método join() é usado para juntar os elementos do array 'frutas' em uma string, usando uma vírgula seguida de um espaço como separador. O resultado é a string "maçã, banana, laranja". 

Array.push()
// O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array.

// Exemplo:
const arrayNumeros = [1, 2, 3];
const novoComprimento = numeros.push(4);
console.log(numeros); // Output: [1, 2, 3, 4]
console.log(novoComprimento); // Output: 4

// Neste exemplo, o método push() é usado para adicionar o número 4 ao final do array 'numeros'. O array é atualizado para [1, 2, 3, 4], e o método retorna o novo comprimento do array, que é 4.

Array.pop()
// O método pop() remove o último elemento de um array e retorna esse elemento. Se o array estiver vazio, ele retorna undefined.

// Exemplo:
const cores = ['vermelho', 'verde', 'azul'];
const corRemovida = cores.pop();
console.log(cores);
// Output: ['vermelho', 'verde']
console.log(corRemovida); // Output: "azul"

// Neste exemplo, o método pop() é usado para remover o último elemento do array 'cores', que é "azul". O array é atualizado para ['vermelho', 'verde'], e o método retorna a cor removida, que é "azul".

Array.shift()
// O método shift() remove o primeiro elemento de um array e retorna esse elemento. Se o array estiver vazio, ele retorna undefined.

// Exemplo:
const animais = ['cachorro', 'gato', 'coelho'];
const animalRemovido = animais.shift();
console.log(animais); // Output: ['gato', 'coelho']
console.log(animalRemovido); // Output: "cachorro"

// Neste exemplo, o método shift() é usado para remover o primeiro elemento do array 'animais', que é "cachorro". O array é atualizado para ['gato', 'coelho'], e o método retorna o animal removido, que é "cachorro".

Array.unshift()
// O método unshift() adiciona um ou mais elementos ao início de um array e retorna o novo comprimento do array.

// Exemplo:
const letras = ['b', 'c', 'd'];
const novoComprimentoUnshift = letras.unshift('a');
console.log(letras); // Output: ['a', 'b', 'c', 'd']
console.log(novoComprimentoUnshift); // Output: 4

// Neste exemplo, o método unshift() é usado para adicionar a letra 'a' ao início do array 'letras'. O array é atualizado para ['a', 'b', 'c', 'd'], e o método retorna o novo comprimento do array, que é 4.

Array.slice()
// O método slice() retorna uma cópia de uma parte do array dentro de um novo array, selecionado do início ao fim (fim não incluído). O array original não é modificado.

// Exemplo:
const numeros = [1, 2, 3, 4, 5];
const parteNumeros = numeros.slice(1, 4);
console.log(parteNumeros); // Output: [2, 3, 4]
console.log(numeros); // Output: [1, 2, 3, 4, 5]

// Neste exemplo, o método slice() é usado para criar um novo array 'parteNumeros' que contém os elementos do array 'numeros' do índice 1 ao índice 3 (o índice 4 não é incluído). O resultado é o array [2, 3, 4], e o array original 'numeros' permanece inalterado.  