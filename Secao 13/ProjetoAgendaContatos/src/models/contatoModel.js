const mongoose = require('mongoose');
const validator = require('validator');

const ContatoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    sobrenome: { type: String, required: false, default: '' },
    email: { type: String, required: false, default: '' },
    telefone: { type: String, required: false, default: '' },
    criadoEm: { type: Date, default: Date.now },
});

const ContatoModel = mongoose.model('Contato', ContatoSchema);

class Contato {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.contato = null;
    }

    async register() {
        this.valida();
        if (this.errors.length > 0) return;
        this.contato = await ContatoModel.create(this.body);
    }

    async buscaPorId(id) {
        if (typeof id !== 'string') return;
        return await ContatoModel.findById(id);
    }

    valida() {
        this.cleanUp();
        // Validação de dados
        if (this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail inválido.');
        if (!this.body.email && !this.body.telefone) this.errors.push('Pelo menos um contato precisa ser enviado: e-mail ou telefone.');
        if (!this.body.nome) this.errors.push('Nome é um campo obrigatório.');
        if (!this.body.sobrenome) this.errors.push('Sobrenome é um campo obrigatório.');
        if (!this.body.email) this.errors.push('E-mail é um campo obrigatório.');
        if (!this.body.telefone) this.errors.push('Telefone é um campo obrigatório.');
    }

    cleanUp() {
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }
        this.body = {
            nome: this.body.nome,
            sobrenome: this.body.sobrenome,
            email: this.body.email,
            telefone: this.body.telefone,
        };
    }
}

module.exports = Contato;