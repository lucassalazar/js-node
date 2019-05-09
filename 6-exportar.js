/* O this  funciona como uma variável qualquer, que inicialmente aponta para mesma instância que module.exports, mas quando a referência de module.exports é modificada, o this continua referenciando o mesmo objeto original, ou seja, não existe um sincronismo entre as duas variáveis.

A regra é que o module.exports sempre vai apontar para o valor que será retornado pelo módulo.
*/

console.log(module.exports === this)
console.log(module.exports === exports)
console.log(exports === this)

// O this e o exports são apenas duas referencias pra um mesmo objeto que module.exports aponta. No entanto quanto o module.exports é modificado, this e exports continuam referenciando o objeto original.

this.a = 1;
exports.a = 1;
module.exports.c = 3;

//exports = null;

console.log(module.exports);

// exports = { // Não sera exportado...
//   nome: 'Teste'
// };

console.log(module.exports);

module.exports = { publico: true };

console.log(module.exports === this)
console.log(module.exports === exports)
console.log(exports === this) // continuam iguais
