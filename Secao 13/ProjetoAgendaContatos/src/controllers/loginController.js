const Login = require('../models/LoginModel')

exports.index = (req, res) => {
    if(req.session.user) return res.render('dashboard')
    res.render('login')
}

exports.register = async (req, res) => {
    try {
        const login = new Login(req.body)
        await login.register()

        if (login.errors.length > 0) {
            req.flash('errors', login.errors)
            req.session.save(() => res.redirect('/login/index'))
            return
        }
        req.flash('success', 'Seu usuário foi criado com sucesso.')
        return req.session.save(() => res.redirect('/login/index'))
    } catch (e) {
        console.log(e)
        return res.render('login', { errors: ['Erro interno. Tente novamente mais tarde.'] })
    }

}

exports.login = async (req, res) => {
    try {
        const login = new Login(req.body)
        await login.login()

        if (login.errors.length > 0) {
            req.flash('errors', login.errors)
            req.session.save(() => res.redirect('/login/index'))
            return
        }
        req.flash('success', 'Voce entrou no sistema!')
        req.session.user = login.user
        return req.session.save(() => res.redirect('/login/index'))
    } catch (e) {
        console.log(e)
        // return res.render('404')
        return res.render('login', { errors: ['Erro interno. Tente novamente mais tarde.'] })
    }
}

exports.logout = (req, res) => {
    req.session.destroy()
    res.redirect('/')
}