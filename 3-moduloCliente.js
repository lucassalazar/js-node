// Sempre que o nome do arquivo for algumacoisaCliente, este arquivo importará outros módulos

// Se o arquivo estiver dentro do proprio projeto, utiliza-se o caminho relativo dentro de require().

const moduloA = require('./1-moduloA'); // moduloA é um objeto
const moduloB = require('./2-moduloB'); // moduloB é um objeto

// Utilizando o módulo A
console.log(moduloA.ola);
console.log(moduloA.bemVindo);
console.log(moduloA.ateLogo);
console.log(moduloA);

// Utilizando o módulo B
console.log(moduloB.bomDia);
console.log(moduloB.boaNoite());
console.log(moduloB);