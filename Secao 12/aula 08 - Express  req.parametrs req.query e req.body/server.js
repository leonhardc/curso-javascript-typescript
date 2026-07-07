const espress = require('express');
const app = espress();

// Middleware para fazer parse de dados enviados no corpo da requisição em formato URL-encoded (formulários HTML)
// extended: true permite parsing de dados complexos e arrays
app.use(
express.encode.urlencoded({ extended: true })
)

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Para acessar os parâmetros da rota, utilizamos o req.params
// Exemplo de rota com parâmetros
// A rota abaixo possui dois parâmetros: id_usuario e id_post
// para mostrar que o parametro eh opcional, podemos colocar um "?" no final do parametro, como no exemplo abaixo
// app.get('/testes/:id_usuario/:id_post?', (req, res) => {
//   console.log(req.params);
//   res.send('Rota de testes');
// });
app.get('/testes/:id_usuario/:id_post', (req, res) => {
  console.log(req.params);
  res.send('Rota de testes');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});