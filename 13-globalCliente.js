// Evitar utilizar esse metodo, pois o objeto ficara visivel para toda a aplicação
require('./12-global'); // Isso é necessário fazer apenas uma vez

console.log(MinhaApp.saudacao());

MinhaApp.nome = 'Eita'; // O atributo do objeto global pode ser modificado... No entando nesse exemplo não foi modificado, pois o objeto foi criado utilizando o metodo freeze()
console.log(MinhaApp.nome); 