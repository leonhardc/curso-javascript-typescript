const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const contatoController = require('./src/controllers/contatoController');
const { loginRequired } = require('./src/middlewares/middleware');
// middleware global
// function meuMiddleware(req, res, next) {
//     req.session = { nome: 'Leonardo' };
//     console.log('Passei no middleware');
//     // sempre chamar o next() para que a requisição continue e o proximo middleware seja chamado, 
//     // caso contrário a requisição ficará pendente
//     next();
// }

// rotas da home
route.get('/', homeController.index); // ainda é possível passar o middleware como segundo parâmetro, mas o ideal é usar app.use() para definir middlewares globais

// rotas de login
route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);
route.get('/login/logout', loginController.logout);

// rotas de contatos
route.get('/contato/index', contatoController.index);
route.get('/contato/novoContato', loginRequired, contatoController.novoContato);
route.post('/contato/register', loginRequired, contatoController.register);

module.exports = route;