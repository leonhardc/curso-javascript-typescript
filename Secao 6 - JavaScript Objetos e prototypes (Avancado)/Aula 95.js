// Heranca
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
};

function Funcionario(nome, sobrenome, cargo) {
    Pessoa.call(this, nome, sobrenome); // Chama o construtor da classe pai (Pessoa)
    this.cargo = cargo;
}

// Configura a herança do prototipo
Funcionario.prototype = Object.create(Pessoa.prototype);
Funcionario.prototype.constructor = Funcionario;

const funcionario1 = new Funcionario('Carlos', 'Santos', 'Desenvolvedor');
console.log(funcionario1.nomeCompleto()); // Carlos Santos
console.log(funcionario1.cargo); // Desenvolvedor 