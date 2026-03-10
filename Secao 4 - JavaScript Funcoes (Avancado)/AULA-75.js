// Funcoes Fabricas (Factory Functions)
// Funcoes que retornam objetos

function criarPessoa(nome, sobrenome, peso, altura) {
    return {
        nome,
        sobrenome,
        peso,
        altura,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
            // 'this', nesse caso, se refere ao objeto que esta chamando a funcao nomeCompleto
            // funciona de maneira parecida ao 'self' em python.
        },
        // getter
        imc() {
            return (this.peso / (this.altura*this.altura)).toFixed(2)
        }, 
        // Se 'imc()' for declarado como 'get imc()', na chamada do objeto ele passará a se comportar como um atributo
        // setter
        set nomeCompleto(valor) {
            valor = valor.split(' ') // Divide a string a partir do caractere que eh passado como parametro
            this.nome = valor.shift() // Retira o primeiro nome do array valor e retorna para o atributo this.nome
            this.sobrenome = valor.join(' ') // Junta os valores restantes do array valor, com um espaco entre elas, e retorna para o atributo this.sobrenome
        }
    };
}

const p1 = criarPessoa('Leonardo', 'Rodrigues', 110, 1.85);
const p2 = criarPessoa('Iorana', 'Araujo', 70, 1.60);

console.log(p1.nomeCompleto(),'-',p1.imc());
console.log(p2.nomeCompleto(),'-',p2.imc());
