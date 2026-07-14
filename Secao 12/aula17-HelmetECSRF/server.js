require('dotenv').config();


const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => {
    console.log('Conexão com o MongoDB estabelecida com sucesso!');
    // Se a conexão for bem-sucedida, emite o evento 'pronto'
    app.emit('pronto');
  })
  .catch((error) => {
    console.error('Erro ao conectar ao MongoDB:', error);
  });
const session = require('express-session');
const { MongoStore } = require('connect-mongo');
const flash = require('connect-flash');
const routes = require('./routes');
const path = require('path');
const helmet = require('helmet');
const {meuMiddleware, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');
const csrf = require('csurf');
const sessionSecret = process.env.SECRET || 'troque-esta-chave-em-producao';

app.use(express.urlencoded({ extended: true }))
app.use(helmet());
app.use(express.static(path.join(__dirname, 'public')));
// configurando a sessão
const sessionOptions = session({
  secret: sessionSecret,
  store: MongoStore.create({
    mongoUrl: process.env.CONNECTIONSTRING
  }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 dias
    httpOnly: true
  }
});
// definindo a pasta de views e o motor de template
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(sessionOptions);
app.use(flash());
app.use(csrf());
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);
app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });
});
