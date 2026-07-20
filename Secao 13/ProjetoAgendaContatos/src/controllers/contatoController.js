const Contato = require('../models/contatoModel');

exports.index = (req, res) => {
    if (!req.session.user) {
        req.flash('errors', 'Você precisa fazer login para acessar os contatos.');
        return req.session.save(() => res.redirect('/login/index'));
    }

    res.render('dashboardContato', { contatos: [] });
}

exports.novoContato = (req, res) => {
    if (!req.session.user) {
        req.flash('errors', 'Você precisa fazer login para acessar os contatos.');
        return req.session.save(() => res.redirect('/login/index'));
    }

    res.render('novoContato');
}

exports.register = async (req, res) => {
    if (!req.session.user) {
        req.flash('errors', 'Você precisa fazer login para acessar os contatos.');
        return req.session.save(() => res.redirect('/login/index'));
    }

    try {
        const contato = new Contato(req.body);
        await contato.register();

        if (contato.errors.length > 0) {
            req.flash('errors', contato.errors);
            req.session.save(() => res.redirect('/contato/novoContato'));
            return;
        }

        req.flash('success', 'Contato registrado com sucesso.');
        req.session.save(() => res.redirect(`/contato/index`));
    } catch (e) {
        console.log(e);
        res.render('404');
    }
}