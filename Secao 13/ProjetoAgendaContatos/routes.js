const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

// middleware global
// function meuMiddleware(req, res, next) {
//     req.session = { nome: 'Leonardo' };
//     console.log('Passei no middleware');
//     // sempre chamar o next() para que a requisição continue e o proximo middleware seja chamado, 
//     // caso contrário a requisição ficará pendente
//     next();
// }

// rotas da home
route.get('/', homeController.paginaInicial); // ainda é possível passar o middleware como segundo parâmetro, mas o ideal é usar app.use() para definir middlewares globais
// route.get('/', meuMiddleware, homeController.paginaInicial); // ainda é possível passar o middleware como segundo parâmetro, mas o ideal é usar app.use() para definir middlewares globais
route.post('/', homeController.trataPost);

// rotas de contato
route.get('/contato', contatoController.paginaContato);

module.exports = route;