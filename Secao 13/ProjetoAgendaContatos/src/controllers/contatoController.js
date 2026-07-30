const Contato = require('../models/contatoModel');

exports.index = async (req, res) => {
    if (!req.session.user) {
        req.flash('errors', 'Você precisa fazer login para acessar os contatos.');
        return req.session.save(() => res.redirect('/login/index'));
    }
    const contato = new Contato(req.body);
    const contatos = await contato.buscaContatos(req.session.user);

    res.render('dashboardContato', { contatos });
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
        await contato.register(req.session.user);

        if (contato.errors.length > 0) {
            req.flash('errors', contato.errors);
            req.session.save(() => res.redirect('/contato/new'));
            return;
        }

        req.flash('success', 'Contato registrado com sucesso.');
        req.session.save(() => res.redirect(`/contato/index`));
    } catch (e) {
        console.log(e);
        res.render('404');
    }
}

exports.editIndex = async (req, res) => {
    if (!req.session.user) {
        req.flash('errors', 'Você precisa fazer login para acessar os contatos.');
        return req.session.save(() => res.redirect('/login/index'));
    }

    try {
        const contato = await new Contato({}).buscaPorId(req.params.id);

        if (!contato) {
            return res.render('404');
        }

        res.render('editarContato', { contato });
    } catch (e) {
        console.log(e);
        res.render('404');
    }
}

exports.editContato = async (req, res) => {
    if (!req.session.user) {
        req.flash('errors', 'Você precisa fazer login para acessar os contatos.');
        return req.session.save(() => res.redirect('/login/index'));
    }

    try {
        const contato = new Contato(req.body);
        await contato.edit(req.params.id);

        if (contato.errors.length > 0) {
            req.flash('errors', contato.errors);
            req.session.save(() => res.redirect(`/contato/index/${req.params.id}`));
            return;
        }

        req.flash('success', 'Contato editado com sucesso.');
        req.session.save(() => res.redirect(`/contato/edit/${contato.contato._id}`));
    } catch (e) {
        console.log(e);
        res.render('404');
    }
}

exports.deletarContato = async (req, res) => {
    if (!req.session.user) {
        req.flash('errors', 'Você precisa fazer login para acessar os contatos.');
        return req.session.save(() => res.redirect('/login/index'));
    }

    try {
        const contato = await new Contato({}).buscaPorId(req.params.id);

        if (!contato) {
            return res.render('404');
        }

        await contato.deleteOne();

        req.flash('success', 'Contato deletado com sucesso.');
        req.session.save(() => res.redirect('/login/index'));
    } catch (e) {
        console.log(e);
        res.render('404');
    }
}   