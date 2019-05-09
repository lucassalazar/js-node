const moduloA = require('../../1-moduloA'); // Ou usar o caminho absoluto /home/lucassalazar/Documentos/JS/Curso/node/1-moduloA.js

console.log(moduloA.ola); 

const c = require('./5-pastaC'); // Como o arquivo dentro da pasta 5-pastaC é um index.js, não é necessário referencia-lo
console.log(c.ola2);

// Criando um módulo dentro da pasta node_modules chamado saudacao.
/* /node_modules/saudacao/index.js

module.exports = {
  ola: "Bom dia Pessoal!"
}; 
*/

const saudacao = require('saudacao'); 
console.log(saudacao.ola); // Bom dia Pessoal!

// Importando modulos proprios do node.js (módulos core)
const http = require('http');
http.createServer((req, res) => {
  res.write('Bom dia!');
  res.end();
}).listen(8080);