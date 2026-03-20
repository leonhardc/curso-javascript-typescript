// Manipulando Prototypes
// Podemos adicionar propriedades e metodos a um prototipo mesmo depois de ter criado os objetos que herdam desse prototipo. 
// Todos os objetos que herdam desse prototipo vao ter acesso a essas novas propriedades e metodos.

Pessoa.prototype.idade = 30;

console.log(pessoa1.idade); // 30
console.log(pessoa2.idade); // 30

Pessoa.prototype.falar = function() {
    console.log(`Olá, meu nome é ${this.nomeCompleto()}!`);
};

pessoa1.falar(); // Olá, meu nome é João Silva!
pessoa2.falar(); // Olá, meu nome é Maria Souza!   

const obj1 = { chaveA: 'Valor A'};
const obj2 = { chaveB: 'Valor B'};

Object.setPrototypeOf(obj2, obj1);

console.log(obj2.chaveA); // Valor A
console.log(obj2.chaveB); // Valor B