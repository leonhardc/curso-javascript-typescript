const HomeModel = require('../models/HomeModel');

HomeModel.create({
  title: 'Título de teste',
  description: 'Descrição de teste'
})
  .then((dados) => {
    console.log('Documento criado com sucesso!', dados);
  })
  .catch((error) => {
    console.error('Erro ao criar o documento:', error);
  }); 

exports.paginaInicial = (req, res) => {
  req.session.HomeModel = { nome: 'Leonardo', logado: true };
  res.render('index')
};

exports.trataPost = (req, res) => {
  res.send('Recebi o formulário');
};