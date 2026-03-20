// Prototypes
// JavaScript eh baseado em prototipos para passar propriedades e metodos de um objeto para outro.

// Definicao de prototipo
// Prototipo eh o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo
// ou molde para futuras producoes

// Todos os objetos tem uma referencia interna para um prototipo (__proto__),
// que vem com a propriedade prototype da funcao construtora que foi usada para criar o objeto.
// Quando tentamos acessar um membro de um objeto, primeiro o motor do JavaScritp vai tentar 
// encontrar esse membro no proprio objeto. Se nao encontrar, ele vai procurar no prototipo do objeto,
// e assim por diante, ate encontrar o membro ou chegar no topo da cadeia de prototipos (null).


function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
};

const pessoa1 = new Pessoa('João', 'Silva');
console.log(pessoa1.nomeCompleto()); // João Silva

const pessoa2 = new Pessoa('Maria', 'Souza');
console.log(pessoa2.nomeCompleto()); // Maria Souza

// Verificando o prototype
console.log(pessoa1.__proto__ === Pessoa.prototype); // true
console.log(pessoa2.__proto__ === Pessoa.prototype); // true 