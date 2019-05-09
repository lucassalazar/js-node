const fs = require('fs');

const caminho = __dirname + '/18-arquivo.json';

// Forma síncrono... Para o event loop e espera o arquivo ser lido completamente
const conteudo = fs.readFileSync(caminho, 'utf-8');
console.log(conteudo);

// Forma assíncrona... O event loop continua normalmente e chama uma callback quando o arquivo for carregado
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
  const config = JSON.parse(conteudo);
  console.log(`${config.db.host}:${config.db.port}`); 
});

// Para ler um arquivo.json não é necessário utilizar o modulo fs
const config = require('./18-arquivo.json');
console.log(config.db); // Já traz o arquivo convertido em objeto

// Efetuado uma leitura de uma pasta. (__dirname representa do diretório atual)
fs.readdir(__dirname, (err, arquivos) => console.log('Conteudo da pasta =', arquivos));