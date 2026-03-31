// Factory functions e Prototypes

// Factory function
function criarPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criarPessoa('Luiz', 'Otávio');
const p2 = criarPessoa('Maria', 'Oliveira');

console.log(p1.nomeCompleto());
console.log(p2.nomeCompleto());

// Prototypes
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
};

const p3 = new Pessoa('João', 'Silva');
const p4 = new Pessoa('Ana', 'Souza');

console.log(p3.nomeCompleto());
console.log(p4.nomeCompleto()); 