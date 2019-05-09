// npm init -y
// npm i --save-dev axios@0.18.0 -E
// npm, instale, salve como dependencia de desenvolvimento, o modulo axios na versão 0.18.0, exato

// major.minor.(patch/small)

// ~0.18.0 // Existe um patch update para o modulo
// ^0.18.0 // Existe um minor update para o modulo

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'; // Retorna um array de objetos funcionarios
const axios = require('axios');

// Desafio, retornar a mulher chinesa que ganha o menor salario. 

const chineses = f => f.pais === 'China';
const mulheres = m => m.genero === 'F';
const menorSalario = (acc, s) => acc.salario < s.salario ? acc : s;  

// Faz um get no servidor a partir da url, e então utiliza a resposta do servidor em uma arrow function
axios.get(url).then(response => {
  const funcionarios = response.data
  console.log(funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario));
});

/*{ id: 443,
  nome: 'Shela',
  sobrenome: 'Nowell',
  email: 'snowellca@upenn.edu',
  genero: 'F',
  cidade: 'Yufa',
  pais: 'China',
  empresa: 'Quinu',
  salario: 2435.61 }
*/