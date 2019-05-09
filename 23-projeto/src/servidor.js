// Porta é um processo dentro do computador.
// Exemplo de comunicação em rede:
// Computador A <---> Computador B
// Quando os computadores forem se comunicar, além do endereço IP (Internet Protocol) ser enviado, a porta também é. A porta é passada para que ambos os computadores identifiquem qual é o processo em questão utilizado nesta comunicação, visto que um computador utiliza varios outros processos, seja para a utilização do browser, skype, aplicativos de mensagem e entre outros.
const porta = 3003; 
const express = require('express'); // Carrega o arquivo index.js dentro do modulo express
const app = express(); // Atribui o metodo express para a constante app
const bodyParser = require('body-parser');
const bancoDeDados = require('./bancoDeDados');

// app.use((req, res, next) => { // Atende qualquer requisição http://localhost:3003/qualquerCaminho
//   res.send({ nome: 'Notebook', preco: 123.45 });
//   next();
// });

// app.get('/produtos', (req, res, next) => { 
//   console.log('Middleware 1...'); // Printara no console sempre que houver uma requisição
//   next();
// });

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true })); // Para todas as requisições que forem feitas ao servidor, este middleware será disparado. Se o corpo de alguma requisição estiver no padrão urlencoded, este será transformado em um objeto


app.get('/produtos', (req, res, next) => { // http://localhost:3003/produtos
  //res.send({ nome: 'Notebook', preco: 123.45 }); // O metodo send converterá o objeto para JSON
  res.send(bancoDeDados.getProdutos());
});

app.get('/produtos/:id', (req, res, next) => {
  res.send(bancoDeDados.getProduto(req.params.id));
});

app.post('/produtos', (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco
  });
  res.send(produto); // Converterá em JSON
});

app.put('/produtos/:id', (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    id: req.params.id,
    nome: req.body.nome,
    preco: req.body.preco
  });
  res.send(produto); // Converterá em JSON
});

app.delete('/produtos/:id', (req, res, next) => {
  const produtoExcluido = bancoDeDados.excluirProduto(req.params.id);
  res.send(`O produto ${produtoExcluido.nome} foi excluído com sucesso!`);
});


app.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}.`);
});

// É possivel fazer com que varias aplicações estejam visíveis a partir da mesma porta?
// Sim, utilizando proxy reverse.

