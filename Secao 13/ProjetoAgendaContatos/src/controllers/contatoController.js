exports.index = (req, res) => {
    if (!req.session.user) {
        req.flash('errors', 'Você precisa fazer login para acessar os contatos.');
        return req.session.save(() => res.redirect('/login/index'));
    }

    res.render('dashboardContato', { contatos: [] });
}