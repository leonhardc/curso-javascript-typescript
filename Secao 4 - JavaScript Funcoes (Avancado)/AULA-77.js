// Funcoes construtoras -> 

// Por convencao, funciona de maneira parecida a criar classes em python. 
// Funcoes construtoras devem ser declaradas com a primeira letra em caixa alta
// ao declarar seus atributos se deve usar a palavra reservada 'this'.
function Pessoa(nome, sobrenome) {
    // Para criar metodos ou atributos que estarao disponiveis somente dentro do escopo da funcao construtora
    // basta fazer o seguinte
    const id = 12345
    const metodoInterno = function() {
        console.log('Este metodo faz alguma coisa internamente')
    }
    // Restante do objeto
    this.nome = nome
    this.sobrenome = sobrenome

    this.nomeCompleto = function() { // Metodos tambem sao declarados com a palavra reservada this
        return `${this.nome} ${this.sobrenome}`
    }
}

const pessoa1 = new Pessoa('Leonardo', 'Rodrigues')
console.log(pessoa1.nomeCompleto())


