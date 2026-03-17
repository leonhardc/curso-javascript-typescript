//  Object.defineProperty() e Object.defineProperties()

function criarPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criarPessoa('Maria', 'Santos', 25);
console.log(pessoa1); // Output: { nome: 'Maria', sobrenome: 'Santos', idade: 25 }

// Criando um objeto usando Object.defineProperty()
const pessoa2 = {};
Object.defineProperty(pessoa2, 'nome', {
    value: 'Carlos',
    writable: true,
    enumerable: true,
    configurable: true
});
Object.defineProperty(pessoa2, 'sobrenome', {
    value: 'Oliveira',
    writable: true,
    enumerable: true,
    configurable: true
});
Object.defineProperty(pessoa2, 'idade', {
    value: 28,
    writable: true,
    enumerable: true,
    configurable: true
});

console.log(pessoa2); // Output: { nome: 'Carlos', sobrenome: 'Oliveira', idade: 28 }

// Criando um objeto usando Object.defineProperties()
const pessoa3 = {};
Object.defineProperties(pessoa3, {
    nome: {
        value: 'Ana',
        writable: true,
        enumerable: true,
        configurable: true
    },
    sobrenome: {
        value: 'Costa',
        writable: true,
        enumerable: true,
        configurable: true
    },
    idade: {
        value: 30,
        writable: true,
        enumerable: true,
        configurable: true
    }
});

console.log(pessoa3); // Output: { nome: 'Ana', sobrenome: 'Costa', idade: 30 }