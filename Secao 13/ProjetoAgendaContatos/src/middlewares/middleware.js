function meuMiddleware(req, res, next) {
    if (req.body.cliente) {
        console.log(`O nome do cliente é: ${req.body.cliente}`);
    }
    next();
}

function checkCsrfError(err, req, res, next) {
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
    meuMiddleware,
    checkCsrfError,
    csrfMiddleware
};