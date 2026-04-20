// const nome = 'Leonardo'
// const sobrenome = 'Rodrigues'

// const falaNome = () => {
//     console.log(nome, sobrenome)
// }

// // module.exports.nome = nome
// // module.exports.sobrenome = sobrenome
// // module.exports.falaNome = falaNome

// // exatamente a mesma coisa do exports acima
// exports.nome = nome
// exports.sobrenome = sobrenome
// exports.falaNome = falaNome

class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
}

exports.Pessoa = Pessoa