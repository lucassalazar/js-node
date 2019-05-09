// Cada arquivo js é um modulo. O conteudo desse modulo é visivel apenas dentro deste módulo.
// JS utiliza imports e exports para tornar o conteudo de um modulo visivel.

// Exportando
this.ola = 'Fala Pessoal'; // Essa frase pode ser acessada em outro arquivo.
exports.bemVindo = 'Bem vindo ao node!';
// Tanto this quanto exports é são objetos. Um objeto é uma coleção de chave-valor dinâmicos.
module.exports.ateLogo = 'Até o próximo exemplo';

//console.log(this === exports && this === module.exports && exports === module.exports); // true
