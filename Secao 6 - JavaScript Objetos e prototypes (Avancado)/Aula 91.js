// Getters e Setters

const pessoa = {
    nome: 'João',
    sobrenome: 'Silva',
    idade: 35,
    
    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    },
    
    set nomeCompleto(valor) {
        const partes = valor.split(' ');
        this.nome = partes[0];
        this.sobrenome = partes[1];
    }
};

console.log(pessoa.nomeCompleto); // Output: João Silva

pessoa.nomeCompleto = 'Maria Santos';
console.log(pessoa.nome); // Output: Maria
console.log(pessoa.sobrenome); // Output: Santos   