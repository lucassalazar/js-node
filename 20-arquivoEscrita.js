const fs = require('fs');

const produto = {
  id: 1,
  informacoes: {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
  }
};

fs.writeFile(__dirname + '/21-arquivoGerado.json', JSON.stringify(produto, null, '  '), err => console.log(err || 'Arquivo salvo!'));