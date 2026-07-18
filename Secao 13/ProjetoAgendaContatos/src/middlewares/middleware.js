function middlewareGlobal(req, res, next) {
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    res.locals.user = req.session.user;
    next();
};


function meuMiddleware(req, res, next) {
    if (req.body.cliente) {
        console.log(`O nome do cliente é: ${req.body.cliente}`);
    }
    next();
}

function checkCsrfError(err, req, res, next) {
    console.log('checkCsrfError', err);
    if (err && err.code === 'EBADCSRFTOKEN') {
        return res.render('404');
    }
    next();
}

function csrfMiddleware(req, res, next) {
    res.locals.csrfToken = req.csrfToken();
    next();
}

module.exports = {
    middlewareGlobal,
    meuMiddleware,
    checkCsrfError,
    csrfMiddleware
};