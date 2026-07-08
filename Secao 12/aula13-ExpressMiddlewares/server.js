const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const meuMiddleware = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')));
// definindo a pasta de views e o motor de template
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(routes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
