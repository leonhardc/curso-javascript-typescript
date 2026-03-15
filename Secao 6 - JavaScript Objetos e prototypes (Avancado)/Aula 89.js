// Revisando Objetos 

// Criando um objeto
const pessoa = {
    nome: 'João',
    sobrenome: 'Silva',
    idade: 30,
    profissao: 'Desenvolvedor'
};
pessoa.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
};

console.log(pessoa.nomeCompleto()); // Output: João Silva
// Acessando propriedades do objeto
console.log(pessoa.nome); // Output: João
console.log(pessoa.idade); // Output: 30
console.log(pessoa.profissao); // Output: Desenvolvedor

// Adicionando uma nova propriedade ao objeto
pessoa.cidade = 'São Paulo';
console.log(pessoa.cidade); // Output: São Paulo

// Modificando uma propriedade existente
pessoa.idade = 31;
console.log(pessoa.idade); // Output: 31

// Deletando uma propriedade do objeto
delete pessoa.profissao;
console.log(pessoa.profissao); // Output: undefined

// Verificando se uma propriedade existe no objeto
console.log('nome' in pessoa); // Output: true
console.log('profissao' in pessoa); // Output: false

// Iterando sobre as propriedades do objeto
for (let chave in pessoa) {
    console.log(chave + ': ' + pessoa[chave]);
}
// Output:
// nome: João
// idade: 31
// cidade: São Paulo

// Criando um objeto usando o construtor Object
const carro = new Object();
carro.marca = 'Toyota';
carro.modelo = 'Corolla';
carro.ano = 2020;

console.log(carro.marca); // Output: Toyota
console.log(carro.modelo); // Output: Corolla
console.log(carro.ano); // Output: 2020
console.table(carro); // Output: tabela com as propriedades do objeto carro
// Deletando uma propriedade do objeto carro
delete carro.ano;
console.log(carro.ano); // Output: undefined

// Criando objetos usando factory functions
function criarPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
        nomeCompleto: function() {
            return this.nome + ' ' + this.sobrenome;
        }
    };
}

const pessoa1 = criarPessoa('Maria', 'Oliveira', 25);
console.log(pessoa1.nomeCompleto()); // Output: Maria Oliveira

const pessoa2 = criarPessoa('Carlos', 'Santos', 40);
console.log(pessoa2.nomeCompleto()); // Output: Carlos Santos

// Criando objetos com funções constructoras
function Pessoa(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.nomeCompleto = function() {
        return this.nome + ' ' + this.sobrenome;
    };
}

const pessoa3 = new Pessoa('Ana', 'Costa', 28);
console.log(pessoa3.nomeCompleto()); // Output: Ana Costa

const pessoa4 = new Pessoa('Pedro', 'Almeida', 35);
console.log(pessoa4.nomeCompleto()); // Output: Pedro Almeida

// Travar o objeto para não permitir adição de novas propriedades
Object.freeze(pessoa3);
pessoa3.cidade = 'Rio de Janeiro'; // Não será adicionado
console.log(pessoa3.cidade); // Output: undefined

// Verificando se o objeto está congelado
console.log(Object.isFrozen(pessoa3)); // Output: true

// Travar o objeto para não permitir modificações na construcao do objeto
const PessoasFreeze = function Pessoa(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.nomeCompleto = function() {
        return this.nome + ' ' + this.sobrenome;
    };
    Object.freeze(this); // Congela o objeto para não permitir modificações
};

const pessoa5 = new PessoasFreeze('Lucas', 'Ferreira', 22);
console.log(pessoa5.nomeCompleto()); // Output: Lucas Ferreira
pessoa5.idade = 23; // Não será modificado
console.log(pessoa5.idade); // Output: 22