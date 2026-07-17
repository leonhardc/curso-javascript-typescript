const mongoose = require('mongoose');
const validator = require('validator');

const LoginSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    async register() {
        this.valida();
        if (this.errors.length > 0) return;
        await this.userExists();
        if (this.errors.length > 0) return;

        try {
            this.user = await LoginModel.create(this.body);
        }
        catch (e) {
            this.errors.push('Erro interno ao salvar usuário. Tente novamente.');
            console.log(e);
        }
    }

    async userExists() {
        const user = await LoginModel.findOne({ email: this.body.email });
        if (user) this.errors.push('Usuário já existe.');
    }

    valida() {
        this.cleanUp();
        // Validação de dados
        if (this.body.nome.length < 3 || this.body.nome.length > 50) {
            this.errors.push('O nome precisa ter entre 3 e 50 caracteres.');
        }
        // O email precisa ser válido
        if (!this.body.email || !validator.isEmail(this.body.email)) {
            this.errors.push('E-mail inválido.');
        }
        // A senha precisa ter entre 3 e 50 caracteres
        if (this.body.password.length < 3 || this.body.password.length > 50) {
            this.errors.push('A senha precisa ter entre 3 e 50 caracteres.');
        }
    }

    cleanUp() {
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }

        this.body = {
            nome: this.body.nome,
            email: this.body.email,
            password: this.body.password
        };
    }
}

module.exports = Login;