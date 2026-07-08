module.exports = (req, res, next) => {
    if(req.body.cliente) {
        console.log(`O nome do cliente é: ${req.body.cliente}`);
    }
    next();
}